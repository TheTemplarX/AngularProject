import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country',
  standalone: false,
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  @Input() country?: Country;
  @Output() onClick = new EventEmitter<Country>();

  show() {
    this.onClick.emit(this.country);
  }
}
