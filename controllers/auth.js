import Dean from "../models/dean.js";
import Student from "../models/student.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";

export const login = async (req, res, next) => {
  try {
    const { studentId, password } = req.body;

    const student1 = await Student.findOne({ UniId: studentId });
    if (!student1) return next(createError(404, "User not found"));
    console.log(student1);

    if (password !== student1.password) {
      return next(createError(400, "User or password not correct"));
    }
    const token = jwt.sign({ UniId: studentId }, process.env.JWT);

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
export const Deanlogin = async (req, res, next) => {
  try {
    const { deanId, password } = req.body;

    const dean1 = await Dean.findOne({ UniId: deanId });
    if (!dean1) return next(createError(404, "User not found"));

    if (password !== dean1.password) {
      return next(createError(400, "User or password not correct"));
    }
    const token = jwt.sign({ UniId: deanId }, process.env.JWT);

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const newUser = new Student(req.body);
  try {
    const savedUser = newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
export const createDean = async (req, res, next) => {
  const newUser = new Dean(req.body);
  try {
    const savedUser = newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
