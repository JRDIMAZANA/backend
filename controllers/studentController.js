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

export const editStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const { id } = req.params;
    const student = { id, name, srcode, program };

    try {
        const updatedStudent = await studentServices.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal server Error"
        });
    }
}

export const removeStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedStudent = await studentServices.deleteStudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal server Error"
        });
    }
}