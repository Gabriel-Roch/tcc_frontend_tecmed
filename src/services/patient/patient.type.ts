import { z } from "zod";

export const schemaNewPatients = z.object({
    name: z.string(),
    email: z.string().email(),
    sex: z.enum(["M", "F"]),
    cpf: z.string(),
    rg: z.string(),
    birth: z.string(),
    type_blood: z.number(),
    medical_agreement: z.number().or(z.null()),
    medical_agreement_number: z.string().or(z.null()),
    telephones: z.array(
        z.object({
            tell: z.string().or(z.number()),
            description: z.string()
        })
    ),
    address: z.object({
        zip_code: z.string(),
        street: z.string(),
        complement: z.string(),
        unit: z.string(),
        neighborhood: z.string(),
        city: z.string(),
        state_abbr: z.string(),
        state: z.string(),
        region: z.string(),
        description: z.string()
    })
})

export type InewPatient = z.infer<typeof schemaNewPatients>

export interface IgetAllPatient {
    id_p: string
    p_name: string
    sex: string
    cpf: string
    rg: string
    birth: string
    fk_type_blood: number
    fk_medical_agreement: number
    fk_insert_user: string
    fk_last_update_user: string | null
    medical_agreement_number: string
    last_date_update: string | null
    dt_create: string
    email: string
    master_blood: {
        id_b: number
        b_name: string,
        b_active: boolean
    },
    medical_agreement: {
        id_ma: number
        ma_name: string
        fk_insert_user: string
        fk_last_update_user: string | null
        last_date_update: string | null
        dt_create: string
    },
    patients_telephone: [
        {
            fk_id_p: string
            tell: string
            description: string
        }
    ],
    patients_address: {
        fk_id_pa: string
        zip_code: string
        street: string
        complement: string
        unit: string
        neighborhood: string
        city: string
        state_abbr: string
        state: string
        region: string
        description: string
    }
}
