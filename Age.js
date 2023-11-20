// to target the  button  i have used document.getElement id .  
// to work button. i have used click event listener. after click the button. will call calculate function.

document.getElementById('Sub_btn').addEventListener('click',calculate);

// calcualte function
// then created function for take input from user in that will store Day , Year ,Month.
function calculate(){
    // user input date
    let y1=document.getElementById('year').value
    let m1=document.getElementById('month').value
    let d1=document.getElementById('day').value

    // current dates
    // then  current date will store in y2 . have for that used new date full year.  current year will store. 
    // in m2 will store current month.in d2 will store current day .
     let y2= new Date().getFullYear();
     let m2= new Date().getMonth()+1;
     let d2= new Date().getDate();
    //  for understanding i have used console log .for showing current date.
    //  console.log(d2,m2,y2);

     let dayBox=document.getElementById ('sp_day')
     let monthBox=document.getElementById ('sp_month')
     let yearBox=document.getElementById ('sp_year')

// calculation
// then i have used variable . var d in that will have day, Var m in that will have month,  Var y in that will have year.
var d; var m; var y;
//  then for month i have created array.
let month=[31,28,31,30,31,30,31,31,30,31,30,31]

// i have used if condition. 
// in that if user  year  will less than or equal to  current year . month iess than or equal to 12 .
//  day less than or equal to 31.  if condition will executed.
if(y1 <= y2 && m1 <= 12 && d1 <= 31){
    // main logic
    // i have used if condition
// if user enter date will  greater than current date. so d2 value will d2+ month (m2-1).m2 value will m2-1.
    if(d1>d2){
        d2=d2 + month[m2 - 1];
        m2=m2 - 1

    }
    // if user enter month will greater than current month so m2 value will  m2+12 and y2 value will y2-1.
    if(m1>m2){
        m2= m2 + 12;
        y2= y2 - 1;

    }

    d=d2-d1;
    m=m2-m1;
    y=y2-y1;

    // then in day box i have to day  text content
    dayBox.textContent=d;
    monthBox.textContent=m;
    yearBox.textContent=y;


}
// otherwise  else will execute. that will show alert message. 
else{
    //  for blank the input of user. i have used array.from in input .and for each loop.
    let inputs=document.getElementsByClassName('birth_inp')
    Array.from(inputs).forEach((e)=>{
     e.value=" "
    })
alert('Please enter valid date')

 }

     
    
     

}

