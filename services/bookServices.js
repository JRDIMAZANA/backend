import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    const book = await bookModel.fetchAllBooks();
    return book;
};

export const createBook = async () => {
    const book = await bookModel.insertBook();
    return book;
};