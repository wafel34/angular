import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mw-media-item',
    templateUrl: './app/media-item.component.html',
    styleUrls: ['./app/media-item.component.css'],
    inputs: ['mediaItem']
})

export class MediaItemComponent {
    mediaItem;
    @Output() delete = new EventEmitter();
    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}
