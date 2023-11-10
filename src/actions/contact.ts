'use server'

import { type ContactFields } from '@/lib/validations/form-contact'

const webhook_url = process.env.WEBHOOK_URL

type ShapeBody = ContactFields

export async function postMessage(body: ShapeBody) {
  const { name, email, message } = body

  const messageData = {
    embeds: [
      {
        type: 'rich',
        title: `Mensagem de contato`,
        description: '',
        color: 0x00f92a,
        fields: [
          {
            name: `Nome`,
            value: name,
          },
          {
            name: `Email`,
            value: email,
          },
          {
            name: `Mensagem`,
            value: message,
          },
        ],
      },
    ],
  }

  await fetch(webhook_url, {
    body: JSON.stringify(messageData),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return { message: 'Mensagem enviada com sucesso!' }
}
