export type Product = {
    name: string;
    id: string;
    author: string;
    shop: ShopIds;
    categories: CategoryIds[];
    label: LabelIds;
    created: string;
    lastEdited: string;
    isSeasonal: Boolean,
    notes: string;
}

export type Shop = {
    name: string,
    id: ShopIds,
    isLocal: Boolean,
    notes: string,
    imgURL?: string
}

export type Label = {
    name: string,
    shortName: string,
    color: string,
    tooltip: string
}

export type Category = {
    name: string,
    color: string,
}

export enum CategoryIds {
    PASTA = 'PASTA',
    BACKWARE = 'BACKWARE',
    PIZZA = 'PIZZA',
    BURGER = 'BURGER',
    SALAT = 'SALAT', 
    VISCH = 'VISCH',
    SNACK = 'SNACK',
    FASTFOOD = 'FASTFOOD',
    SÜSS = 'SÜSS',
    SANDWICH = 'SANDWICH',
    ASIATISCH = 'ASIATISCH',
    SUPPE = 'SUPPE',
    FRÜHSTÜCK = 'FRÜHSTÜCK',
    MEXIKANISCH = 'MEXIKANISCH'
}

export const Categories = {
    [CategoryIds.PASTA]: {
        name: 'PASTA',
        color: '#E96E6C'
    } as Category,
    [CategoryIds.BACKWARE]: {
        name: 'BACKWARE',
        color: '#F6A037'
    } as Category,
    [CategoryIds.PIZZA]: {
        name: 'PIZZA',
        color: '#F1D15A'
    } as Category,
    [CategoryIds.BURGER]: {
        name: 'BURGER',
        color: '#B0D363'
    } as Category,
    [CategoryIds.SALAT]: {
        name: 'SALAT/BOWL',
        color: '#6AAE60'
    } as Category,
    [CategoryIds.VISCH]: {
        name: 'VISCH',
        color: '#87C3BF'
    } as Category,
    [CategoryIds.SNACK]: {
        name: 'SNACK',
        color: '#5F8DB6'
    } as Category,
    [CategoryIds.FASTFOOD]: {
        name: 'FASTFOOD',
        color: '#B07CDD'
    } as Category,
    [CategoryIds.SÜSS]: {
        name: 'SÜSS',
        color: '#D37CA4'
    } as Category,
    [CategoryIds.SANDWICH]: {
        name: 'SANDWICH/WRAP',
        color: '#FFA2AA'
    } as Category,
    [CategoryIds.ASIATISCH]: {
        name: 'ASIATISCH',
        color: '#F6A037'
    } as Category,
    [CategoryIds.SUPPE]: {
        name: 'SUPPE',
        color: '#FFA2AA'
    } as Category,
    [CategoryIds.FRÜHSTÜCK]: {
        name: 'FRÜHSTÜCK',
        color: '#F6A037'
    } as Category,
    [CategoryIds.MEXIKANISCH]: {
        name: 'MEXIKANISCH',
        color: '#F6A037'
    } as Category,
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
    ALEX = 'ALEX',
    BACKFACTORY = 'BAFA',
    BACKWERK = 'BW',
    BARCELONA = 'BAR',
    BLOCKHOUSE = 'BLH',
    BURGERHEART = 'BH',
    BURGERKING = 'BK',
    CALLAPIZZA = 'CAP',
    CHIDOBA = 'CHI',
    CIGKÖFTEM = 'CIKÖ',
    COFFEEFELLOWS = 'CF',
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
    LECROBAG = 'LG',
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
