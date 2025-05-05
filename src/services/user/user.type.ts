import { z } from "zod"

export interface IUsers {
    id_u: string
    u_name: string
    cpf: string
    password: string
    dt_create: string
}

export const schemaRegisterUser = z.object({
    name: z.string(),
    cpf: z.string(),
    password: z.string()
})

export const schemaUpdateUser = schemaRegisterUser.extend({
    id: z.string()
})

export type IupdateUser = z.infer<typeof schemaUpdateUser>
export type IregisterUser = z.infer<typeof schemaRegisterUser>


