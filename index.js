let classes = [
  {
    name: "American History",
    grade: 81,
    level: "AP",
    },
  {
    name: "English Language",
    grade: 96.15,
    level: "AP",
    },
  {
    name: "Computer Science",
    grade: 100,
    level: "AP",
    },
  {
    name: "Human Geography",
    grade: 92.47,
    level: "AP",
    },
  {
    name: "Physics 1",
    grade: 88.89,
    level: "AP",
    },
  {
    name: "Global Studies",
    grade: 89.69,
    level: "Honors",
    },
  {
    name: "Pre-Calculus",
    grade: 99.14,
    level: "Honors",
    },
]

let apClasses = classes.filter( (eachClass)=>{
  return eachClass.level == "AP"
})
let honorsClasses = classes.filter( (eachClass)=>{
  return eachClass.level == "Honors"
})
let apGpa = apClasses.map( (eachClass)=>{
  if(eachClass.grade >= 96.51){
    return 6.33
  } else if(eachClass.grade >= 89.51){
    return 6
  } else if(eachClass.grade >= 86.51){
    return 5.33
  } else if(eachClass.grade >= 79.51){
    return 5
  }else if(eachClass.grade >= 76.51){
    return 4.33
  }else{
    return 0
  }
})
let honorsGpa = honorsClasses.map( (eachClass)=>{
  if(eachClass.grade >= 96.51){
    return 5.33
  } else if(eachClass.grade >= 89.51){
    return 5
  } else if(eachClass.grade >= 86.51){
    return 4.33
  } else if(eachClass.grade >= 79.51){
    return 4
  }else if(eachClass.grade >= 76.51){
    return 3.33
  }else{
    return 0
  }
})
let sumAp = apGpa.reduce( (a ,c)=>{
  return a + c
})
let sumHonors = honorsGpa.reduce( (a , c)=>{
  return a + c
})
let finalGpa = ((sumAp + sumHonors) / classes.length).toFixed(2)
classes.forEach( (eachClass)=>{
  console.log(`In ${eachClass.level} ${eachClass.name} your grade is ${eachClass.grade}%`)
})

console.log(`Your weighted GPA is ${finalGpa}!`)
