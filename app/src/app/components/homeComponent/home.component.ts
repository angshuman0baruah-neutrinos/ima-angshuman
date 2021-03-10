/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
//import { MatDialog } from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { addincidentComponent } from '../addincidentComponent/addincident.component';



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})



export class homeComponent extends NBaseComponent implements OnInit {

    constructor(public dialog: MatDialog) {
        super();
    }

    ngOnInit() {

    }

    openDialog(): void {
        const dialogRef = this.dialog.open(addincidentComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}

