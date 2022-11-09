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
        surveyId: 1,
        status: "Open",
        surveyName: "First Survey Name",
        description: "This is survey description",
        creator: "admin",
        createDate: new Date("2022-01-02"),
        questions: [
          { questionId: 1, type: "text", value: "Questions 1 ?" },
          {
            questionId: 2,
            type: "select",
            question: "Questions 2 ?",
            options: [
              { seq: 1, value: "Option 1" },
              { seq: 2, value: "Option 2" },
            ],
          },
        ],
        responses: [
          {
            responseId: 1,
            submitDate: new Date("2022-01-16"),
            responses: [
              { questionId: 1, value: "This is answer 1" },
              { questionId: 2, value: "Option 2" },
            ],
          },
        ],
      },
    ],

    // "book-list": [
    //   {
    //     id: 1,
    //     name: "Dune",
    //     author: "Frank Herbert",
    //     published: "1965",
    //     description:
    //       "Set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs, Dune tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis.\r\n                    \r\n                    ",
    //     price: 10.95,
    //   },
    //   {
    //     id: 2,
    //     name: "Blood Music",
    //     author: "Greg Bear",
    //     published: "1985",
    //     description:
    //       "In the novel, renegade biotechnologist Vergil Ulam creates simple biological computers based on his own lymphocytes. Faced with orders from his nervous employer to destroy his work, he injects them into his own body, intending to smuggle the 'noocytes' (as he calls them) out of the company and work on them elsewhere.",
    //     price: 19.95,
    //   },
    //   {
    //     id: 3,
    //     name: "Ring World",
    //     author: "Larry Niven",
    //     published: "1970",
    //     description:
    //       "On planet Earth in 2850 AD, Louis Gridley Wu is celebrating his 200th birthday. Despite his age, Louis is in perfect physical condition (due to the longevity drug boosterspice).\r\n                    ",
    //     price: 22.59,
    //     __v: 0,
    //   },
    //   {
    //     id: 4,
    //     name: "I, Robot",
    //     author: "Isaac Asimov",
    //     published: "1950",
    //     description:
    //       "I, Robot is a fixup novel of science fiction short stories or essays by American writer Isaac Asimov.\r\n                    \r\n                    ",
    //     price: 14.96,
    //   },
    // ],
    // orders: [],
  };
};
