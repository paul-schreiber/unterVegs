import shops from '../data/shops'
import products from '../data/products'

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
        return `${productBaseURL}/${product.shop.replace(/\s/g, '')}-${product.name.replace(/\s/g, '')}`
    })
}