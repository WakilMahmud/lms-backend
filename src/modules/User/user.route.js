import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
    '/create-student',
    (req, res, next) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    validateRequest(UserValidation.userValidationSchema),
    UserControllers.createStudent
);

export const UserRoutes = router;
