"use strict";

function solveEquation(a, b, c) {
	let arr=[], descr;
  descr = (b**2)-4*a*c;
  console.log("discriminant:", descr);
  if (descr >= 0){
    if (descr){
      arr[0] = (-b + Math.sqrt(descr) )/(2*a);
      arr[1] = (-b - Math.sqrt(descr) )/(2*a);
    }else{
      arr[0] = -b/(2*a);
    }
  }
	return arr;
}
const urav = solveEquation(1, -3, -4);
console.log("result:",urav);
