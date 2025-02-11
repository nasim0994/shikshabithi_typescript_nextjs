import { model, Schema } from 'mongoose';
import { IJobQuestionSet } from './questionSetInterface';
import { JobMCQ } from '../jobMCQ/jobMCQModel';

const jobQuestionSetSchema = new Schema<IJobQuestionSet>(
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
    institute: {
      type: Schema.Types.ObjectId,
      ref: 'Institute',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

jobQuestionSetSchema.pre('findOneAndDelete', async function (next) {
  const id = this.getQuery()._id;
  const mcqCount = await JobMCQ.countDocuments({ questionSet: id });

  if (mcqCount > 0) {
    const error = new Error(
      'Cannot delete this set with associated question mcq articles.',
    );
    return next(error);
  }

  next();
});

export const JobQuestionSet = model<IJobQuestionSet>(
  'JobQuestionSet',
  jobQuestionSetSchema,
);
