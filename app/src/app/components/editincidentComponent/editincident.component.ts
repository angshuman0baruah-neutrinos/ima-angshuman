/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    selector: 'bh-editincident',
    templateUrl: './editincident.template.html'
})

export class editincidentComponent extends NBaseComponent implements OnInit {
    editIncidentForm;
    currentDate;
    editableData: any;
    constructor(public addIncidentSrvs:addIncidentService, public fb: FormBuilder, public dialogRef: MatDialogRef<editincidentComponent>, @Inject(MAT_DIALOG_DATA) data) {
        super();
        this.editableData = data;

    }

    ngOnInit() {
        this.currentDate = new Date();
        this.editIncidentForm = this.fb.group({
            subject: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
            description: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
            priority: ['', [Validators.required, , Validators.pattern('[0-9]+')]],
            incidentDate: ['', [Validators.required]],
        })
    }

    updateIncident() {
        this.editIncidentForm.value['id'] = this.editableData.id; 
        if (this.editIncidentForm.valid) {
            this.dialogRef.close();
            this.addIncidentSrvs.editIncidentClientService(this.editIncidentForm.value);
        } else {
            console.log("Please enter valid Data");
        }
    }
}
