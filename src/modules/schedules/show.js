import dayjs from "dayjs";
import { fetchScheduleByDay } from "../../services/fetch-schedule-by-day.js";

const periodMorning = document.querySelector("#period-morning");
const periodAfternoon = document.querySelector("#period-afternoon");
const periodEvening = document.querySelector("#period-evening");

export async function showSchedule({ dailySchedule }) {

  try {
    // Clear previous schedule
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodEvening.innerHTML = "";

    dailySchedule.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      item.setAttribute("data-id", schedule.id);
      time.textContent = dayjs(schedule.when).format("hh:mm A");
      name.textContent = schedule.name;

      const cancelIcon = document.createElement("img");
      cancelIcon.src = "./src/assets/cancel.svg";
      cancelIcon.alt = "Cancel";
      cancelIcon.classList.add("cancel-icon");

      item.append(time, name, cancelIcon);

      const hour = dayjs(schedule.when).hour();

      if (hour < 12) {
        periodMorning.appendChild(item);
      } else if (hour < 19) {
        periodAfternoon.appendChild(item);
      } else {
        periodEvening.appendChild(item);
      }
    });
  } catch (error) {
    console.error("Error displaying schedule:", error);
    alert("An error occurred while displaying the schedule. Please try again.");
    return;
  }

  if (!dailySchedule || dailySchedule.length === 0) {
    periodMorning.innerHTML = "<li>No appointments in the morning</li>";
    periodAfternoon.innerHTML = "<li>No appointments in the afternoon</li>";
    periodEvening.innerHTML = "<li>No appointments in the evening</li>";
    return;
  }
}
