import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhDefaultAppSharedModule } from 'app/shared';
import {
    LocationMySuffixComponent,
    LocationMySuffixDetailComponent,
    LocationMySuffixUpdateComponent,
    LocationMySuffixDeletePopupComponent,
    LocationMySuffixDeleteDialogComponent,
    locationRoute,
    locationPopupRoute
} from './';

const ENTITY_STATES = [...locationRoute, ...locationPopupRoute];

@NgModule({
    imports: [JhDefaultAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LocationMySuffixComponent,
        LocationMySuffixDetailComponent,
        LocationMySuffixUpdateComponent,
        LocationMySuffixDeleteDialogComponent,
        LocationMySuffixDeletePopupComponent
    ],
    entryComponents: [
        LocationMySuffixComponent,
        LocationMySuffixUpdateComponent,
        LocationMySuffixDeleteDialogComponent,
        LocationMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhDefaultAppLocationMySuffixModule {}
