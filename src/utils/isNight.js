export function isNight(startHour, endHour) {
  let orgDate = new Date();
  let localTime = orgDate.getTime();
  let localOffset = orgDate.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let offset = -7;
  let newTime = utc + 3600000 * offset;
  let newDate = new Date(newTime);
  let hours = newDate.getHours();
  let night = hours >= startHour || hours <= endHour;
  //console.log("night=" + night);
  //console.log("hours=" + hours);
  return night;
}
