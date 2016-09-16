document.contactForm.full_name.onchange= function(){
    if (!isValidName(this.value)) {
     this.className= "invalid";
  }  
  else {
     this.className= "validate";
  }    
}
document.contactForm.phone.onchange= function(){
    if (!isValidPhone(this.value)) {
     this.className= "invalid";
  }  
  else {
     this.className= "validate";
  }    
}