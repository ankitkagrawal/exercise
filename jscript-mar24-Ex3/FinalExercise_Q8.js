//Class Exercise 1
function getcdate()
{ var a= new Date();
return a;
}
function getformatdate()
{
    var d=new Date();
    var dt=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hh= d.getHours();
    var mm= d.getMinutes();
    var ss= d.getSeconds();
    var monthh=new
    Array("January","February","March","April","May","June","July","August","September","October","November","December");
 var res=""+dt+" "+monthh[month]+", "+year+","+hh+":"+mm+":"+ss;
    return res;


}
//class Exercise 2
 function rep()
    {
var a= prompt("enter the id");
var b=prompt("Enter the value to change");
        document.getElementById(a).innerHTML=b;
        document.getElementById(a).innerHTML=b;
    disp1();
    }

    function disp1()
    {
        document.getElementById("timeDisp").innerHTML="<br><br> Date In a Specified Format :"+getformatdate();


    }

// Class Exercise 3
var clock=new Object();
            clock.hour=function() {
            var d = new Date();
                return d.getHours();}
        clock.min=function() {
            var d = new Date();
            return d.getMinutes();}
        clock.seconds=function() {
            var d = new Date();
            return d.getSeconds();}
        clock.time=function(){
            var d=new Date();
            return d.getTime();
        }

//Class Exercise 4

    var myVar = setInterval("updateTime()",1000);
   function updateTime() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
      }



//FinalExercise_Q1

    function intcalc()
    {
       var amount =parseFloat(prompt("Enter the Amount(Rs)","0"));
        var rate =parseFloat(prompt("Enter the Rate of Interest(%)","0"));
        var duration =parseFloat(prompt("Enter the Duration(No.of years)","0"));
        var intrst=(amount*rate*duration)/100;
        alert("Interest is :"+intrst  );

    }
//FinalExercise_Q2

 function palindrome()
    {
       var s=prompt("Enter the String for checking palindrome","RADAR");
        var b=true;
        for(i=0; i< s.length/2; i++)
        {
            if(s[i]!=s[s.length-1-i])
            { b=false;
            }
        }
        if(b==true)alert("String is palindrome");
        else alert("String is not palindrome");

    }

//FinalExercise_Q3

    function CalculateArea(){
        var radius =document.form1.txtRadius.value;
        document.write("<P>The area of the circle is " + (radius * radius * Math.PI) + "</p>");
        document.write("<P>The circumference of the circle is " + (2 * radius * Math.PI) + "</p>");
    }

//FinalExercise_Q4


    function nameDisp()
    {
        var name =prompt("Enter Your name");

        document.getElementById("result").value = name;
    }

// FinalExercise_Q5


    function copyText(idparam)
    {
        document.getElementById("textbox2").value=idparam.value;

    }

// FinalExercise_Q6



    function checkForm(myform)
    {

        //checking name field for empty

        var nameElem = myform.name.value;
        if (nameElem == null || nameElem == "") {
            alert("Name must be filled out");
            myform.name.focus();
            return false;
        }


       //checking valid date

        var day=myform.birthday_day.value;
        var month=myform.birthday_month.value;
        var year=myform.birthday_year.value;
        if( month==""|| day==""|| year=="")
        {
            alert("DOB must be filled out");
            myform.birthday_day.focus();
            return false;

        }

        var date=new Date();

        if((year > date.getFullYear()) || (year<1901) )
        {

            alert("Enter valid year");
            myform.birthday_year.focus();
            return false;
        }
         var days=[0,31,28,31,30,31,30,31,31,30,31,30,31];


        if(day>=1) {
            for (i = 1; i <= 12; i++) {

                if (month == 2 && year % 4 == 0) {
                    if (!(day <= 29)) {
                        alert("Leap year,Enter valid Date");
                        myform.birthday_year.focus();
                        return false;

                    }

                }
                else if (!(days[month] >= day)) {
                    alert("Enter valid day as per month");
                    myform.birthday_day.focus();
                    return false;

                }
                else {
                }
            }
        }
        else{

                alert("Enter valid day>=1");
                myform.birthday_day.focus();
                return false;
        }


      // checking age >18 from today

           var age = date.getFullYear() - year;
            var age_month = date.getMonth()+1 - month;
            var age_day = date.getDate() - day;

           if(age_month < 0 || (age_month == 0 && age_day <0)) {
                age = parseInt(age) -1;
            }
           
            if ((age == 18 && age_month <= 0 && age_day <=0) || age < 18) {

                alert("You are not 18+,Sorry you can't Register");
                myform.birthday_year.focus();
                return false;

            }

        return true;


    }



// FinalExercise_Q7


    function changeBackground(id, color) {
        document.getElementById(id).style.background = color;
    }
