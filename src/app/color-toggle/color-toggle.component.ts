import { Component } from '@angular/core';

@Component({
  selector: 'app-color-toggle',
  templateUrl: './color-toggle.component.html',
  styleUrls: ['./color-toggle.component.css']
})
export class ColorToggleComponent {
  isDarkMode = false;

  toggleColorMode() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);

    let themeAttributeElements = document.querySelectorAll("[data-bs-theme]");
    if(themeAttributeElements.length > 0){
      for(var i = 0; i < themeAttributeElements.length; i++) {
        themeAttributeElements[i].setAttribute("data-bs-theme", theme);
      }
    }
  }
}
