import { model, Schema } from 'mongoose';
import { ISubject } from './subjectInterface';

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

// classSchema.pre('findOneAndDelete', async function (next) {
//   const id = this.getQuery()._id;
//   const classCount = await Class.countDocuments({
//     category: id,
//   });

//   if (classCount > 0) {
//     const error = new Error(
//       'Cannot delete this category with associated class articles.',
//     );
//     return next(error);
//   }

//   next();
// });

export const Subject = model<ISubject>('Subject', subjectSchema);
