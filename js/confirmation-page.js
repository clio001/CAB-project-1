function OutputDataFinal () {    
    //RETRIEVING DATA FROM FORM
    //- - - - - - - - - - - - - - - - - - - - - - - - -

    //RETRIEVING DATA FROM TEXT AND SELECT INPUT FIELDS
    const fname = document.getElementById
    ("fname").value;
    if (fname == "") {
        return
    }
    const lname = document.getElementById
    ("lname").value;
    if (lname == "") {
        return
    }
    const useremail = document.getElementById
    ("useremail").value;
    if (useremail == "") {
        return
    }
    const language = document.getElementById("language").value;
    
    //RETRIEVING TOPIC CHECKBOX ELEMENTS ID
    const design = document.getElementById("design");
    const software_development = document.getElementById("software_development");
    const wcag = document.getElementById("WCAG");
    const datascience = document.getElementById("datascience");    
    const AccessCoding = document.getElementById("accesscoding");

    //RETRIEVING TERMS & CONDITIONS CHECKBOX ID
    const termsconditions = document.getElementById("terms-conditions");
    
    //RETRIEVING RADIO BUTTON ID
    const daily = document.getElementById("daily");
    const weekly = document.getElementById("weekly");
    const monthly = document.getElementById("monthly");

    //CHECKING STATE OF RADIO BUTTONS
    let RadioChecked = "";
    if (daily.checked) {
        RadioChecked = "Daily";
    } else {
        if (weekly.checked) {
        RadioChecked = "Weekly";
        } else {
            if (monthly.checked) {
                RadioChecked = "Monthly";
            }
        }
    }

    //CHECKING STATE OF CHECKBOX ELEMENTS + PUSHING SELECTION INTO ARRAY
    let CheckboxChecked =[];
    if (design.checked) {
        CheckboxChecked.push("Design");
    }

    if (software_development.checked) {
        CheckboxChecked.push(" Software development");
    }

    if (wcag.checked) {
        CheckboxChecked.push(" WCAG 2.1 updates");
    }

    if (datascience.checked) {
        CheckboxChecked.push(" Data science");
    }

    if (AccessCoding.checked) {
        CheckboxChecked.push(" Accessability and Coding");
    }

    if (CheckboxChecked == "") {
        CheckboxChecked.push("No topic selected");
    }

    //CHECKING STATE OF TERMS & CONDITIONS CHECKBOX
    if (termsconditions.checked == false) {
        return
    }

    //OUTPUT OF FORM INPUT VIA .INNERHTML-METHOD
    //- - - - - - - - - - - - - - - - - - - - - - - - -

    const OutputData = document.getElementById("confirmation-output");

    OutputData.innerHTML = "<h2>Thank you for subscribing to the newsletter!</h2><h3>Please review your selection:</h3><table><tr><td><b>Name: </b></td><td>" + fname + " " + lname + "</td><td rowspan='5' width='70px'><div class='input-confirmation-animation'>&checkmark;</div></td></tr><tr><td><b>E-Mail: </b></td><td>" + useremail + "</td></tr><tr><td><b>Language: </b></td><td>" + language + "</td></tr><tr><td><b>Frequency: </b></td><td>" + RadioChecked + "</td></tr><tr><td><b>Selected topics: </b></td><td>" + CheckboxChecked + "</td></tr></table><center><a href='newsletter.html'><div class='button' id='submit-button'>Return</div></a><a href='contact.html'><div class='button' id='submit-button'>Contact us</div></a></center>";
};