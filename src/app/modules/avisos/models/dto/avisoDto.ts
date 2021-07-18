export class avisoDto {
  avisoId: string = '';
  archivoId: string = '';
  titulo: string = '';
  tipoArchivo: string = '';
  tipoAviso: string = '';
  fechaInicio: Date = new Date();
  fechaFinalizacion: Date = new Date();
  fechaInicioDescripcion: string = '';
  fechaFinalizacionDescripcion = '';  
  url: string = '';
  tipoArchivoFormato: string = '';
  duracion: number = 0;
  nombreArchivo: string = '';
  id: string = '';
  createdById: string = '';
  creationDate: string = '';
  modifiedById: string = '';
  modificationDate: string = '';
  removed: boolean = false;
}
