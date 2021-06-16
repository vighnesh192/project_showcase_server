const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./db/models/User');
const Google_User = require('./db/models/Google_User');
const Image = require('./db/models/Image');

module.exports = function(passport) {
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: "/auth/google/callback",
			},
			async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                }

                try {
                    let googleUser = await Google_User.query().findById(profile.id)

                    if(googleUser) {
                        let user = await User.query().findById(googleUser.userId);
                        done(null, user);
                    } 
                    else {
                        let user = await User.query().insert(newUser);

                        const google_user = await Google_User.query()
                            .insert({
                                id: profile.id,
                                userId: user.id 
                            });
                        
                        const avatar = await Image.query()
                            .insert({
                                url: profile.photos[0].value
                            });

                        let userWithAvatar = await User.query()
                            .findById(google_user.userId)
                            .patch({
                                avatar: avatar.id
                            });

                        user = await User.query().findById(google_user.userId).withGraphFetched('profilePic')
                        
                        done(null, user);
                    }
                } 
                catch (error) {
                    console.log(error);
                }
			}
		)
	);

    // REFER https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
	// used to serialize(save) the user for the session
    // which sets req.session.passport.user = {id: 'xyz'}
	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	// used to deserialize(extract) the user serialized to req.session.passport.user
    // The fetched object is attached to the request object as req.user
	passport.deserializeUser(async function (USER, done) {
        try {
            const user = await User
                .query()
                .findById(USER.id)
                .withGraphFetched('profilePic');
            if(user) {
                done(null, user)
            }
            else {
                done(null, user)
            }
        } 
        catch (error) {
            done(error, null);
        }
	});
}