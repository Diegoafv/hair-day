import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours");

export function hoursLoad({date}) {

  hours.innerHTML = "";
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPassed = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPassed,
    };
  });

  opening.forEach(({hour, available}) => {

    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = dayjs(hour, "H:mm").format("h:mma");

    if (hour === "9:00") {
      hourHeaderAdd("Morning");
    } else if (hour === "13:00") {
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
