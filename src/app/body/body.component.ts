import { AfterViewInit, Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setFontSize();
  }

  @HostListener('window:resize', ['$event'])
  setFontSize() {
    const windowWidth = window.innerWidth;
    const minFontSize = 40;
    const maxFontSize = 62.5;
    const magicNumber = 30.72;
    
    let fontSize = windowWidth / magicNumber;
    fontSize = Math.max(fontSize, minFontSize);
    fontSize = Math.min(fontSize, maxFontSize);
    
    document.documentElement.style.fontSize = `${fontSize}%`;
  }
}
