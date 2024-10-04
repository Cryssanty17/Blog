import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private uiData: HeaderData = {
    title: 'Sobre nosotros',
    subtitle: 'Estos somos nosotros!',
    thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUZOM_O3V4RsbVF8nMZxyus3yG62XClUcsU8Nrg5KV1-Lsy4LN1cIX4AfvPHoBhpOJTvVdGIxx03yDJpEplFSkjdZ0FhIjot-RiTMv7FrqrIsUzQv-CW3CBjWAIc_-jLa_f3W8UqLBuRo/s1600/508_NAUFRAGIO-1.jpg'
  }

  constructor(private headerService: HeaderService) {
    headerService.uiData.set(this.uiData)
  }

}
