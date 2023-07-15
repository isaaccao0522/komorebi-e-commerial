import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//Others
import useGlobalStore from "../store/Store";
import Text from "../components/text";
import Icon from "../components/icon";
import Button from "../components/button";
import { getCartTotal} from '../components/helpers';




const Cart = () => {
  const { cart, addItemToCart, removeItemFromCart } = useGlobalStore();

  const cartTotal = getCartTotal ( cart);
  const navigate = useNavigate ();

  console.log(cart);

  return (
    <main className="mx-[50px]">
      <Text variant="heading-one" className="my-[82px]">
        Shopping Cart
      </Text>

      <section className="space-y-[164px]">
        {cart.map((cartItem) => {
          return (
            <div
              className="flex justify-between items-start"
              key={cartItem?.id}
            >
              {/* LEFT */}
              <img
                height={378}
                width={378}
                src={cartItem?.image}
                className="h-[378px] w-[378px] mr-[46px] rounded-[18px] object-contain"
                alt={`${cartItem?.name}`}
              />

              {/* RIGHT */}
              <div className="w-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <Text variant="subheading-two">{cartItem?.name}</Text>
                  <Text variant="subheading-two">${cartItem?.price}</Text>
                </div>

                <div className="mt-[124px] flex items-center gap-[1rem]">
                  <button
                    onClick={() => {
                      removeItemFromCart( cartItem);
                      toast.error (`${cartItem?.name} is removed.`)
                    }}
                  >
                    <Icon name="Minus-Icon" />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => {
                      addItemToCart({
                        image: cartItem.image,
                        name: cartItem.name,
                        price: cartItem.price,
                        product: cartItem.product,
                      });
                      toast.success(`${cartItem.name} added to cart.`);
                    }}
                  >
                    <Icon name="Plus-Icon" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* DIVIDED */}
      <div className="border-[1.8px] border-black my-[80px]" />

      <section className="flex mb-[82px] justify-between items-center">
        <Text variant="subheading-two">Subtotal</Text>
        <Text variant="subheading-two">USD $ { `${cartTotal}`}</Text>
      </section>

      <Button size="large" className="w-full mb-[180px] "
        onClick={ () => navigate ('/checkout/shipping')}
      >
        Proceed to Check out
      </Button>
    </main>
  );
};

export default Cart;
