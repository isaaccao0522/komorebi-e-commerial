import React from "react";

//Mui
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";


type IconName =
  | "Arrow-Down-Icon"
  | "Arrow-Small-Right-Icon"
  | "Minus-Icon"
  | "Plus-Icon"
  | "Cart-Icon"
  | "Trash-Icon"
  | "X-Mark-Icon"
  | "Exclamation-Triangle-Icon"
  | "Logo";

type IconsType = {
  [K in IconName]: JSX.Element
};

const Icons: IconsType = {
  "Arrow-Down-Icon": <ArrowDownwardOutlinedIcon className="w-24 h-24 min-x-0 min-y-0" />,
  "Arrow-Small-Right-Icon": <ArrowRightAltOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
  "Minus-Icon": <RemoveOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
  "Plus-Icon": <AddOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
  "Cart-Icon": <LocalMallOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
  "Trash-Icon": <DeleteForeverOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
  "X-Mark-Icon": <ClearOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
  "Exclamation-Triangle-Icon": <ReportProblemOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
  Logo: <LogoDevOutlinedIcon className="w-24 h-24 min-x-0 min-y-0"/>,
};

type IconProps = {
  name: keyof typeof Icons,
}

const Icon = ({ name}: IconProps) => {
  return Icons[ name]
};

export default Icon;
