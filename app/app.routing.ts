import { Routes, RouterModule } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form.component';
import { mediaItemList } from './media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: ':medium', component: mediaItemList },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
