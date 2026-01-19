type Prioridad = 'Baja' | 'Media' | 'Alta';

type Estado = 'Completada' | 'En progreso' | 'Pendiente';

export class Tarea {

constructor(
  public id: number,
  public nombre: string,
  public descripcion: string,
  public prioridad: Prioridad,
  public estado: Estado,
  public fechaCreacion: string,
  public fechaExpiracion: string
) {}

}