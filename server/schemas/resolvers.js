const { Book, User } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return await Book.find({}).populate('title').populate('authors').populate('description').populate('image').populate('link');
        },
        users: async () => {
            //get all users and show their saved books
            return await User.find({}).populate({
                path: "books",
                populate: "savedBooks",
            });
        },
        //get a book by id
        book: async (parent, args) => {
            return await Book.findById(args.bookId).populate("authors").populate('description').populate('image').populate('link');
        },
        //get a user by id
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { userId, savedBook }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $addToSet: { savedBooks: savedBook },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeBook: async (parent, { savedBook }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: savedBook } },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;