import { Event, EventTicket } from "~/proto/fy/blog/v1/models";
import { formatDate, formatTime } from "~/utils/dates";

export function getTicketImage(
  ticket: Pick<EventTicket, "avatar" | "firstName" | "ticketNum">,
  event: Pick<Event, "title" | "startDate" | "endDate" | "location">,
  transparent = false
) {
  const query = {
    name: ticket.firstName,
    ticket: String(ticket.ticketNum),
    avatar: ticket.avatar,
    loc: event.location,
    event: event.title,
    date: formatDate(event.startDate!),
    time: `${formatTime(event.startDate || new Date())} - ${formatTime(
      event.endDate || new Date()
    )}`,
    transparent: transparent ? "true" : "",
  };
  const url = new URL("https://tickets.dev.ludusrusso.space/ticket");
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.append(key, value);
  }
  return url.href;
}
