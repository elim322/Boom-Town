const strs = require('stringstream');

function tagsQueryString(tags, itemid, result) {
  /**
   * Challenge:
   * This function is recursive, and a little complicated.
   * Can you refactor it to be simpler / more readable?
   */
  const length = tags.length;
  return length === 0
    ? `${result};`
    : tags.shift() &&
        tagsQueryString(
          tags,
          itemid,
          `${result}($${tags.length + 1}, ${itemid})${length === 1 ? '' : ','}`
        );
}

module.exports = postgres => {
  return {
    async createUser({ email, fullname, password }) {
      const newUserInsert = {
        text:
          'INSERT INTO users(email, fullname, password) VALUES($1, $2, $3) RETURNING *', // @TODO: Authentication - Server
        values: [email, fullname, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw 'An account with this username already exists.';
          case /users_email_key/.test(e.message):
            throw 'An account with this email already exists.';
          default:
            throw 'There was a problem creating your account.';
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: 'SELECT * FROM users WHERE email = $1', // @TODO: Authentication - Server
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: 'SELECT id, fullname, bio, email FROM users WHERE id = $1;', // @TODO: Basic queries
        values: [id]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (user.rows.length < 1) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }

      /**
       *  Refactor the following code using the error handling logic described above.
       *  When you're done here, ensure all of the resource methods in this file
       *  include a try catch, and throw appropriate errors.
       *
       *  Here is an example throw statement: throw 'User was not found.'
       *  Customize your throw statements so the message can be used by the client.
       */

      // const user = await postgres.query(findUserQuery);
      // return user.rows[0];
      // -------------------------------
    },
    async getItems(filter) {
      const findItemQuery = {
        text: `SELECT * FROM items WHERE ownerid <> $1 AND borrowerid <> $1 OR borrowerid IS NULL`,
        values: [filter]
      };
      try {
        const items = await postgres.query(findItemQuery);
        if (items.rows.length < 1) throw 'Item was not found.'; // add conditional to query database else throw error
        return items.rows;
      } catch (e) {
        throw 'Item was not found.';
      }
    },
    async getItemsForUser(id) {
      const findItemsForUserQuery = {
        text: `SELECT * FROM items WHERE ownerid = $1;`,
        values: [id]
      };
      try {
        const items = await postgres.query(findItemsForUserQuery);
        if (items.rows.length < 1) throw 'User has no items.';
        return items.rows;
      } catch (e) {
        throw 'User has no items.';
      }
    },
    async getBorrowedItemsForUser(id) {
      const findBorrowedItemsForUserQuery = {
        text: `SELECT * FROM items WHERE borrowerid = $1`,
        values: [id]
      };
      try {
        const items = await postgres.query(findBorrowedItemsForUserQuery);
        if (items.rows.length < 1)
          throw 'User does not have any borrowed items.';
        return items.rows;
      } catch (e) {
        throw 'User does ot have any borrowed items.';
      }
    },
    async getTags() {
      const tags = await postgres.query('SELECT * FROM tags');
      return tags.rows;
    },
    async getTagsForItem(id) {
      const findTagsForItemQuery = {
        text: `SELECT tags.id, tags.title FROM itemtags INNER JOIN  tags ON (itemtags.tagid = tags.id) WHERE itemtags.itemid = $1;
        `,
        values: [id]
      };
      try {
        const tags = await postgres.query(findTagsForItemQuery);
        if (tags.rows.length < 1) throw 'Tag was not found.';
        return tags.rows;
      } catch (e) {
        return [];
      }
    },
    async saveNewItem({ item, image, user }) {
      const newItemInsert = {
        text: `INSERT INTO items(title, description, tags) SELECT tags.id, tags.title FROM tags`
      };
      /**
       *  @TODO: Adding a New Item
       *
       *  Adding a new Item to Posgtres is the most advanced query.
       *  It requires 3 separate INSERT statements.
       *
       *  All of the INSERT statements must:
       *  1) Proceed in a specific order.
       *  2) Succeed for the new Item to be considered added
       *  3) If any of the INSERT queries fail, any successful INSERT
       *     queries should be 'rolled back' to avoid 'orphan' data in the database.
       *
       *  To achieve #3 we'll ue something called a Postgres Transaction!
       *  The code for the transaction has been provided for you, along with
       *  helpful comments to help you get started.
       *
       *  Read the method and the comments carefully before you begin.
       */

      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         */
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query('BEGIN', err => {
              // Convert image (file stream) to Base64
              const imageStream = image.stream.pipe(strs('base64'));

              let base64Str = '';
              imageStream.on('data', data => {
                base64Str += data;
              });

              imageStream.on('end', async () => {
                // Image has been converted, begin saving things
                const { title, description, tags } = item;

                // Generate new Item query
                // @TODO
                // -------------------------------

                // Insert new Item
                // @TODO
                // -------------------------------

                const imageUploadQuery = {
                  text:
                    'INSERT INTO uploads (itemid, filename, mimetype, encoding, data) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                  values: [
                    // itemid,
                    image.filename,
                    image.mimetype,
                    'base64',
                    base64Str
                  ]
                };

                // Upload image
                const uploadedImage = await client.query(imageUploadQuery);
                const imageid = uploadedImage.rows[0].id;

                // Generate image relation query
                // @TODO
                // -------------------------------

                // Insert image
                // @TODO
                // -------------------------------

                // Generate tag relationships query (use the'tagsQueryString' helper function provided)
                // @TODO
                // -------------------------------

                // Insert tags
                // @TODO
                // -------------------------------

                // Commit the entire transaction!
                client.query('COMMIT', err => {
                  if (err) {
                    throw err;
                  }
                  // release the client back to the pool
                  done();
                  // Uncomment this resolve statement when you're ready!
                  // resolve(newItem.rows[0])
                  // -------------------------------
                });
              });
            });
          } catch (e) {
            // Something went wrong
            client.query('ROLLBACK', err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              case /uploads_itemid_key/.test(e.message):
                throw 'This item already has an image.';
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
