/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class addIncidentService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_addIncidentService

  async addIncidentClientService(incidentAddData: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          incidentAddData: incidentAddData,
        },
        local: {
          incidentAddresponse: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.addIncidentScript(bh);
      //appendnew_next_addIncidentClientService
      return (
        // formatting output variables
        {
          input: {},
          local: {
            incidentAddresponse: bh.local.incidentAddresponse,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UynFHp3LuVM6xRkl');
    }
  }

  async getIncidentData(inputData: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          inputData: inputData,
        },
        local: {
          outPutData: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getIncidentAPICall(bh);
      //appendnew_next_getIncidentData
      return (
        // formatting output variables
        {
          input: {},
          local: {
            outPutData: bh.local.outPutData,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MgnRi9qIK2HapX1k');
    }
  }

  async editIncidentClientService(incidentAddData: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          incidentAddData: incidentAddData,
        },
        local: {
          incidentAddresponse: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.editIncidentScript(bh);
      //appendnew_next_editIncidentClientService
      return (
        // formatting output variables
        {
          input: {},
          local: {
            incidentAddresponse: bh.local.incidentAddresponse,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3So749lTxU21GAms');
    }
  }

  async deleteIncidentClientService(
    incidentAddData: any = undefined,
    ...others
  ) {
    try {
      var bh = {
        input: {
          incidentAddData: incidentAddData,
        },
        local: {
          incidentAddresponse: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.deleteIncidentScript(bh);
      //appendnew_next_deleteIncidentClientService
      return (
        // formatting output variables
        {
          input: {},
          local: {
            incidentAddresponse: bh.local.incidentAddresponse,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CLl2RLLgPQlAKZ1u');
    }
  }

  //appendnew_flow_addIncidentService_start

  async addIncidentScript(bh) {
    try {
      console.log('Client Service Response');
      //console.log(bh.input.incidentAddData);

      bh.local.requestData = {
        subject: bh.input.incidentAddData.subject,
        priority: parseInt(bh.input.incidentAddData.priority),
        decription: bh.input.incidentAddData.description,
        incidentDate: bh.input.incidentAddData.incidentDate,
      };

      console.log(bh.local.requestData);
      bh = await this.addIncidentCallAPI(bh);
      //appendnew_next_addIncidentScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M8QXMO9DkjugFFiN');
    }
  }

  async addIncidentCallAPI(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addIncidents/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.local.requestData,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.addIncientServiceLog(bh);
      bh = await this.addIncidentSwitch(bh);
      //appendnew_next_addIncidentCallAPI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zERJGqxzu2TaUogw');
    }
  }

  async addIncientServiceLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.incidentAddData);
      //appendnew_next_addIncientServiceLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GugvvQ52rlf5mpvJ');
    }
  }

  async addIncidentSwitch(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.result.statusCode,
          200,
          undefined,
          undefined
        )
      ) {
        bh = await this.addIncidentNavigation(bh);
        bh = await this.addIncodentSnackbar(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.local.result.statusCode,
          203,
          undefined,
          undefined
        )
      ) {
        bh = await this.addIncodentSnackbar(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lChoZ3YEienrOYiS');
    }
  }

  async addIncidentNavigation(bh) {
    try {
      const {
        paramObj: qprm,
        path: path,
      } = this.sdService.getPathAndQParamsObj('/incidentList');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      //appendnew_next_addIncidentNavigation
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bCnrKsp79ENDwVLe');
    }
  }

  async addIncodentSnackbar(bh) {
    try {
      this.matSnackBar.open(bh.local.result.result.message, '', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_addIncodentSnackbar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IH3nhTPzAxKWEs0z');
    }
  }

  async getIncidentAPICall(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getIncidents/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.getIncidentDataScript(bh);
      //appendnew_next_getIncidentAPICall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l0AB0xY5qNUavJht');
    }
  }

  async getIncidentDataScript(bh) {
    try {
      console.log(bh.local.result);
      bh.local.outPutData = bh.local.result.result.data;
      this.getTableDataLog(bh);
      //appendnew_next_getIncidentDataScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hk0o9uCR2I0DoQmv');
    }
  }

  async getTableDataLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.outPutData);
      //appendnew_next_getTableDataLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IQaucsC5AlckrhqN');
    }
  }

  async editIncidentScript(bh) {
    try {
      console.log('Client Service Response');

      bh.local.requestData = {
        subject: bh.input.incidentAddData.subject,
        priority: parseInt(bh.input.incidentAddData.priority),
        id: parseInt(bh.input.incidentAddData.id),
        decription: bh.input.incidentAddData.description,
        incidentDate: bh.input.incidentAddData.incidentDate,
      };

      bh = await this.editIncidentCallAPI(bh);
      //appendnew_next_editIncidentScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KZZQFkyMiPQvxUDT');
    }
  }

  async editIncidentCallAPI(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateIncidents/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.local.requestData,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.editIncientServiceLog(bh);
      bh = await this.editIncodentSnackbar(bh);
      //appendnew_next_editIncidentCallAPI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pH2jTbHOOJE6D6sV');
    }
  }

  async editIncientServiceLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.incidentAddData);
      //appendnew_next_editIncientServiceLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_chBgwReT0Cv1qzbZ');
    }
  }

  async editIncodentSnackbar(bh) {
    try {
      this.matSnackBar.open(bh.local.result.result.message, '', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_editIncodentSnackbar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jSfI0INXNqRDopkt');
    }
  }

  async deleteIncidentScript(bh) {
    try {
      console.log('Client Service Response');

      bh.local.requestData = {
        id: parseInt(bh.input.incidentAddData),
      };

      bh = await this.deleteIncidentCallAPI(bh);
      //appendnew_next_deleteIncidentScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IRgdKTu7cwqhjj75');
    }
  }

  async deleteIncidentCallAPI(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteIncidents/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.local.requestData,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.deleteIncientServiceLog(bh);
      bh = await this.deleteIncodentSnackbar(bh);
      //appendnew_next_deleteIncidentCallAPI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DytwpO6nkDhWznQf');
    }
  }

  async deleteIncientServiceLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.incidentAddData);
      //appendnew_next_deleteIncientServiceLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m7lMyhW90f7qFJ3n');
    }
  }

  async deleteIncodentSnackbar(bh) {
    try {
      this.matSnackBar.open(bh.local.result.result.message, '', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_deleteIncodentSnackbar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zzbfenDtFy0fRoP0');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_addIncidentService_Catch
}
