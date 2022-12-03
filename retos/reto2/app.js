function countHours(year, holidays) {
  let hours = 0;
  holidays.forEach((d) => {
    const date = new Date(`${d}, ${year}`);
    if (date.getDay() !== 6 && date.getDay() !== 0) {
      hours += 2;
    }
  });

  return hours;
}

const holidays = ["01/06", "04/01", "12/25"];
const year = 2022;

const res = countHours(year, holidays);
console.log("Reto numero 2 en Javascript");
console.log({ horas: res });
