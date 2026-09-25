import * as studentServices from '../services/studentServices.js';

export const fetchAllStudent = async (req, res) => {
    const student = await studentServices.fetchAllStudent();
    res.status(200).json(student);
};