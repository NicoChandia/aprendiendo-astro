import { defineCollection,z } from "astro:content";
// z -> zod schema (biblioteca para validar schemas-tipos de datos)

//con zod definimos la forma del objeto
const books = defineCollection({
  schema: z.object({
    title:z.string(),
    author:z.string(),
    img:z.string(),
    readtime:z.number(),
    description:z.string(),
    buy:z.object({
      spain:z.string().url(),
      usa:z.string().url(),
    }),
  })
})

export const collections = {books}