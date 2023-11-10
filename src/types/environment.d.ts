// Set the typing of your environment variables here 👇
type MyVariables = {
  HYGRAPH_URL: string
  HYGRAPH_TOKEN: string
  WEBHOOK_URL: string
}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends MyVariables {}
  }
}

export {}
