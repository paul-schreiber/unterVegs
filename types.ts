export type Product = {
    name: string;
    id: string;
    author: string;
    shop: ShopIds;
    categories: Categories[];
    label: LabelIds;
    created: Date;
    lastEdited: Date;
    notes: string;
}

export type Shop = {
    name: string,
    id: ShopIds,
    notes: string,
    badgeColor: string
}

export type Label = {
    name: string,
    shortName: string,
    color: string,
    tooltip: string
}

export enum Categories {
    BURGER = 'BURGER',
    PIZZA = 'PIZZA',
    BACKWARE = 'BACKWARE',
    SNACK = 'SNACK',
    FASTFOOD = 'FASTFOOD',
    VISCH = 'VISCH',
    SÜSSES = 'SÜSSES',
    SALAT = 'SALAT'
}

export const CategorieColor = {
    [Categories.BURGER]: '#CE7C7C',
    [Categories.PIZZA]: '#F78154',
    [Categories.BACKWARE]: '#F7DD72',
    [Categories.SNACK]: '#A99F96',
    [Categories.FASTFOOD]: '#f5bf42',
    [Categories.VISCH]: '#76BED0',
    [Categories.SÜSSES]: '#e483e6',
}

export enum LabelIds {
    VEGAN = 'VEGAN',
    VEGANISIERBAR = 'VEGANISIERBAR'
}

export const Labels = {
    [LabelIds.VEGAN]: {
        name: 'VEGAN',
        shortName: 'V',
        color: '#226600',
        tooltip: 'Dieses Gericht ist vegan.'
    } as Label,
    [LabelIds.VEGANISIERBAR]: {
        name: 'VEGANISIERBAR',
        shortName: 'VB',
        color: '#6eb54a',
        tooltip: 'Dieses Gericht ist veganisierbar. Klicke hier für weitere Infos!'
    } as Label

}

export enum ShopIds {
    ASIAGOURMET = 'AG',
    BACKFACTORY = 'BAFA',
    BACKWERK = 'BW',
    BARCELONA = 'BAR',
    BLOCKHOUSE = 'BLH',
    BURGERHEART = 'BH',
    BURGERKING = 'BK',
    CALLAPIZZA = 'CAP',
    CHIDOBA = 'CHI',
    CIGKÖFTEM = 'CIKÖ',
    DEUTSCHEBAHN = 'DB',
    DEANDAVID = 'DEDA',
    DITSCH = 'DI',
    DOMINOSPIZZA = 'DOM',
    DUNKINDONUTS = 'DUDO',
    EDELBEISSER = 'EDBE',
    FREDDYFRESH = 'FF',
    FRITTENWERK = 'FW',
    GREGORYS = 'GREG',
    HANSIMGLÜCK = 'HIG',
    IMMERGRÜN = 'IG',
    JIMBLOCK = 'JB',
    KAISERBIOBÄCKEREI = 'KBIO',
    KAMPS = 'KA',
    LECROBAC = 'LC',
    LOSTERIA = 'LOS',
    MCDONALDS = 'MCD',
    MOSCHMOSCH = 'MOMO',
    NORDSEE = 'NOSE',
    PAPAJOHNS = 'PAJO',
    PETERPANE = 'PEPA',
    PIZZAHELDEN = 'PIHE',
    PIZZAHUT = 'PIHU',
    ROYALDONUTS = 'RODO',
    SAUSALITOS = 'SAUSA',
    SCOOM = 'SCO',
    STARBUCKS = 'STA',
    SUBWAY = 'SUB',
    SUHICIRCLE = 'SUCI',
    VAPIANO = 'VAP',
    WONDERWAFFEL = 'WOWA',
    WORLDOFPIZZA = 'WOP',
}
