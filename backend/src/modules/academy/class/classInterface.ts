import { ObjectId } from 'mongoose';

export type IClass = {
  uuid: number;
  name: string;
  slug: string;
  category: ObjectId;
};
