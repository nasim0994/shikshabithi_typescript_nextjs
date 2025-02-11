import { model, Schema } from 'mongoose';
import { IQuestionSet } from './questionSetInterface';

const questionSetSchema = new Schema<IQuestionSet>(
  {
    uuid: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    university: {
      type: Schema.Types.ObjectId,
      ref: 'University',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const QuestionSet = model<IQuestionSet>(
  'QuestionSet',
  questionSetSchema,
);
