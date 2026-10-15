import * as bookServices from '../services/bookServices.js';

export const fetchAllBooks = async (req, res) => {
    const book = await bookServices.fetchAllBooks();
    res.status(200).json(book);
};

export const createBook = async (req, res) => {
    const { name, author } = req.body;
    const book = { name, author };

    try {
        const bookId = await bookServices.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal server Error"
        });
    }
}

export const editBook = async (req, res) => {
    const { name, author } = req.body;
    const { id } = req.params;
    const book = { id: parseInt(id), name, author };

    try {
        const updatedBook = await bookServices.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal server Error"
        });
    }
}