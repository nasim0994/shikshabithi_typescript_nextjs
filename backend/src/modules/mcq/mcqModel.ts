import { model, Schema } from 'mongoose';
import { IMcq } from './mcqInterface';

const MCQSchema = new Schema<IMcq>(
  {
    question: {
      type: String,
      required: true,
    },
    options: [
      {
        type: String,
        required: true,
      },
    ],
    ans: {
      type: String,
      required: true,
    },
    explain: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
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
      default: undefined,
    },
    tags: [
      {
        type: String,
      },
    ],
    sets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'QuestionSet',
        default: undefined,
      },
    ],
    jobSets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'JobQuestionSet',
        default: undefined,
      },
    ],
  },
  { timestamps: true },
);

export const MCQ = model<IMcq>('MCQ', MCQSchema);
