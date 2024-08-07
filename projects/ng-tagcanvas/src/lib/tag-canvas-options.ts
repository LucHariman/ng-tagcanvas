export interface TagCanvasOptions {
  activeCursor?: 'Smooth' | 'Linear';
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
  initial?: null | [number, number];
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
  shadowOffset?: [number, number];
  shape?: 'sphere' | 'hcynlinder' | 'vcylinder' | 'hring' | 'vring';
  shuffleTags?: boolean;
  splitWidth?: number;
  stretchX?: number;
  stretchY?: number;
  textAlign?: 'centre' | 'left' | 'right';
  textColour?: string | null;
  textFont?: string | null;
  textHeight?: number;
  textVAlign?: 'middle' | 'top' | 'bottom';
  tooltip?: null | 'native' | 'div';
  tooltipClass?: string;
  tooltipDelay?: number;
  txtOpt?: boolean;
  txtScale?: number;
  weight?: boolean;
  weightFrom?: string;
  weightGradient?: WeightGradient | WeightGradient[];
  weightMode?:
    | 'size'
    | 'colour'
    | 'both'
    | 'bgcolour'
    | 'bgoutline'
    | 'outline';
  weightSize?: number;
  weightSizeMax?: number;
  weightSizeMin?: number;
  wheelZoom?: boolean;
  zoom?: number;
  zoomMax?: number;
  zoomMin?: number;
  zoomStep?: number;
}

export type WeightGradient = { [index: number]: string };
