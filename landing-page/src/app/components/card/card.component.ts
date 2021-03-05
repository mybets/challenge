import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnChanges {
    @Input() index: number;
    @Input() description: string;
    @Input() icon: string;

    destaque = false;
    pathIcon: string;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.index) {
            this.destaque = changes.index.currentValue % 2 !== 0;
        }

        if (changes.icon) {
            this.pathIcon = `assets/img/icon-${changes.icon.currentValue}.png`;
        }
    }
}
