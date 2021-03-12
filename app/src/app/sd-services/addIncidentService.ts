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
      bh = await this.getIncidentDataScript(bh);
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

  //appendnew_flow_addIncidentService_start

  async addIncidentScript(bh) {
    try {
      console.log('Client Service Response');
      //console.log(bh.input.incidentAddData);
      this.addIncientServiceLog(bh);
      //appendnew_next_addIncidentScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M8QXMO9DkjugFFiN');
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

  async getIncidentDataScript(bh) {
    try {
      bh.local.outPutData = [
        {
          subject: 'Task 1',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-09',
          priority: '1',
        },
        {
          subject: 'Task 2',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-10',
          priority: '1',
        },
        {
          subject: 'Task 3',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-19',
          priority: '1',
        },
        {
          subject: 'Task 4',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-29',
          priority: '1',
        },
        {
          subject: 'Task 5',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-11',
          priority: '1',
        },
        {
          subject: 'Task 6',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-21',
          priority: '1',
        },
        {
          subject: 'Task 7',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-29',
          priority: '1',
        },
        {
          subject: 'Task 8',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-04-29',
          priority: '1',
        },
        {
          subject: 'Task 9',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-02-19',
          priority: '1',
        },
        {
          subject: 'Task 10',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-09',
          priority: '1',
        },
        {
          subject: 'Task 11',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-05-09',
          priority: '1',
        },
        {
          subject: 'Task 12',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          incidentDate: '2021-03-09',
          priority: '1',
        },
      ];
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
