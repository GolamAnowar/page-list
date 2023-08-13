const startBtn = document.querySelector("#startBtn"),
endBtn = document.querySelector("#endBtn"),
prevNext = document.querySelectorAll(".prevNext"),
numbers = document.querySelectorAll(".link");

let currentStop = 0;

function updateBtn(){
    if(currentStop === 5){
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    }else if(currentStop === 0){
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    }else{
        startBtn.disabled = false;
        prevNext[0].disabled = false;
        endBtn.disabled = false;
        prevNext[1].disabled = false;
    }
}

numbers.forEach((number, index) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        currentStop = index;
        console.log(currentStop)
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
        updateBtn();
    });
});

prevNext.forEach(button => {
    button.addEventListener("click", (e) => {
        currentStop += e.target.id === "next" ? 1 : -1;
        console.log(currentStop)
        numbers.forEach((number, index) => {
            number.classList.toggle("active", index === currentStop);
            updateBtn();
        });
    });
});

startBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[0].classList.add("active");
    currentStop = 0;
    updateBtn();
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});


endBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[5].classList.add("active");
    currentStop = 5;
    updateBtn();
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});