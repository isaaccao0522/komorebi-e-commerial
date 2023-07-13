import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

//Others
import { api } from "../api/axios";
import Text from "../components/text";
import Button from "../components/button";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const getProduct = async () => {
    try {
      const res = await Axios.get(`${api}/products/${id}`);
      console.log(res);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <main>
      <section>
        {/* IMAGE */}
        <div>
          <img src={product?.image} className="" alt={product?.name} />
        </div>

        {/* PRODUCT INFO. */}
        <div>
          <Text variant="heading-one">{product?.name}</Text>
          <Text variant="subheading-two">{product?.price}</Text>
          <Text variant="body-two">{product?.description}</Text>
          <Button>Add to Bag</Button>
        </div>
      </section>

      <section className="relative">
        <img src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743572/youtube/2023/march/komorebi-development/primaryimage_oblfj9.png" alt="" />
        <div className="absolute">
          Sale
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
