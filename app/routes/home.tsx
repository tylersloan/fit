import type { Route } from "./+types/home"
import { Welcome } from "../welcome/welcome"
// import { generateText } from "ai"
// import { openai } from "@ai-sdk/openai"
import OpenAI from "openai"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: "",
})

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  // const completion = await openai.chat.completions.create({
  //   model: "gpt-4o-mini",
  //   store: true,
  //   messages: [{ role: "user", content: "write a haiku about ai" }],
  // })

  // return completion

  return {
    message: "hello",
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome loaderData={loaderData} />
}
