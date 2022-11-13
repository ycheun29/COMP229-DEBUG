export class Survey {
  // tslint:disable-next-line: variable-name
  constructor(
    public _id?: number,
    public status?: string,
    public surveyName?: string,
    public description?: string,
    public creator?: string,
    public createdDate?: Date,
    public questions?: Question[]
  ) {}
}

export class Question {
  constructor(
    public _id?: number,
    public questionType?: string,
    public value?: string,
    public temp?: string,
    public options?: Option[],
    public responses?: Response[]
  ) {}
}

export class Response {
  constructor(public _id?: number, public value?: string) {}
}

export class Option {
  constructor(public _id?: number, public value?: string) {}
}
