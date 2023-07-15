import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//Others
import useGlobalStore from "../../store"
import Text from "../components/text";
import Button from "../components/button";
import Icon from "../components/icon";
import { Divider } from "@mui/material";
import { api} from '../api/axios';



const cartItems = [
  {
    _id: "64aa7338bc321e768d9af102",
    name: "男聚酯纖維透氣彈性泡泡紗亨利領布帛T恤",
    image: "https://www.muji.com/public/media/img/item/4550512968078_1260.jpg",
    description: "使用帶有極小透氣孔的良好素材。凹凸紋理織線，觸感透氣清爽。",
    price: 790,
    quantity: 10,
  },
  {
    _id: "64af907ea483db698dad69ba",
    name: "100% LINEN BERMUDA SHORTS",
    image:
      "https://static.zara.net/photos///2023/V/0/1/p/8574/445/800/2/w/750/8574445800_1_1_1.jpg?ts=1679051705328",
    description:
      "Bermuda shorts made of linen fabric. Adjustable elasticated waistband with interior drawstring. Front pockets and rear welt pockets.",
    price: 1490,
    quantity: 7,
  },
  {
    _id: "64af90c2a483db698dad69be",
    name: "KNIT CROP TOP WITH FRINGING",
    image:
      "https://static.zara.net/photos///2023/I/0/1/p/7901/100/712/2/w/750/7901100712_1_1_1.jpg?ts=1688716770887",
    description:
      "Crop top with a round neck and long sleeves. Fringing at the hem. Buttoned opening at the back.",
    price: 1790,
    quantity: 6,
  },
  {
    _id: "64af9e7ea5ad300139402904",
    name: "Sweat Full-Zip Long-Sleeve Hoodie",
    image:
      "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/459787/item/usgoods_09_459787.jpg?width=700",
    description:
      "Voluminous cut for easy layering. The short length pairs well with any bottoms.",
    price: 1017,
    quantity: 9,
  },
];

const Shipping = () => {
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate ();

  const onSubmit = async() => {
    const { address, city, email, name } = getValues();
    try {
      const orderDetails: OrderDetailsType = {
        deliveryAddress: {
          address,
          city,
        },
        user: {
          email,
          name,
        },
        orderItems: cart
      };
      const res = await Axios.post (`${api}/orders`, {
        ...orderDetails
      });
      navigate('/checkout/payment')
    } catch (error) {
      console.log({ message: error.message });
    }
  };

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
                  <Icon name="exclamation-triangle-icon" />
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
            <Button>CONTINUE TO PAYMENT</Button>
          </div>
        </form>

        <div className="">
          <div className="space-y-7 w-full">
            {cartItems.map((cartItem) => {
              return (
                <div className="flex items-start" key={cartItem._id}>
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
            <Text variant="subheading-three">$ cartTotal + Shipping </Text>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shipping;
