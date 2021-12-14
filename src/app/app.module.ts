import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { HomeComponent } from './web/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PostComponent } from './web/post/post.component';
import { PostblogComponent } from './web/postblog/postblog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { PostblogService } from './services/postblog.service';
import { PostsService } from './services/posts.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from './web/header/header.component';
import { LatestpostsComponent } from './web/latestposts/latestposts.component';
import { FooterComponent } from './web/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutComponent } from './web/about/about.component';
import { ContactComponent } from './web/contact/contact.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PostComponent,
        PostblogComponent,
        HeaderComponent,
        LatestpostsComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent
    ],
    imports     : [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        BrowserModule,
        BrowserAnimationsModule,
        SlickCarouselModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],

    providers: [
        {
            provide: MatDialogRef,
            useValue: {}
          },
          {provide:MAT_DIALOG_DATA,useValue:{}},
        PostblogService,
        PostsService
      ],
    entryComponents: [PostblogComponent],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
