export interface IformCreate {
    mp_name: string
    category: string
    distribution_unit_of_measure: string
    quantity_per_measure: number
    current_stock: number
    min_stock_level: number
    fk_medicine_manufacturer: number
}