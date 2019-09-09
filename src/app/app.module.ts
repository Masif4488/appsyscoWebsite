import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeDeliveringComponent } from './home/home-delivering/home-delivering.component';
import { HomeLanguagebannerComponent } from './home/home-languagebanner/home-languagebanner.component';
import { HomeServicesComponent } from './home/home-services/home-services.component';
import { HomeAboutusTabberComponent } from './home/home-aboutus-tabber/home-aboutus-tabber.component';
import { HomeWhatWeDoComponent } from './home/home-what-we-do/home-what-we-do.component';
import { HomeClientComponent } from './home/home-client/home-client.component';
import { HomeTestimonialsComponent } from './home/home-testimonials/home-testimonials.component';
import { HomeWhyworkwithusComponent } from './home/home-whyworkwithus/home-whyworkwithus.component';
import { AboutBannerComponent } from './about/about-banner/about-banner.component';
import { AboutTablistComponent } from './about/about-tablist/about-tablist.component';
import { AboutTabdesciptionComponent } from './about/about-tabdesciption/about-tabdesciption.component';
import { AboutClientsayComponent } from './about/about-clientsay/about-clientsay.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { ContactBannerComponent } from './contactus/contact-banner/contact-banner.component';
import { ContactFindComponent } from './contactus/contact-find/contact-find.component';
import { ContactMapComponent } from './contactus/contact-map/contact-map.component';
import { CareerBannerComponent } from './career/career-banner/career-banner.component';
import { CareerNavigationTabComponent } from './career/career-navigation-tab/career-navigation-tab.component';
import { CareerFeaturejobsComponent } from './career/career-featurejobs/career-featurejobs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    SolutionsComponent,
    CareerComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    HomeDeliveringComponent,
    HomeLanguagebannerComponent,
    HomeServicesComponent,
    HomeAboutusTabberComponent,
    HomeWhatWeDoComponent,
    HomeClientComponent,
    HomeTestimonialsComponent,
    HomeWhyworkwithusComponent,
    AboutBannerComponent,
    AboutTablistComponent,
    AboutTabdesciptionComponent,
    AboutClientsayComponent,
    OurHistoryComponent,
    OurMissionComponent,
    OurVisionComponent,
    OurTeamComponent,
    OurProcessComponent,
    ContactBannerComponent,
    ContactFindComponent,
    ContactMapComponent,
    CareerBannerComponent,
    CareerNavigationTabComponent,
    CareerFeaturejobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
