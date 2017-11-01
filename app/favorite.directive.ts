import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[mwFavorite]',
})

export class FavoriteDirective{
    @HostBinding('class.is-favorite') isFavoirte = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;

    @HostListener('mouseenter') onMouseEnter() {
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.hovering = false;
    }

    @Input() set mwFavorite(value) {
        this.isFavoirte = value;
    }
}
