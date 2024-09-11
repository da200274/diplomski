import { Order } from "./order"

export class Notification{
    notification: string = ""
    seen: boolean = false
    username: string = ""
    
    id_order: string = ""

    created_at: Date = new Date()
}