import { model, Schema } from 'mongoose';
import { IQuestionSet } from './questionSetInterface';
import { AdmissionMCQ } from '../admissionMCQ/admissionMCQModel';

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

questionSetSchema.pre('findOneAndDelete', async function (next) {
  const id = this.getQuery()._id;
  const mcqCount = await AdmissionMCQ.countDocuments({ questionSet: id });

  if (mcqCount > 0) {
    const error = new Error(
      'Cannot delete this set with associated question mcq articles.',
    );
    return next(error);
  }

  next();
});

export const QuestionSet = model<IQuestionSet>(
  'QuestionSet',
  questionSetSchema,
);
