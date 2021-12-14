import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/core/auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public tocen: any;
  constructor(public tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.tocen = this.tokenStorage.getToken();
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      // location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  }

}
