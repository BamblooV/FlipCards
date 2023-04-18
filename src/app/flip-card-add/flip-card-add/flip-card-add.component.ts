import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFlipCard } from 'src/shared/models/iflip-card';

@Component({
  selector: 'app-flip-card-add',
  templateUrl: './flip-card-add.component.html',
  styleUrls: ['./flip-card-add.component.css'],
})
export class FlipCardAddComponent {
  @Output()
  add = new EventEmitter<IFlipCard>();

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  get touchedOrDirty(): boolean {
    const name = this.form.get('name');
    const description = this.form.get('description');
    return Boolean(
      name?.dirty || name?.touched || description?.dirty || description?.touched
    );
  }

  addCard(): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    const { name, description } = this.form.value;

    if (this.form.valid && name && description) {
      this.add.emit({ name, description });
      this.form.reset();
    }
  }
}
