import { model, Schema } from 'mongoose';
import { IJobMCQ } from './jobMCQInterface';

const jobMCQSchema = new Schema<IJobMCQ>(
  {
    institute: {
      type: Schema.Types.ObjectId,
      ref: 'Institute',
      required: true,
    },
    questionSet: {
      type: Schema.Types.ObjectId,
      ref: 'JobQuestionSet',
      required: true,
    },
    subjects: [
      {
        subject: {
          type: Schema.Types.ObjectId,
          ref: 'Subject',
          required: true,
        },
        questions: [
          {
            type: Schema.Types.ObjectId,
            ref: 'MCQ',
            required: true,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const JobMCQ = model<IJobMCQ>('JobMCQ', jobMCQSchema);
