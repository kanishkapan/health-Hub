import express from "express";
import {
    updateDoctor,
    deleteDoctor,
    getAllDoctor,
    getDoctorProfile,
    // getMyAppointments,
    getSingleDoctor,
} from '../Controllers/doctorController.js'

import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js'
import { get } from "mongoose";
const router =express.Router()

// nested route
router.use('/:doctorId/review',reviewRouter)
router.get('/:id',authenticate,restrict(["doctor"]),getSingleDoctor)
router.get('/',authenticate,restrict(["doctor"]),getAllDoctor)
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor)
router.delete("/:id",authenticate,restrict(["doctor"]),deleteDoctor);
router.get("/profile/me",authenticate,restrict(["doctor"]),getDoctorProfile)
// router.get(
//     '/appointments/my-appointments',
//     authenticate,
//     restrict(["patient"]),
//     getMyAppointments
// );

export default router;