const mongoose = require("mongoose");

const StatusEnums = [
  "Not Applied",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

const ApplicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    company: {
      type: String,
      required: [true, "Please provide a company"],
    },
    jobId: {
      type: String,
      minlength: 2,
      maxlength: 30,
    },
    status: {
      type: String,
      enum: StatusEnums,
      default: "Not Applied",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

// handle null status value
ApplicationSchema.pre("save", async function () {
  if (!this.status) {
    this.status = "Not Applied";
  }
});

module.exports = mongoose.model("Application", ApplicationSchema);
