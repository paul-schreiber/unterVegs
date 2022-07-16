import { Product, Categories, Labels, ShopIds } from "../types"
import { v4 as uuidv4 } from 'uuid';

export default [
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.BACKWERK,
        "label": Labels.VEGANISIERBAR,
        "categories": [Categories.BACKWARE, Categories.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Fresh Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.MCDONALDS,
        "label": Labels.VEGAN,
        "categories": [Categories.BURGER, Categories.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.BACKWERK,
        "label": Labels.VEGANISIERBAR,
        "categories": [Categories.BACKWARE, Categories.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Fresh Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.MCDONALDS,
        "label": Labels.VEGAN,
        "categories": [Categories.BURGER, Categories.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.BACKWERK,
        "label": Labels.VEGANISIERBAR,
        "categories": [Categories.BACKWARE, Categories.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Fresh Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.MCDONALDS,
        "label": Labels.VEGAN,
        "categories": [Categories.BURGER, Categories.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-9'),
        "shop": ShopIds.BACKWERK,
        "label": Labels.VEGANISIERBAR,
        "categories": [Categories.BACKWARE, Categories.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Fresh Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-14'),
        "shop": ShopIds.MCDONALDS,
        "label": Labels.VEGAN,
        "categories": [Categories.BURGER, Categories.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-3-12'),
        "shop": ShopIds.BACKWERK,
        "label": Labels.VEGANISIERBAR,
        "categories": [Categories.BACKWARE, Categories.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Fresh Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.MCDONALDS,
        "label": Labels.VEGAN,
        "categories": [Categories.BURGER, Categories.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2021-7-12'),
        "shop": ShopIds.BACKWERK,
        "label": Labels.VEGANISIERBAR,
        "categories": [Categories.BACKWARE, Categories.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Fresh Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.MCDONALDS,
        "label": Labels.VEGAN,
        "categories": [Categories.BURGER, Categories.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Fish & Chips",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-12'),
        "shop": ShopIds.NORDSEE,
        "label": Labels.VEGAN,
        "categories": [Categories.FASTFOOD, Categories.VISCH],
        "notes": "Vish"
    },
    {
        "name": "Milchreis",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-14'),
        "shop": ShopIds.DEUTSCHEBAHN,
        "label": Labels.VEGAN,
        "categories": [Categories.SÜSSES],
        "notes": "Leckerer veganer Milchreis - 'für unsere kleinen Gäste'"
    }
] as Product[]