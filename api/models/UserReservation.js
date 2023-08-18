import mongoose from "mongoose";
const UserReservationSchema = new mongoose.Schema({
    hotel: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    roomNumberDate: { number: Number, unavailableDates: {type: [Date]}},
  },
  { timestamps: true }
);

export default mongoose.model("UserReservation", UserReservationSchema);
