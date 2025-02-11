import { model, Schema } from 'mongoose';
import { IClass } from './classInterface';
import { Subject } from '../subject/subjectModel';

const classSchema = new Schema<IClass>(
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
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

classSchema.pre('findOneAndDelete', async function (next) {
  const id = this.getQuery()._id;
  const subjectCount = await Subject.countDocuments({ class: id });

  if (subjectCount > 0) {
    const error = new Error(
      'Cannot delete this class with associated subject articles.',
    );
    return next(error);
  }

  next();
});

export const Class = model<IClass>('Class', classSchema);
