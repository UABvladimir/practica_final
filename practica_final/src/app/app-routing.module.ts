import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) }, { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'contacto', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) }, { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
