import { asset_home, asset_product } from "../assets/images";
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

export const productAgp = [
  {
    id: 1,
    category: "pipe",
    icon: <IoIosListBox />,
    text: "PIPE STANDARD",
  },
  {
    id: 2,
    category: "Fittings",
    icon: <IoIosListBox />,
    text: "FITTINGS STANDARD",
  },
  {
    id: 3,
    category: "Sni",
    icon: <IoIosListBox />,
    text: "SNI STEEL",
  },
  {
    id: 4,
    category: "Stell",
    icon: <IoIosListBox />,
    text: "STEEL FOR MACHINE STRUCTURAL",
  },
  {
    id: 5,
    category: "Asahi",
    icon: <IoIosListBox />,
    text: "ASAHI",
  },
  {
    id: 6,
    category: "Rfq",
    icon: <IoIosListBox />,
    text: "RFQ GUIDE",
  },
];

export const dataProducts = [
  {
    category: "Pipe",
    product: [
      {
        id: 1,
        imgUrl: asset_product.product_1,
        title: "Pipe (Sch638 - Sch645)",
      },
      {
        id: 2,
        imgUrl: asset_product.product_1,
        title: "Pipe (Sch638 - Sch645)",
      },
      {
        id: 3,
        imgUrl: asset_product.product_1,
        title: "Pipe (Sch638 - Sch645)",
      },
      {
        id: 4,
        imgUrl: asset_product.product_1,
        title: "Pipe (Sch638 - Sch645)",
      },
      {
        id: 5,
        imgUrl: asset_product.product_1,
        title: "Pipe (Sch638 - Sch645)",
      },
      {
        id: 6,
        imgUrl: asset_product.product_1,
        title: "Pipe (Sch638 - Sch645)",
      },
    ],
  },
];
