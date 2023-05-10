import { ITarget } from "../interfaces/target.interface";

export class Target implements ITarget{
    id: number;
    image: string;
    title?: string;

    constructor(
        id: number,
        image: string,
        title?: string
    ) {
        this.id = id;
        this.title = title;
        this.image = image;
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
    
    public getTitle(): string | undefined {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }
}
