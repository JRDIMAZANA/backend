import * as bookServices from '../services/bookServices.js';

export const fetchAllBooks = async (request, response) => {
    const books = await bookServices.fetchAllBooks();
    res.status(200).json(books);
};