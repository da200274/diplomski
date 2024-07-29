import { Product } from "./product"

export class Order{
    _id: string = ""
    username: string = ""
    content: Product[] = []
    price: number = 0
    status: string = ""
}