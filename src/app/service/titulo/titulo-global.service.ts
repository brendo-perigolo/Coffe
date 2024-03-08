import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";
import { Titulo_Interface } from "../../Model/titulo-Interface";

@Injectable({
  providedIn: "root",
})
export class TituloGlobalService {
  // Injeçao de Depedencias

  private http = inject(HttpClient);

  apiUrl = "http://localhost:3000/titulo";

  // Observables

  private titulo$ = new Subject<void>();

  buscarTituloPorTipo(tipo: number): Observable<Titulo_Interface[]> {
    return this.http.get<Titulo_Interface[]>(this.apiUrl);
  }

  remover(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.atualizarDados();
        this.titulo$.next();
      })
    );
  }

  buscarTitulo(tipo: number): Observable<Titulo_Interface> {
    const params = new HttpParams().set("tipo", tipo.toString());

    return this.http.get<Titulo_Interface>(this.apiUrl, { params });
  }

  // Criando o Titulo ja passando a resposta em Subject para atualizar a Grid Automaticamente apos criaçao de um novo Titulo
  criarTitulo(formulario: FormGroup): Observable<any> {
    const novoTitulo = formulario.value;

    return this.http.post(this.apiUrl, novoTitulo).pipe(
      tap(() => {
        this.atualizarDados();
        this.titulo$.next();
      })
    );
  }

  // pegar o valor e atualiza-los

  private valorTitulos = new BehaviorSubject<any[]>([]);

  dadosAtualizados$: Observable<any[]> = this.valorTitulos.asObservable();

  obterValor(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  atualizarDados() {
    this.obterValor().subscribe((totais) => {
      this.valorTitulos.next(totais);
    });
  }

  getTituloObs(): Observable<void> {
    return this.titulo$.asObservable();
  }
}
