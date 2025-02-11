import { z } from 'zod';

export const questionSetValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .max(255, { message: 'Name cannot exceed 255 characters.' }),
  university: z.string().min(1, { message: 'Category is required.' }),
});
