'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/lib/animations'
import { type ContactFields, formSchema } from '@/lib/validations/form-contact'
import { postMessage } from '@/actions/contact'

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<ContactFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<ContactFields> = async (formData) => {
    try {
      const { message } = await postMessage(formData)
      reset()
      toast.success(message)
    } catch {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde')
    }
  }

  return (
    <section
      id="contato"
      className="flex items-center justify-center bg-gray-950 px-4 py-16 md:py-32"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          title="Vamos trabalhar juntos? Entre em contato"
          subtitle="Contato"
          className="items-center text-center"
        />

        <motion.form
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex w-full flex-col gap-4"
          autoComplete="off"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="block h-14 w-full rounded-lg bg-gray-800 px-4 outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-400"
              {...register('name')}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block h-14 w-full rounded-lg bg-gray-800 px-4 outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-400"
              {...register('email')}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm">
              Mensagem
            </label>
            <textarea
              id="message"
              className="block h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-400"
              maxLength={500}
              {...register('message')}
            />
          </div>

          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="mx-auto mt-6 w-max gap-2 shadow-button hover:scale-105"
          >
            Enviar Mensagem <HiArrowNarrowRight size={18} aria-hidden />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
