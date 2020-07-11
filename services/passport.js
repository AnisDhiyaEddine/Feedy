const GoogleStrategy = require("passport-google-oauth20").Strategy;
//console.developers.google.com
const passport = require("passport");
const keys = require("../config/keys");
const User = require("../models/User");

passport.serializeUser((user, done) => {
  try {
    done(null, user._id);
  } catch (error) {
    done(error, null);
  }
});

passport.deserializeUser(async (_id, done) => {
  try {
    let user = await User.findById(_id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accesToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleID: profile.id });
        if (!user) {
          user = new User({ googleID: profile.id });
          await user.save();
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);
