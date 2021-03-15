/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
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
    selector: 'bh-deleteconfirmation',
    templateUrl: './deleteconfirmation.template.html'
})

export class deleteconfirmationComponent extends NBaseComponent implements OnInit {
    editIncidentForm: any;
    deletableData: any;
    constructor(public addIncidentSrvs: addIncidentService, public dialogRef: MatDialogRef<deleteconfirmationComponent>, @Inject(MAT_DIALOG_DATA) data) {
        super();
        this.deletableData = data;
    }

    ngOnInit() {

    }

    cancelDelete() {
        this.dialogRef.close();
    }


    deleteIncident() {
        this.dialogRef.close();
        this.addIncidentSrvs.deleteIncidentClientService(this.deletableData.id);
    }
}
