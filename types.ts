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
    notes: string,
    badgeColor: string
}

export enum Badges {
    BURGER = 'BURGER',
    PIZZA = 'PIZZA',
    BACKWARE = 'BACKWARE',
    SNACK = 'SNACK',
    FASTFOOD = 'FASTFOOD',
    VISCH = 'VISCH',
    SÜSSES = 'SÜSSES'
}

export const BadgeColors = {
    [Badges.BURGER]: '#CE7C7C',
    [Badges.PIZZA]: '#F78154',
    [Badges.BACKWARE]: '#F7DD72',
    [Badges.SNACK]: '#A99F96',
    [Badges.FASTFOOD]: '#f5bf42',
    [Badges.VISCH]: '#76BED0',
    [Badges.SÜSSES]: '#e483e6',
}

export enum Labels {
    VEGAN = 'VEGAN',
    VEGANISIERBAR = 'VEGANISIERBAR'
}

export const LabelText = {
    [Labels.VEGAN]: {
        content: '🌱',
        tooltip: 'Dieses Gericht ist vegan.'
    },
    [Labels.VEGANISIERBAR]: {
        content: '🧀',
        tooltip: 'Dieses Gericht ist veganisierbar. Klicke hier für weitere Infos!'
    }

}

export enum ShopIds {
    MCDONALDS = 'MCD',
    BURGERKING = 'BK',
    BACKWERK = 'BW',
    NORDSEE = 'NO',
    DEUTSCHEBAHN = 'DB',
    FREDDYFRESH = 'FF',

}
