import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css',
})
export class EjemploPipesComponent {
  fechaActual = new Date();

  nombres = 'antony alexander';

  monto = 4564433.76;

  porcentaje = 0.2334;

  persona = {
    nombre: 'Juan',
    apellido: 'Garcia',
    rol: 'docente',
  };
}
