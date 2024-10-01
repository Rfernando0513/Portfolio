import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-link',
  standalone: true,
  imports: [],
  templateUrl: './card-link.component.html',
  styleUrl: './card-link.component.scss'
})
export class CardLinkComponent {
  @Input() title!: string;
  @Input() imgSrc!: string;
  @Input() alternativeText!: string;
  @Input() link!: string;


}
