import { TagCanvasOptions } from './tag-canvas-options';

export interface TagCanvas extends TagCanvasOptions {
  Start: (
    canvasId: string,
    tagListId: string,
    options?: TagCanvasOptions
  ) => void;

  Pause: (canvasId: string) => void;

  Resume: (canvasId: string) => void;

  Reload: (canvasId: string) => void;

  Update: (canvasId: string) => void;

  TagToFront: (
    canvasId: string,
    options: {
      id?: string;
      index?: number;
      text?: string;
      time?: number;
      callback: () => any;
      active?: boolean;
    }
  ) => void;

  RotateTag: (
    canvasId: string,
    options: {
      id?: string;
      index?: number;
      text?: string;
      time?: number;
      callback: () => any;
      active?: boolean;
      lat: number;
      lng: number;
    }
  ) => void;

  SetSpeed: (
    canvasId: string,
    speed: [number] | [number, number]
  ) => void;

  Delete: (canvasId: string) => void;
}
