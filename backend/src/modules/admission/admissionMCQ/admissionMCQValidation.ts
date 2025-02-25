import { z } from 'zod';

export const admissionMCQValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .max(255, { message: 'Name cannot exceed 255 characters.' }),
  university: z.string().min(1, { message: 'University is required.' }),
  questionSet: z.string().min(1, { message: 'Question Set is required.' }),
});
