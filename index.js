const generateBtn = document.querySelector('.generate');
const digit0 = document.querySelector('.digit0');
const digit1 = document.querySelector('.digit1');
const digit2 = document.querySelector('.digit2');
const digit3 = document.querySelector('.digit3');

 function generateOtp(){
    let otpLength = 4;
    let otp = ""
    for(let i=0; i < otpLength; i++){
        const randomFourNum = Math.floor(Math.random()*10)
        otp+=randomFourNum;  
        digit0.value = otp[0]
        digit1.value = otp[1]
        digit2.value = otp[2]
        digit3.value = otp[3] 
    }
    
     return(digit0, digit1, digit2, digit3);
 }

generateBtn.addEventListener('click',  generateOtp)


