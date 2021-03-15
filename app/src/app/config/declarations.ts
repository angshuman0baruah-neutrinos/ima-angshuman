import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-deleteconfirmationComponent
import { deleteconfirmationComponent } from '../components/deleteconfirmationComponent/deleteconfirmation.component';
//CORE_REFERENCE_IMPORT-editincidentComponent
import { editincidentComponent } from '../components/editincidentComponent/editincident.component';
//CORE_REFERENCE_IMPORT-addincidentconfirmpageComponent
import { addincidentconfirmpageComponent } from '../components/addincidentconfirmpageComponent/addincidentconfirmpage.component';
//CORE_REFERENCE_IMPORT-incidentlistComponent
import { incidentlistComponent } from '../components/incidentlistComponent/incidentlist.component';
//CORE_REFERENCE_IMPORT-addincidentComponent
import { addincidentComponent } from '../components/addincidentComponent/addincident.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-deleteconfirmationComponent
deleteconfirmationComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editincidentComponent
editincidentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addincidentconfirmpageComponent
addincidentconfirmpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-incidentlistComponent
incidentlistComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addincidentComponent
addincidentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent},{path: 'addIncident', component: addincidentComponent},{path: 'incidentList', component: incidentlistComponent},{path: '', redirectTo: 'home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
