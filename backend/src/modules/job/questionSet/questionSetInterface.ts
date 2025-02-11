import { ObjectId } from 'mongoose';

export type IJobQuestionSet = {
  uuid: number;
  name: string;
  slug: string;
  institute: ObjectId;
};
