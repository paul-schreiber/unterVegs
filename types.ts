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
    sequenceNumber: number
}

export type DonationIdea = {
    name: string,
    description: string,
    amount: number,
    img?: string
}

export enum CategoryIds {
    PASTA = 'PASTA',
    MEXIKANISCH = 'MEXIKANISCH',
    BACKWARE = 'BACKWARE',
    PIZZA = 'PIZZA',
    ASIATISCH = 'ASIATISCH',
    BURGER = 'BURGER',
    SALAT = 'SALAT', 
    SUPPE = 'SUPPE',
    VISCH = 'VISCH',
    SNACK = 'SNACK',
    FASTFOOD = 'FASTFOOD',
    SANDWICH = 'SANDWICH',
    SÜSS = 'SÜSS',
    FRÜHSTÜCK = 'FRÜHSTÜCK'
}

export const Categories = {
    [CategoryIds.PASTA]: {
        name: 'PASTA',
        color: '#E96E6C',
        sequenceNumber: 1
    } as Category,
    [CategoryIds.MEXIKANISCH]: {
        name: 'MEXIKANISCH',
        color: '#E87A52',
        sequenceNumber: 2
    } as Category,
    [CategoryIds.BACKWARE]: {
        name: 'BACKWARE',
        color: '#F6A037',
        sequenceNumber: 3
    } as Category,
    [CategoryIds.PIZZA]: {
        name: 'PIZZA',
        color: '#F1D15A',
        sequenceNumber: 4
    } as Category,
    [CategoryIds.ASIATISCH]: {
        name: 'ASIATISCH',
        color: '#D3CA63',
        sequenceNumber: 5
    } as Category,
    [CategoryIds.BURGER]: {
        name: 'BURGER',
        color: '#B0D363',
        sequenceNumber: 6
    } as Category,
    [CategoryIds.SALAT]: {
        name: 'SALAT/BOWL',
        color: '#6AAE60',
        sequenceNumber: 7
    } as Category,
    [CategoryIds.SUPPE]: {
        name: 'SUPPE',
        color: '#6AC18F',
        sequenceNumber: 8
    } as Category,
    [CategoryIds.VISCH]: {
        name: 'VISCH',
        color: '#87C3BF',
        sequenceNumber: 9
    } as Category,
    [CategoryIds.SNACK]: {
        name: 'SNACK',
        color: '#5F8DB6',
        sequenceNumber: 10
    } as Category,
    [CategoryIds.FASTFOOD]: {
        name: 'FASTFOOD',
        color: '#6B6FDB',
        sequenceNumber: 11
    } as Category,
    [CategoryIds.SANDWICH]: {
        name: 'SANDWICH/WRAP',
        color: '#9F6EC9',
        sequenceNumber: 12
    } as Category,
    [CategoryIds.SÜSS]: {
        name: 'SÜSS',
        color: '#D37CA4',
        sequenceNumber: 13
    } as Category,
    [CategoryIds.FRÜHSTÜCK]: {
        name: 'FRÜHSTÜCK',
        color: '#FFA2A2',
        sequenceNumber: 14
    } as Category
}

export enum LabelIds {
    VEGAN = 'VEGAN',
    VEGANISIERBAR = 'VEGANISIERBAR'
}

export const Labels = {
    [LabelIds.VEGAN]: {
        name: 'VEGAN',
        shortName: 'VE',
        color: '#267200',
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
    BRAMMIBALS = 'BRA',
    BURGERHEART = 'BH',
    BURGERKING = 'BK',
    BURGERME = 'BM',
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
    ESPRESSOHOUSE = 'ESP',
    FREDDYFRESH = 'FF',
    FRITTENWERK = 'FW',
    HAFERKATER = 'HK',
    HANSIMGLÜCK = 'HIG',
    IKEA = 'Ikea', 
    IMMERGRÜN = 'IG',
    JIMBLOCK = 'JB',
    KAISERBIOBÄCKEREI = 'KBIO',
    KAMPS = 'KA',
    LECROBAG = 'LG',
    LOSTERIA = 'LOS',
    MCDONALDS = 'MCD',
    MISHBA = 'MI',
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
    WAFFLEBROTHERS = 'WB',
    WONDERWAFFEL = 'WOWA',
    WORLDOFPIZZA = 'WOP',
    YORMAS = 'YOR',
    ZEITFÜRBROT = 'ZFB'
}
