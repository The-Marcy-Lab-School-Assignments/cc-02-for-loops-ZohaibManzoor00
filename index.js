//1
let countToTen = () => { for(let i = 1; i <=10; i++) console.log(i) }
//countToTen()

//2
let countFromOne = (num) => { for(let i = 1; i <= num; i++) console.log(i) }
//countFromOne(3)

//3
let countEveryEven = (num) => { for(let i = 1; i <= num; i++) {
    if( i % 2 === 0){
        console.log(i)
        }
    } 
}
//countEveryEven(10)

//4
let countEveryOdd = (num) => { for(let i = 1; i <= num; i++) {
    if( i % 2 !== 0){
        console.log(i)
        }
    } 
}
//countEveryOdd(10)


//5 
let countEvens = (array) => {
    let evenInt = [];
    for(let i = 0; i < array.length; i++){
        if(i % 2 !== 0){
            evenInt.push(array[i])
        } return evenInt.length 
    } 
    
}


console.log(countEvens([1,4,5,6,7,2]))

