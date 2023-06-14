import Dean from "../models/dean.js";
import Student from "../models/student.js";
import Session from "../models/session.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";

export const showAvailableSlots = async (req, res, next) => {
  try {
    const sessions = await Session.find({ studentId: null });
    res.status(200).json(sessions);
  } catch (err) {
    next(err);
  }
};

export const BookaSlot = async (req, res, next) => {
  try {
    const { deanId, date } = req.body;
    const { UniId } = req.user;
    // console.log(UniId);
    const student = await Student.findOne({ UniId });
    const sessions = await Session.findOneAndUpdate(
      { deanId, date, studentId: null },
      {
        $set: {
          studentId: UniId,
          studentName: student.name,
        },
      },
      { returnOriginal: false }
    );
    res.status(200).json(sessions);
  } catch (err) {
    next(err);
  }
};

export const pendingSlots = async (req, res, next) => {
  var currentTime = new Date();
  try {
    const { UniId } = req.user;
    const sessions = await Session.find({
      deanId: UniId,
      studentId: { $ne: null },
      date: { $gte: currentTime },
    });
    res.status(200).json(sessions);
  } catch (err) {
    next(err);
  }
};
