// code your solution here
function saturdayFun(day = 'Saturday') {
  if (day === 'Saturday') {
    return 'This Saturday, I want to roller-skate!';
  } else {
    return 'This Saturday, I want to bathe my dog!';
  }
}

console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
console.log(saturdayFun('Sunday')); // Output: This Sunday, I want to bathe my dog!

function mondayWork(weekday = 'Monday') {
  if (weekday === 'Monday') {
    return 'This Monday, I will go to the office.';
  } else{
    return 'This Monday, I will work from home.';
  }  
}

function wrapAdjective(emphatic) {
  return function(adjective) {
    if (emphatic === '*') {
      return `You are *a hard worker*!`;
    } else if (emphatic === '||') {
      return `You are ||a dedicated programmer||!`;
    } else {
      return `You are ${adjective}!`;
    }
  };
}

const highlight1 = wrapAdjective('*');
console.log(highlight1('a hard worker'));

const highlight2 = wrapAdjective('||');
console.log(highlight2('a dedicated programmer'));