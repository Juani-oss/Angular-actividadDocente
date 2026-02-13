import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  private http = inject(HttpClient);

  private API_COMENTARIOS = 'https://app-fire-622f6-default-rtdb.firebaseio.com';

  /*METODO GET - LEER
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API_USUARIOS);
  }*/

    getComentarios():Observable<Comentario[]>{
      return this.http.get<{[key:string]:Comentario}>(`${this.API_COMENTARIOS}/comentarios.json`).pipe(
        map(respuesta =>{
          if(!respuesta){
            return [];
          }
          return Object.keys(respuesta).map(id =>{
            const comentariosConId = { ...respuesta[id], id:id};
            return comentariosConId;
          })
        })
      );
    }

  //METODO POST-ENVIAR

postComentarios(comentario: Comentario):Observable<Comentario>{
  return this.http.post<Comentario>(`${this.API_COMENTARIOS}/comentarios.json`, comentario);
}

//mmetodo pu
putComentarios(id: string, comentario: Comentario): Observable<Comentario> {
  return this.http.put<Comentario>(`${this.API_COMENTARIOS}/comentarios/${id}.json`, comentario);
}


//METODO DELETE
deleteComentarios(id: string): Observable<void> {
  return this.http.delete<void>(`${this.API_COMENTARIOS}/comentarios/${id}.json`);        
}
}
