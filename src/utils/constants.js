import { asset_home } from "../assets/images";
import { asset_about } from "../assets/images";

import { IoIosListBox } from "react-icons/io";

export const cardHome = [
  { imgUrl: asset_home.produk_1, text: "valves" },
  { imgUrl: asset_home.produk_6, text: "pippe" },
  { imgUrl: asset_home.produk_14, text: "pippe" },
  { imgUrl: asset_home.produk_8, text: "pippe" },
  { imgUrl: asset_home.produk_13, text: "pippe" },

  { imgUrl: asset_home.produk_5, text: "asahi" },
  { imgUrl: asset_home.produk_7, text: "pippe" },
  { imgUrl: asset_home.produk_3, text: "fittings" },
  { imgUrl: asset_home.produk_9, text: "pippe" },
  { imgUrl: asset_home.produk_4, text: "flanges" },
  { imgUrl: asset_home.produk_2, text: "pipe" },
  { imgUrl: asset_home.produk_12, text: "pippe" },
  { imgUrl: asset_home.produk_10, text: "pippe" },
  { imgUrl: asset_home.produk_11, text: "pippe" },
  { imgUrl: asset_home.produk_15, text: "View all" },
];

export const productAgp = [
  { icon: <IoIosListBox />, text: "PIPE STANDARD" },
  { icon: <IoIosListBox />, text: "FITTINGS STANDARD" },
  { icon: <IoIosListBox />, text: "SNI STEEL" },
  { icon: <IoIosListBox />, text: "STEEL FOR MACHINE STRUCTURAL" },
  { icon: <IoIosListBox />, text: "ASAHI" },
  { icon: <IoIosListBox />, text: "RFQ GUIDE" },
];

export const iconAbout = [
  {
    icon: asset_about.icon_1,
    count: "20,000+",
    text: "Product SKU collections",
  },
  {
    icon: asset_about.icon_2,
    count: "400+",
    text: "Implemented projects in Indonesia",
  },
  {
    icon: asset_about.icon_3,
    count: "8000+",
    text: "Satisfied customers",
  },
];
