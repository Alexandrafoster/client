import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { TokenStorageService } from 'app/core/auth/token-storage.service';
import { emailValidator } from 'app/core/auth/app-validators';
import { AdminService } from 'app/core/auth/services/admin.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;
    roles: string[] = [];
    /**
     * Constructor
     */
    constructor(
        private adminService: AdminService,
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private tokenStorage: TokenStorageService,
        private _router: Router
    )
    {
        this.signInForm = this._formBuilder.group({
            'email': [null, Validators.compose([Validators.required, emailValidator])],
            'password': [null, Validators.compose([Validators.required])],
            'rememberMe': false
          });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // if(this.adminService.isLoggedIn()) {
        //     this._router.navigateByUrl('/signed-in-redirect');
        //     }
        // Create the form
        // this.signInForm = this._formBuilder.group({
        //     email     : ['misbah.siddiqui@wedeliver.com', [Validators.required, Validators.email]],
        //     password  : ['admin', Validators.required],
        //     rememberMe: ['']
        // });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._authService.signIn(this.signInForm.value)
            .subscribe(
                data => {

                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);
                    this.tokenStorage.saveToken(data.accessToken);
                    this.tokenStorage.saveUsername(data.username);
                    this.tokenStorage.saveAuthorities(data.authorities);
                    console.log('This User ', this.signInForm.value);
                    console.log('This Role ', data.authorities);
                    this.roles = this.tokenStorage.getAuthorities();

                },
                (response) => {

                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Wrong email or password'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}
