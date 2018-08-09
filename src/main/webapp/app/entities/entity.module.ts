import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhDefaultAppRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhDefaultAppCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhDefaultAppLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhDefaultAppDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhDefaultAppTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhDefaultAppEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhDefaultAppJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhDefaultAppJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhDefaultAppRegionMySuffixModule,
        JhDefaultAppCountryMySuffixModule,
        JhDefaultAppLocationMySuffixModule,
        JhDefaultAppDepartmentMySuffixModule,
        JhDefaultAppTaskMySuffixModule,
        JhDefaultAppEmployeeMySuffixModule,
        JhDefaultAppJobMySuffixModule,
        JhDefaultAppJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhDefaultAppEntityModule {}
