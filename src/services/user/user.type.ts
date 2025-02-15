import { z } from "zod"

export interface IUsers {
    id_u: number
    u_name: string
    age: number 
    cpf: string 
    password: string
    dt_create : string
}

export const schemaRegisterUser = z.object({
    name: z.string(),
    age: z.number(),
    cpf: z.string(),
    password: z.string()
})

export const schemaUpdateUser = schemaRegisterUser.extend({
    id: z.number()
})

export type IupdateUser = z.infer<typeof schemaUpdateUser>
export type IregisterUser = z.infer<typeof schemaRegisterUser>


