
//Stripe
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//Others
import CheckoutForm from "../components/checkoutForm";
import useGlobalStore from "../store/Store";
import { getCartTotal } from "../components/helpers";
import Text from "../components/text";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const Payment = () => {
  const { cart, clientSecret } = useGlobalStore();
  const options: StripeElementsOptions = {
    clientSecret,
  };

  const cartTotal = getCartTotal(cart);

  return (
    <main className="mx-[50px] my-[82px]">
      <section className="grid grid-cols-2 gap-[1rem]">
        {/* CHECKOUT FORM */}
        <div className="max-w-21">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>

        {/* CART INFO */}
        <div>
          <div className="space-y-7">
            {cart.map((cartItem) => {
              return (
                <div className="flex items-start" key={cartItem?.id}>
                  <img
                    src={cartItem?.image}
                    width={170}
                    height={170}
                    className="h-[170] w-[170] mr-[46px] rounded-[18px]"
                    alt={cartItem?.name}
                  />
                  <div className="flex flex-1 justify-between">
                    <Text variant="subheading-four">{cartItem.name}</Text>
                    <Text variant="subheading-four">
                      $ {cartItem.price} X {cartItem.quantity}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Subtotal</Text>
            <Text variant="subheading-three">${cartTotal}</Text>
          </div>

          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Shipping</Text>
            <Text variant="subheading-three">Free</Text>
          </div>

          <div className="mt-[46px] mb-10 h-[10px] bg-black" />

          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Total</Text>
            <Text variant="subheading-three">$ {cartTotal}</Text>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
