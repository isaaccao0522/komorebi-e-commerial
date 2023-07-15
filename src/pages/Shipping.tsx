import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
//Others
import useGlobalStore from "../store/Store";
import Text from "../components/text";
import Button from "../components/button";
import Icon from "../components/icon";
import { api } from "../api/axios";
import { getCartTotal } from "../components/helpers";

const Shipping = () => {
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const { cart, updateClientSecret } = useGlobalStore();

  const cartTotal = getCartTotal(cart);

  const onSubmit = handleSubmit(async () => {
    const { address, city, email, name } = getValues();
    try {
      const orderDetails: OrderDetailsType = {
        deliveryAddress: {
          address,
          city,
        },
        user: {
          name,
          email,
        },
        orderItems: cart,
      };
      const res = await Axios.post(`${api}/orders`, {
        ...orderDetails,
      });
      console.log(res.data);
      navigate("/checkout/payment");
    } catch (error) {
      console.log({ message: error.message });
    }
  });

  console.log(cart);

  return (
    <main className="my-[82px] mx-[50px] ">
      <Text variant="heading-three" className="mb-7">
        Shipping address
      </Text>

      <section className="grid grid-cols-2 gap-10">
        <form className="max-w-sm">
          {/* first name and last name section */}
          <div className="">
            <div className="flex flex-col items-start space-y-3 w-full">
              <label htmlFor="name" className="text-base font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
                className={clsx(
                  "p-5 rounded-[18px] border border-silver w-full",
                  {
                    "focus:outline-red focus:ring-red": errors.name,
                  }
                )}
              />
              {errors.name && (
                <span className="flex space-x-3">
                  <Icon name="exclamation-triangle-icon" />
                  <span className="text-red">Required field</span>
                </span>
              )}
            </div>
            <div className="flex flex-col items-start space-y-3 w-full mt-3">
              <label htmlFor="email" className="text-base font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: true,
                  maxLength: 20,
                })}
                placeholder="Email"
                className={clsx(
                  "p-5 rounded-[18px] border border-silver w-full",
                  {
                    "focus:outline-red focus:ring-red": errors.email,
                  }
                )}
              />
              {errors.email && (
                <span className="flex space-x-3">
                  <Icon name="Exclamation-Triangle-Icon" />
                  <span className="text-red">Required field</span>
                </span>
              )}
            </div>
          </div>
          {/* city */}
          <div className="flex flex-col items-start mt-7 ">
            <label htmlFor="city" className="text-base font-semibold mb-3">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder="City"
              {...register("city", {
                required: true,
                minLength: 5,
                maxLength: 6,
              })}
              className={clsx(
                "p-5 rounded-[18px] border border-silver w-full",
                {
                  "focus:outline-red focus:ring-red": errors.city,
                }
              )}
            />
            {errors.city && (
              <span className="flex space-x-3 mt-3">
                <Icon name="exclamation-triangle-icon" />
                <span className="text-red">Required field</span>
              </span>
            )}
          </div>
          {/* address */}
          <div className="flex flex-col items-start mt-7 ">
            <label htmlFor="address" className="text-base font-semibold mb-3">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Address"
              {...register("address", {
                required: true,
                maxLength: 56,
              })}
              className={clsx(
                "p-5 rounded-[18px] border border-silver w-full",
                {
                  "focus:outline-red focus:ring-red": errors.address,
                }
              )}
            />
            {errors.address && (
              <span className="flex space-x-3 mt-3">
                <Icon name="exclamation-triangle-icon" />
                <span className="text-red">Required field</span>
              </span>
            )}
          </div>
          <div className="flex justify-end mt-7">
            <Button onClick={onSubmit}>CONTINUE TO PAYMENT</Button>
          </div>
        </form>

        <div className="">
          <div className="space-y-7 w-full">
            {cart.map((cartItem, index) => {
              return (
                <div className="flex items-start" key={index}>
                  <img
                    src={cartItem.image}
                    width={170}
                    height={170}
                    className="w-[170px] h-[170px] rounded-[18px] mr-[46px]"
                    alt=""
                  />
                  <div className="flex justify-between flex-1">
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
            <Text variant="subheading-three">$ cartTotal</Text>
          </div>

          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Shipping</Text>
            <Text variant="subheading-three">Free</Text>
          </div>

          <div className="mt-[46px] mb-10 h-[1.8px] bg-black" />

          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Total</Text>
            <Text variant="subheading-three">$ {cartTotal} </Text>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shipping;
