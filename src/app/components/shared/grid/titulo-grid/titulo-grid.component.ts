import { Component, Input, SimpleChanges, inject } from "@angular/core";
import { Titulo_Interface } from "../../../../Model/titulo-Interface";
import { CommonModule } from "@angular/common";
import { Subject, Subscription, takeUntil } from "rxjs";
import { TituloGlobalService } from "../../../../service/titulo/titulo-global.service";
import { MatButton } from "@angular/material/button";
import {MatMenuModule} from '@angular/material/menu';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-titulo-grid",
  standalone: true,
  imports: [CommonModule , MatButton , MatMenuModule , MatIcon],
  templateUrl: "./titulo-grid.component.html",
  styleUrl: "./titulo-grid.component.css",
})
export class TituloGridComponent {
  @Input() tipo: number = 0;

  private tituloService = inject(TituloGlobalService);

  private assinado$ = new Subject<void>();

  dados: any;

  ngOnInit() {
    this.obterTitulo();

    this.tituloService.getTituloObs()
      .pipe(takeUntil(this.assinado$))
      .subscribe(() => {
        this.obterTitulo();
      });
  }

  deletar(id: any){
    this.tituloService.remover(id)
    .pipe(takeUntil(
      this.assinado$
    )).subscribe(()=>{
     this.obterTitulo();
    })

  }

  private obterTitulo() {
    this.tituloService.buscarTitulo(this.tipo).subscribe((dados) => {
      this.dados = dados;
    });
  }

  formatarNumero(numero: number): string {
    const partes = numero.toFixed(2).split(".");
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return partes.join(",");
  }

  ngOnDestroy() {
    this.assinado$.next();
    this.assinado$.complete();
  }
}
