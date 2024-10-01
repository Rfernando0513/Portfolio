import { Component } from '@angular/core';
import { CardLinkComponent } from '../../components/card-link/card-link.component';
import { CardCommonComponent } from "../../components/card-common/card-common.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardLinkComponent, CardCommonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
