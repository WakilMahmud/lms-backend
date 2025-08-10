import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (email) => {
    const userData = {
        id: generateStudentId(),
        email
    };

    try {
        const newStudent = await User.create(userData);

        return newStudent;
    } catch (err) {
        throw new Error(err);
    }
};

export const UserServices = {
    createStudentIntoDB
};
