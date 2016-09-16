function isValidName(full_name) {
    var pattern = new RegExp(/^[a-z ]{2,30}$/ig);
    return pattern.test(full_name);
}

function isValidPhone(phone) {
    var phoneNum = new RegExp(/^[0-9]{3}[-. ]{0,1}[0-9]{3}[-. ]{0,1}[0-9]{4}$/);
    return phoneNum.test(phone);
}

function validateForm(theForm) {
    event.preventDefault();
    var fName = theForm.full_name.value;
    if (!isValidName (fName)){
        Materialize.toast('Por favor escriba un nombre válido', 4000);
    }
    
    var phoneNum = theForm.phone.value;
    if (!isValidPhone(phoneNum)) {
        Materialize.toast('Por favor escriba un número de teléfono válido', 4000);
        return false;
    }
    console.log("validation successful"); 
    
    
    $('#btn').addClass("hidden");
    $('#msg').removeClass("hidden");
    $('#msg').html("Your Message is being sent...");
    
    var form= $('#form'); 
    
    $.ajax({
        type: "POST",
        url: "http://www.swolebrain.com:4003/email",
        data: form.serialize(),
        success: function (response) {
          $('#msg').html("Your Message has been sent");    
          console.log(response);    
        }
    });
}



        





