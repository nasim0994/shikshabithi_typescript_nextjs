import { ObjectId } from 'mongoose';

export type IChapter = {
  uuid: number;
  name: string;
  slug: string;
  category: ObjectId;
  class: ObjectId;
  subject: ObjectId;
};
