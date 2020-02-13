import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GtkComponent } from './gtk/gtk.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
  path:'',
    component:ContainerComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'services',
    component:ServicesComponent
  },
  {
    path: 'projects',
    component:ProjectsComponent
  },
  {
    path: 'gtk',
    component:GtkComponent
  },
  {
    path:'clients',
    component:ClientsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

