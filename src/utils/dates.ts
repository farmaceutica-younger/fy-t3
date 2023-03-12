import { format } from "date-fns";
import { it } from "date-fns/locale";

export const formatJobDate = (date: string) =>
  format(new Date(date), "dd MMMM yyyy", { locale: it });

export const formatDate = (date: Date) =>
  format(date, "eeee dd MMMM yyyy", { locale: it });

export const formatTime = (date: Date) => format(date, "HH:mm", { locale: it });

export const formatDateTime = (date: Date) =>
  format(date, "dd MMMM yyyy HH:mm", { locale: it });

export const getEventDate = (start: Date | string, stop: Date | string) => {
  start = new Date(start);
  stop = new Date(stop);
  if (start.toDateString() === stop.toDateString()) {
    return `${formatDate(start)} ${formatTime(start)} - ${formatTime(stop)}`;
  }
  return `${formatDateTime(start)} - ${formatDateTime(stop)}`;
};
