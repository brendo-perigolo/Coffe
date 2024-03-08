import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TituloSharedService {
  private tipoAtualSubject = new BehaviorSubject<number>(0);

  setTipo(tipo: number): void {
    this.tipoAtualSubject.next(tipo);
  }

  getTipoAtualObservable(): Observable<number> {
    return this.tipoAtualSubject.asObservable();
  }
}
