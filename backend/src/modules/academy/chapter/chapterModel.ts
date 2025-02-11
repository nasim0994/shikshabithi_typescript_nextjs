import { model, Schema } from 'mongoose';
import { IChapter } from './chapterInterface';
import { Content } from '../content/contentModel';

const chapterSchema = new Schema<IChapter>(
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
    subject: {
      type: Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

chapterSchema.pre('findOneAndDelete', async function (next) {
  const id = this.getQuery()._id;
  const contentCount = await Content.countDocuments({ chapter: id });

  if (contentCount > 0) {
    const error = new Error(
      'Cannot delete this chapter with associated content articles.',
    );
    return next(error);
  }

  next();
});

export const Chapter = model<IChapter>('Chapter', chapterSchema);
