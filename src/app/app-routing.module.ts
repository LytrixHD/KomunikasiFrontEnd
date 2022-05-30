import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './Pages/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./Pages/auth/auth.module').then((m)=> m.AuthModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
