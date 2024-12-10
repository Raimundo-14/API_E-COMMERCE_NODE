import express from 'express';
import { UsersController } from '../controllers/users.controller';
import asyncHandler from 'express-async-handler';
export const userRoutes = express.Router();
import { celebrate, Joi, Segments } from 'celebrate';

userRoutes.get("/users", asyncHandler(UsersController.getAll));
userRoutes.get("/users/:id", asyncHandler(UsersController.getById));
userRoutes.post("/users", celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().email().required()
    })
}), asyncHandler(UsersController.save));
userRoutes.put("/users/:id", asyncHandler(UsersController.update));
userRoutes.delete("/users/:id", asyncHandler(UsersController.delete));