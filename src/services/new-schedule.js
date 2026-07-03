import { apiConfig } from "./api-config.js";

export async function newSchedule({ id, name, when }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    if (!response.ok) {
      throw new Error("Failed to create a new schedule.");
    } else {
      alert("Schedule created successfully!");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    alert("An error occurred while creating a new schedule. Please try again.");
  }
}
