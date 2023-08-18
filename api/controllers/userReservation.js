import UserReservation from "../models/UserReservation.js";

export const createUserReservation = async (req, res, next) => {
    const newUserReservation = new UserReservation(req.body);
  
    try {
      const savedUserReservation = await newUserReservation.save();
      res.status(200).json(savedUserReservation);
    } catch (err) {
      next(err);
    }
  };

export const updateUserReservation = async (req,res,next)=>{
  try {
    const updatedUserReservation = await UserReservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUserReservation);
  } catch (err) {
    next(err);
  }
}
export const deleteUserReservation = async (req,res,next)=>{
  try {
    await UserReservation.findByIdAndDelete(req.params.id);
    res.status(200).json("User Reservation has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUserReservation = async (req,res,next)=>{
  try {
    const userReservation = await UserReservation.findById(req.params.id);
    res.status(200).json(userReservation);
  } catch (err) {
    next(err);
  }
}
export const getUserReservations = async (req,res,next)=>{
  try {
    const userReservations = await User.find();
    res.status(200).json(userReservations);
  } catch (err) {
    next(err);
  }
}