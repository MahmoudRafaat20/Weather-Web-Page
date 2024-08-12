


 
const input = document.getElementById("location");
const value = document.getElementById("value");

input.addEventListener("input", updateValue);

function updateValue(city) {
  value.textContent = city.target.value;
}




document.getElementById('find-button').addEventListener('click', async function () {
    var res = await fetch("https://openweathermap.org/api");
    var data = await res.json();
    var Today = document.getElementById('Today');
    var cards = document.getElementsByClassName('Cards');
    data.forEach(element => {
        var today = `
         <div class="col">
                <p>${element.date}</p>
                <i class="m-5 p-5 fa-regular fa-moon fa-2xl" style="color: #74C0FC;"></i>
                <h1>${element.city}</h1>
                <p>${element.temperature}</p>
                <p class="text-primary">${element.status}</p>
                <div class="nav m-1">
                    <div class="p-3">
                        <p> <i class="m-1 fa-solid fa-umbrella fa-l" style="color: #a6a6a6;"></i>${element.rain}</p>
                    </div>
                    <div class="p-3">
                        <p><span class="m-1 material-symbols-outlined">air</span>${element.speed}</p>
                    </div>
                    <div class="p-3">
                        <p><span class="m-1 material-symbols-outlined"> explore </span>${element.direction}</p>
                    </div>
                </div>
            </div> `;
        Today.innerHTML += today;


        var after = `  
             <div class="col">
                <p>${element.day}</p>
                <i class="m-5 p-5 fa-solid fa-sun fa-2xl" style="color: #FFD43B;"></i>
                <h1><span class="material-symbols-outlined">arrow_upward </span>${element.hightemp}</h1>
                <h3><span class="material-symbols-outlined"> arrow_downward</span>${element.lowtemp}</h3>
                <p class="text-primary">${element.status}</p>
            </div>`;
        cards.innerHTML += after;
    });
});