import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AdminService {
    slectedAdmin: Admin = {
        name: '',
        email: '',
        password: '',
        role: '',
        username: '',
        profilepic: ''
    };

    noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };

    constructor(private http: HttpClient) {}

    postUser(admin: Admin) {
        console.log('Admin.Service = ', environment.apiBaseUrl + '/register',admin);
        return this.http.post(environment.apiBaseUrl + '/register', admin, this.noAuthHeader);
    }

    login(authCredentials) {
        return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    }

    getAdminProfile() {
        return this.http.get(environment.apiBaseUrl + '/adminProfile');

    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    deleteToken() {
        localStorage.removeItem('token');
    }

    getAdminPayload() {
        var token = this.getToken();
        if (token) {
            var adminPayload = atob(token.split('.')[1]);
            return JSON.parse(adminPayload);
        }
        else
        return null; 
    }

    isLoggedIn() {
       var userPayload = this.getAdminPayload(); 
       if (userPayload)
         return userPayload.exp > Date.now() / 1000;
       else
         return false;
    }
}
