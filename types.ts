export type Item = {
    name: string;
    id: string;
    author: string;
    company: string;
    badges: Badges[];
    label: Labels;
    lastEdited: Date;
    notes: string;
}

export enum Badges {
    BURGER = 'BURGER',
    PIZZA = 'PIZZA',
    BACKWARE = 'BACKWARE',
    SNACK = 'SNACK',
    FASTFOOD = 'FASTFOOD'
}

export enum Labels {
    VEGAN = 'VEGAN',
    VEGANISIERBAR = 'VEGANISIERBAR'
}