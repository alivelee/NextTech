export function formatDate(date) {
  let now = new Date();
  let newDate = new Date(date);
  let newMonth = newDate.getMonth() + 1;
  let newDay = newDate.getDate();
  let newYear = newDate.getFullYear();
  let newHour = newDate.getHours();
  let newMinute = newDate.getMinutes();
  let newSecond = newDate.getSeconds();
  return `
    ${newYear}.${('0' + newMonth).slice(-2)}.${('0' + newDay).slice(-2)}
  `;
  // return {
  //   getComputedDay(){
  //     return `${newYear}/${('0' + newMonth).slice(-2)}/${('0' + newDay).slice(-2)}`;
  //   },
  //   getTimeDetail(){ 
  //     return `${newYear}/${('0' + newMonth).slice(-2)}/${('0' + newDay).slice(-2)} ${('0' + newHour).slice(-2)}:${('0' + newMinute).slice(-2)}:${('0' + newSecond).slice(-2)}`;
  //   }    
  // }
}
export function fromNow(date) {
  let now = new Date();
  let newDate = new Date(date);
  let diff = Math.floor( (now - newDate) / 1000 );
  let interval = Math.floor( diff / 31536000 );
  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(diff / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(diff / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(diff / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(diff / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(diff) + ' seconds'
}