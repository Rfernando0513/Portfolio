import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card-common',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './card-common.component.html',
  styleUrl: './card-common.component.scss'
})
export class CardCommonComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() bgColor!: string;
  @Input() subTitleDown: boolean = true;
}
