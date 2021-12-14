import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/core/auth/token-storage.service';
import { PostBlog } from '../../models/postblog.model';
import { PostblogService } from '../../services/postblog.service';
import {MatDialog} from '@angular/material/dialog';
import {PostblogComponent} from '../postblog/postblog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
public tocen: any;
// public data: any;
// public lngth: any;
// public arr = [];
// public i: number= 0;
// public env: any = environment.imgUrl;

  constructor(public tokenStorage: TokenStorageService, public dialog: MatDialog,
    public postblogService: PostblogService) { 
    // this.postsService.getAllPosts().subscribe(
    //   res => {
    //     this.data = res;
    //     this.lngth = this.data.length;
    //     for (this.i = 0; this.i < this.lngth; this.i++) {
    //       var newitem = [this.data[this.i]];
    //       this.arr.push(...newitem);
    //       // console.log (this.arr);
    //     }
    //     console.log(this.arr);
    //   });
    
  }



  ngOnInit(): void {
    this.tocen = this.tokenStorage.getToken();
    // if (!localStorage.getItem('foo')) { 
    //   localStorage.setItem('foo', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('foo') 
    // }
  }

  addNew(postblog: PostBlog) {
    const dialogRef = this.dialog.open(PostblogComponent, {
      data: {postblog: postblog}
    });

}
}
