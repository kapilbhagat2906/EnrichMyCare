import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { ExerciseComponent } from './create-programme/exercise/exercise.component';
import { ProgressionComponent } from './create-programme/exercise/progression/progression.component';
import { AddProgrammeModalComponent } from './home/add-programme-modal/add-programme-modal.component';
import { AddUserModalComponent } from './home/add-user-modal/add-user-modal.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateProgrammeComponent,
    ExerciseComponent,
    ProgressionComponent,
    AddUserComponent,
    AddUserModalComponent,
    UserDetailsComponent,
    AddProgrammeModalComponent,
  ],
  imports: [SharedModule, AdminRoutingModule, NgbModule],
})
export class AdminModule {}
