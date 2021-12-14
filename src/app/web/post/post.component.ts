import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { environment } from 'environments/environment';
import { formatDate } from "@angular/common";
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/core/auth/token-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private format: any = 'MMM d, y';
  public myDate = '2019-06-29';
  private locale = 'en-US';
  public formatedDate: any;
  public data: any;
  public tocen: any;
  public id1: number;
  public id2: number;
  public env: any = environment.imgUrl;

  constructor(private postsService: PostsService, private router: Router, public tokenStorage: TokenStorageService) { 
    this.id1 = Number(localStorage.getItem('foo1'));
    this.postsService.getPost(this.id1).subscribe( res => {
      this.data = res;
      this.myDate = this.data.createdAt;
      this.formatedDate = formatDate(this.myDate, this.format, this.locale);
      console.log('Data = ', this.data)
    });
    
  }

  ngOnInit(): void {
    this.tocen = this.tokenStorage.getToken();
    console.log('env = ', this.env)
    console.log('Check ID Status', localStorage.getItem('foo1'));
  }

  postdelete() {
    this.id2 = Number(localStorage.getItem('foo1'));
    this.postsService.deletePost(this.id2).subscribe( res => {});
    this.router.navigateByUrl('/latestposts');
  }
}
