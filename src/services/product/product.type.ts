

export interface IgetAllProduct {
    id_mp: string | number
    mp_name: string
    category: string
    distribution_unit_of_measure: string
    quantity_per_measure: number
    current_stock: number
    reserved_stock: number
    min_stock_level: number
    id_register_user: number
    register_user: string
    name_manufacturer: string
}

export interface IcreateProduct {
    mp_name: string
    category: string
    distribution_unit_of_measure: string
    quantity_per_measure: number
    current_stock: number
    min_stock_level: number
    fk_medicine_manufacturer: number
}