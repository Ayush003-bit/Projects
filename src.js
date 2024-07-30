
// Getting the elments 

 const Rollnumber = document.getElementById("rollnumber");
  const EnrollmentNumber = document.getElementById("Enrollment");
  const CollegeCode = document.getElementById("Code");

  // Checking error

  const Rollerror = document.getElementById("getting-roll");
  const Enrollerror = document.getElementById("getting-Enroll");
  const Codeerror = document.getElementById("getting-code");

   // Validating Part

    

  // Getting result

    const Button = document.getElementById("result");

    // Reset Data

    const ResetButton = document.getElementById("reset");

  // storing Data

    const StudentDetails = {
        Rollnumber: 2317000265,
        Enrollmentnumber: 2310007000,
        Collegecode: 1117
    }

    const StudentData = {
        name: "Vikash-Raghuvanshi",
        course: "BBA",
        college: "School of Management & Sciences (SMS)",
        collegecode: 1119,
    }

    const StudentSubjects = {
           subject1: "Principle of Management",
           subject2: "Bussiness Communication",
           subject3: "Organisational Bhehaviour",
           subject4: "Financial Management & Accounting",
           subject5: "Bussiness Economics"
    }

    const TotalInternalMarks = {
        TotalInternal1: 25,
        TotalInternal2: 25,
        TotalInternal3: 25,
        TotalInternal4: 25,
        TotalInternal5: 25
    }

    const ObtainedInternalMarks = {
        getInternal1: 20,
        getInternal2: 22,
        getInternal3: 24,
        getInternal4: 24,
        getInternal5: 23
    }

    const TotalTheroryMarks = {
        TotalMarks: 100,
    }

    const ObtainedMarks = {
        sub1: 60,
        sub2: 65,
        sub3: 67,
        sub4: 66,
        sub5: 70
    }

    //

    Rollnumber.addEventListener("keyup", ()=>{
      if(Rollnumber.value == 0 || Rollnumber.value < 10 || Rollnumber.value != StudentDetails.Rollnumber) {
        Rollerror.innerHTML = "Roll Number is Required..";
        Rollerror.style.color = "red";
        Rollerror.style.fontFamily = "'Nunito', sans-serif";
        Rollerror.style.transition = "all 0.5s ease-in-out";
        Rollerror.style.fontWeight = "bold";
      } else {
        Rollerror.innerHTML = "Valid Roll Number";
        Rollerror.style.color = "Green";
        Rollerror.style.transition = "all 0.5s ease-in-out";
        Rollerror.style.fontWeight = "bold";
      }
    })

    //

    EnrollmentNumber.addEventListener("keyup", ()=>{
        if(EnrollmentNumber.value == 0 || EnrollmentNumber.value < 10 || EnrollmentNumber.value != StudentDetails.Enrollmentnumber) {
          Enrollerror.innerHTML = "EnrollMent Number is Required...";
          Enrollerror.style.color = "red";
          Enrollerror.style.transition = "all 0.5s ease-in-out";
          Enrollerror.style.fontWeight = "bold";
        } else {
          Enrollerror.innerHTML = "Valid Enrollment";
          Enrollerror.style.color = "Green";
          Enrollerror.style.transition = "all 0.5s ease-in-out";
          Enrollerror.style.fontWeight = "bold";
        }
    })

    //

    CollegeCode.addEventListener("keyup", ()=>{
       if(CollegeCode.value == 0 || CollegeCode.value < 10 || CollegeCode.value != StudentDetails.Collegecode) {
        Codeerror.innerHTML = "Ivalid Code..";
        Codeerror.style.color = "red";
        Codeerror.style.transition = "all 0.5s ease-in-out";
        Codeerror.style.fontWeight = "bold";
       } else {
        Codeerror.innerHTML = "Valid..";
        Codeerror.style.color = "Green";
        Codeerror.style.transition = "all 0.5s ease-in-out";
        Codeerror.style.fontWeight = "bold";

       }
    })

    ///

    
      let getData = "";
      for(let key in StudentData) {
        getData += StudentData[key] + "<br>";
      }




    //



      const Resulthead = document.getElementById("resulthead");
      const ResultPara = document.getElementById("resultpara");

      // Filling Table values

        const Data1 = document.getElementById("data1");
        const Data2 = document.getElementById("data2");
        const Data3 = document.getElementById("data3");
        const Data4 = document.getElementById("data4");
        const Data5 = document.getElementById("data5");

        //

        const Data6 = document.getElementById("data6");
        const Data7 = document.getElementById("data7");
        const Data8 = document.getElementById("data8");
        const Data9 = document.getElementById("data9");
        const Data10 = document.getElementById("data10");

        //

        const Data11 = document.getElementById("data11");
        const Data12 = document.getElementById("data12");
        const Data13 = document.getElementById("data13");
        const Data14 = document.getElementById("data14");
        const Data15 = document.getElementById("data15");

        //

        const Data16 = document.getElementById("data16");
        const Data17 = document.getElementById("data17");
        const Data18 = document.getElementById("data18");
        const Data19 = document.getElementById("data19");
        const Data20 = document.getElementById("data20");

        //

        const Data21 = document.getElementById("data21");
        const Data22 = document.getElementById("data22");
        const Data23 = document.getElementById("data23");
        const Data24 = document.getElementById("data24");
        const Data25 = document.getElementById("data25");

        //

        const TableData = document.getElementById("tableData");
       

      Button.addEventListener("click", ()=>{
          if(Rollnumber.value == StudentDetails.Rollnumber && EnrollmentNumber.value == StudentDetails.Enrollmentnumber && CollegeCode.value == StudentDetails.Collegecode) {
             Resulthead.innerHTML = "Getting Result Wait a Second..";
             Resulthead.style.textAlign = "center";
             Resulthead.style.fontFamily = "'Nunito', sans-serif";
             Resulthead.style.backgroundColor = "green";
             Resulthead.style.color = "white";
             Resulthead.style.padding = "8px 8px";
             Resulthead.style.borderRadius = "5px";
             setTimeout(() => {
              Resulthead.innerHTML = "Your Result"
              ResultPara.innerHTML = getData;
              ResultPara.style.backgroundColor = "green";
              ResultPara.style.color = "white";
              ResultPara.style.textAlign = "center";
              ResultPara.style.padding = "7px 7px";
              ResultPara.style.borderRadius = "4px";
              ResultPara.style.fontFamily = "'Nunito', sans-serif";


               TableData.style.display = "block";

              Data1.innerHTML = StudentSubjects.subject1;
              Data2.innerHTML = TotalInternalMarks.TotalInternal1;
              Data3.innerHTML = ObtainedInternalMarks.getInternal1;
              Data4.innerHTML = TotalTheroryMarks.TotalMarks;
              Data5.innerHTML = ObtainedMarks.sub1;

              Data6.innerHTML = StudentSubjects.subject2;
              Data7.innerHTML = TotalInternalMarks.TotalInternal2;
              Data8.innerHTML = ObtainedInternalMarks.getInternal2;
              Data9.innerHTML = TotalTheroryMarks.TotalMarks;
              Data10.innerHTML = ObtainedMarks.sub2;

              Data11.innerHTML = StudentSubjects.subject3;
              Data12.innerHTML = TotalInternalMarks.TotalInternal3;
              Data13.innerHTML = ObtainedInternalMarks.getInternal3;
              Data14.innerHTML = TotalTheroryMarks.TotalMarks;
              Data15.innerHTML = ObtainedMarks.sub3;

              Data16.innerHTML = StudentSubjects.subject4;
              Data17.innerHTML = TotalInternalMarks.TotalInternal4;
              Data18.innerHTML = ObtainedInternalMarks.getInternal4;
              Data19.innerHTML = TotalTheroryMarks.TotalMarks;
              Data20.innerHTML = ObtainedMarks.sub4;

              Data21.innerHTML = StudentSubjects.subject5;
              Data22.innerHTML = TotalInternalMarks.TotalInternal5;
              Data23.innerHTML = ObtainedInternalMarks.getInternal5;
              Data24.innerHTML = TotalTheroryMarks.TotalMarks;
              Data25.innerHTML = ObtainedMarks.sub5;
              

             }, 2000);

          } else {
            Resulthead.innerHTML = "Please fill the following Details..";
            Resulthead.style.fontFamily = "'Nunito', sans-serif";
            Resulthead.style.backgroundColor = "red";
            Resulthead.style.color = "white";
            Resulthead.style.textAlign = "center";
            Resulthead.style.padding = "7px 7px";
            Resulthead.style.borderRadius = "3px";
          }
      })


      ///

         function ResetData() {
          if(Rollnumber.value == StudentDetails.Rollnumber && EnrollmentNumber.value == StudentDetails.Enrollmentnumber && CollegeCode.value == StudentDetails.Collegecode) {
            Rollnumber.value = "";
            EnrollmentNumber.value = "";
            CollegeCode.value = "";
            Resulthead.innerHTML = "";
            ResultPara.innerHTML = "";
            TableData.style.display = "none";
            Rollerror.style.color = "white";
            Enrollerror.style.color = "white";
            Codeerror.style.color = "white";
            Resulthead.style.backgroundColor = "white";
            ResultPara.style.backgroundColor = "white";
          } else {
               Resulthead.innerHTML = "Data is not Reset";
               Resulthead.style.textAlign = "center";
               Resulthead.style.fontFamily = "'Nunito', sans-serif";
               Resulthead.style.backgroundColor = "red";
               Resulthead.style.color = "white";
               Resulthead.style.padding = "5px 5px";
               Resulthead.style.fontWeight = "bold";
          }
         }

        ResetButton.addEventListener("click", ()=>{
             ResetData();
        })


      




   