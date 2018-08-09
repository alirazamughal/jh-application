import { NgModule } from '@angular/core';

import { JhDefaultAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhDefaultAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhDefaultAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhDefaultAppSharedCommonModule {}
