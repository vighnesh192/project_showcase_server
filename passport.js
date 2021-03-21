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
                        done(null, googleUser);
                    } 
                    else {
                        console.log('GOOGLE NOT USER PRESENT:-')
                        let user = await User.query().insert(newUser);

                        const google_user = await Google_User.query()
                            .insert({
                                id: profile.id,
                                user: user.id 
                            });
                        
                        const avatar = await Image.query()
                            .insert({
                                url: profile.photos[0].value
                            });

                        user = await User.query()
                            .findById(user.id)
                            .patch({
                                avatar: avatar.id
                            });

                        console.log("USER:-", user);
                        console.log("GOOGLE_USER", google_user);
                        console.log("AVATAR", avatar);
                        
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
		done(null, user.id);
	});

	// used to deserialize(extract) the user serialized to req.session.passport.user
    // The fetched object is attached to the request object as req.user
	passport.deserializeUser(async function (id, done) {
        console.log('IN DESERIALIZE:-', id);
        try {
            const user = await Google_User.query().findById(id);
            if(user) {
                done(null, user)
            }
            else {
                done(null, user)
            }
        } catch (error) {
            done(error, user);
        }
		// User.query().findById(id, function (err, user) {
        //     console.log('IN DESERIALIZE 2:-', user);
		// 	done(null, user);
		// });
	});
}