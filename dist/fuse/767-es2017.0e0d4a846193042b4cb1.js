(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[767],{20767:function(e,t,i){"use strict";i.r(t),i.d(t,{AuthSignInModule:function(){return S}});var n=i(63423),r=i(51095),o=i(7539),s=i(98295),a=i(76627),l=i(49983),d=i(4885),m=i(92255),g=i(10588),c=i(44466),u=i(3679),h=i(28288);function f(e){if(e.value&&!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(e.value))return{invalidEmail:!0}}var p=i(37716),w=i(91841),Z=i(92340);let v=(()=>{class e{constructor(e){this.http=e,this.slectedAdmin={name:"",email:"",password:"",role:"",username:"",profilepic:""},this.noAuthHeader={headers:new w.WM({NoAuth:"True"})}}postUser(e){return console.log("Admin.Service = ",Z.N.apiBaseUrl+"/register",e),this.http.post(Z.N.apiBaseUrl+"/register",e,this.noAuthHeader)}login(e){return this.http.post(Z.N.apiBaseUrl+"/authenticate",e,this.noAuthHeader)}getAdminProfile(){return this.http.get(Z.N.apiBaseUrl+"/adminProfile")}setToken(e){localStorage.setItem("token",e)}getToken(){return localStorage.getItem("token")}deleteToken(){localStorage.removeItem("token")}getAdminPayload(){var e=this.getToken();if(e){var t=atob(e.split(".")[1]);return JSON.parse(t)}return null}isLoggedIn(){var e=this.getAdminPayload();return!!e&&e.exp>Date.now()/1e3}}return e.\u0275fac=function(t){return new(t||e)(p.LFG(w.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=i(72278),x=i(26162),A=i(38583),y=i(13994);const b=["signInNgForm"];function T(e,t){if(1&e&&(p.TgZ(0,"fuse-alert",29),p._uU(1),p.qZA()),2&e){const e=p.oxw();p.Q6J("appearance","outline")("showIcon",!1)("type",e.alert.type)("@shake","error"===e.alert.type),p.xp6(1),p.hij(" ",e.alert.message," ")}}function q(e,t){1&e&&(p.TgZ(0,"mat-error"),p._uU(1," Email address is required "),p.qZA())}function _(e,t){1&e&&(p.TgZ(0,"mat-error"),p._uU(1," Please enter a valid email address "),p.qZA())}function k(e,t){1&e&&p._UZ(0,"mat-icon",30),2&e&&p.Q6J("svgIcon","heroicons_solid:eye")}function U(e,t){1&e&&p._UZ(0,"mat-icon",30),2&e&&p.Q6J("svgIcon","heroicons_solid:eye-off")}function N(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1," Sign in "),p.qZA())}function F(e,t){1&e&&p._UZ(0,"mat-progress-spinner",31),2&e&&p.Q6J("diameter",24)("mode","indeterminate")}const J=[{path:"",component:(()=>{class e{constructor(e,t,i,n,r,o){this.adminService=e,this._activatedRoute=t,this._authService=i,this._formBuilder=n,this.tokenStorage=r,this._router=o,this.alert={type:"success",message:""},this.showAlert=!1,this.roles=[],this.signInForm=this._formBuilder.group({email:[null,u.kI.compose([u.kI.required,f])],password:[null,u.kI.compose([u.kI.required])],rememberMe:!1})}ngOnInit(){}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(e=>{const t=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(t),this.tokenStorage.saveToken(e.accessToken),this.tokenStorage.saveUsername(e.username),this.tokenStorage.saveAuthorities(e.authorities),console.log("This User ",this.signInForm.value),console.log("This Role ",e.authorities),this.roles=this.tokenStorage.getAuthorities()},e=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(v),p.Y36(n.gz),p.Y36(I.e),p.Y36(u.qu),p.Y36(x.i),p.Y36(n.F0))},e.\u0275cmp=p.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(e,t){if(1&e&&p.Gf(b,5),2&e){let e;p.iGM(e=p.CRH())&&(t.signInNgForm=e.first)}},decls:54,vars:12,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p._uU(4,"Sign in"),p.qZA(),p.TgZ(5,"div",4),p.TgZ(6,"div"),p._uU(7,"( Administrator Only )"),p.qZA(),p.qZA(),p.YNc(8,T,2,5,"fuse-alert",5),p.TgZ(9,"form",6,7),p.TgZ(11,"mat-form-field",8),p.TgZ(12,"mat-label"),p._uU(13,"Email address"),p.qZA(),p._UZ(14,"input",9),p.YNc(15,q,2,0,"mat-error",10),p.YNc(16,_,2,0,"mat-error",10),p.qZA(),p.TgZ(17,"mat-form-field",8),p.TgZ(18,"mat-label"),p._uU(19,"Password"),p.qZA(),p._UZ(20,"input",11,12),p.TgZ(22,"button",13),p.NdJ("click",function(){p.CHM(e);const t=p.MAs(21);return t.type="password"===t.type?"text":"password"}),p.YNc(23,k,1,1,"mat-icon",14),p.YNc(24,U,1,1,"mat-icon",14),p.qZA(),p.TgZ(25,"mat-error"),p._uU(26," Password is required "),p.qZA(),p.qZA(),p.TgZ(27,"button",15),p.NdJ("click",function(){return t.signIn()}),p.YNc(28,N,2,0,"span",10),p.YNc(29,F,1,2,"mat-progress-spinner",16),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(30,"div",17),p.O4$(),p.TgZ(31,"svg",18),p.TgZ(32,"g",19),p._UZ(33,"circle",20),p._UZ(34,"circle",21),p.qZA(),p.qZA(),p.TgZ(35,"svg",22),p.TgZ(36,"defs"),p.TgZ(37,"pattern",23),p._UZ(38,"rect",24),p.qZA(),p.qZA(),p._UZ(39,"rect",25),p.qZA(),p.kcU(),p.TgZ(40,"div",26),p.TgZ(41,"div",27),p.TgZ(42,"div"),p._uU(43,"Welcome to"),p.qZA(),p.TgZ(44,"div"),p._uU(45,"Alexandra Foster's Blog"),p.qZA(),p.qZA(),p.TgZ(46,"div",28),p._uU(47," Alexandra Foster's award-winning single female travel blog features travel information, resources, and recommendations from worldwide. "),p.qZA(),p.TgZ(48,"div",28),p._uU(49," I left my corporate job in the United States at the age of 21 to follow my ambition of travelling the globe and starting my own remote business. It all looked insane at the time, especially because I was young and broke, but after a few months, I was able to pull it off! "),p.qZA(),p.TgZ(50,"div",28),p._uU(51," I am now a successful solo female traveler and online entrepreneur (including vlogger and blogger) who has visited all seven continents "),p.qZA(),p.TgZ(52,"div",28),p._uU(53," MY OBJECTIVE? To show YOU that, despite the odds, it is entirely possible to live a life of nonstop travel while still achieving financial independence through remote employment. My no-nonsense learnings and experiences, as well as my tried-and-true working tools, travel ideas, guides, hacks, and MORE, will assist you in achieving these goals. "),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&e){const e=p.MAs(21);p.xp6(8),p.Q6J("ngIf",t.showAlert),p.xp6(1),p.Q6J("formGroup",t.signInForm),p.xp6(5),p.Q6J("formControlName","email"),p.xp6(1),p.Q6J("ngIf",t.signInForm.get("email").hasError("required")),p.xp6(1),p.Q6J("ngIf",t.signInForm.get("email").hasError("email")),p.xp6(4),p.Q6J("formControlName","password"),p.xp6(3),p.Q6J("ngIf","password"===e.type),p.xp6(1),p.Q6J("ngIf","text"===e.type),p.xp6(3),p.Q6J("color","primary")("disabled",t.signInForm.disabled),p.xp6(1),p.Q6J("ngIf",!t.signInForm.disabled),p.xp6(1),p.Q6J("ngIf",t.signInForm.disabled)}},directives:[A.O5,u._Y,u.JL,u.sg,s.KE,s.hX,l.Nt,u.Fj,u.JJ,u.u,r.lW,s.R9,s.TO,y.W,a.Hw,d.Ou],encapsulation:2,data:{animation:h.L}}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[n.Bz.forChild(J),r.ot,o.p9,s.lN,a.Ps,l.c,d.Cq,m.J,g.fC,c.m]]}),e})()}}]);