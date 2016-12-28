import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos: any[];

  constructor(private infoService: InfoService) {
    this.photos = [];
  }

  ngOnInit() {
    this.infoService.getPhotos()
      .subscribe(res => {
        console.log(res);
        this.photos = res.result.photos;
      });
  }

}
