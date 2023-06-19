import express from 'express';
import { UserRoutes } from '../modulers/user/user.route';
import { AcademicSemesterRoutes } from '../modulers/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modulers/academicFaculty/academicFaculty.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters', AcademicSemesterRoutes);

export default router;
