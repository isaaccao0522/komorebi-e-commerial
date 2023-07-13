import React from "react";
import { useNavigate } from "react-router-dom";

//Others
import Button from "../components/button";
import Icon from "../components/icon";

const Home = () => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <section className="relative">
      <img
        src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
        className="min-h-screen object-cover absolute -top-[102px] -z-10"
        alt="cover-image"
      />
      <div className="div min-h-screen mx-[50px] pb-56 flex flex-col justify-end items-start">
        <Button className="mt-7" onClick={navigateToShop}>
          <span className="flex gap-2">
            <Icon name="Arrow-Small-Right-Icon" />
            <span>shop now</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Home;
