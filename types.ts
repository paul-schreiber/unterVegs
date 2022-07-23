export type Product = {
    name: string;
    id: string;
    author: string;
    shop: ShopIds;
    categories: Categories[];
    label: LabelIds;
    created: Date;
    lastEdited: Date;
    isSeasonal: Boolean,
    notes: string;
}

export type Shop = {
    name: string,
    id: ShopIds,
    isLocal: Boolean,
    notes: string
}

export type Label = {
    name: string,
    shortName: string,
    color: string,
    tooltip: string
}

export enum Categories {
    PASTA = 'PASTA',
    BACKWARE = 'BACKWARE',
    PIZZA = 'PIZZA',
    BURGER = 'BURGER',
    SALAT = 'SALAT', 
    VISCH = 'VISCH',
    SNACK = 'SNACK',
    FASTFOOD = 'FASTFOOD',
    SÜSS = 'SÜSS',
    HERZHAFT = 'HERZHAFT',
}

export const CategorieColor = {
    [Categories.PASTA]: '#E96E6C',
    [Categories.BACKWARE]: '#F6A037',
    [Categories.PIZZA]: '#F1D15A',
    [Categories.BURGER]: '#B0D363',
    [Categories.SALAT]: '#6AAE60',
    [Categories.VISCH]: '#87C3BF',
    [Categories.SNACK]: '#5F8DB6',
    [Categories.FASTFOOD]: '#B07CDD',
    [Categories.SÜSS]: '#D37CA4',
    [Categories.HERZHAFT]: '#FFA2AA',
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
