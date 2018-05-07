import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import * as scrollify from 'jquery-scrollify';

$(function() {
  if (window.screen.availWidth > 460) {
    scrollify({
      section: '.panel',
      scrollbars: false,
      before: function(i, panels) {
        const ref = panels[i].attr('data-section-name');

        $('.menu .active').removeClass('active');

        $('.menu')
          .find('a[href="#' + ref + '"]')
          .addClass('active');
      }
    });
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|pt-br/) ? browserLang : 'pt-br');
    translate.use('pt');
  }
}
