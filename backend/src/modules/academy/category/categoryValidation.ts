import { z } from 'zod';

export const categoryValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .max(255, { message: 'Name cannot exceed 255 characters.' }),
  order: z
    .number()
    .int({ message: 'Order must be an integer.' })
    .min(0, { message: 'Order must be zero or greater.' }),
});
