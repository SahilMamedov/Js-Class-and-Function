class CustomMatch{

    constructor(num){
        this.num=num
    }


plus(numPlus){
 this.num += numPlus
return this
}

minus(numMinus){
     this.num -= numMinus
     return this
}

multiply(multNum){
    this.num*=multNum
    return this
}
divide(divideNum){
    this.num/=divideNum
    return this
}



}
var result= new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)

 console.log(result)