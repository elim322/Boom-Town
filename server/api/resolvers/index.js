const { ApolloError } = require('apollo-server-express');

const jwt = require('jsonwebtoken');
const authMutations = require('./auth');
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
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(parent, { id }, { pgResource }, info) {
        try {
          const tags = await pgResource.getTags(id);
          return tags;
        } catch (e) {
          return [];
        }
      }
    },

    User: {
      async items(parent, { id }, { pgResource }, info) {
        try {
          const items = await pgResource.getItemsForUser(parent.id);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrowed(parent, { id }, { pgResource }, info) {
        try {
          const borrowed = await pgResource.getBorrowedItemsForUser(parent.id);
          return borrowed;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    Item: {
      async itemowner(parent, { id }, { pgResource }, info) {
        try {
          const itemowner = await pgResource.getUserById(parent.ownerid);
          return itemowner;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(parent, { id }, { pgResource }, info) {
        try {
          const tags = await pgResource.getTagsForItem(parent.id);
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrower(parent, { id }, { pgResource }, info) {
        if (!parent.borrowerid) return null;
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
      ...authMutations(app),

      async addItem(parent, args, context, info) {
        const image = await args.image;
        const user = await jwt.decode(context.token, app.get('JWT_SECRET'));
        console.log(user, 'user');
        const newItem = await context.pgResource.saveNewItem({
          item: args.item,
          image,
          user
        });
        return newItem;
      }
    }
  };
};
