        // !!!!!!!!!!!! assigment 12-13 !!!!!!!!!!!!




//// ? Q1 answer

let text7;
let text2 = prompt("Enter any value or alphabet")

if (text2 >= "A" && text2 <= "Z")
          document.write(
          " is an UpperCase character <br>");
        else if (text2 >= "a" && text2 <= "z")
          document.write(
          " is an LowerCase character <br>");
        else document.write(
        " is a number <br>");

// ? Q2 answer

var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else if(parseInt(num2, 10) > parseInt(num1, 10)) 
{console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else {console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
  

// ? Q3 answer

let text8;
let text3 = prompt("Enter any digit value ")
   
if (text3 > 1 )
          document.writeln(" is positive number <br>");
        else if (text3 < -1)
          document.writeln(" the value is negtive <br>");
        else 
        document.writeln(" the value is zero <br>");

// ? Q4 answer


let text9;
let vowels = prompt("Enter any alphabet")

if (vowels == 'a' || vowels == 'e' || vowels == 'i' ||
vowels == 'o' || vowels == 'u')
          document.write(" this is a vowel <br>");
        else 
          document.write(" this is not a vowel <br>");

// ? Q5 answer 

let text;
let email = prompt("Enter your email")
let password = prompt("enter your password")
if (email == "abc@gmail.com"&&password =="hello")
          document.write("Correct! The password you entered matches the original password<br>");
        else 
          document.write("Incorrect password<br>");

// ? Q6 answer

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

// ? Q7 answer

let time2;
let time = prompt("Enter any time 4 digit :1200")

if (time >= 0000 && time <=1200)
          document.write(" Good Morning <br>");
        else if (time >= 1200 && time <= 1700)
          document.write(" Good Afternoon  <br>");
        else if (time >= 1700 && time <= 2100)
         document.write(" Good Evening <br>");
        else if (time >= 2100 && time <= 2359)
         document.write(" Good Night <br>");
        else document.write(" invalid time <br>");


       // !!!!!!!!!!!! assigment 14-16 !!!!!!!!!!!!





// ? Q1 answer

var snames=[]

// ? Q2 answer

var snames={}

// ? Q3 answer

var string=["Saylani","Mass","IT","Program"]

// ? Q4 answer

var num=[1,2,3,4]

// ? Q5 answer

var bool=[true,false]

// ? Q6 answer

var mix=[true,"Hello",3,false,5,"hi"]

// ? Q7 answer

var qual=["SSC","HSC","BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qualifications:")
document.write("<br>")
for (let i=0;i<qual.length;i++){
    document.write((i+1)+")"+qual[i])
    document.write("<br>")
}

// ? Q8 answer

var sname=["Michael","John" ,"Tony"]
var marks=[320,230,480]
var tmarks=500
for(let i=0;i<sname.length;i++){
    document.write("Score of "+sname[i]+" is "+marks[i]+" .Percentage: "+((marks[i]/tmarks)*100)+"%")
    document.write("<br>")
}


// ? Q9 answer

var color=["red","green","blue"]
document.write(color)
document.write("<br>")
var addbegin=prompt("Enter color to add in beginning")
color.unshift(addbegin)
document.write(color)
document.write("<br>")
var addend=prompt("Enter color to add in end")
color.push(addend)
document.write(color)
document.write("<br>")
color.unshift("yellow","aqua")
document.write(color)
document.write("<br>")
color.shift();
document.write(color);
document.write("<br>")
color.pop();
document.write(color)
document.write("<br>")
var inpind=+prompt("Enter index to input color")
var inpindcol=prompt("Enter color to add at the index")
color.splice(inpind,0,inpindcol)
document.write(color)
document.write("<br>")
var delind=+prompt("Enter index to delete colors")
var delcolnum=+prompt("Enter amount of colors to delete")
color.splice(delind,delcolnum)
document.write(color)


// ? 10 answer

var s_scores=[320,230,480,120]
document.write("Scores of student: ",s_scores)
document.write("<br>")
s_scores.sort()
document.write("Ordered scores of student: ", s_scores)

// ? Q11 answer

var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selcities=[]
for (let i = 0; i < 3; i++) {
    if (i < cities.length) {
    selcities.push(cities[i]);
    }
}
document.write(cities)
document.write("<br>")
document.write(selcities)

// ? Q12 answer
var arr = ["This","is","my","cat"]
document.write("Array:")
document.write("<br>")
document.write(arr)
document.write("<br>");
document.write("String:")
document.write("<br>")
document.write(arr.join(" "))

// ? Q13 answer
var devices=[]
devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
devices.push("Monitor")
document.write("Devices:")
document.write("<br>")
document.write(devices)
document.write("<br>")
// either this
document.write("Out:")
document.write("<br>");
document.write(devices.shift())
document.write("<br>")
document.write("Out:")
document.write("<br>");
document.write(devices.shift())
document.write("<br>")
document.write("Out:")
document.write("<br>");
document.write(devices.shift())
document.write("<br>")
document.write("Out:")
document.write("<br>");
document.write(devices.shift())
// or this
for (let i=0;i<devices.length;i++)
    document.write("Out:")
    document.write("<br>")
    document.write(devices[i])
    document.write("<br>");

// ? Q14 answer

var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("Devices:");
document.write("<br>");
document.write(devices);
document.write("<br>");
// either this 
document.write("Out:");
document.write("<br>");
document.write(devices.pop());
document.write("<br>");
document.write("Out:");
document.write("<br>");
document.write(devices.pop());
document.write("<br>");
document.write("Out:");
document.write("<br>");
document.write(devices.pop());
document.write("<br>");
document.write("Out:");
document.write("<br>");
document.write(devices.pop());
// or this
for (let i=(devices.length)-1;i>=0;i--){
    document.write("Out:");
    document.write("<br>")
    document.write(devices[i])
    document.write("<br>");
}

// ? Q15 answer

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write(
        "<option>" + manufacturers[i] + "</option>"
    );
}
document.write("</select>");
