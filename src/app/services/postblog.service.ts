import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { PostBlog } from '../models/postblog.model';
import { environment } from 'environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  dataChange: BehaviorSubject<PostBlog[]> = new BehaviorSubject<PostBlog[]>([]);
  dialogData: any;
  array = [];
  constructor (private httpClient: HttpClient) {
    //   this.httpClient.get<PostBlog[]>(environment.apiBaseUrl + '/post/create').subscribe(data => {
    //   this.array = data;
    //   this.dataChange.next(data);
    // });
  }

  addPostBlog (post: PostBlog) {
    this.dialogData = post;
    return this.httpClient.post(environment.apiBaseUrl + '/post/create', post);
  }
}
