import { apiConfig } from "./api-config.js";

export async function cancelSchedule({scheduleId}) {

  try {
    console.log(`Attempting to cancel schedule with ID: ${scheduleId}`);
    const response =await fetch(`${apiConfig.baseURL}/schedules/${scheduleId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(`Schedule canceled successfully.`);
    }
    else {
      console.log(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error canceling appointment:", error);
    alert("An error occurred while canceling the appointment. Please try again.");
  }
}
