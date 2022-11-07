export class Survery {
  id: string;
  surveyName: string;
  description: string;
  createdBy: string;
  createdDate: Date;
  status: string;
  questions: QuestionSchema[];
}

export class QuestionSchema {
  questionId: string;
  type: string;
  option: string[];
  responses: Responses[];
}

export class Responses {
  responsedId: string;
  submitedDate: Date;
  value: string;
}

export class option {
  sequence: number;
  value: string;
}
