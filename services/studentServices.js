import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async () => {
    const student = await studentModel.fetchAllStudent();
    return student;
};

export const createStudent = async () => {
    const student = await studentModel.insertStudent();
    return student;
};