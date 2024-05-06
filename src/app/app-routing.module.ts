import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
  {
    path: "**",
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
