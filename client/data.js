module.exports = function () {
  return {
    "user-list": [
      {
        userId: 1,
        username: "admin",
        password: "admin",
        createDate: new Date("2022-01-02"),
      },
    ],
    "survey-list": [
      {
        _id: 1,
        status: "Close",
        surveyName: "COVID-19 Vaccination Survey",
        description:
          "The aims is to record the student COVID-19 vaccination status.",
        creator: "admin",
        createDate: new Date("2022-10-01"),
        questions: [
          {
            questionId: 1,
            questionType: "text",
            value: "What is your student ID?",
          },
          {
            questionId: 2,
            questionType: "select",
            value: "Which type of vaccine have you take?",
            options: [
              { value: "Moderna" },
              { value: "Pfizer/BioNTech" },
              { value: "Novavax" },
              { value: "AstraZeneca" },
            ],
          },
        ],
        responses: [
          {
            responseId: 1,
            submitDate: new Date("2022-10-03"),
            responseDetails: [
              { questionId: 1, value: "300000001" },
              { questionId: 2, value: "Moderna" },
            ],
          },
          {
            responseId: 2,
            submitDate: new Date("2022-10-05"),
            responseDetails: [
              { questionId: 1, value: "300000002" },
              { questionId: 2, value: "AstraZeneca" },
            ],
          },
        ],
      },
      {
        _id: 2,
        status: "Open",
        surveyName: "MonkeyPox Vaccination Survey",
        description:
          "The aims is to record the student MonkeyPox vaccination status.",
        creator: "admin",
        createDate: new Date("2022-10-10"),
        questions: [
          {
            questionId: 1,
            questionType: "text",
            value: "What is your student ID?",
          },
          {
            questionId: 2,
            questionType: "select",
            value: "Which type of vaccine have you take?",
            options: [{ value: "JYNNEOS" }, { value: "ACAM2000" }],
          },
        ],
        responses: [
          {
            responseId: 1,
            submitDate: new Date("2022-10-12"),
            responseDetails: [
              { questionId: 1, value: "300000011" },
              { questionId: 2, value: "JYNNEOS" },
            ],
          },
          {
            responseId: 2,
            submitDate: new Date("2022-10-13"),
            responseDetails: [
              { questionId: 1, value: "300000012" },
              { questionId: 2, value: "ACAM2000" },
            ],
          },
        ],
      },
      {
        _id: 3,
        status: "Draft",
        surveyName: "Englisg Level Survey",
        description: "The aims is to record the student english level.",
        creator: "admin2",
        createDate: new Date("2022-10-10"),
        questions: [
          {
            questionId: 1,
            questionType: "text",
            value: "What is your student ID?",
          },
          {
            questionId: 2,
            questionType: "select",
            value: "Which type of English test have you take?",
            options: [
              { value: "IELTS" },
              { value: "TOEFL" },
              { value: "Duolingo" },
            ],
          },
          {
            questionId: 3,
            questionType: "select",
            value: "What is your English test result?",
            options: [
              { value: "A" },
              { value: "B" },
              { value: "C" },
              { value: "D" },
              { value: "E" },
              { value: "F" },
            ],
          },
        ],
        responses: [],
      },
    ],
  };
};
