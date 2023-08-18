import express from "express";
import {
  createUserReservation,
  updateUserReservation,
  deleteUserReservation,
  getUserReservation,
  getUserReservations,
} from "../controllers/userReservation.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/:userid", verifyAdmin, createUserReservation);

//UPDATE
router.put("/:id", updateUserReservation);

//DELETE
router.delete("/:id", verifyAdmin, deleteUserReservation);

//GET
router.get("/:id", getUserReservation);

//GET ALL
router.get("/", getUserReservations);

export default router;