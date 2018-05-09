import { Component, OnInit } from '@angular/core';
import SweetScroll from 'sweet-scroll';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function($) {
      "use strict"; // Start of use strict   
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').hide;
      });   
      // Collapse Navbar
      var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      }; 
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);    
    })(jQuery); // End of use strict    
    document.addEventListener('DOMContentLoaded', () => {
      const scroller = new SweetScroll({/* some options */});
    }, false);

    }  
    
}
