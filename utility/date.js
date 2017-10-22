export function formatDate(date) {
  let newDate = new Date(date);
  let newMonth = newDate.getMonth() + 1;
  let newDay = newDate.getDate();
  let newYear = newDate.getFullYear();
  let newHour = newDate.getHours();
  let newMinute = newDate.getMinutes();
  let newSecond = newDate.getSeconds();
  return `
    ${newYear}/${('0' + newMonth).slice(-2)}/${('0' + newDay).slice(-2)}
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
