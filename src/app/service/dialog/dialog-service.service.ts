import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TituloFormComponent } from '../../components/shared/forms/titulo-form/titulo-form.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog : MatDialog) { }

  openDialog():void{
    console.log('ate aqui chegou')
    this.dialog.open(TituloFormComponent,{
      width : '400px',
      height : '600px',
    
    })
  }

  closeDialog(): void{
    this.dialog.closeAll
  }
}
