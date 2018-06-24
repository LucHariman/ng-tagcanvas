export class Tag {
    
    text: string;

    weight?: number;

    constructor(init?: Partial<Tag>) {
        Object.assign(this, init);
    }

}
