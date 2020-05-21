const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const placeSchema = new Schema(
  {
    title: String,
    description: String,
    mood: {
      type: String,
      enum: [
        "joyful",
        "relaxed",
        "energetic",
        "bored",
        "thoughtful",
        "melancholic",
        "anxious",
        "angry",
      ],
    },
    imgPath: String,
    street: String,
    zip: String,
    city: String,
    // review: [String], // nice to have
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
