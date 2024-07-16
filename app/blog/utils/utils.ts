import { format } from 'date-fns';

export const formatearFecha = (fecha: Date) => {
  return format(fecha, "MMM, yyyy")
}