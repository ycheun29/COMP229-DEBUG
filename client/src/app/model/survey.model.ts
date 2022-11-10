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
  type: string;
  value: string;
  options: Option[];

  constructor(
    questionId?: number,
    type?: string,
    value?: string,
    options?: Option[]
  ) {}
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
  sequence: number;
  value: string;

  constructor(sequence?: number, value?: string) {}
}
