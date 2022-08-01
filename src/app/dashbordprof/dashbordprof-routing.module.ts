import { OrganizedCoursComponent } from './CoursesComponents/organized-cours/organized-cours.component';
import { PurchesCoursComponent } from './CoursesComponents/purches-cours/purches-cours.component';
import { MyComentCoursComponent } from './CoursesComponents/my-coment-cours/my-coment-cours.component';
import { FavoriteCoursComponent } from './CoursesComponents/favorite-cours/favorite-cours.component';
import { InvitedCoursComponent } from './CoursesComponents/invited-cours/invited-cours.component';
import { MyCoursComponent } from './CoursesComponents/my-cours/my-cours.component';
import { NewCoursComponent } from './CoursesComponents/new-cours/new-cours.component';
import { ResultQuizComponent } from './QuizComponent/result-quiz/result-quiz.component';
import { NewQuizComponent } from './QuizComponent/new-quiz/new-quiz.component';
import { ListQuizComponent } from './QuizComponent/list-quiz/list-quiz.component';
import { ProfileComponent } from './profile/profile.component';
import { MeetRequestComponent } from './MettingComponents/meet-request/meet-request.component';
import { MeetSettingComponent } from './MettingComponents/meet-setting/meet-setting.component';
import { MeetReservationComponent } from './MettingComponents/meet-reservation/meet-reservation.component';
import { NotificationComponent } from './notification/notification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfGuard } from '../Services/guards/prof.guard';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    // runGuardsAndResolvers: 'always',
    // canActivate: [ProfGuard],
    children: [
    
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "notifications",
        component: NotificationComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      },
      {
        path:"mettings",
        children:[
          {
            path:"reservation",
            component:MeetReservationComponent
          },
          {
            path:"requests",
            component:MeetRequestComponent
          },
          {
            path:"settings",
            component:MeetSettingComponent
          }
        ]
      },
      {
        path:"quiz",
        children:[
          {
            path:"",
            component:ListQuizComponent
          },
          {
            path:"new",
            component:NewQuizComponent
          },
          {
            path:"result",
            component:ResultQuizComponent
          }
        ]
      },
      {
        path:"courses",
        children:[
          {
            path:"new",
            component:NewCoursComponent
          },
          {
            path:"ouwn",
            component:MyCoursComponent
          },
          {
            path:"invited",
            component:InvitedCoursComponent
          },
          {
            path:"favorite",
            component:FavoriteCoursComponent
          },
          {
            path:"mycomment",
            component:MyComentCoursComponent
          }
          ,
          {
            path:"purchases",
            component:PurchesCoursComponent
          },
          {
            path:"organization_classes",
            component:OrganizedCoursComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordprofRoutingModule { }
