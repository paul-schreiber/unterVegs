import shops from '../data/shops'
import products from '../data/products'
import { replaceSpecialCharacters } from './util'

const shopBaseURL = '/shop'
const productBaseURL = '/product'

const staticRoutes = [
    '/about', '/contact', '/donate', '/legal', '/privacy'
]

export default function generateDynamicRoutes(): string[] {
    const shopRoutes = generateShopRoutes()
    const productRoutes = generateProductRoutes()
    return [...staticRoutes, ...shopRoutes, ...productRoutes]
}

function generateShopRoutes(): string[] {
    return shops.map(shop => {
        return `${shopBaseURL}/${shop.id}`
    })
}

function generateProductRoutes(): string[] {
    return products.map(product => {
        return `${productBaseURL}/${replaceSpecialCharacters(product.shop)}-${replaceSpecialCharacters(product.name)}`
    })
}