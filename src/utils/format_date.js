import dayjs from "dayjs";
export function formatMonthDay(date, formatValue = "MM月DD日") {
  return dayjs(date).format(formatValue);
}
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}
