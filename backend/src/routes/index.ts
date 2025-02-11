import { Router } from 'express';
const router = Router();
import { authRoute } from '../modules/auth/authRoute';
import { userRoute } from '../modules/user/userRoute';
import { adminRoute } from '../modules/admin/adminRoute';
import { categoryRoute } from '../modules/academy/category/categoryRoute';
import { classRoute } from '../modules/academy/class/classRoute';
import { subjectRoute } from '../modules/academy/subject/subjectRoute';
import { chapterRoute } from '../modules/academy/chapter/chapterRoute';
import { contentRoute } from '../modules/academy/content/contentRoute';

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
  {
    path: '/academy/category',
    route: categoryRoute,
  },
  {
    path: '/academy/class',
    route: classRoute,
  },
  {
    path: '/academy/subject',
    route: subjectRoute,
  },
  {
    path: '/academy/chapter',
    route: chapterRoute,
  },
  {
    path: '/academy/content',
    route: contentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
