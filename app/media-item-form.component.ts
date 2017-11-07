import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: './app/media-item-form.component.html',
    styleUrls: ['./app/media-item-form.component.css']
})

export class MediaItemFormComponent {

    form;

    constructor(
        private formBuilder: FormBuilder,
        private mediaItemService: MediaItemService,
        @Inject(lookupListToken) public lookupLists) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            medium: this.formBuilder.control('Movies'),
            name: this.formBuilder.control('', Validators.compose([
                Validators.pattern('[\\w\\-\\s\\/]+'),
                Validators.required
            ])),
            category: this.formBuilder.control(''),
            year: this.formBuilder.control('', this.yearValidator)
        });
    }

    yearValidator(control) {
        if (control.value.trim().length === 0) {
            return null;
        }
        let year = parseInt(control.value);

        let minYear = 1900;
        let maxYear = 2100;

        if (year >= minYear && year <= maxYear) {
            return null;
        } else {
            return {'year': true};
        }
    }
    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem)
            .subscribe();
    }
}
