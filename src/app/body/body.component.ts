import { AfterViewInit, Component } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setFontSize();
  }

  setFontSize() {
    let res: number = window.innerWidth / 30.72;
    res = Math.max(res, 40);
    document.documentElement.style.fontSize = `${res}%`;
  }
}
