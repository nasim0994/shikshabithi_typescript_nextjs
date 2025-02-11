import { model, Schema } from 'mongoose';
import { IContent } from './contentInterface';

const contentSchema = new Schema<IContent>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
    subject: {
      type: Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    chapter: {
      type: Schema.Types.ObjectId,
      ref: 'Chapter',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Content = model<IContent>('Content', contentSchema);
