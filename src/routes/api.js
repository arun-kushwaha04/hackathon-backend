//all apis
const express = require("express");
const router = express.Router();
const { doctors } = require("../controllers/api/doctors.js")
const { requestAppointment, confirmAppointmentRequest, cancelAppointmentRequest, futureAppointments, nextAppointment, pastAppointments } = require("../controllers/api/appointments.js")

//All api for doctors
router.post('/doctors', doctors)

//all apis for appointments
router.get('/appointments/futureAppointments/:type/:userId', futureAppointments)
router.get('/appointments/pastAppointments/:type/:userId', pastAppointments)
router.get('/appointments/nextAppointment/:type/:userId', nextAppointment)

router.post('/requestAppointment', requestAppointment)
router.post('/confirmAppointmentRequest', confirmAppointmentRequest)
router.post('/cancelAppointmentRequest', cancelAppointmentRequest)

module.exports = router