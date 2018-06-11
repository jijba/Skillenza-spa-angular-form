import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GetFormComponent } from './get-form/get-form.component';

// Route config let's you map routes to components
const routes= [
    {
      path: '',
      component: UserComponent
  },
  {
    path: 'get-form',
    component: GetFormComponent
  }
];

export const appRouting = RouterModule.forRoot(routes);
