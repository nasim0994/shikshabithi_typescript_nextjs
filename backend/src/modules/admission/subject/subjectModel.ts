import { model, Schema } from 'mongoose';
import { ISubject } from './subjectInterface';
import { Chapter } from '../chapter/chapterModel';

const subjectSchema = new Schema<ISubject>(
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
    class: {
      type: Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

subjectSchema.pre('findOneAndDelete', async function (next) {
  const id = this.getQuery()._id;
  const chapterCount = await Chapter.countDocuments({ subject: id });

  if (chapterCount > 0) {
    const error = new Error(
      'Cannot delete this subject with associated chapter articles.',
    );
    return next(error);
  }

  next();
});

export const Subject = model<ISubject>('Subject', subjectSchema);
