'use strict';

import cors from 'cors';
import loggerMiddleware from '../middleware/logger-middleware';
import { Router } from 'express';
import accountRouter from './account-router';
import profileRouter from './profile-router';
import errorMiddleware from '../middleware/error-middleware';

export default new Router()
  .use([
    cors({
      origin: process.env.CORS_ORIGINS.split(' '),
      credentials: true,
    }),
    loggerMiddleware,
    accountRouter,
    profileRouter,
    errorMiddleware,
  ]);
