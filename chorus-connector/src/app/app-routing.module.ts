import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'choruses',
    loadChildren: () => import('./pages/choruses/choruses.module').then( m => m.ChorusesPageModule)
  },
  {
    path: 'my-choruses',
    loadChildren: () => import('./pages/my-choruses/my-choruses.module').then( m => m.MyChorusesPageModule)
  },
  {
    path: 'chorus-details',
    loadChildren: () => import('./pages/chorus-details/chorus-details.module').then( m => m.ChorusDetailsPageModule)
  },
  {
    path: 'chorus-admin',
    loadChildren: () => import('./pages/chorus-admin/chorus-admin.module').then( m => m.ChorusAdminPageModule)
  },
  {
    path: 'add-chorus',
    loadChildren: () => import('./pages/add-chorus/add-chorus.module').then( m => m.AddChorusPageModule)
  },
  { path: '', redirectTo: 'choruses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
