import { Component } from '@angular/core';
import { Tarea } from '../../../models/task.model';
import { NgForOf, NgClass,NgIf } from '@angular/common';


@Component({
  selector: 'app-tasklist',
  imports: [NgForOf, NgClass,NgIf],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

  tareas:Tarea[] = [
    new Tarea(1, "Prueba 1", "Descripcion 1", 'Media', 'En progreso',  new Date().toISOString().slice(0, 16), new Date(2026, 0, 19, 15, 30).toISOString().slice(0, 16)),
    new Tarea(2, "Prueba 2", "Descripcion 2", 'Baja', 'Completada',  new Date().toISOString().slice(0, 16), new Date(2024, 0, 19, 15, 30).toISOString().slice(0, 16)),
    new Tarea(3, "Prueba 3", "Descripcion 3", 'Alta', 'En progreso',  new Date().toISOString().slice(0, 16), new Date(2025, 1, 19, 15, 30).toISOString().slice(0, 16)),
    new Tarea(4, "Prueba 4", "Descripcion 4", 'Media', 'Pendiente',  new Date().toISOString().slice(0, 16), new Date(2026, 0, 19, 15, 30).toISOString().slice(0, 16)),
    new Tarea(5, "Prueba 5", "Descripcion 5", 'Alta', 'En progreso',  new Date().toISOString().slice(0, 16), new Date(2026, 0, 19, 15, 30).toISOString().slice(0, 16)),
    new Tarea(6, "Prueba 6", "Descripcion 6", 'Baja', 'Pendiente',  new Date().toISOString().slice(0, 16), new Date(2026, 0, 19, 15, 30).toISOString().slice(0, 16))
  ]
}
