import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent} from './myComponents/selection/selection.component';
import { ShomeComponent } from './myComponents/shome/shome.component';
import { StartComponent } from './myComponents/start/start.component';
const routes: Routes = [
  {path:'',redirectTo:'start',pathMatch:'full'},
  {path:'exam',component:ShomeComponent},
  {path:'marks',component:SelectionComponent},
  {path:'start',component:StartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
