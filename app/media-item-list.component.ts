import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
    selector: 'mw-media-item-list',
    templateUrl: './app/media-item-list.component.html',
    styleUrls: ['./app/media-item-list.component.css'],
    inputs: ['mediaItem']
})

export class mediaItemList {
    mediaItems;
    constructor(private mediaItemService: MediaItemService) {}

    ngOnInit(){
        this.mediaItems = this.mediaItemService.get()
            .subscribe((mediaItems) => {
                this.mediaItems = mediaItems;
            });
    }

    onMediaItemDelete(mediaItem) {
        this.mediaItemService.delete(mediaItem);
    }

}
