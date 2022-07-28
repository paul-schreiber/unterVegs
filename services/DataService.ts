import products from '../data/products'
import shops from '../data/shops'
import { CategoryIds, Product, Shop, ShopIds } from '../types'

export class DataService {

    public getAllProducts(): Product[] {
        return products.sort((a,b) => a.name.localeCompare(b.name))
    }

    public getAllShops(): Shop[] {
        return shops.sort((a,b) => a.name.localeCompare(b.name))
    }

    public getProductById(productId: String): Product {
        return this.getAllProducts().find(product => product.id === productId)
    }

    public getShopById(shopId: ShopIds): Shop {
        return this.getAllShops().find(shop => shop.id === shopId)
    }

    public getProductsByShopId(shopId: ShopIds): Product[] {
        return this.getAllProducts().filter(product => product.shop === shopId)
    }

    public getCategoriesByShopId(shopId: ShopIds): CategoryIds[] {
        const products = this.getProductsByShopId(shopId)
        let categories = new Set<CategoryIds>()
        products.forEach(product => product.categories.forEach((category => categories.add(category))))
        return [...categories]
    }

    public filterProducts(searchTerm: string, filters: CategoryIds[]) {
        return this.getAllProducts().filter((product) => {
            const productName = product.name.toLowerCase()
            const hasMatchedSearchTerm = productName.includes(searchTerm.toLowerCase())
            const hasCategory = filters.length ? filters.some(filterCategory => product.categories.includes(filterCategory)) : true
            return hasMatchedSearchTerm && hasCategory
        })
    }

    public filterShops(searchTerm: string, filters: CategoryIds[]) {
        return this.getAllShops().filter((shop) => {
            const shopName = shop.name.toLowerCase()
            const hasMatchedSearchTerm = shopName.includes(searchTerm.toLowerCase())
            const hasCategory = filters.length ? filters.some(filterCategory => this.getCategoriesByShopId(shop.id).includes(filterCategory)) : true
            return hasMatchedSearchTerm && hasCategory
        })
    }
}