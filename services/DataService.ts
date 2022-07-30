import productsJSON from '../data/products'
import shopsJSON from '../data/shops'
import type { CategoryIds, Product, Shop, ShopIds } from '../types'
import { Categories } from '../types';

export class DataService {

    private products: Product[];
    private shops: Shop[];

    constructor() {
        this.products = productsJSON.sort((a,b) => a.name.localeCompare(b.name))
        this.shops = shopsJSON.sort((a,b) => a.name.localeCompare(b.name))

        this.products.forEach(product => {
            product.id = `${product.shop.replace(/\s/g,'')}-${product.name.replace(/\s/g,'')}`
        })
    }

    public getAllProducts(): Product[] {
        return this.products
    }
    public getAllShops(): Shop[] {
        return this.shops
    }

    public getProductById(productId: String): Product {
        return this.products.find(product => product.id === productId)
    }

    public getShopById(shopId: ShopIds): Shop {
        return this.shops.find(shop => shop.id === shopId)
    }

    public getProductsByShopId(shopId: ShopIds): Product[] {
        return this.products.filter(product => product.shop === shopId)
    }

    public getCategoriesByShopId(shopId: ShopIds): CategoryIds[] {
        const products = this.getProductsByShopId(shopId)
        let categories = new Set<CategoryIds>()
        products.forEach(product => product.categories.forEach((category => categories.add(category))))
        return [...categories]
    }

    public filterProducts(searchTerm: string, filters: CategoryIds[]) {
        return this.products.filter((product) => {
            const productName = product.name.toLowerCase()
            const hasMatchedSearchTerm = productName.includes(searchTerm.toLowerCase())
            const hasCategory = filters.length ? filters.some(filterCategory => product.categories.includes(filterCategory)) : true
            return hasMatchedSearchTerm && hasCategory
        })
    }

    public filterShops(searchTerm: string, filters: CategoryIds[]) {
        return this.shops.filter((shop) => {
            const shopName = shop.name.toLowerCase()
            const hasMatchedSearchTerm = shopName.includes(searchTerm.toLowerCase())
            const hasCategory = filters.length ? filters.some(filterCategory => this.getCategoriesByShopId(shop.id).includes(filterCategory)) : true
            return hasMatchedSearchTerm && hasCategory
        })
    }
}