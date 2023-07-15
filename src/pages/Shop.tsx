import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

//Others
import { api } from "../api/axios";
import Text from "../components/text";
import Button from "../components/button";

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const res = await Axios.get(`${api}/products`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getProducts();
    // return () => {}
  }, []);

  return (
    <main>
      <section className="relative w-full h-[768px] flex item-end">
        <img
          src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743570/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_1_2_exnour.png"
          className="absolute -z-10 aspect-[1.6] object-cover"
          alt=""
        />
        <div className="mx-[50px] mb-40">
          <Text variant="heading-three" className="mb-3">
            Latest hoodie styles online
          </Text>
          <Text variant="body-two">Suit your unique preferences</Text>
        </div>
      </section>

      <section className="bg-white mx-[50px]">
        <Text variant="heading-one" className="mt-[82px]">
          Experience comfort and style
        </Text>
        <Text variant="body-two" className="mt-[20px] mb-[80px]">
          Perfect blend of comfort, style, and quality materials
        </Text>
        <div className="grid grid-cols-3 gap-[38px] mb-[180px]">
          {products.map((product) => {
            return (
              <div className="" key={product._id}>
                <Link to={`/shop/${product._id}`} className="rounded=[18px]">
                  <div>
                    <img
                      src={product.image}
                      width={368}
                      height={368}
                      className="w-[368px] h-[368px]"
                      alt={product.name}
                    />
                  </div>
                </Link>
                <Text variant="heading-three" className="mt-7 mb-2">
                  {product.name}
                </Text>
                <Text variant="body-three">${product.price}</Text>
                <Button size="small" className="mt-7">
                  Add to Bag
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Shop;
