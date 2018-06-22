export class Tag {
    
    text: string;

    constructor(init?: Partial<Tag>) {
        Object.assign(this, init);
    }

}