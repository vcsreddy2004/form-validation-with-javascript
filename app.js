document.querySelector("#submitBtn").addEventListener("click", ()=> {
    let empty = "";
    let fName = document.querySelector("#fName");
    let lName = document.querySelector("#lName");
    let DOB = document.querySelector("#DOB");
    let bloodGroup = document.querySelector("#bloodGroup");
    let qualification = document.querySelector("#qualification");
    let collage = document.querySelector("#collage");
    let phNumber = document.querySelector("#phNumber");
    let eMail = document.querySelector("#eMail");
    let errorBadge = document.querySelector("#errorBadge");
    let errorMSG = document.querySelector("#errorMSG")
    errorBadge.classList.add("badge-warning");
    switch(empty)
    {
        case fName.value: errorMSG.innerText = "First name can not be left empty"; break;
        case lName.value: errorMSG.innerText = "last name can not be left empty>"; break;
        case DOB.value: errorMSG.innerText = "Date of birth can not be left empty"; break;
        case bloodGroup.value: errorMSG.innerText = "blood group can not be left empty"; break;
        case qualification.value: errorMSG.innerText = "qualification can not left empty"; break;
        case collage.value: errorMSG.innerText = "collage name can not be left empty"; break;
        case phNumber.value: errorMSG.innerText = "Phone number can not be left empty"; break;
        case eMail.value: errorMSG.innerText = "E-Mail can not be left empty"; break;
    }
    fName.style.border = "1px solid black";
    lName.style.border = "1px solid black";
    DOB.style.border = "1px solid black";
    bloodGroup.style.border = "1px solid black";
    qualification.style.border = "1px solid black";
    collage.style.border = "1px solid black";
    phNumber.style.border = "1px solid black";
    eMail.style.border = "1px solid black"; 
    switch(empty)
    {
        case fName.value: fName.style.border = "2px solid red";
        case lName.value:lName.style.border = "2px solid red";
        case DOB.value:DOB.style.border = "2px solid red";
        case bloodGroup.value:bloodGroup.style.border = "2px solid red";
        case qualification.value:qualification.style.border = "2px solid red";
        case collage.value:collage.style.border = "2px solid red";
        case phNumber.value:phNumber.style.border = "2px solid red";
        case eMail.value:eMail.style.border = "2px solid red";
    }
    if(fName.value != empty && lName.value != empty && DOB.value != empty && bloodGroup.value != empty && qualification.value != empty && collage.value != empty && phNumber.value != empty && eMail.value != empty)
    {
        if(bloodGroup.value == "A+" || bloodGroup.value == "A-" || bloodGroup.value == "B+" || bloodGroup.value == "B-" || bloodGroup.value == "O+" || bloodGroup.value == "O-")
        {
            if(phNumber.value.length == 10)
            {
                if(eMail.value.search("@") > -1)
                {
                    fName = fName.value;
                    lName = lName.value;
                    DOB = DOB.value
                    bloodGroup = bloodGroup.value;
                    qualification = qualification.value;
                    collage = collage.value;
                    phNumber = phNumber.value;
                    eMail = eMail.value;
                    DOB = DOB.split("-").reverse().join("-");
                    localStorage.setItem("name",`${fName} ${lName}`);
                    localStorage.setItem("DOB",DOB);
                    localStorage.setItem("bloodGroup",bloodGroup);
                    localStorage.setItem("qualification",qualification);
                    localStorage.setItem("collage",collage);
                    localStorage.setItem("phNumber",phNumber);
                    localStorage.setItem("eMail",eMail); 
                    window.location = "result.html";
                }
                else
                {
                    errorMSG.innerText = "Invalid email";
                }
            }
            else
            {
                errorMSG.innerText = "Invalid mobile number";
            }
        }
        else
        {
            errorMSG.innerText = "Invalid blood group Note enter blood group like \"A+\"";
        }
    }
});
