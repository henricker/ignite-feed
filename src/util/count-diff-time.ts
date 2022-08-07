import dayjs from "dayjs";

export function countDiffTime(date: Date) {
  const diffDay = dayjs(new Date()).diff(date, "day");

  if (diffDay > 0) {
    return `${diffDay}d`;
  }

  const diffHour = Math.ceil(dayjs(new Date()).diff(date, "hours"));

  if (diffHour > 0) {
    return `${diffHour}h`;
  }

  const diffMinute = Math.ceil(dayjs(new Date()).diff(date, "minutes"));

  return `${diffMinute}m`;
}
