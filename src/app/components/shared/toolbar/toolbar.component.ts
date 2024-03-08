import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule , MatButtonModule ,MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  private router = inject(Router)


  goHome(){
    this.router.navigate(['/home']);
   }

}
