import React from "react";
import { Link } from "react-router-dom";

//Others
import Text from "./text";
import Icon from "./icon";
import useGlobleStore from '../store/Store';


const Header = () => {
  const { cart} = useGlobleStore ();


  return (
    <header className="bg-[#f5f5f5] backdrop-blur-[10px] my-[18px] mx-[50px] p-[22px] flex justify-between items-center rounded-[26px]">
      <Link to="/">
        <Text variant="heading-four" className="text-red">JXF</Text>
      </Link>
      <div className="flex flex-row items-center gap-[38px]">
        <Link to="/shop">
          <Text variant="caption-one">Shop</Text>
        </Link>
        <Link to="/about">
          <Text variant="caption-one">About</Text>
        </Link>
        <Link to="cart" className="relative">
          <Icon name="Cart-Icon" />
          <span className="bg-blue-500  w-[25px] h-[25px] text-white rounded-full absolute -right-4 -top-4">
            { cart.length}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
