"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  let x;
  let y;
  d = b**2 - 4*a*c;
  if (d < 0) {
    arr;
  } else if (d === 0) {
    x = -b/2*a;
    arr.push(x);
  } else {
    x = (-b + Math.sqrt(d) )/(2*a);
    y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x, y);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent/1200;
  let sumToBank = amount - contribution;
  let monthPay = sumToBank * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  let allSum = monthPay*countMonths;
  return Number(allSum.toFixed(2));
}