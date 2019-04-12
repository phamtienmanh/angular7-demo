import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuList = [
    {
      name: 'Home',
      router: '/home'
    },
    {
      name: 'FAQ',
      router: '/faq'
    },
    {
      name: 'Claims',
      router: '/claims'
    },
    {
      name: 'Giveback',
      router: '/giveback'
    },
    {
      name: 'Blog',
      router: '/blog'
    },
    {
      name: 'API',
      router: '/api'
    }
  ];
  public isScrolled = false;
  public isShowBtn = false;
  constructor() { }

  ngOnInit() {
  }

}
