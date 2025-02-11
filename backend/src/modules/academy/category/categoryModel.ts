import { model, Schema } from 'mongoose';
import { ICategory } from './categoryInterface';
import { Class } from '../class/classModel';

const categorySchema = new Schema<ICategory>(
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
    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

categorySchema.pre('findOneAndDelete', async function (next) {
  const id = this.getQuery()._id;
  const classCount = await Class.countDocuments({ category: id });

  if (classCount > 0) {
    const error = new Error(
      'Cannot delete this category with associated class articles.',
    );
    return next(error);
  }

  next();
});

export const Category = model<ICategory>('Category', categorySchema);
