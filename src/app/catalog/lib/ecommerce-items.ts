import { Filter, FilterTypeEnum } from "../types/filters-types";

const ecommerceItems: Filter[] = [
  {
    type: FilterTypeEnum.PriceRange,
    title: "Стоимость",
    range: {
      min: 0,
      defaultValue: [100, 500],
      max: 2000,
      step: 1,
    },
  },
  {
    type: FilterTypeEnum.TagGroup,
    title: "Размер",
    options: [
      {
        title: "35",
        value: "35",
      },
      {
        title: "36",
        value: "36",
      },
      {
        title: "37",
        value: "37",
      },
      {
        title: "38",
        value: "38",
      },
      {
        title: "39",
        value: "39",
      },
      {
        title: "40",
        value: "40",
      },
      {
        title: "41",
        value: "41",
      },
      {
        title: "42",
        value: "42",
      },
      {
        title: "43",
        value: "43",
      },
      {
        title: "44",
        value: "44",
      },
      {
        title: "45",
        value: "45",
      },
      {
        title: "46",
        value: "46",
      },
    ],
  },
  {
    type: FilterTypeEnum.Color,
    title: "Цвет",
    options: [
      {
        title: "Чёрный",
        value: "black",
        color: "#000000",
      },
      {
        title: "Белый",
        value: "white",
        color: "#ffffff",
      },
      {
        title: "Серый",
        value: "gray",
        color: "#3F3F46",
      },
      {
        title: "Красный",
        value: "red",
        color: "#F31260",
      },
      {
        title: "Синий",
        value: "blue",
        color: "#006FEE",
      },
      {
        title: "Зелёный",
        value: "green",
        color: "#17C964",
      },
      {
        title: "Желтый",
        value: "yellow",
        color: "#F5A524",
      },
    ],
  },
  {
    type: FilterTypeEnum.CheckboxGroup,
    title: "Категория",
    options: [
      {
        title: "Sneakers",
        value: "sneakers",
      },
      {
        title: "Boots",
        value: "boots",
      },
      {
        title: "Sandals",
        value: "sandals",
      },
      {
        title: "Slippers",
        value: "slippers",
      },
      {
        title: "Basketball",
        value: "basketball",
      },
      {
        title: "Running",
        value: "running",
      },
      {
        title: "Football",
        value: "football",
      },
      {
        title: "Paddle",
        value: "paddle",
      },
      {
        title: "Tennis",
        value: "tennis",
      },
      {
        title: "Golf",
        value: "golf",
      },
    ],
  },
  {
    type: FilterTypeEnum.CheckboxGroup,
    title: "Пол",
    defaultOpen: true,
    options: [
      {
        title: "Женский",
        value: "women",
      },
      {
        title: "Мужской",
        value: "men",
      },
      {
        title: "Детский",
        value: "kids",
      },
      {
        title: "Унисекс",
        value: "unisex",
      },
    ],
  },
  {
    type: FilterTypeEnum.CheckboxGroup,
    title: "Бренд",
    defaultOpen: true,
    options: [
      {
        title: "Nike",
        value: "nike",
      },
      {
        title: "Adidas",
        value: "adidas",
      },
      {
        title: "Puma",
        value: "puma",
      },
      {
        title: "Reebok",
        value: "reebok",
      },
      {
        title: "Vans",
        value: "vans",
      },
      {
        title: "New Balance",
        value: "new_balance",
      },
      {
        title: "Converse",
        value: "converse",
      },
      {
        title: "Asics",
        value: "asics",
      },
      {
        title: "Under Armour",
        value: "under_armour",
      },
      {
        title: "Jordan",
        value: "jordan",
      },
    ],
  },
];

export default ecommerceItems;
