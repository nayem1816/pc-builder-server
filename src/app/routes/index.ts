import express from 'express';
import { CategoryRoutes } from '../modules/Category/category.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
