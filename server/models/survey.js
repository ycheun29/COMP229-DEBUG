let mongoose = require("mongoose");

// create a model class
let model = mongoose.Schema(
  {
    _id: Number,
    surveyName: String,
    description: String,
    creator: String,
    createdDate: Date,
    status: String,

    questions: [
      {
        questionId: Number,
        questionType: String,
        value: String,
        options: [{ value: String }],
      },
    ],
    responses: [
      {
        responsedId: String,
        submitedDate: Date,
        responseDetails: {
          questionId: Number,
          value: String,
        },
      },
    ],
  },
  {
    collection: "survey-list",
  }
);

module.exports = mongoose.model("Survey", model);
