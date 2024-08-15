document.addEventListener("DOMContentLoaded", function (){
    const leftbtn = document.querySelector(".left");
    const rightbtn = document.querySelector(".right");
    const monthElement = document.querySelector(".months");
    const currentdate = document.querySelector(".dates");
    const todayButton = document.getElementById("present");

    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
    let currentyear = new Date().getFullYear();
    let currentmonth = new Date().getMonth();
    
    function updateMonth(){
        monthElement.textContent = month[currentmonth];
        getdate(currentmonth, currentyear);
    }

    function getdate(month , year){
        currentdate.innerHTML = ""; 
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
    
        const today = new Date();
        const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
    
        for (let i = 1; i <= daysInMonth; i++){
            const dateDiv = document.createElement("div");
            dateDiv.textContent = i;

            if (isCurrentMonth && i === today.getDate()) {
                dateDiv.style.backgroundColor = "black"; 
                dateDiv.style.color = "white";
            }
            currentdate.appendChild(dateDiv);
        }
    }

    todayButton.addEventListener("click", () => {
        currentmonth = new Date().getMonth(); 
        currentyear = new Date().getFullYear();
        updateMonth();
    });

    leftbtn.addEventListener('click' , function(){
        currentmonth = (currentmonth - 1 + month.length) % month.length;
        updateMonth();
    });

    rightbtn.addEventListener('click' , function(){
        currentmonth = (currentmonth + 1) % month.length;
        updateMonth();
    });

    updateMonth();
});
