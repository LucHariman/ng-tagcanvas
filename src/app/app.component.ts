import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TagCanvasModule } from 'ng-tagcanvas';
import { TagCanvasOptions } from 'ng-tagcanvas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, TagCanvasModule],
  styles: [
    `
      form {
        max-width: 256px;
        display: flex;
        flex-direction: column;

        input {
          align-self: stretch;
          margin-bottom: 8px;
        }

        button {
          align-self: flex-end;
          min-width: 128px;
        }
      }
    `,
  ],
  template: `
    <form
      [formGroup]="form"
      (submit)="addTag(form.value.tagName, form.value.weight); form.reset()"
    >
      <input type="text" formControlName="tagName" placeholder="Value" />
      <input
        type="number"
        formControlName="weight"
        placeholder="Weight (from 1 to 50)"
      />
      <button type="submit" [disabled]="form.invalid">Add tag</button>
    </form>
    <ng-tag-canvas [options]="textTagCanvasOptions">
      <a ngTag *ngFor="let tag of tags; let i = index" [weight]="tag.weight">{{
        tag.value
      }}</a>
    </ng-tag-canvas>
  `,
})
export class AppComponent {
  readonly form = new UntypedFormGroup({
    tagName: new UntypedFormControl('', Validators.required),
    weight: new UntypedFormControl(undefined, [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
  });

  tags: { value: string; weight: number }[] = [
    { value: 'Go', weight: 20 },
    { value: 'Typescript', weight: 45 },
    { value: 'Java', weight: 25 },
    { value: 'Python', weight: 30 },
    { value: 'Rust', weight: 40 },
  ];

  textTagCanvasOptions: TagCanvasOptions = {
    dragControl: true,
    clickToFront: 500,
    initial: [0.1, 0],
    textColour: null,
    weight: true,
  };

  addTag(value: string, weight: number) {
    this.tags.push({ value, weight });
  }
}
