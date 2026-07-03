import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours");

export function hoursLoad({date, dailySchedule}) {

  hours.innerHTML = "";

  const booked = dailySchedule.map((schedule) => {
    return dayjs(schedule.when).format("HH:mm");
  });


  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPassed = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !booked.includes(hour) && !isHourPassed;

    return {
      hour,
      available,
    };
  });

  opening.forEach(({hour, available}) => {

    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = dayjs(hour, "H:mm").format("h:mma");

    if (hour === "9:00") {
      hourHeaderAdd("Morning");
    } else if (hour === "12:00") {
      hourHeaderAdd("Afternoon");
    } else if (hour === "19:00") {
      hourHeaderAdd("Evening");
    }
    hours.appendChild(li);
  });

  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.appendChild(header);
}
