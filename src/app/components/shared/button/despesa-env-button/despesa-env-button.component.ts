import { Component, inject } from '@angular/core';
import { TituloSharedService } from '../../../../service/Shared/titulo-shared.service';
import { DialogServiceService } from '../../../../service/dialog/dialog-service.service';

@Component({
  selector: 'app-despesa-env-button',
  standalone: true,
  imports: [],
  templateUrl: './despesa-env-button.component.html',
  styleUrl: './despesa-env-button.component.css'
})
export class DespesaEnvButtonComponent {

  private dialogService = inject (DialogServiceService)
  private sharedTituloService = inject(TituloSharedService)

  openDialog(){
    this.sharedTituloService.setTipo(1);
    this.dialogService.openDialog()
   }  
    

}
