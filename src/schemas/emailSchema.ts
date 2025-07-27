import {z} from 'zod'

// TODO move to types
export type ContactFormData = z.infer<typeof ContactFormSchema>

const ContactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  emailAddress: z.email('Invalid email address'),
  message: z.string().min(1, 'Message is required')
})
