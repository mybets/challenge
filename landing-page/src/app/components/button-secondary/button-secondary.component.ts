import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
    selector: 'app-button-secondary',
    templateUrl: './button-secondary.component.html',
    styleUrls: ['./button-secondary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSecondaryComponent {
    @Input() label: string;
    @Input() icon: IconDefinition;
}
