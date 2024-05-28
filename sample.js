(function(){
    const fonts=["cursive","sans-serif","serif","monospace"]
    let captchaValue=" ";
    function generateCaptcha(){
        let value = btoa(Math.random()*1000000000)
        value = value.substring(0,5+Math.random()*5);
        captchaValue = value;
    }
    function setCaptcha(){
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span style="transform:rotate(${rotate}deg); font-family:${fonts[font]}">${char}</span>`;
        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click",function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();

   // Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.querySelector(".login-form #login-btn").addEventListener("click", function(){
    let inputCaptchaValue = document.querySelector(".login-form .captcha input").value;
    if(inputCaptchaValue === captchaValue) {
        document.getElementById("modal-message").innerText = "Logging In!";
    } else {
        document.getElementById("modal-message").innerText = "Invalid captcha";
    }
    modal.style.display = "block";
    
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

    
})();
