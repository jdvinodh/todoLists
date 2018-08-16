import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginStatus: any;
    errorMessage: string;
    constructor(
        private router: Router,
        private loginService: LoginService, private route: ActivatedRoute, private dataService: DataService) { }

    // login
    postLogin(model) {
        this.loading = true;
        this.dataService.updateName(this.model.username);
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.loginStatus = data;
                    if (this.loginStatus.token) {
                        this.router.navigate(['todoLists']);
                    }
                    this.loading = false;
                },
                error => { this.errorMessage = <any>error; });

    }

    ngOnInit() {

        this.loginService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}
