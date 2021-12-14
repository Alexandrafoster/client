import { Component, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PostBlog} from '../../models/postblog.model';
import {PostblogService} from '../../services/postblog.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.scss']
})
export class PostblogComponent  {

  public uploadfile: File;
  public ubill: File;
  public message: string;
  public imagePath;
  public imagePath1;
  imgURL: any;
  images;
  // public data: PostBlog;
  imgURL1: any;
  images1;
  urls = [];
  thumbnail_name: any;
  headerimage_name: any;

  constructor(
    public postblogService: PostblogService, private http: HttpClient, public dialogRef: MatDialogRef<PostblogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostBlog) { };

//   ngOnInit(): void {
// }

selectImage(event) {
  if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
                console.log('Event Target Result ', event.target.result);
                console.log(event.target.name);
                this.urls.push(event.target.result); 
                if (this.thumbnail_name == 'thumbnail') {
                this.imgURL = event.target.result;
                }
                if (this.headerimage_name == 'headerimage'){
                this.imgURL1 = event.target.result; 
                }
              }
              console.log(event.target.name);
              if (event.target.name == 'thumbnail') {
              this.thumbnail_name = event.target.name;  
              this.images = event.target.files[0];
              }
              if (event.target.name == 'headerimage') {
              this.headerimage_name = event.target.name;
              this.images1 = event.target.files[0];
              }
              reader.readAsDataURL(event.target.files[i]);
      }
  }
}

submit() {
    console.log('Click Submit');
    // emppty stuff
  }

confirmAdd(): void {
  const formData: any = new FormData();
  formData.append("thumbnail", this.images);
  formData.append("thumbcaption", this.data.thumbcaption);
  formData.append("headerimage", this.images1);
  formData.append("headerheading", this.data.headerheading);
  formData.append("headercontent", this.data.headercontent);
  formData.append("bodyheading", this.data.bodyheading);
  formData.append("bodycontent", this.data.bodycontent);
  formData.append("bodyheading2", this.data.bodyheading2);
  formData.append("bodycontent2", this.data.bodycontent2);
  this.postblogService.addPostBlog(formData);
  this.postblogService.addPostBlog(formData).subscribe(res => {});
  // this.http.post<any>('http://localhost:8080/api/rider/create', formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)

  // );
  // const data1 = Object.assign({roles: ['user'], uploadfile: this.uploadfile}, this.data);
  // console.log('DATA VALUE ', data1)
  // this.riderService.addRiders(data1);
  // this.riderService.addRiders(data1).subscribe(res => {});
}
}

