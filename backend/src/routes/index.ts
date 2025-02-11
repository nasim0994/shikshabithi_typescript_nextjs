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
import { universityRoute } from '../modules/admission/university/universityRoute';
import { questionSetRoute } from '../modules/admission/questionSet/questionSetRoute';
import { admissionMCQRoute } from '../modules/admission/admissionMCQ/admissionMCQRoute';
import { instituteRoute } from '../modules/job/institute/instituteRoute';
import { jobQuestionSetRoute } from '../modules/job/questionSet/questionSetRoute';
import { jobMCQRoute } from '../modules/job/jobMCQ/jobMCQRoute';
import { mcqRoute } from '../modules/mcq/mcqRoute';
import { writtenRoute } from '../modules/written/writtenRoute';

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
  {
    path: '/admission/university',
    route: universityRoute,
  },
  {
    path: '/admission/question-set',
    route: questionSetRoute,
  },
  {
    path: '/admission/mcq',
    route: admissionMCQRoute,
  },
  {
    path: '/job/institute',
    route: instituteRoute,
  },
  {
    path: '/job/question-set',
    route: jobQuestionSetRoute,
  },
  {
    path: '/job/mcq',
    route: jobMCQRoute,
  },
  {
    path: '/mcq',
    route: mcqRoute,
  },
  {
    path: '/written',
    route: writtenRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
