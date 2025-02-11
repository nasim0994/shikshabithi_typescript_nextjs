import { ObjectId } from 'mongoose';

export type IContent = {
  name: string;
  content: string;
  category: ObjectId;
  class: ObjectId;
  subject: ObjectId;
  chapter: ObjectId;
};
