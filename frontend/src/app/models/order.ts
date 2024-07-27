import { Item } from "./item"

export class Order{
    _id: string = ""
    username: string = ""
    content: Item[] = []
    price: number = 0
    status: string = ""
}