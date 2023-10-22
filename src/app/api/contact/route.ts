import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const webhook_url = process.env.WEBHOOK_URL

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = bodySchema.parse(body)

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

    await axios.post(webhook_url, messageData)

    return NextResponse.json({
      message: 'Mensagem enviada com sucesso!',
    })
  } catch (error) {
    console.log('[CONTACT_DISCORD]', error)
    return NextResponse.error()
  }
}
