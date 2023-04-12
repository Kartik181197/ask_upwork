import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sangha',
  templateUrl: './sangha.component.html',
  styleUrls: ['./sangha.component.css']
})
export class SanghaComponent implements OnInit {
  isUnchanged: string | null = "light";

  ngOnInit() : void {
    if(document.getElementsByTagName("html")[0].hasAttribute("data-bs-theme")) {
      this.isUnchanged = document.getElementsByTagName("html")[0].getAttribute("data-bs-theme");
    }
  }
}
