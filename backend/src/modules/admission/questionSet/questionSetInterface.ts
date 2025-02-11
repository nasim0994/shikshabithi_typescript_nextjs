import { ObjectId } from 'mongoose';

export type IQuestionSet = {
  uuid: number;
  name: string;
  slug: string;
  university: ObjectId;
};
