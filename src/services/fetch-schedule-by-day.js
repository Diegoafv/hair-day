import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function fetchScheduleByDay( {date} ) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const filteredData = data.filter(schedule => dayjs(schedule.when).isSame(dayjs(date), "day"));

    return filteredData;

  } catch (error) {
    console.error("Error fetching schedule by day:", error);
    alert("An error occurred while fetching the schedule. Please try again.");

    return [];
  }
}
