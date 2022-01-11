import pkg from "../../lerna.json";

// import type { IEvent } from "../../packages/calendar/app/types/webcomponent.type";

export interface CalendarProps {
  id: string;
  events: any[];
  calendarEventClick: (e) => void;
  changeCalendarDate: (e) => void;
  changeSelectedDate: (e) => void;
}

export const createCalendar = ({
  id,
  events,
  calendarEventClick,
  changeCalendarDate,
  changeSelectedDate,
}: CalendarProps) => {
  if (!document.getElementById("hb-calendar-events-script")) {
    const script = document.createElement("script");
    script.id = "hb-calendar-events-script";
    script.src = !window.location.href.includes("localhost")
      ? `https://cdn.jsdelivr.net/npm/@htmlbricks/hb-calendar-events@${pkg.version}/release/release.js`
      : "http://localhost:6006/calendar-events/dist/release.js";
    document.body.appendChild(script);
  }
  let c: HTMLElement;
  if (document.getElementById(id)) {
    c = document.getElementById(id);
  } else {
    c = document.createElement("hb-calendar-events");
    c.id = id;
    c.addEventListener("calendarEventClick", (e: any) =>
      calendarEventClick(e.detail)
    );
    c.addEventListener("changeCalendarDate", (e: any) =>
      changeCalendarDate(e.detail)
    );
    c.addEventListener("changeSelectedDate", (e: any) =>
      changeSelectedDate(e.detail)
    );
  }
  if (events) {
    c.setAttribute("events", JSON.stringify(events));
  } else {
    if (c.hasAttribute("events")) c.removeAttribute("events");
  }
  return c;
};
