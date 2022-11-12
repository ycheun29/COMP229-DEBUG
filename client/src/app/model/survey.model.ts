export class Survey {
  // tslint:disable-next-line: variable-name
  constructor(
    public _id?: number,
    public surveyName?: string,
    public description?: string,
    public creator?: string,
    public createdDate?: Date,
    public status?: string,
    public questions?: Question[],
    public responses?: Response[]
  ) {}
}

export class Question {
  constructor(
    public questionId?: number,
    public questionType?: string,
    public value?: string,
    public options?: Option[]
  ) {}
}

export class Response {
  constructor(
    public responsedId?: number,
    public submitedDate?: Date,
    public responseDetails?: ResponseDetail[]
  ) {}
}

export class ResponseDetail {
  constructor(public questionId?: number, public value?: string) {}
}

export class Option {
  constructor(public value?: string) {}
}
