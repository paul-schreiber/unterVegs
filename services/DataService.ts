import products from '../data/products'
import shops from '../data/shops'
import { Categories, Product, Shop, ShopIds } from '../types'

export class DataService {

    public getAllProducts(): Product[] {
        return products
    }

    public getAllShops(): Shop[] {
        return shops
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

    public getCategoriesByShopId(shopId: ShopIds): Categories[] {
        const products = this.getProductsByShopId(shopId)
        let categories = new Set<Categories>()
        products.forEach(product => product.categories.forEach((category => categories.add(category))))
        return [...categories]
    }

    public filterProducts(searchTerm: string) {
        return this.getAllProducts().filter((product) => {
            const productName = product.name.toLowerCase()
            return productName.includes(searchTerm.toLowerCase())
        })
    }

    public filterShops(searchTerm: string) {
        return this.getAllShops().filter((shop) => {
            const shopName = shop.name.toLowerCase()
            return shopName.includes(searchTerm.toLowerCase())
        })
    }
}