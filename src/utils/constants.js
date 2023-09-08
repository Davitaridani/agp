import { asset_home, asset_product } from "../assets/images";
import { asset_about } from "../assets/images";

import {
  assets_product_asahi,
  assets_product_clutch_brake,
  assets_product_plastics,
  assets_product_fittings,
  assets_product_valve,
  assets_product_coupling,
  assets_product_overstock,
  assets_product_pipe,
  assets_product_sealant,
  assets_product_tester_kit,
  assets_product_valves,
  assets_product_hisaka_valve,
  assets_product_welding,
} from "../assets/images/product";

import { IoIosListBox } from "react-icons/io";

export const cardHome = [
  {
    imgUrl: asset_home.produk_1,
    text: "pipe",
    category: "pipe-standard",
  },
  {
    imgUrl: asset_home.produk_6,
    text: "engineering plastics",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_14,
    text: "overstock",
    category: "engineer-pastics",
  },
  { imgUrl: asset_home.produk_8, text: "valves", category: "engineer-pastics" },
  {
    imgUrl: asset_home.produk_13,
    text: "joint sealant",
    category: "engineer-pastics",
  },

  {
    imgUrl: asset_home.produk_5,
    text: "hisaka valve",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_7,
    text: "clutch and brake",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_3,
    text: "flanges",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_9,
    text: "welding",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_4,
    text: "asahi av-japan",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_2,
    text: "fitings",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_12,
    text: "decorative",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_10,
    text: "tester kit",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_11,
    text: "n-eupex coupling",
    category: "engineer-pastics",
  },
  {
    imgUrl: asset_home.produk_15,
    text: "View all",
    category: "/",
  },
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
    id: 1,
    category: "pipe-standard",
    icon: <IoIosListBox />,
    text: "Pipe Standard",
    product: [
      {
        id: 1,
        imgUrl: assets_product_pipe.pipe_1,
        title: "Pipe (Sch638 - Sch6334)",
      },
      {
        id: 2,
        imgUrl: assets_product_pipe.pipe_2,
        title: "Pipe (Sch638 - Sch644234)",
      },
      {
        id: 3,
        imgUrl: assets_product_pipe.pipe_3,
        title: "Pipe (Sch638 - Sch643425)",
      },
      {
        id: 4,
        imgUrl: assets_product_pipe.pipe_4,
        title: "Pipe (Sch638 - Sch643245)",
      },
      {
        id: 5,
        imgUrl: assets_product_pipe.pipe_5,
        title: "Pipe (Sch638 - Sch633445)",
      },
    ],
  },
  {
    id: 2,
    category: "engineer-pastics",
    icon: <IoIosListBox />,
    text: "engineering pastics",
    product: [
      {
        id: 1,
        imgUrl: assets_product_plastics.plastic_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_plastics.plastic_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_plastics.plastic_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_plastics.plastic_4,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 3,
    category: "fittings",
    icon: <IoIosListBox />,
    text: "fittings",
    product: [
      {
        id: 1,
        imgUrl: assets_product_fittings.fittings_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_fittings.fittings_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_fittings.fittings_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_fittings.fittings_4,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 5,
        imgUrl: assets_product_fittings.fittings_5,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 6,
        imgUrl: assets_product_fittings.fittings_6,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 7,
        imgUrl: assets_product_fittings.fittings_7,
        title: "Fittingsssssss",
      },
    ],
  },
  {
    id: 4,
    category: "flanges",
    icon: <IoIosListBox />,
    text: "flanges",
    product: [],
  },
  {
    id: 5,
    category: "asahi",
    icon: <IoIosListBox />,
    text: "Asahi",
    product: [
      {
        id: 1,
        imgUrl: assets_product_asahi.asahi_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_asahi.asahi_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_asahi.asahi_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_asahi.asahi_4,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 5,
        imgUrl: assets_product_asahi.asahi_5,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 6,
        imgUrl: assets_product_asahi.asahi_6,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 6,
    category: "cluth-brake",
    icon: <IoIosListBox />,
    text: "Cluth and brake",
    product: [
      {
        id: 1,
        imgUrl: assets_product_clutch_brake.cluth_brake_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_clutch_brake.cluth_brake_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_clutch_brake.cluth_brake_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_clutch_brake.cluth_brake_4,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 5,
        imgUrl: assets_product_clutch_brake.cluth_brake_5,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 6,
        imgUrl: assets_product_clutch_brake.cluth_brake_6,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 7,
    category: "valves",
    icon: <IoIosListBox />,
    text: "valves",
    product: [
      {
        id: 1,
        imgUrl: assets_product_valve.hisaka_valve_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_valve.hisaka_valve_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_valve.hisaka_valve_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_valve.hisaka_valve_4,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 8,
    category: "eupex-coupling",
    icon: <IoIosListBox />,
    text: "n-eupex coupling",
    product: [
      {
        id: 1,
        imgUrl: assets_product_coupling.coupling_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_coupling.coupling_2,
        title: "Fittings (Sch222 - Sch645)",
      },
    ],
  },
  {
    id: 9,
    category: "valves",
    icon: <IoIosListBox />,
    text: "valves",
    product: [
      {
        id: 1,
        imgUrl: assets_product_overstock.overstock_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_overstock.overstock_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_overstock.overstock_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_overstock.overstock_4,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 5,
        imgUrl: assets_product_overstock.overstock_5,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 6,
        imgUrl: assets_product_overstock.overstock_6,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 10,
    category: "hisaka-valve",
    icon: <IoIosListBox />,
    text: "hisaka valve",
    product: [
      {
        id: 1,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 11,
    category: "valves",
    icon: <IoIosListBox />,
    text: "valves",
    product: [
      {
        id: 1,
        imgUrl: assets_product_valves.valves_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_valves.valves_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_valves.valves_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_valves.valves_4,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 5,
        imgUrl: assets_product_valves.valves_5,
        title: "Fittings (Sch638 - Sch645)",
      },
      {
        id: 6,
        imgUrl: assets_product_valves.valves_6,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 12,
    category: "testerkit",
    icon: <IoIosListBox />,
    text: "tester kit",
    product: [
      {
        id: 1,
        imgUrl: assets_product_tester_kit.tester_kit_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_tester_kit.tester_kit_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_tester_kit.tester_kit_3,
        title: "Fittings (Sch333 - Sch645)",
      },
    ],
  },
  {
    id: 13,
    category: "welding",
    icon: <IoIosListBox />,
    text: "welding",
    product: [
      {
        id: 1,
        imgUrl: assets_product_welding.welding_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_welding.welding_2,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_welding.welding_3,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_welding.welding_4,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
  {
    id: 14,
    category: "sealant",
    icon: <IoIosListBox />,
    text: "sealant",
    product: [
      {
        id: 1,
        imgUrl: assets_product_sealant.sealant_1,
        title: "Fittings (Sch111- Sch111)",
      },
    ],
  },
  {
    id: 15,
    category: "hisaka-valve",
    icon: <IoIosListBox />,
    text: "hisaka valve",
    product: [
      {
        id: 1,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch111- Sch111)",
      },
      {
        id: 2,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch222 - Sch645)",
      },
      {
        id: 3,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch333 - Sch645)",
      },
      {
        id: 4,
        imgUrl: assets_product_hisaka_valve.hisaka_valve_1,
        title: "Fittings (Sch638 - Sch645)",
      },
    ],
  },
];
