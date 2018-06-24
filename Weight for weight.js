function orderWeight(strng){
  var numbers=strng.split(" ").sort().filter(elem=>/[\d]+/.test(elem))
  var newNum=numbers.map(num=>num.split("").reduce((a,b)=>Number(a)+Number(b)))
  
  var rightOrder=[0,999999]
  
  for (i=0;i<newNum.length;i++){
    for (j=0;j<rightOrder.length;j++){
      if (rightOrder[j+1]>newNum[i]>rightOrder[j]){
        rightOrder.splice(j+1,0,numbers[i])
        break;
      }
    }
  }
return rightOrder.join(" ")
    
}

console.log(orderWeight("2000 10003 1234000   44444444 9999 11 11 22 123"))
