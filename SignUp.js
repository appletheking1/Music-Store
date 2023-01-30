function checkFirstName() {
    var x = firstname.value;

    if (x.length >= 2) {
        msg1.innerHTML = "";
        return true;
    }
    else {
        msg1.innerHTML = "First Name must be long than 2 characters";
        return false;
    }
}

function checkLastName() {
    var x = lastname.value;

    if (x.length >= 2) {
        msg2.innerHTML = "";
        return true;
        
    }
    else {
        msg2.innerHTML = "Last Name must be long than 2 characters";
        return false;
    }
}

function BornYear() {
    var x = bornyear.value;

    if (x > 1900 && x < 2023) {
        msg3.innerHTML = "";
        return true;
    }
    else {
        msg3.innerHTML = "choose a number between 1900-2023";
        return false;
    }
}

function genderr() {
    if (male.checked || female.checked || othergender.checked) {
        msg5.innerHTML = "";
        return true;
    }
    else {
        msg5.innerHTML = "Must Choose an option";
        return false;
    }
}

function PassWord() {
    var p = password.value;
    if (p.length >= 2) {
        msg6.innerHTML = "";
        return true;
    }
    else {
        msg6.innerHTML = "Password must be long than 2 characters";
        return false;
    }
}

function CheckPassword() {
    if (password.value == check_password.value) {
        msg7.innerHTML = "";
        return true;
    }
    else {
        msg7.innerHTML = "does not match with the previous password";
        return false;
    }
}

function Mail() {
    var x = mail.value;
    if (x.includes("@")) {
        msg9.innerHTML = "";
        return true;
    }
    else {
        msg9.innerHTML = "ilegal mail";
        return false;
    }
}

function Checks() {
    var result = checkFirstName();
    result = checkLastName() && result;
    result = BornYear() && result;
    result = genderr() && result;
    result = PassWord() && result;
    result = CheckPassword() && result;
    result = Mail() && result;
    return result;
}