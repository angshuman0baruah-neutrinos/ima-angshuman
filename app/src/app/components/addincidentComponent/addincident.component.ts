/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


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

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<addincidentComponent>, private router: Router, private _snackBar: MatSnackBar) {
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
            console.log(this.addIncidentForm.value);
            var msg = `Incident Data added successfully `;
            this._snackBar.open(msg, '', {
                duration: 2000,
                panelClass: ['success-snackbar']
            });
            this.dialogRef.close();
            setTimeout(() => {
                this.router.navigateByUrl('/incidentList');
            }, 2000);  //5s

        } else {
            console.log("Please enter valid Data");
        }

    }
}
