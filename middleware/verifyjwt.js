import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import student from "../models/student.js";
import dean from "../models/dean.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(createError(401, "User are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, async (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    const { UniId } = user;
    const userinDB = await student.findOne({ UniId });
    if (!userinDB) {
      return next(createError(401, "User are not authenticated!"));
    }
    req.user = userinDB;
    next();
  });
};

export const verifyDeanToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(createError(401, "User are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, async (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    const { UniId } = user;
    const userinDB = await dean.findOne({ UniId });
    if (!userinDB) {
      return next(createError(401, "User are not authenticated!"));
    }
    req.user = userinDB;
    next();
  });
};
