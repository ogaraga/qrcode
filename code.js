var container = document.querySelector(".container");
var textInput = document.getElementById("code");
var clickBtn = document.getElementById("btn");
var clickBtn2 = document.getElementById("btn2");
var qRimage = document.getElementById("qrimage");
var imagContainer = document.querySelector(".image_content");
let imageDiv = document.getElementById("imgdiv");


clickBtn.addEventListener("click", () => {
    if (textInput.value != "") {
        clickBtn.innerHTML = "Generating code...";
        setTimeout(() => {
            container.style.display = "none";
            imagContainer.style.display = 'grid';
            qRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textInput.value;


        }, 3000);

    }

    else {
        container.style.display = "flex";
        imagContainer.style.display = "none";
        textInput.style.border = "2px solid red";
        alert("Enter a text or something!")
    }
});

clickBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    if (container.style.display = "none" && textInput.value != "") {
        clickBtn2.innerHTML = "Reinitializing and now loading...";
        clickBtn2.style.textDecoration = "none";
        imageDiv.style.display = "none";

        setTimeout(() => {
            clickBtn2.innerHTML = "Re-generate code"
            imageDiv.style.display = "block";
            clickBtn2.style.textDecoration = "underline";

        }, 3000);

    }
    else {
        return "Error";
    }
});
