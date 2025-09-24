// normal but not efficient (1)
console.log(1)
console.log(2)
console.log(3)
console.log(" ")

// for loops (2)
for (let i = 1; i <= 3; i++){
    console.log(i)
}
console.log(" ")

// while (3)
i = 1;
while(i <= 3){
    console.log(i)
    i++
}
console.log(" ")

 // do while, atleast once (4)
 i=1;
 do{
     console.log(i)
     i++
 }while(i <= 3)
 console.log(" ")
 
 // skip count (5) in forloops
 
 for( let i = 2; i <= 20; i+=2){
     console.log(i)
 }
console.log(" ")

// array

grades = [75, 98, 99, 100]

// idk if this works
for (let i = 0; i < grade.length; i++){
    console.log(grades[i])
}
console.log(grades[2])
console.log(" ")

//sure!

 for( let i = 0; i < 4; i++){
     console.log(grades[i]) // brackets ID of element
 }
console.log(" ")

// idk how this works but it does!
for ( var grade of grades){
    console.log(grade)
}
