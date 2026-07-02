import dayjs from "dayjs";

const form = document.querySelector("form");
const customerName = document.querySelector("#customer");
const selectedDate = document.querySelector("#date");

const today = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = today;
selectedDate.min = today;


form.onsubmit = (event) => {
  event.preventDefault();

  try {
    const name = customerName.value.trim();

    if(!name) {
      return alert("Please enter a valid name.");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if(!hourSelected) {
      return alert("Please select a valid time slot.");
    }

    const hour = hourSelected.innerText;
    const when = dayjs(`${selectedDate.value} ${hour}`, "YYYY-MM-DD h:mma");
    const id = new Date().getTime();

    console.log({
      id,
      name,
      when: when.format(),
    })

  } catch (error) {
    alert("An error occurred while submitting the form. Please try again.");
    console.error(error);
  }
};
