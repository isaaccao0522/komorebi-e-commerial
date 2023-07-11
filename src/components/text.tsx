import {ReactNode} from "react";
import clsx from "clsx";

type Variant =
  | "heading-one"
  | "heading-two"
  | "heading-three"
  | "heading-four"
  | "subheading-one"
  | "subheading-two"
  | "subheading-three"
  | "body-one"
  | "body-two"
  | "body-three"
  | "caption-one"
  | "caption-two"
  | "caption-three"
  | "caption-four";

const variants: Record<Variant, string> = {
  "heading-one": "text-[50px] font-bold leading-[64px] text-raisin-black",
  "heading-two": "text-[40px] font-bold leading-[51px] text-raisin-black",
  "heading-three": "text-[32px] font-bold leading-[41px] text-raisin-black",
  "heading-four": "text-[24px] font-bold leading-[31px] text-raisin-black",
  "subheading-one":
    "text-[28px] font-semibold leading-[42px] text-raisin-black",
  "subheading-two":
    "text-[28px] font-semibold leading-[30px] text-raisin-black",
  "subheading-three":
    "text-[28px] font-semibold leading-[42px] text-raisin-black",
  "body-one": "text-[28px] leading-[42px] text-raisin-black",
  "body-two": "text-[28px] leading-[30px] text-raisin-black",
  "body-three": "text-[28px] text-raisin-black",
  "caption-one": "uppercase text-base text-raisin-black",
  "caption-two": "uppercase text-base font-semibold text-raisin-black",
  "caption-three": "uppercase text-base font-semibold text-raisin-black",
  "caption-four":
    "uppercase text-xs leading-[18px] font-semibold text-raisin-black",
};

type TextProps = {
  children: ReactNode | ReactNode[];
  variant: Variant;
  className?: string;
};

const Text = ({
  children,
  variant = "body-one",
  className,
  ...props
}: TextProps) => {
  return <p className={clsx(variants[variant], className)}>
  {children}
  </p>;
};

export default Text;
