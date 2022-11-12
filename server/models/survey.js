let mongoose = require("mongoose");

// create a model class
let model = mongoose.Schema(
  {
    status: String,
    surveyName: String,
    description: String,
    creator: String,
    createdDate: Date,

    questions: [
      {
        questionType: String,
        value: String,
        options: [{ value: String }],
        responses: [{ value: String }],
      },
    ],
  },
  {
    collection: "survey-list",
  }
);

module.exports = mongoose.model("Survey", model);
