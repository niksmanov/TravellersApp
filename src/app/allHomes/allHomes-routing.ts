import { CreateComponent } from './create/create.component';
import { AllHomesComponent } from './allHomes.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '' , component: AllHomesComponent },
    {path: 'create', component: CreateComponent}
];

export const HomesRoutes = RouterModule.forChild(routes);
