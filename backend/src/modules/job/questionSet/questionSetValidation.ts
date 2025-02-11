import { z } from 'zod';

export const jobQuestionSetValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .max(255, { message: 'Name cannot exceed 255 characters.' }),
  institute: z.string().min(1, { message: 'Institute is required.' }),
});
