import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

//Others
import Button from "../components/button";
import Icon from "../components/icon";
import Text from "../components/text";
// import axios from "../api/axios";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await Axios.get("http://localhost:5000/products");
      console.log(res);
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

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <main className="relative">
      <img
        src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
        className="min-h-screen object-cover absolute -top-[102px] -z-10"
        alt="cover-image"
      />
      <section className="div min-h-screen mx-[50px] pb-56 flex flex-col justify-end items-start">
        <Text variant="heading-two">Hoodie Heaven</Text>
        <Button className="mt-7" onClick={navigateToShop}>
          <span className="flex gap-2">
            <Icon name="Arrow-Small-Right-Icon" />
            <span>shop now</span>
          </span>
        </Button>
      </section>

      {/* PRODUCTS */}
      <section
        className="grid grid-cols-3 gap-[38px] 
        mt-[200px] mx-[50px]"
      >
        {products.slice(0, 3).map((product) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={product._id}
            >
              <Text variant="heading-three">{product.name}</Text>
              <div className="bg-cream rounded-[18px] p-4 my-[32px]">
                <img
                  src={product.image}
                  width={368}
                  height={368}
                  className="w-[368px] h-[368px] object-cover"
                  alt={`${product.name}-image`}
                />
              </div>
              <Button className="flex" onClick={navigateToShop}>
                <span className="flex gap-2">
                  <Icon name="Arrow-Small-Right-Icon" />
                  <span>shop now</span>
                </span>
              </Button>
            </div>
          );
        })}
      </section>

      {/* CATEGORIES */}
      <section className="mt-[100px] mx-[50px] max-w-[70%]">
        <Text variant="heading-one">Komorebi hoodies</Text>
        <Text variant="body-two" className="mt-7 tracking-wider">
          Our hoodies are crafted from high-quality materials and are designed
          to be both comfortable and stylish. We believe that fashion should be
          functional, and our hoodies are the perfect combination of both.
          Whether you're looking for something cozy to wear around the house or
          a statement piece to make a statement out in the world, we have you
          covered
        </Text>
      </section>

      <section className="mt-[82px] mb-[100px] relative">
        <img src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679834660/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_1_jnlzke.png" 
        className="h-[768px] w-full aspect-[1.6] object-cover"
        alt="learn-more-image" />
        <Button className="absolute bottom-20 left-[45%]">
          <span className="flex gap-2">
            <Icon name="Arrow-Small-Right-Icon" />
            <span>LEARN MORE</span>
          </span>
        </Button>
      </section>
    </main>
  );
};

export default Home;
