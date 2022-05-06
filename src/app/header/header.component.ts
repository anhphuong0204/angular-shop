import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectFeature =  new EventEmitter<string>();

    onSelect(feature: string) {
        this.selectFeature.emit(feature);
    }
}