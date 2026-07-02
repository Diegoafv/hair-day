import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date");

selectedDate.addEventListener("change", () => {
  scheduleLoad();
});

export function scheduleLoad() {

  const date = selectedDate.value;
  hoursLoad({ date });
}
