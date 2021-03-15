let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
//append_imports_end
export class incidents {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'incidents';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new incidents(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_incidents_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: incidents');

    //appendnew_flow_incidents_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: incidents');

    if (!this.swaggerDocument['paths']['/getIncidents']) {
      this.swaggerDocument['paths']['/getIncidents'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getIncidents']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getIncidents`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.getIncidentsScript(bh);
          //appendnew_next_sd_cElYEsyvVrXo2fwE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cElYEsyvVrXo2fwE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/addIncidents']) {
      this.swaggerDocument['paths']['/addIncidents'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addIncidents']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addIncidents`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.addIncidentsScript(bh);
          //appendnew_next_sd_boB0b98VjORQi3zf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_boB0b98VjORQi3zf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateIncidents']) {
      this.swaggerDocument['paths']['/updateIncidents'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateIncidents']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/updateIncidents`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.updateIncidentsScript(bh);
          //appendnew_next_sd_wm1z9Meq1HCLFdwA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wm1z9Meq1HCLFdwA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteIncidents']) {
      this.swaggerDocument['paths']['/deleteIncidents'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteIncidents']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/deleteIncidents`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.deleteIncidentsScript(bh);
          //appendnew_next_sd_bqTHGW8vQ7xabDLA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bqTHGW8vQ7xabDLA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_incidents_HttpIn
  }
  //   service flows_incidents

  //appendnew_flow_incidents_start

  async getIncidentsScript(bh) {
    try {
      bh.local.query = 'select * from incidents order by id desc';
      bh.local.queryParam = [];
      bh = await this.sqlConn(bh);
      //appendnew_next_getIncidentsScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1lTffz7s9XREMf5g');
    }
  }

  async sqlConn(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7D87qXYHj0u2b9p9'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.queryParam;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.sd_ZcV8Xjvc1Dtjn6Aa(bh);
      bh = await this.getIncidentOutScript(bh);
      //appendnew_next_sqlConn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EnKPQYckw1V6a0fu');
    }
  }

  async sd_ZcV8Xjvc1Dtjn6Aa(bh) {
    try {
      let logobj: any = bh.local.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      //appendnew_next_sd_ZcV8Xjvc1Dtjn6Aa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZcV8Xjvc1Dtjn6Aa');
    }
  }

  async getIncidentOutScript(bh) {
    try {
      if (bh.local.result && bh.local.result.length > 0) {
        bh.local.statusCode = 200;
        bh.local.result = {
          message: 'Data Found',
          data: bh.local.result,
        };
      } else {
        bh.local.statusCode = 400;
        bh.local.result = {
          message: 'No Data Found',
          data: [],
        };
      }

      bh.local.response = {
        statusCode: bh.local.statusCode,
        result: bh.local.result,
      };

      await this.getIncidentOut(bh);
      //appendnew_next_getIncidentOutScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i1AszUyTH3S5VfTp');
    }
  }

  async getIncidentOut(bh) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9A1Bm2yB2bDhJaZN');
    }
  }

  async addIncidentsScript(bh) {
    try {
      console.log(bh.input.body);
      bh.local.isRequestValid = true;
      if (
        !bh.input.body.subject ||
        bh.input.body.subject == '' ||
        !bh.input.body.priority ||
        bh.input.body.priority == '' ||
        !bh.input.body.decription ||
        bh.input.body.decription == '' ||
        !bh.input.body.incidentDate ||
        bh.input.body.incidentDate == ''
      ) {
        bh.local.isRequestValid = false;
        bh.local.statusCode = 400;
        bh.local.result = {
          message: 'Invalid Data',
          data: [],
        };
      }
      bh = await this.addIncidentSwitch(bh);
      //appendnew_next_addIncidentsScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nwYlaTruwvgjrGVr');
    }
  }

  async addIncidentSwitch(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isRequestValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1WrS3AkfnL3tMa4J(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isRequestValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.addIncidentElseScript(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Tp5AIVx2KzEsRLlt');
    }
  }

  async sd_1WrS3AkfnL3tMa4J(bh) {
    try {
      bh.local.query = ` INSERT INTO incidents (subject, description, prority, incident_date) VALUES ('${bh.input.body.subject}', '${bh.input.body.decription}', '${bh.input.body.priority}', '${bh.input.body.incidentDate}')`;
      bh.local.queryParam = [];
      bh = await this.addsqlConn(bh);
      //appendnew_next_sd_1WrS3AkfnL3tMa4J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1WrS3AkfnL3tMa4J');
    }
  }

  async addsqlConn(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7D87qXYHj0u2b9p9'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.queryParam;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      bh = await this.addIncidentOutScript(bh);
      //appendnew_next_addsqlConn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IHtMabY9rWu7giDl');
    }
  }

  async addIncidentOutScript(bh) {
    try {
      console.log(bh.local.result);
      if (bh.local.result.affectedRows > 0) {
        bh.local.statusCode = 200;
        bh.local.result = {
          message: 'Incident  added successfully',
          data: [],
        };
      } else {
        bh.local.statusCode = 203;
        bh.local.result = {
          message: 'Unable to add incodent',
          data: [],
        };
      }

      bh.local.responseData = {
        statusCode: bh.local.statusCode,
        result: bh.local.result,
      };

      this.updateIncidentLog(bh);
      await this.updateIncidentOut(bh);
      //appendnew_next_addIncidentOutScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1InTkBfYACN32Kk7');
    }
  }

  async updateIncidentLog(bh) {
    try {
      let logobj: any = bh.local.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      //appendnew_next_updateIncidentLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MGSUom4ju3e6SKM2');
    }
  }

  async updateIncidentOut(bh) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseData);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3rPrrOhjT96dnb0p');
    }
  }

  async addIncidentElseScript(bh) {
    try {
      bh.local.result = {};
      bh.local.result.affectedRows = 0;
      bh = await this.addIncidentOutScript(bh);
      //appendnew_next_addIncidentElseScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UMhzGEJnqg6dEX2k');
    }
  }

  async updateIncidentsScript(bh) {
    try {
      console.log(bh.input.body);
      bh.local.isRequestValid = true;
      if (
        !bh.input.body.id ||
        bh.input.body.id == '' ||
        !bh.input.body.subject ||
        bh.input.body.subject == '' ||
        !bh.input.body.priority ||
        bh.input.body.priority == '' ||
        !bh.input.body.decription ||
        bh.input.body.decription == '' ||
        !bh.input.body.incidentDate ||
        bh.input.body.incidentDate == ''
      ) {
        bh.local.isRequestValid = false;
        bh.local.statusCode = 400;
        bh.local.result = {
          message: 'Invalid Data',
          data: [],
        };
      }
      bh = await this.updateIncidentsSwitch(bh);
      //appendnew_next_updateIncidentsScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0V5S865TEDY26om6');
    }
  }

  async updateIncidentsSwitch(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isRequestValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_EuwZeL1ICDRl7fri(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isRequestValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.updateIncidentElseScript(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SMvsQjyXMXXdpLlV');
    }
  }

  async sd_EuwZeL1ICDRl7fri(bh) {
    try {
      bh.local.query = ` UPDATE incidents SET subject = '${bh.input.body.subject}', description = '${bh.input.body.decription}', prority = '${bh.input.body.priority}', incident_date = '${bh.input.body.incidentDate}' WHERE id = ${bh.input.body.id}`;
      bh.local.queryParam = [];
      bh = await this.updatesqlConn(bh);
      //appendnew_next_sd_EuwZeL1ICDRl7fri
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EuwZeL1ICDRl7fri');
    }
  }

  async updatesqlConn(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7D87qXYHj0u2b9p9'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.queryParam;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      bh = await this.updateIncidentOutScript(bh);
      //appendnew_next_updatesqlConn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jI0o0MmH9I6HdkZR');
    }
  }

  async updateIncidentOutScript(bh) {
    try {
      console.log(bh.local.result);
      if (bh.local.result.affectedRows > 0) {
        bh.local.statusCode = 200;
        bh.local.result = {
          message: 'Incident  updated successfully',
          data: [],
        };
      } else {
        bh.local.statusCode = 203;
        bh.local.result = {
          message: 'Unable to update incodent',
          data: [],
        };
      }

      bh.local.responseData = {
        statusCode: bh.local.statusCode,
        result: bh.local.result,
      };

      await this.updateIncidentOut(bh);
      this.updateIncidentLog(bh);
      //appendnew_next_updateIncidentOutScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YC5FR9sOVtbJTyHR');
    }
  }

  async updateIncidentElseScript(bh) {
    try {
      bh.local.result = {};
      bh.local.result.affectedRows = 0;
      bh = await this.updateIncidentOutScript(bh);
      //appendnew_next_updateIncidentElseScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ll0ZWTQP73jRCSRz');
    }
  }

  async deleteIncidentsScript(bh) {
    try {
      bh.local.isRequestValid = true;
      if (!bh.input.body.id || bh.input.body.id == '') {
        bh.local.isRequestValid = false;
        bh.local.statusCode = 400;
        bh.local.result = {
          message: 'Invalid Data',
          data: [],
        };
      }
      bh = await this.deleteIncidentsSwitch(bh);
      //appendnew_next_deleteIncidentsScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Wio731sVOZLtu4eh');
    }
  }

  async deleteIncidentsSwitch(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isRequestValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_8Mc7LO9CgBY3HHHJ(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isRequestValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.deleteIncidentElseScript(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XpWpwq6fOSHCr1cK');
    }
  }

  async sd_8Mc7LO9CgBY3HHHJ(bh) {
    try {
      bh.local.query = ` DELETE FROM incidents WHERE id = ${bh.input.body.id}`;
      bh.local.queryParam = [];
      bh = await this.deletesqlConn(bh);
      //appendnew_next_sd_8Mc7LO9CgBY3HHHJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8Mc7LO9CgBY3HHHJ');
    }
  }

  async deletesqlConn(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7D87qXYHj0u2b9p9'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.queryParam;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      bh = await this.deleteIncidentOutScript(bh);
      //appendnew_next_deletesqlConn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aW7SZY3scxpjUvnR');
    }
  }

  async deleteIncidentOutScript(bh) {
    try {
      console.log(bh.local.result);
      if (bh.local.result.affectedRows > 0) {
        bh.local.statusCode = 200;
        bh.local.result = {
          message: 'Incident  deleted successfully',
          data: [],
        };
      } else {
        bh.local.statusCode = 203;
        bh.local.result = {
          message: 'Unable to delete incodent',
          data: [],
        };
      }

      bh.local.responseData = {
        statusCode: bh.local.statusCode,
        result: bh.local.result,
      };

      this.updateIncidentLog(bh);
      await this.updateIncidentOut(bh);
      //appendnew_next_deleteIncidentOutScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xjKiMs0FSKpyO1gF');
    }
  }

  async deleteIncidentElseScript(bh) {
    try {
      bh.local.result = {};
      bh.local.result.affectedRows = 0;
      bh = await this.deleteIncidentOutScript(bh);
      //appendnew_next_deleteIncidentElseScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jcH0ulfplziHBgpM');
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
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_incidents_Catch
}
