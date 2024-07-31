import { Content } from "./content"
import { Product } from "./product"

export class Order{
    _id: string = ""
    username: string = ""
    content: Content[] = []
    price: number = 0
    status: string = ""

    created_at: Date = new Date()
    show_details: boolean = false
}