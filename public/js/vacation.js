document.getElementById('booking-form').onsubmit = () => {
    clearErrors();
    let isValid = true;

    let destination = document.getElementById("destination").value.trim();

    if(destination === "select"){
        document.getElementById("err-destination").style.display = 'block';
        isValid = false;
    }
    
    let travelers = document.getElementById("travelers").value.trim();

    if(travelers < 1){
        document.getElementById("err-travelers").style.display = 'block';
        isValid = false;
    }
    return isValid
}

function clearErrors(){
    let errors = document.getElementsByClassName("error")
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}