import { ObjectId } from 'mongoose';

export type ISubject = {
  uuid: number;
  name: string;
  slug: string;
  category: ObjectId;
  class: ObjectId;
};
