import React from "react";
import { Link } from "react-router-dom";

//Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//Others
import Text from "./text";

const Footer = () => {
  return (
    <footer className="bg-marian-blue pt-[100px] pb-6 px-[50px]">
      {/* TOP */}
      <section className="flex justify-between items-center">
        {/* LEFT */}
        <div>
          <Text variant="heading-three" className="text-white">
            {" "}
            OUR COMPANY
          </Text>
          <div className="mt-4 space-y-2">
            <Text variant="body-three" className="text-white">
              OUR STORY
            </Text>
            <Text variant="body-three" className="text-white">
              TERMS OF SERVICE
            </Text>
            <Text variant="body-three" className="text-white">
              PRIVACY POLICY
            </Text>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <Text variant="heading-three" className="text-white">
            {" "}
            SUPPORT
          </Text>
          <div className="mt-4 space-y-2">
            <Text variant="body-three" className="text-white">
              FAQs
            </Text>
            <Text variant="body-three" className="text-white">
              CONTACT US
            </Text>
            <Text variant="body-three" className="text-white">
              RETURNS
            </Text>
            <Text variant="body-three" className="text-white">
              PROFESSIONALS
            </Text>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="mt-[180px]">
        <div className="flex justify-between items-center">
          {/* LEFT */}
          <div>
            <Text variant="caption-four" className="text-white text-[1rem]">
              Do not sell my personal information <br /> © 2023 KOMOREBI
            </Text>
          </div>

          <div className="flex items-center space-x-[38px]">
            <Link to="" className="bg-white w-[38px] h-[38px] rounded-[19px] flex items-center justify-center">
              <InstagramIcon className="w-24 h-24 fill-none" />
            </Link>
            <Link to="" className="bg-white w-[38px] h-[38px] rounded-[19px] flex items-center justify-center">
              <YouTubeIcon className="w-24 h-24 fill-none" />
            </Link>
            <Link to="" className="bg-white w-[38px] h-[38px] rounded-[19px] flex items-center justify-center">
              <TwitterIcon className="w-24 h-24 fill-none" />
            </Link>
            <Link to="" className="bg-white w-[38px] h-[38px] rounded-[19px] flex items-center justify-center">
              <LinkedInIcon className="w-24 h-24 fill-none" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
 