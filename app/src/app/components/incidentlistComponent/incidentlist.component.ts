/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';


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

    @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator
    @ViewChild(MatSort) sort: MatSort;

    tableData = new MatTableDataSource([
        {
            "subject": "Task 1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-09",
            "priority": "1"
        },
        {
            "subject": "Task 2",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-10",
            "priority": "1"
        },
        {
            "subject": "Task 3",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-19",
            "priority": "1"
        },
        {
            "subject": "Task 4",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-29",
            "priority": "1"
        },
        {
            "subject": "Task 5",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-11",
            "priority": "1"
        },
        {
            "subject": "Task 6",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-21",
            "priority": "1"
        },
        {
            "subject": "Task 7",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-29",
            "priority": "1"
        },
        {
            "subject": "Task 8",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-04-29",
            "priority": "1"
        },
        {
            "subject": "Task 9",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-02-19",
            "priority": "1"
        },
        {
            "subject": "Task 10",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-09",
            "priority": "1"
        },
        {
            "subject": "Task 11",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-05-09",
            "priority": "1"
        },
        {
            "subject": "Task 12",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "incidentDate": "2021-03-09",
            "priority": "1"
        }
    ]);
    constructor(private router: Router) {
        super();
    }

    

    homeClick = function () {
        this.router.navigateByUrl('/home');
    };

    ngOnInit() {
        this.tableData.paginator= this.paginator
    }

    ngAfterViewInit(){
        this.tableData.sort= this.sort
    }

    filterIncident(data) {
        if (data.length > 1) {
            this.tableData.filter = data.trim().toLocaleLowerCase()
        } else {
            this.tableData.filter = data       
        }
    }
}
