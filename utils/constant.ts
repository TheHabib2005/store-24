export const smartPhoneBrandList = [
  {
    id: Math.round(Math.random() * 200),
    name: "apple",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "samsung",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "google-pixel",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "oppo",
    isChecked: false,
  },

  {
    id: Math.round(Math.random() * 200),
    name: "xioami",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "techono",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "infinix",
    isChecked: false,
  },
];

export const productCategories = [
  {
    id: Math.round(Math.random() * 200),
    name: "smartphone",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "laptop",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "t-shirt",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "watch",
    isChecked: false,
  },

  {
    id: Math.round(Math.random() * 200),
    name: "sunglasses",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "skincare product",
    isChecked: false,
  },
  {
    id: Math.round(Math.random() * 200),
    name: "sliders",
    isChecked: false,
  },
];

export const FeturesProductsList = [
  {
    id: 77,
    title: "iphone 15 Pro Max 256GB/512GB/1TB (USA-LL/A) Smartphone Unofficial",
    price: 174990,
    stringPrice: "174,990",
    thumbnail:
      "https://static-01.daraz.com.bd/p/defb4a1f8dd811c6f099a97c90fb2c15.jpg_300x0q75.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "smartphone",
    brand: "apple",
    stock: 19,
    rating: 5,
    discount_parcent: 14,
    quantity: 1,
    images: [
      "https://static-01.daraz.com.bd/p/defb4a1f8dd811c6f099a97c90fb2c15.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/5605fae721d56f4de168d148e5246145.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/a6e70579886ca230ba5a52b25e106659.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/e8109833423ad96707fbc7e69328419f.jpg_750x750.jpg_.webp",
    ],
    reviews: [
      {
        id: Math.round(Math.random() * 100),
        name: "habib",
        avatar:
          "data:image/png;base64,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",
        comment: "this is nice phone",
        rating: 4.5,
      },
      {
        id: Math.round(Math.random() * 100),
        name: "hamida",
        avatar:
          "data:image/jpeg;base64,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",
        comment: "this is nice phone",
        rating: 4.5,
      },
    ],
  },
  {
    id: 91,
    title: "TECNO Spark 20 Pro+ 8GB Ram and 256GB Rom (Official)",
    price: 26790,
    stringPrice: "26,790",
    thumbnail:
      "https://static-01.daraz.com.bd/p/c72eff4542f2b063b29f65dfa981e085.jpg_300x0q75.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "smartphone",
    brand: "techono",
    stock: 25,
    rating: 4.4,
    discount_parcent: 0,
    quantity: 1,
    images: [
      "https://static-01.daraz.com.bd/p/056d63663f76576f57d1484c0e3c7234.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/c72eff4542f2b063b29f65dfa981e085.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/93ee2bcf047d83459d30876c6318f512.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/9cfa060f9fc455521ab48eb75f3172e9.jpg_750x750.jpg_.webp",
    ],
    reviews: [],
  },
  {
    id: 13,
    title: "OPPO A78 Smartphone (8 RAM/256GB ROM)",
    price: 27990,
    stringPrice: "27,990",
    thumbnail:
      "https://static-01.daraz.com.bd/p/7b2d207134db43c2cd6931eb0b666291.jpg_300x0q75.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "smartphone",
    brand: "oppo",
    stock: 11,
    rating: 4.1,
    discount_parcent: 20,
    quantity: 1,
    images: [
      "https://static-01.daraz.com.bd/p/7b2d207134db43c2cd6931eb0b666291.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/d8146a516a4f9924340fc9367b15842f.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/5c50aa9d222cae4145ae2d93bfa1d1fe.jpg_750x750.jpg_.webp",
    ],
    reviews: [],
  },
  {
    id: 81,
    title: "OPPO F21 Pro 5G 8GB/128GB Smartphone",
    price: 34990,
    stringPrice: "34,990",
    thumbnail:
      "https://static-01.daraz.com.bd/p/cc34c91571cece2463f99f1fa9bb8727.jpg_300x0q75.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "smartphone",
    brand: "oppo",
    stock: 4,
    rating: 4.4,
    discount_parcent: 22,
    quantity: 1,
    images: [
      "https://static-01.daraz.com.bd/p/baadb0d5af8b53be071b64fc8f715eca.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/cc34c91571cece2463f99f1fa9bb8727.jpg_750x750.jpg_.webp",
      "https://static-01.daraz.com.bd/p/baadb0d5af8b53be071b64fc8f715eca.jpg_750x750.jpg_.webp",
    ],
    reviews: [],
  },
];
