const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
    proxy: true
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Check if user already exists
            let user = await User.findOne({
                $or: [
                    { googleId: profile.id },
                    { email: profile.emails[0].value }
                ]
            });

            if (user) {
                // Update googleId if not present (case where user registered manually before)
                if (!user.googleId) {
                    user.googleId = profile.id;
                    user.avatar = profile.photos[0].value;
                    await user.save();
                }
                return done(null, user);
            }

            // If not, create new user
            user = new User({
                googleId: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName || '',
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
                role: 'Regular'
            });

            await user.save();
            done(null, user);
        } catch (err) {
            console.error(err);
            done(err, null);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
