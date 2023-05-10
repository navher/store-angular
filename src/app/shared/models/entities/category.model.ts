import { ICategory } from "../interfaces/category.interface";

export class Category implements ICategory {
    id: number;
    name: string;
    image: string;
    selected?: boolean;


    constructor(
        id: number,
        name: string,
        image: string,
        selected?: boolean
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.selected = selected || false;
    }

    public getId(): number{
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

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public isSelected(): boolean  {
        return this.selected || false;
    }
    public setSelected(selected: boolean): void {
        this.selected = selected;
    }

}