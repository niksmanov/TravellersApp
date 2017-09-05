import { HomesService } from './../core/services/homes.service';
import { HomesRoutes } from './allHomes-routing';
import { AllHomesComponent } from './allHomes.component';
import { ListAllComponent } from './listAll/listAll.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      HomesRoutes

    ],
    declarations: [
        ListAllComponent,
        DetailsComponent,
        EditComponent,
        CreateComponent,
        AllHomesComponent
    ],
    providers: [],
    exports: [
        ListAllComponent,
        DetailsComponent,
        EditComponent,
        CreateComponent,
        AllHomesComponent
    ]
  })

  export class AllHomesModule {

  }
