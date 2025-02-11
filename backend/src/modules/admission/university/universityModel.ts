import { model, Schema } from 'mongoose';
import { IUniversity } from './universityInterface';
import { QuestionSet } from '../questionSet/questionSetModel';

const universitySchema = new Schema<IUniversity>(
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
  },
  {
    timestamps: true,
  },
);

universitySchema.pre('findOneAndDelete', async function (next) {
  const id = this.getQuery()._id;
  const setCount = await QuestionSet.countDocuments({ university: id });

  if (setCount > 0) {
    const error = new Error(
      'Cannot delete this university with associated question set articles.',
    );
    return next(error);
  }

  next();
});

export const University = model<IUniversity>('University', universitySchema);
