import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import { catchAsync } from '../utils/catchAsync';
import { User } from '../modules/user/userModel';
import { verifyToken } from '../utils/jwtToken';

export const auth = (...requiredRoles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers?.authorization?.split(' ')[1];

    // checking if the token is missing
    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized! no token',
      );
    }

    // checking if the given token is valid
    let decoded;
    try {
      decoded = verifyToken(token, config.JWT_ACCESS_SECRET as string);
    } catch {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized! invalid token',
      );
    }

    const { role, email } = decoded;

    // checking if the user is exist
    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }

    if (user?.role === 'superAdmin') next();

    // checking if the user status
    const isBlocked = user?.isBlocked;

    if (isBlocked) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked !');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    req.user = decoded as JwtPayload & { role: string };
    next();
  });
};
