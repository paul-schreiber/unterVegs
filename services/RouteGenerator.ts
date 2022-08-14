import shops from '../data/shops'
import products from '../data/products'

const staticRoutes = [
    '/about', '/contact', '/donate', '/legal', '/privacy'
]

export default function generateDynamicRoutes(): string[] {
    return staticRoutes
}