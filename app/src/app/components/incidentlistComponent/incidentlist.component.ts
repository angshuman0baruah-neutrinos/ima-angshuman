/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { addIncidentService } from '../../sd-services/addIncidentService';



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-incidentlist',
    templateUrl: './incidentlist.template.html'
})

export class incidentlistComponent extends NBaseComponent implements OnInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
    @ViewChild(MatSort) sort: MatSort;

    tableData: any;
    resTableData: any;

    constructor(private router: Router, public addIncidentSrvs: addIncidentService) {
        super();
    }

    async getTableData() {
        let resData = (await this.addIncidentSrvs.getIncidentData()).local.outPutData;
        this.tableData = new MatTableDataSource(resData);
        this.tableData.paginator = this.paginator;
        this.tableData.sort = this.sort;
    }


    homeClick = function () {
        this.router.navigateByUrl('/home');
    };

    ngOnInit() {
        this.getTableData();
        
    }


    filterIncident(data) {
        if (data.length > 1) {
            this.tableData.filter = data.trim().toLocaleLowerCase()
        } else {
            this.tableData.filter = data
        }
    }
}
