import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent {
  jeffsForm = new FormGroup({
    control1: new FormControl('control1', [Validators.required]),
    control2: new FormControl('control2', [Validators.required]),
    control3: new FormControl('control3', [Validators.required])
  });
}
