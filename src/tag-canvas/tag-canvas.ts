declare class TagCanvas {

    static Start: (canvasId: string, tagListId: string, options?: TagCanvasOptions) => void;

    static Pause: (canvasId: string) => void;

    static Resume: (canvasId: string) => void;

    static Reload: (canvasId: string) => void;

    static Update: (canvasId: string) => void;

    static TagToFront: (canvasId: string, options: {
        id?: string,
        index?: number,
        text?: string,
        time?: number,
        callback: () => any,
        active?: boolean
    }) => void;

    static RotateTag: (canvasId: string, options: {
        id?: string,
        index?: number,
        text?: string,
        time?: number,
        callback: () => any,
        active?: boolean,
        lat: number,
        lng: number
    }) => void;

    static SetSpeed: (canvasId, speed: [ number ] | [ number, number ]) => void;

    static Delete: (canvasId: string) => void;

}
