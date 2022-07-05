const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validate: {
        validator: function (value) {
          return /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/.test(
            value
          );
        },
      },
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
    },
    age: Number,
    phone: {
      type: Number,
      minlength: 11,
      maxlength: 11,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = todoSchema;