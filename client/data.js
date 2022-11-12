module.exports = function () {
  return {
    "user-list": [
      {
        _id: 1,
        username: "admin",
        password: "admin",
        createDate: new Date("2022-01-02"),
      },
    ],
    "survey-list": [
      {
        _id: 1,
        status: "Open",
        surveyName: "COVID-19 Vaccination Survey",
        description:
          "The aims is to record the student COVID-19 vaccination status.",
        creator: "admin",
        createDate: new Date("2022-10-01"),
        questions: [
          {
            _id: 1,
            questionType: "text",
            value: "What is your student ID?",
            responses: [
              {
                value: "100000001",
              },
              {
                value: "100000002",
              },
            ],
          },
          {
            _id: 2,
            questionType: "select",
            value: "Which type of vaccine have you take?",
            options: [
              { value: "Moderna" },
              { value: "Pfizer/BioNTech" },
              { value: "Novavax" },
              { value: "AstraZeneca" },
            ],
            responses: [
              {
                value: "Moderna",
              },
              {
                value: "Novavax",
              },
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
            _id: 1,
            questionType: "text",
            value: "What is your student ID?",
            responses: [
              {
                value: "200000001",
              },
              {
                value: "200000002",
              },
            ],
          },
          {
            _id: 2,
            questionType: "select",
            value: "Which type of vaccine have you take?",
            options: [{ value: "JYNNEOS" }, { value: "ACAM2000" }],
            responses: [
              {
                value: "JYNNEOS",
              },
              {
                value: "ACAM2000",
              },
            ],
          },
        ],
      },
      {
        _id: 3,
        status: "Open",
        surveyName: "English Level Survey",
        description: "The aims is to record the student english level.",
        creator: "admin",
        createDate: new Date("2022-10-10"),
        questions: [
          {
            _id: 1,
            questionType: "text",
            value: "What is your student ID?",
            responses: [
              {
                value: "30000001",
              },
              {
                value: "30000002",
              },
            ],
          },
          {
            _id: 2,
            questionType: "select",
            value: "Which type of English test have you take?",
            options: [
              { value: "IELTS" },
              { value: "TOEFL" },
              { value: "Duolingo" },
            ],
            responses: [
              {
                value: "IELTS",
              },
              {
                value: "Duolingo",
              },
            ],
          },
          {
            _id: 3,
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
            responses: [
              {
                value: "A",
              },
              {
                value: "B",
              },
            ],
          },
        ],
      },
    ],
  };
};
