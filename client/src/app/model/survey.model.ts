export class Responses {
  responsedId: string;
  submitedDate: Date;
  value: string;
}

export class QuestionSchema {
  questionId: string;
  type: string;
  option: string[];
  responses: Responses[];
}

export class Survey {
  _id: number;
    surveyName: string;
    description: string;
    creator: string;
    createdDate: Date;
    status: string;
    questions: QuestionSchema[];
    
  constructor(_id: number,
    surveyName: string,
    description: string,
    creator: string,
    createdDate: Date,
    status: string,
    questions: QuestionSchema[]
    ){}
  
}





export class option {
  sequence: number;
  value: string;
}
