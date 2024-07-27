import { Order } from "./order"

export class Notification{
    notification: string = ""
    seen: boolean = false
    username: string = ""
    
    order: Order = new Order()
}