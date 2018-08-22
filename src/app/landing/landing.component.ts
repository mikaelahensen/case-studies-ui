import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../shared/services/contentful/contentful.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  caseStudies: any;

  constructor(
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.contentfulService.getContent()
      .subscribe(
        result => {
          console.log(result[0].items);
          this.caseStudies = result[0].items;
        }
      )
  }

}
