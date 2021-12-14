import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PostsModel } from 'app/models/postsmodel';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    return this.httpClient.get(environment.apiBaseUrl + '/post');
  }

  getPost (par: number) {
    // console.log('Edit Data ', investor);
    return this.httpClient.get(environment.apiBaseUrl  + '/post/find/' + par);
  }

  deletePost(par: number) {
    return this.httpClient.delete(environment.apiBaseUrl  + '/post/delete/' + par);
  }
}

