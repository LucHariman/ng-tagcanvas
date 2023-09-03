import { InjectionToken } from "@angular/core";

import { TagCanvas } from "./tag-canvas";

export const NATIVE_TAGCANVAS = new InjectionToken<TagCanvas>('The vanilla JavaScript TagCanvas object');
