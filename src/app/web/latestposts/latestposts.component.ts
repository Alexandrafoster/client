import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/core/auth/token-storage.service';
import { PostBlog } from '../../models/postblog.model';
import { PostblogService } from '../../services/postblog.service';
import {MatDialog} from '@angular/material/dialog';
import {PostblogComponent} from '../postblog/postblog.component';

@Component({
  selector: 'app-latestposts',
  templateUrl: './latestposts.component.html',
  styleUrls: ['./latestposts.component.scss']
})
export class LatestpostsComponent implements OnInit {
public tocen: any;
public data: any;
public lngth: any;
public arr = [];
public i: number= 0;
public env: any = environment.imgUrl;


slideConfig = {
  "slidesToShow": 4,
  "slidesToScroll": 4,
  "dots": true,
  "infinite": false,
  "responsive": [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  constructor(private postsService: PostsService, private router: Router, public tokenStorage: TokenStorageService, public dialog: MatDialog,
    public postblogService: PostblogService) { 
    this.postsService.getAllPosts().subscribe(
      res => {
        this.data = res;
        this.lngth = this.data.length;
        for (this.i = 0; this.i < this.lngth; this.i++) {
          var newitem = [this.data[this.i]];
          this.arr.push(...newitem);
          // console.log (this.arr);
        }
        console.log(this.arr);
      });
  }

  ngOnInit(): void {
    this.tocen = this.tokenStorage.getToken();
  }

  addNew(postblog: PostBlog) {
    const dialogRef = this.dialog.open(PostblogComponent, {
      data: {postblog: postblog}
    });
  }
  
  checkid(val) {
    if (!localStorage.getItem('foo1')) { 
      localStorage.setItem('foo1', val) 
      this.router.navigate(['/post']);
    } else {
      localStorage.removeItem('foo1') 
    }    
  }
}
