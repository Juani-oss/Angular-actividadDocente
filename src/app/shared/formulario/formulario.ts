import { Component, inject, Input, signal } from '@angular/core';
import { ComentariosService } from '../../services/comentarios-service';
import { Comentario } from '../../models/comentario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
@Input() titulo!: string;
 @Input() campo1!: string;
 @Input() campo2!: string;
 @Input() campo3!: string;
 @Input() campo4!: string;
  @Input() boton!: string;

   private serviceComentario = inject(ComentariosService);

  //LISTA DE USUARIOS REACTIVA
  listaComentario = signal<Comentario[]>([]);

  //CREAR UN OBJETO DEL USUARIO QUE SE VA A GUARDAR, se vincula con el formulario

  nuevoComentario:Comentario = {
    name:'',
    producto:'',
    edad:'',
    comen:''
  };
//variable para controlar la etiqueta del registro

editando = false;

  //OBTENER O LEER USUARIOS

  ngOnInit() {
    this.obtenerComentario();
  }

  obtenerComentario() {
    this.serviceComentario.getComentarios().subscribe(datosComentario => {
      this.listaComentario.set(datosComentario);
    });
  }

  resetear() {
    this.editando = false;
    this.nuevoComentario = {
    name:'',
    producto:'',
    edad:'',
    comen:''
    };
  }

  //guardar usuario

  guardarComentario() {

    if (this.editando && this.nuevoComentario.id) {

      this.serviceComentario.putComentarios(this.nuevoComentario.id, this.nuevoComentario)
        .subscribe(() => {
          this.obtenerComentario();
          this.resetear();
        });

    } else {

      this.serviceComentario.postComentarios(this.nuevoComentario)
        .subscribe(() => {
          this.obtenerComentario();
          this.resetear();
        });
    }
  }


  //metodo eliminar

  eliminarUsuario(id:string){
    //CONFIRM : ALERTA QUE VIENE DEL NAVEGADOR = SIVER PARA PREGUNTAARLE AL USAURIO SI QUIERE ELIMINAR EL REGISTRO 

    if(confirm('Desea eliminar el registro')){
      this.serviceComentario.deleteComentarios(id).subscribe(()=>{
        //filtrar el usuario para eliminar de la tabla 
        //this.listaUsuarios.set(this.listaUsuarios().filter(u=>u.id !== id));
        this.obtenerComentario();
      })
    }
  }

  //metodo guardar usuario
  seleccionarParaEditar(user:Comentario){
    this.editando=true;
    this.nuevoComentario={ ...user};
  }
}
