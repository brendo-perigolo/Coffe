import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Categoria } from '../../Model/categoria-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {
 
  private http = inject (HttpClient)
  private categorias$ = new Subject<string[]>();

  apiUrl = "http://localhost:3000/categoria";

buscar(): Observable<Categoria[]>{
 return this.http.get<any[]>(this.apiUrl);
}

criar(categoria :any): Observable<any> {
  const url = "http://localhost:3000/categoria"

  return this.http.post<any>(url , categoria)
}

delete(id:number){
 return this.http.delete<void>(`${this.apiUrl}/${id}`)
}

}
