import { LanguageService } from './../Services/service/language.service';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordprofRoutingModule } from './dashbordprof-routing.module';
import { HomeComponent } from './home/home.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoTabComponent } from './Components/info-tab/info-tab.component';
import { PhotosTabComponent } from './Components/photos-tab/photos-tab.component';
import { AboutTabComponent } from './Components/about-tab/about-tab.component';
import { ExperienceTabComponent } from './Components/experience-tab/experience-tab.component';
import { SkilsTabComponent } from './Components/skils-tab/skils-tab.component';
import { IdentityTabComponent } from './Components/identity-tab/identity-tab.component';
import { EducationTabComponent } from './Components/education-tab/education-tab.component';
import { MeetReservationComponent } from './mettingComponents/meet-reservation/meet-reservation.component';
import { MeetSettingComponent } from './mettingComponents/meet-setting/meet-setting.component';
import { MeetRequestComponent } from './mettingComponents/meet-request/meet-request.component';
import { ProfileComponent } from './profile/profile.component';
import { NewQuizComponent } from './QuizComponent/new-quiz/new-quiz.component';
import { ListQuizComponent } from './QuizComponent/list-quiz/list-quiz.component';
import { ResultQuizComponent } from './QuizComponent/result-quiz/result-quiz.component';
import { MyResultQuizComponent } from './QuizComponent/my-result-quiz/my-result-quiz.component';
import { NewCoursComponent } from './CoursesComponents/new-cours/new-cours.component';
import { MyCoursComponent } from './CoursesComponents/my-cours/my-cours.component';
import { InvitedCoursComponent } from './CoursesComponents/invited-cours/invited-cours.component';
import { FavoriteCoursComponent } from './CoursesComponents/favorite-cours/favorite-cours.component';
import { MyComentCoursComponent } from './CoursesComponents/my-coment-cours/my-coment-cours.component';
import { PurchesCoursComponent } from './CoursesComponents/purches-cours/purches-cours.component';
import { OrganizedCoursComponent } from './CoursesComponents/organized-cours/organized-cours.component';


@NgModule({
  declarations: [
    HomeComponent,
    NotificationComponent,
    SettingsComponent,
    InfoTabComponent,
    PhotosTabComponent,
    AboutTabComponent,
    ExperienceTabComponent,
    SkilsTabComponent,
    IdentityTabComponent,
    EducationTabComponent,
    MeetReservationComponent,
    MeetSettingComponent,
    MeetRequestComponent,
    ProfileComponent,
    NewQuizComponent,
    ListQuizComponent,
    ResultQuizComponent,
    MyResultQuizComponent,
    NewCoursComponent,
    MyCoursComponent,
    InvitedCoursComponent,
    FavoriteCoursComponent,
    MyComentCoursComponent,
    PurchesCoursComponent,
    OrganizedCoursComponent
  ],
  imports: [
    CommonModule,
    
    DashbordprofRoutingModule,
    TranslateModule.forRoot({
      loader :{
        provide :TranslateLoader,
        useFactory:httpTranslateLoader,
        deps:[HttpClient]

      }
    })
  ]
})
export class DashbordprofModule {
  constructor(public translate:TranslateService ,private lang:LanguageService){
    translate.addLangs(lang.langs)
    translate.setDefaultLang(lang.loadLang())
  }
}


export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
}
