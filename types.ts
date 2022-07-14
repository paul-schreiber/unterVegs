export type Product = {
    name: string;
    id: string;
    author: string;
    shop: ShopIds;
    badges: Badges[];
    label: Labels;
    lastEdited: Date;
    notes: string;
}

export type Shop = {
    name: string,
    id: ShopIds,
    notes: string
}

export enum Badges {
    BURGER = 'BURGER',
    PIZZA = 'PIZZA',
    BACKWARE = 'BACKWARE',
    SNACK = 'SNACK',
    FASTFOOD = 'FASTFOOD',
    VISH = 'VISH'
}

export enum Labels {
    VEGAN = 'VEGAN',
    VEGANISIERBAR = 'VEGANISIERBAR'
}

export enum ShopIds {
    MCDONALDS = 'MCD',
    BURGERKING = 'BK',
    BACKWERK = 'BW',
    NORDSEE = 'NO',
}