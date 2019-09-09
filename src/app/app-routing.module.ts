import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurProcessComponent } from './our-process/our-process.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'career', component: CareerComponent},
  {path: 'contact', component: ContactusComponent},
  {path: 'our-history', component: OurHistoryComponent},
  {path: 'our-mission', component: OurMissionComponent},
  {path: 'our-vision', component: OurVisionComponent},
  {path: 'our-team', component: OurTeamComponent},
  {path: 'our-process', component: OurProcessComponent},
  {path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
