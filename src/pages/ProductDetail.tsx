import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

//Others
import { api } from "../api/axios";
import Text from "../components/text";
import Button from "../components/button";
import useGlobalStore from "../store/Store";
import { toast } from "react-hot-toast";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const { addItemToCart, cart} = useGlobalStore ();

  console.log ( `cart`, JSON.stringify(cart, null, 2));
  
  const getProduct = async () => {
    try {
      const res = await Axios.get(`${api}/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getProduct(id);
    return () => {};
  }, [id]);



  const addToBag = () => {
    try {
      if ( !product) return
      const cartItem : RawCartItem = {
        image: product?.image,
        name: product?.name,
        price: product?.price,
        product: product?._id
      }
      addItemToCart ({ ...cartItem});
      toast.success (`Add ${product?.name} to Bag.` );
    } catch ( error) {
      console.log ( error);
    }
  };

  return (
    <main className="mt-[82px]">
      <section className="grid grid-cols-2 mb-[100px] gap-10 mx-[50px]">
        {/* IMAGE */}
        <div className="">
          <img
            src={product?.image}
            className="h-[618px] object-cover"
            alt={product?.name}
          />
        </div>

        {/* PRODUCT INFO. */}
        <div className="">
          <Text variant="heading-one">{product?.name}</Text>
          <Text variant="subheading-two" className="mt-[2rem]">${product?.price}</Text>
          <Text variant="body-two" className="mt-[2rem] tracking-wider">{product?.description}</Text>
          <Button size="small" className="mt-14" onClick={ addToBag}>
            ADD to BAG
          </Button>
        </div>
      </section>

      <section className="relative h-[622px] mb-[180px] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743572/youtube/2023/march/komorebi-development/primaryimage_oblfj9.png"
          alt=""
        />
        <div className="absolute top-[45%] left-[45%]"><Text variant="body-two" className="text-white tracking-[1rem]">Sale</Text></div>
      </section>
    </main>
  );
};

export default ProductDetail;
