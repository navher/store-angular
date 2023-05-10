export interface IProduct {
    id: number;
    name: string;
    price: number;
    discountPrice:number;
    favorite: boolean;
    image: string;
    sizes?: string[];
    categoryId?: number;
}