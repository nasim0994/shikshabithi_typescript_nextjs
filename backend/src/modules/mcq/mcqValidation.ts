import { z } from 'zod';

export const mcqValidation = z.object({
  question: z
    .string()
    .min(10, { message: 'Question must be at least 10 characters long.' })
    .max(500, { message: 'Question cannot exceed 500 characters.' }),
  options: z
    .array(z.string())
    .length(4, { message: 'There must be exactly 4 options.' }),
  ans: z
    .string()
    .min(1, { message: 'Answer must be provided.' })
    .max(1, { message: 'Answer can only be a single character.' }),
  explain: z
    .string()
    .min(10, { message: 'Explanation must be at least 10 characters long.' }),
  user: z.string({ message: 'User ID must be provided.' }),
  category: z.string({ message: 'Category ID must be provided.' }),
  class: z.string({ message: 'Class ID must be provided.' }),
  subject: z.string({ message: 'Subject ID must be provided.' }),
  chapter: z.string().optional(),
  tags: z.array(z.string()).optional(),
  sets: z.array(z.string()).optional(),
  jobSets: z.array(z.string()).optional(),
});
