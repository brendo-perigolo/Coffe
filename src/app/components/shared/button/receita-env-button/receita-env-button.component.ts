import { Component, inject } from "@angular/core";
import {} from "@angular/material/dialog";
import { DialogServiceService } from "../../../../service/dialog/dialog-service.service";
import { TituloSharedService } from "../../../../service/Shared/titulo-shared.service";

@Component({
  selector: "app-receita-env-button",
  standalone: true,
  imports: [],
  templateUrl: "./receita-env-button.component.html",
  styleUrl: "./receita-env-button.component.css",
})
export class ReceitaEnvButtonComponent {
  private dialogService = inject (DialogServiceService)
  private sharedTituloService = inject (TituloSharedService);

 

 openDialog(){
  this.sharedTituloService.setTipo(0);
  this.dialogService.openDialog()
 }  
  
}


