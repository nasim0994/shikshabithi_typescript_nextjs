import { model, Schema } from 'mongoose';
import { IAdmissionMCQ } from './admissionMCQInterface';

const admissionMCQSchema = new Schema<IAdmissionMCQ>(
  {
    university: {
      type: Schema.Types.ObjectId,
      ref: 'University',
      required: true,
    },
    questionSet: {
      type: Schema.Types.ObjectId,
      ref: 'QuestionSet',
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

export const AdmissionMCQ = model<IAdmissionMCQ>(
  'AdmissionMCQ',
  admissionMCQSchema,
);
