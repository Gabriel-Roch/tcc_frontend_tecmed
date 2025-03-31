

export interface Iagreement {
    id_ma: number
    ma_name: string
    cnpj: string
    active: boolean,
    contact: string
    remark: string
    fk_insert_user: string
    fk_last_update_user: string | null
    last_date_update: string | null
    dt_create: string
}

export interface IcreateAgreement {
    ma_name: string
    cnpj: string
    contact: string
    remark: string
}