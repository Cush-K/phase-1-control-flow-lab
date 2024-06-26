function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return `This one is on me!`
  }
  else if (distance > 400 && distance <= 2000) {
    return `That will be twenty bucks.`
  }
  else if (distance > 2000 && distance <= 2500) {
    return `I will gladly take your thirty bucks.`
  }
  else {
    return `No can do.`
  }
}

function ternaryCheckCity(city){
  
  return city === `NYC` ? `Ok, sounds good.` : `No go.`;

  }

  ternaryCheckCity(city);

  function getSum(num1, num2) {
    return num1+num2;
  }

  getSum(1, `1`); /*concatenate*/

function switchOnCharmFromTip(tip){
      
  switch(tip) {    
    case `generous`:
      return `Thank you so much.`;
      break;
    case `not as generous`:
      return `Thank you.`;
    break;
    default:
      return `Bye.`
  }
}