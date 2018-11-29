const { AuthenticationError } = require('apollo-server');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    maxAge: 1000 * 60 * 60 * 2,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
}

function generateToken(user, secret) {
  const { id, email, fullname, bio } = user;
  let token = jwt.sign({ id, email, fullname, bio }, secret, {
    expiresIn: '2h'
  });
  return token;
}

module.exports = app => {
  return {
    async signup(parent, args, context) {
      try {
        const hashedPassword = bcrypt.hashSync(args.user.password, 10);

        const user = await context.pgResource.createUser({
          fullname: args.user.fullname,
          email: args.user.email,
          password: hashedPassword
        });
        const token = generateToken(user, app.get('JWT_SECRET'));

        setCookie({
          tokenName: app.get('JWT_COOKIE_NAME'),
          token,
          res: context.req.res
        });

        return {
          id: user.id
        };
      } catch (e) {
        throw new AuthenticationError(e);
      }
    },

    async login(parent, args, context) {
      try {
        console.log('I am trying to login');
        const user = await context.pgResource.getUserAndPasswordForVerification(
          args.user.email
        );
        console.log(user);
        const valid = await bcrypt.compare(args.user.password, user.password);

        if (!valid || !user) throw 'User was not found.';
        setCookie({
          tokenName: app.get('JWT_COOKIE_NAME'),
          token: generateToken(user, app.get('JWT_SECRET')),
          res: context.req.res
        });
        console.log(user.id);
        return {
          id: user.id
        };
      } catch (e) {
        throw new AuthenticationError(e);
      }
    },

    logout(parent, args, context) {
      context.req.res.clearCookie(app.get('JWT_COOKIE_NAME'));
      return true;
    }
  };
};
