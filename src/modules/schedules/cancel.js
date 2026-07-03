import { cancelSchedule } from "../../services/cancel-schedule.js";
import { scheduleLoad } from "./load.js";
const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {

      const item = event.target.closest("li");
      const {id} = item.dataset;

      if (id) {
        const confirmCancel = confirm("Are you sure you want to cancel this appointment?");

        if (confirmCancel) {
          await cancelSchedule({scheduleId: id});
          await scheduleLoad();

        }
      }
    }
    else {
      console.log("Clicked on a non-cancel element.");
    }
  });
});
