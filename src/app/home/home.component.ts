import {Component, OnInit, ViewEncapsulation, OnDestroy, HostListener, ElementRef, ViewChild} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private elRef: ElementRef) { }
  @ViewChild(HeaderComponent) appHeader;
  @ViewChild('priceBtn') priceBtn;
  @HostListener("window:scroll", ['$event']) onWindowScroll(event: any) {
    if (window.pageYOffset > 0) {
      // if scroll
      this.appHeader.isScrolled = true;
      if (this.priceBtn._elementRef.nativeElement.getBoundingClientRect().top < 0) {
        // if the price btn is scrolled up over the header
        this.appHeader.isShowBtn = true;
      } else {
        this.appHeader.isShowBtn = false;
      }
    } else {
      this.appHeader.isScrolled = false;
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
