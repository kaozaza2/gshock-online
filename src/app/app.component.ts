import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'หน้าหลัก', url: '/list', icon: 'home' },
    { title: 'เกี่ยวกับ', url: '/about', icon: 'information-circle-outline' }
  ];
  constructor() {}
}
