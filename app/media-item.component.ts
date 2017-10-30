import { Component } from '@angular/core';

@Component({
    selector: 'mw-media-item',
    templateUrl: './app/media-item.component.html',
    styleUrls: ['./app/media-item.component.css'],
    inputs: ['mediaItem']
})

export class MediaItemComponent {

    onDelete() {
        console.log('Removed!');
    }
}
