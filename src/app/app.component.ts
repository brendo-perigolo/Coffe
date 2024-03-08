import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coffe';

  private router = inject(Router)

   ngOnInit(){
    this.router.navigate(['/home'])
   }
  
}
