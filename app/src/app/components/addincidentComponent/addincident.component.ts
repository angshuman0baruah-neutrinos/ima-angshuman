/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    selector: 'bh-addincident',
    templateUrl: './addincident.template.html'
})

export class addincidentComponent extends NBaseComponent implements OnInit {

    addIncidentForm;
    currentDate;
    confirmView:boolean = false;

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<addincidentComponent>, private router: Router, private _snackBar: MatSnackBar, public addIncidentSrvs:addIncidentService) {
        super();
    }

    ngOnInit() {
        this.currentDate = new Date();
        this.addIncidentForm = this.fb.group({
            subject: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
            description: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
            priority: ['', [Validators.required, , Validators.pattern('[0-9]+')]],
            incidentDate: ['', [Validators.required]],
        })
    }

    addIncident() {
        if (this.addIncidentForm.valid) { 
            this.dialogRef.close();
            this.addIncidentSrvs.addIncidentClientService(this.addIncidentForm.value);
        } else {
            console.log("Please enter valid Data");
        }

    }
}
