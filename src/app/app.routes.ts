import { RouterModule } from "@angular/router";

import { SignupComponent } from "./unprotected/signup.component";
import { SigninComponent } from "./unprotected/signin.component";
import { ProtectedComponent } from "./protected/protected.component";

import { AuthGuard } from "./shared/auth.guard";

export const APP_ROUTES = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
];

// This works as it is, but there are other ways of accomplishing the same
// The following is the SOP for bootstrapping routes, the const above would not be exported until the following line:
// export const routing = RouterModule.forRoot(APP_ROUTES);
