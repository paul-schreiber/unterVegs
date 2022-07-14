import { randomUUID } from "crypto"
import { Item, Badges, Labels } from "./types"
import { v4 as uuidv4 } from 'uuid';

export default [
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-12'),
        "company": "Backwerk",
        "label": Labels.VEGANISIERBAR,
        "badges": [Badges.BACKWARE, Badges.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "company": "Mc Donalds",
        "label": Labels.VEGAN,
        "badges": [Badges.BACKWARE, Badges.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-12'),
        "company": "Backwerk",
        "label": Labels.VEGANISIERBAR,
        "badges": [Badges.BACKWARE, Badges.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "company": "Mc Donalds",
        "label": Labels.VEGAN,
        "badges": [Badges.BACKWARE, Badges.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-12'),
        "company": "Backwerk",
        "label": Labels.VEGANISIERBAR,
        "badges": [Badges.BACKWARE, Badges.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "company": "Mc Donalds",
        "label": Labels.VEGAN,
        "badges": [Badges.BACKWARE, Badges.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-7-9'),
        "company": "Backwerk",
        "label": Labels.VEGANISIERBAR,
        "badges": [Badges.BACKWARE, Badges.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-14'),
        "company": "Mc Donalds",
        "label": Labels.VEGAN,
        "badges": [Badges.BACKWARE, Badges.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2022-3-12'),
        "company": "Backwerk",
        "label": Labels.VEGANISIERBAR,
        "badges": [Badges.BACKWARE, Badges.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "company": "Mc Donalds",
        "label": Labels.VEGAN,
        "badges": [Badges.BACKWARE, Badges.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    },
    {
        "name": "Bretzel",
        "id": uuidv4(),
        "author": "Miriam",
        "lastEdited": new Date('2021-7-12'),
        "company": "Backwerk",
        "label": Labels.VEGANISIERBAR,
        "badges": [Badges.BACKWARE, Badges.SNACK],
        "notes": "auch mit Butter erhältlich"
    },
    {
        "name": "Vegan TS",
        "id": uuidv4(),
        "author": "Paul",
        "lastEdited": new Date('2022-7-12'),
        "company": "Mc Donalds",
        "label": Labels.VEGAN,
        "badges": [Badges.BACKWARE, Badges.FASTFOOD],
        "notes": "Burgerpatty gestellt von Nestle"
    }
] as Item[]