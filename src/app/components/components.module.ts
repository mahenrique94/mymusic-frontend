import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContainerModule } from '@/components/container/container.module'
import { FilterModule } from '@/components/filter/filter.module'
import { HeaderModule } from '@/components/header/header.module'
import { MenuModule } from '@/components/menu/menu.module'
import { ProgressBarComponent } from '@/components/progress-bar/progress-bar.component'
import { TableModule } from '@/components/table/table.module'

import { ContainerComponent } from '@/components/container/container.component'
import { FilterComponent } from '@/components/filter/filter.component'
import { HeaderComponent } from '@/components/header/header.component'
import { MenuComponent } from '@/components/menu/menu.component'
import { ProgressBarModule } from '@/components/progress-bar/progress-bar.module'
import { TableComponent } from '@/components/table/table.component'

@NgModule({
    exports: [
        ContainerComponent,
        FilterComponent,
        HeaderComponent,
        MenuComponent,
        ProgressBarComponent,
        TableComponent
    ],
    imports: [
        CommonModule,
        ContainerModule,
        FilterModule,
        HeaderModule,
        MenuModule,
        ProgressBarModule,
        TableModule
    ]
})
export class ComponentsModule { }
