import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule, MatSelectModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { GtkComponent } from './gtk/gtk.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { MatToolbarModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContainerComponent, AboutComponent, ServicesComponent, ProjectsComponent, GtkComponent, ClientsComponent, ContactComponent],
  imports: [NgbModule,
    CommonModule,
    CoreRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule ,FormsModule,ReactiveFormsModule,MatToolbarModule 
  ],
  exports: [HeaderComponent,FooterComponent]
  })
export class CoreModule { }
