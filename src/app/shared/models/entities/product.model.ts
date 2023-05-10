import { IProduct } from "../interfaces/product.interface";

export class Product implements IProduct{
    id: number;
    name: string;
    price: number;
    discountPrice:number;
    favorite: boolean;
    image: string;
    sizes?: string[];
    categoryId?: number;

    constructor(
        id: number,
        name: string,
        price: number,
        discountPrice:number,
        favorite: boolean,
        image: string,
        sizes?: string[],
        categoryId?: number,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discountPrice = discountPrice;
        this.favorite = favorite;
        this.image = image;
        this.sizes = sizes;
        this.categoryId = categoryId;
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getDiscountPrice(): number {
        return this.discountPrice;
    }

    public setDiscountPrice(discountPrice: number): void {
        this.discountPrice = discountPrice;
    }

    public isFavorite(): boolean {
        return this.favorite;
    }

    public setFavorite(favorite: boolean): void {
        this.favorite = favorite;
    }
    
    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getSizes(): string[] | undefined {
        return this.sizes;
    }

    public setSizes(sizes: string[]): void {
        this.sizes = sizes;
    }

    public getCategoryId(): number | undefined {
        return this.categoryId;
    }

    public setCategoryId(categoryId: number): void {
        this.categoryId = categoryId;
    }

}