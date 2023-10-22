// Set the typing of your environment variables here 👇
type MyVariables = {
  NEXT_PUBLIC_SANITY_PROJECT_ID: string
  NEXT_PUBLIC_SANITY_DATASET: string
  NEXT_PUBLIC_SANITY_API_VERSION: string | undefined
  WEBHOOK_URL: string
}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends MyVariables {}
  }
}

export {}
