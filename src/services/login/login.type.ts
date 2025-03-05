import { z } from "zod";


export const schemaLogin = z.object({
    username: z.string(),
    password: z.string()
})

export type Ilogin = z.infer<typeof schemaLogin> 