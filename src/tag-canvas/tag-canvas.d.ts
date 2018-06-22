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

declare interface TagCanvasOptions {
    activeCursor?: string;
    animTiming?: string;
    bgColour?: string;
    bgOutline?: string;
    bgOutlineThickness?: number;
    bgRadius?: number;
    centreFunc?: Function;
    centreImage?: string;
    clickToFront?: number;
    decel?: number;
    depth?: number;
    dragControl?: boolean;
    dragThreshold?: number;
    fadeIn?: number;
    freezeActive?: boolean;
    freezeDecel?: boolean;
    frontSelect?: boolean;
    hideTags?: boolean;
    imageAlign?: 'centre' | 'left' | 'right';
    imageMode?: null | 'image' | 'text' | 'both';
    imagePadding?: number;
    imagePosition?: 'left' | 'right' | 'top' | 'bottom';
    imageRadius?: number;
    imageScale?: number;
    imageVAlign?: 'middle' | 'top' | 'bottom';
    initial?: null | [ number, number ];
    interval?: number;
    lock?: null | 'x' | 'y' | 'xy';
    maxBrightness?: number;
    maxSpeed?: number;
    minBrightness?: number;
    minSpeed?: number;
    minTags?: boolean;
    noMouse?: boolean;
    noSelect?: boolean;
    noTagsMessage?: boolean;
    offsetX?: number;
    offsetY?: number;
    outlineColour?: string;
    outlineDash?: number;
    outlineDashSpace?: number;
    outlineDashSpeed?: number;
    outlineIncrease?: number;
    outlineMethod?: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none';
    outlineOffset?: number;
    outlineRadius?: number;
    outlineThickness?: number;
    padding?: number;
    pinchZoom?: boolean;
    pulsateTime?: number;
    pulsateTo?: number;
    radiusX?: number;
    radiusY?: number;
    radiusZ?: number;
    repeatTags?: boolean;
    reverse?: boolean;
    scrollPause?: number;
    shadow?: string;
    shadowBlur?: number;
    shadowOffset?: Array<number>;
    shape?: 'sphere' | 'hcynlinder' | 'vcylinder' | 'hring' | 'vring';
    shuffleTags?: boolean;
    splitWidth?: number;
    stretchX?: number;
    stretchY?: number;
    textAlign?: 'centre' | 'left' | 'right';
    textColour?: string;
    textFont?: string;
    textHeight?: number;
    textVAlign?: 'middle' | 'top' | 'bottom';
    tooltip?: null | 'native' | 'div';
    tooltipClass?: string;
    tooltipDelay?: number;
    txtOpt?: boolean;
    txtScale?: number;
    weight?: boolean;
    weightFrom?: string;
    weightGradient?: any;
    weightMode?: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline';
    weightSize?: number;
    weightSizeMax?: number;
    weightSizeMin?: number;
    wheelZoom?: boolean;
    zoom?: number;
    zoomMax?: number;
    zoomMin?: number;
    zoomStep?: number;
}
