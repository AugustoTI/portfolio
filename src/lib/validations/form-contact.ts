import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().min(1).email(),
  message: z.string().min(1).max(500),
})

export type ContactFields = z.infer<typeof formSchema>
