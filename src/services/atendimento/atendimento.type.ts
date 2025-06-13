export interface Iatendimento {
    id_service: string
    fk_id_patient: string
    fk_id_medical: string
    _status: "start" | "progress" | "finish"
    p_name: string
    sex: string
    cpf: string
}2