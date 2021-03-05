import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-primary',
    templateUrl: './button-primary.component.html',
    styleUrls: ['./button-primary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonPrimaryComponent {
    @Input() label: string;
}
