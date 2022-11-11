export class Survey {
  _id: number;
  surveyName: string;
  description: string;
  creator: string;
  createdDate: Date;
  status: string;
  questions: Question[];
  responses: Response[];

  constructor(
    _id?: number,
    surveyName?: string,
    description?: string,
    creator?: string,
    createdDate?: Date,
    status?: string,
    questions?: Question[],
    responses?: Response[]
  ) {}
}

export class Question {
  questionId: number;
  questionType: string;
  value: string;
  options: Option[];

  constructor(
    questionId?: number,
    questionType?: string,
    value?: string,
    options?: Option[]
  ) {
    this.questionId = questionId;
    this.questionType = questionType;
    this.value = value;
    this.options = options;
  }
}

export class Response {
  responsedId: string;
  submitedDate: Date;
  responseDetails: ResponseDetail[];

  constructor(
    responsedId?: string,
    submitedDate?: Date,
    responseDetails?: ResponseDetail[]
  ) {}
}

export class ResponseDetail {
  questionId: number;
  value: string;

  constructor(questionId?: number, value?: string) {}
}

export class Option {
  value: string;

  constructor(value?: string) {
    this.value = value;
  }
}
