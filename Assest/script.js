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

 // 2) Custom bir array classi yaradin.
 // Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.

 class CustomArray{

  constructor(array){
      this.array=array
  }

  find(id){
    let value
    for (let i = 0; i < this.array.length; i++) {
      if(this.array[i]==id){

        return value=this.array[i]
    
      }
      
    }
    return value
  }


push(value){

    this.array[length]=value
    this.array[length++]
    return this.array

}


 }
 var customarr= new CustomArray([])
 customarr.push("salam")
 customarr.push("hello")
 customarr.push(543)
 customarr.push(221)

 console.log(customarr)
 console.log(customarr.find(221))
 