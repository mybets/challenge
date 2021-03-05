import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Feature {
    icon: string;
    description: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    lockIcon = faLock;
    plusIcon = faPlus;

    features$: Observable<Array<Feature>>;

    constructor(private readonly http: HttpClient) {}

    ngOnInit(): void {
        this.features$ = this.http.get<Array<Feature>>(`${environment.baseUrl}/features`);
    }
}
