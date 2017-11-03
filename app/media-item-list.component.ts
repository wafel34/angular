import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
    selector: 'mw-media-item-list',
    templateUrl: './app/media-item-list.component.html',
    styleUrls: ['./app/media-item-list.component.css'],
    inputs: ['mediaItem']
})

export class mediaItemList {

    constructor(private mediaItemService: MediaItemService) {
        this.mediaItems = this.mediaItemService.get();
    }

    onMediaItemDelete(mediaItem) {
        this.mediaItemService.delete(mediaItem);
    }

}
