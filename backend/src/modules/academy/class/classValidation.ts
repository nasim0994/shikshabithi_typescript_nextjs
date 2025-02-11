import { z } from 'zod';

export const classValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .max(255, { message: 'Name cannot exceed 255 characters.' }),
  category: z.string().min(1, { message: 'Category is required.' }),
});
