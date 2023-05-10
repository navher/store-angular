import { ICarousel } from "../interfaces/carousel.interface";

export class Carousel implements ICarousel{
    id: number;
    image: string;
    description?: string;

    constructor(
        id: number,
        image: string,
        description?: string
    ) {
        this.id = id;
        this.image = image;
        this.description = description;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }
    public getDescription(): string | undefined {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }
}