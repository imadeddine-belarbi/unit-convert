const scales = [
    {
        name: "length", 
        units: ["meter", "feet"],
        standard: 3.281
    },
    {
        name: "volume" ,
        units: ["liters","gallons"],
        standard: 0.264
    },
    {
        name: "mass" ,
        units: ["kilograms","pound"],
        standard: 2.204
    }
]

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("input")
const convertBtn = document.querySelector("button")
const mainEl = document.querySelector(".main")

inputEl.value = 20;
render(inputEl.value)

convertBtn.addEventListener("click", function() {
    const value = getValue(Number(input.value))
    render(value)
})

function getValue(value) {
    const val = Math.floor(value)
    if (val !== value) {
        return value
    } else {
        return value.toFixed(3)
}

function render(value) {
    let scaleItems = ""
    for (let i = 0; i < scales.length; i++) {
        const convertValue1 = getValue(value * scales[i].standard)
        const convertValue2 = getValue(value / scales[i].standard)
        scaleItems += `
            <div class="scale">
                <h3>${scales[i].name} (${scales[i].units[0]}/${scales[i].units[1]})</h3>
                <p>${value} ${scales[i].units[0]} = ${convertValue1} ${scales[i].units[1]} | ${value} ${scales[i].units[1]} = ${convertValue2} ${scales[i].units[0]}</p>
            </div>
        `
    }
    mainEl.innerHTML = scaleItems
}
