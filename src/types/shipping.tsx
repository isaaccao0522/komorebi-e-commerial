type FormData = {
  name: string,
  email: string,
  city: string,
  address: string
}

type OrderDetailsType = {
  user: {
    name: string,
    email: string
  },
  deliveryAddress: {
    address: string,
    city: string
  },
  orderItems: ICartItem[]
}
