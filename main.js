const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const letter = document.getElementById("letter"); // Variable for the letter

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// Button "No" moves when hovered over
btnNo.addEventListener("mouseover", (event) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
        newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
});

// Button "Yes" click event
btnYes.addEventListener("click", (e) => {
     // Hide all elements except the letter
     imageOne.classList.add("hide"); // Hide first image
     imageTwo.classList.add("hide"); // Hide second image
     btnYes.classList.add("hide"); // Hide Yes button
     btnNo.classList.add("hide"); // Hide No button
     letter.classList.remove("hide"); // Show the letter
});
