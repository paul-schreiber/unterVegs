import productsJSON from '../data/products'
import shopsJSON from '../data/shops'
import type { CategoryIds, Product, Shop, ShopIds } from '../types'
import { Categories } from '../types';
import calculateLevenshteinDistance from 'js-levenshtein';

export class DataService {

    private products: Product[];
    private shops: Shop[];

    constructor() {
        this.products = productsJSON.sort((a, b) => a.name.localeCompare(b.name))
        this.shops = shopsJSON.sort((a, b) => a.name.localeCompare(b.name))

        //generate id's
        this.products.forEach(product => {
            product.id = `${product.shop.replace(/\s/g, '')}-${product.name.replace(/\s/g, '')}`
            this.sortCategories(product.categories)
        })
    }

    public getAllProducts(): Product[] {
        return this.products
    }

    public getAllShops(): Shop[] {
        return this.shops
    }

    public getProductById(productId: String): Product {
        return this.products.find(product => product.id.toLocaleLowerCase() === productId.toLocaleLowerCase())
    }

    public getShopById(shopId: ShopIds): Shop {
        return this.shops.find(shop => shop.id.toLocaleLowerCase() === shopId.toLocaleLowerCase())
    }

    public getProductsByShopId(shopId: ShopIds): Product[] {
        return this.products.filter(product => product.shop.toLocaleLowerCase() === shopId.toLocaleLowerCase())
    }

    public getCategoriesByShopId(shopId: ShopIds): CategoryIds[] {
        const products = this.getProductsByShopId(shopId)
        let categories = new Set<CategoryIds>()
        products.forEach(product => product.categories.forEach((category => categories.add(category))))
        const categoryArray = [...categories]
        this.sortCategories(categoryArray)
        return categoryArray
    }

    public filterProducts(searchTerm: string, filters: CategoryIds[]): Product[] {
        return this.products.filter((product) => {
            const hasMatchedSearchTerm = this.matchesSearchTerm(product.name, searchTerm)
            const hasCategory = this.productMatchesCategory(product, filters)
            return hasMatchedSearchTerm && hasCategory
        })
    }

    public filterShops(searchTerm: string, filters: CategoryIds[]): Shop[] {
        return this.shops.filter((shop) => {
            const hasMatchedSearchTerm = this.matchesSearchTerm(shop.name, searchTerm)
            const hasCategory = this.shopMatchesCategory(shop, filters)
            return hasMatchedSearchTerm && hasCategory
        })
    }

    private matchesSearchTerm(stringToSearch: string, searchTerm: string): Boolean {
        return stringToSearch.toLowerCase().includes(searchTerm.toLowerCase())
    }

    /*
        Returns true if the shop contains one of the categorys in the array
    */
    private shopMatchesCategory(shop: Shop, categories: CategoryIds[]) {
        return categories.length ? categories.some(filterCategory => this.getCategoriesByShopId(shop.id).includes(filterCategory)) : true
    }

    /*
        Returns true if the product contains one of the categorys in the array
    */
    private productMatchesCategory(product: Product, categories: CategoryIds[]) {
        return categories.length ? categories.some(filterCategory => product.categories.includes(filterCategory)) : true
    }

    public sortCategories(categoryIds: CategoryIds[]) {
        categoryIds.sort((a, b) => Categories[a].sequenceNumber - Categories[b].sequenceNumber)
    }

    public getLevenshteinBasedProductSuggestions(searchTerm: string, filters: CategoryIds[], maxDistance): Product[] {
        return this.products.filter((product) => {
            const lsDistance = calculateLevenshteinDistance(product.name, searchTerm)
            const hasCategory = this.productMatchesCategory(product, filters)
            //filter out exactly matching items
            const hasMatchedSearchTerm = this.matchesSearchTerm(product.name, searchTerm)
            return lsDistance <= maxDistance && hasCategory && !hasMatchedSearchTerm
        })
    }

    public getLevenshteinBasedShopSuggestions(searchTerm: string, filters: CategoryIds[], maxDistance): Shop[] {
        return this.shops.filter((shop) => {
            const lsDistance = calculateLevenshteinDistance(shop.name, searchTerm)
            const hasCategory = this.shopMatchesCategory(shop, filters)

            //filter out exactly matching items
            const hasMatchedSearchTerm = this.matchesSearchTerm(shop.name, searchTerm)
            return lsDistance <= maxDistance && hasCategory && !hasMatchedSearchTerm
        })
    }
}