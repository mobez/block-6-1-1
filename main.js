"use strict";

function solveEquation(a, b, c) {
	let arr=[], descr;
  descr = (b**2)-4*a*c;
  console.log("discriminant:", descr);
  if (descr >= 0){
    if (descr){
      result[0] = (-b + Math.sqrt(descr) )/(2*a);
      result[1] = (-b - Math.sqrt(descr) )/(2*a);
    }else{
      result[0] = -b/(2*a);
    }
  }
	return arr;
}
const urav = solveEquation(1, -3, -4);
console.log("result:",urav);
