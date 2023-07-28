import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/', CategoryController.TestGet);

export const CategoryRoutes = router;
