module.exports = {
    ensureAuth: function (req, res, next) {
        if(req.isAuthenticated()) {
            console.log('in auth');
            return next();
        }
        else {
            console.log('in auth error');
            res.redirect('/auth/google')
        }
    },
    ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('http://localhost:8080/projects/?sortBy=trending')
        } else {
            return next();
        }
    }
}