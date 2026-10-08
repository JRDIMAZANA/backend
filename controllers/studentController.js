import * as studentServices from '../services/studentServices.js';

export const fetchAllStudent = async (req, res) => {
    const student = await studentServices.fetchAllStudent();
    res.status(200).json(student);
};

export const createStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const student = { name, srcode, program };

    try {
        const studentId = await studentServices.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal server Error"
        });
    }
}