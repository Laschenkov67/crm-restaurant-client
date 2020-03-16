import { OrderPosition } from './order-position.interface';

export interface Order {
    date?: Date
    order?: number
    user?: string
    list: OrderPosition[]
    _id?: string
  }
  
