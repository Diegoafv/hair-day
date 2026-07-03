import { fetchScheduleByDay } from "../../services/fetch-schedule-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { showSchedule } from "../schedules/show.js";

const selectedDate = document.querySelector("#date");

selectedDate.addEventListener("change", () => {
  scheduleLoad();
});

export async function scheduleLoad() {

  const date = selectedDate.value;

  const dailySchedule = await fetchScheduleByDay({ date });

  showSchedule({ dailySchedule });

  hoursLoad({ date, dailySchedule });
}
