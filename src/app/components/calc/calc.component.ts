import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: false,
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {

  calcForm: FormGroup;
  result: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.calcForm = this.formBuilder.group({
      number1: '',
      number2: '',
    });
  }

  onSubmit(): void {
    const number1 = Number(this.calcForm.get('number1')?.value);
    const number2 = Number(this.calcForm.get('number2')?.value);
    this.result = number1 + number2;
  }
}
