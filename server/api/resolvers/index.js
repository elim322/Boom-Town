/**
 *  @TODO: Handling Server Errors
 *
 *  Once you've completed your pg-resource.js methods and handled errors
 *  use the ApolloError constructor to capture and return errors from your resolvers.
 *
 *  Throwing ApolloErrors from your resolvers is a nice pattern to follow and
 *  will help you easily debug problems in your resolving functions.
 *
 *  It will also help you control th error output of your resource methods and use error
 *  messages on the client! (More on that later).
 *
 *  The user resolver has been completed as an example of what you'll need to do.
 *  Finish of the rest of the resolvers when you're ready.
 */
const { ApolloError } = require('apollo-server-express');

// @TODO: Uncomment these lines later when we add auth
const jwt = require('jsonwebtoken');
const authMutations = require('./auth');
// -------------------------------
const { UploadScalar, DateScalar } = require('../custom-types');

module.exports = app => {
  return {
    // Upload: UploadScalar,
    // Date: DateScalar,

    Query: {
      viewer(parent, args, context, info) {
        if (context.token) {
          return jwt.decode(context.token, app.get('JWT_SECRET'));
        }
        return null;
      },
      async user(parent, { id }, { pgResource }, info) {
        //gets user by inputting user ID
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        //query for retrieving items
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(parent, { id }, { pgResource }, info) {
        // returns all tags
        try {
          const tags = await pgResource.getTags(id);
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    User: {
      /**
       *  @TODO: Advanced resolvers
       *
       *  The User GraphQL type has two fields that are not present in the
       *  user table in Postgres: items and borrowed.
       *
       *  According to our GraphQL schema, these fields should return a list of
       *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
       *
       */
      async items(parent, { id }, { pgResource }, info) {
        //gets items that user owns
        try {
          const items = await pgResource.getItemsForUser(parent.id);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrowed(parent, { id }, { pgResource }, info) {
        // gets items that user borrowed
        try {
          const borrowed = await pgResource.getBorrowedItemsForUser(parent.id);
          return borrowed;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    Item: {
      /**
       *  @TODO: Advanced resolvers
       *
       *  The Item GraphQL type has two fields that are not present in the
       *  Items table in Postgres: itemowner, tags and borrower.
       *
       * According to our GraphQL schema, the itemowner and borrower should return
       * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
       *
       */
      // @TODO: Uncomment these lines after you define the Item type with these fields
      async itemowner(parent, { id }, { pgResource }, info) {
        //gets items owned by a user by inputting userID
        try {
          const itemowner = await pgResource.getUserById(parent.ownerid);
          return itemowner;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(parent, { id }, { pgResource }, info) {
        // gets all tags associated to an inputted item
        try {
          const tags = await pgResource.getTagsForItem(parent.id);
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrower(parent, { id }, { pgResource }, info) {
        // gets items borrowed by a user
        try {
          const borrower = await pgResource.getUserById(parent.borrowerid);
          return borrower;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
      // async imageurl({ imageurl, imageid, mimetype, data }) {
      //   if (imageurl) return imageurl
      //   if (imageid) {
      //     return `data:${mimetype};base64, ${data}`
      //   }
      // }
      // -------------------------------
    },

    Mutation: {
      // @TODO: Uncomment this later when we add auth
      ...authMutations(app),
      // -------------------------------

      async addItem(parent, args, context, info) {
        const image = await image;
        const user = await jwt.decode(context.token, app.get('JWT_SECRET'));
        const newItem = await context.pgResource.saveNewItem({
          item: args.item,
          image: image,
          user
        });
        return newItem;
      }
    }
  };
};
