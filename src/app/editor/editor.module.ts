import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditorComponent } from './editor.component';
import { CoreModule } from '../core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
    {path: 'editor', component: EditorComponent},
  ];
@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        CoreModule,
        QuillModule,
        RouterModule.forChild(routes)
    ],
    declarations: [   
        EditorComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class EditorModule {
}
