import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directivas',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo-directivas.component.html',
  styleUrl: './ejemplo-directivas.component.css',
})
export class EjemploDirectivasComponent {
  mostrarAlumnos = false;
  mostrarCursos = false;

  alumnosLista: Alumno = [
    { id: 1, nombre: 'Sergio', apellido: 'Garcia' },
    { id: 2, nombre: 'Juan', apellido: 'Perez' },
    { id: 3, nombre: 'Maria', apellido: 'Lopez' },
    { id: 4, nombre: 'Pedro', apellido: 'Gomez' },
  ];

  cursosLista: Curso = [
    { id: 1, nombre: 'Angular', precio: 1230 },
    { id: 2, nombre: 'React', precio: 4030 },
    { id: 3, nombre: 'Vue', precio: 2030 },
    { id: 4, nombre: 'Svelte', precio: 4050 },
  ];

  verAlumnos() {
    this.mostrarAlumnos = !this.mostrarAlumnos;
  }

  verCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}

type Alumno = Array<{
  id: number;
  nombre: string;
  apellido: string;
}>;

type Curso = Array<{
  id: number;
  nombre: string;
  precio: number;
}>;
