const cars = [
    {
        carID : "0",
        carBrand : "Tesla",
        Acceleration0100kmh : 1.9,
        year : 2022,
        price : 250.000
    }
    ,
    {
        carID : "1",
        carBrand : "BMW",
        Acceleration0100kmh : 3.2,
        year : 2020,
        price : 420.000
    }
    ,
    {
        carID : "2",
        carBrand : "Mercedes",
        Acceleration0100kmh : 3.7,
        year : 2021,
        price : 440.000
    }
    ,
    {
        carID : "3",
        carBrand : "Toyota",
        Acceleration0100kmh : 10.7,
        year : 2022,
        price : 40.000
    }
]


const acc = cars.reduce(

    (values,item) => {
        if(!values.includes(item.carBrand)){
            values.push(item.carBrand)
        }
        return values
    },["ALL"]
)



const categoryBtns = acc.map((category) => {

    return`
    <button class="btn btn-outline-dark btn-item"> ${category} </button>
    `

})

$(".btnContainer").html(categoryBtns)





    const markup = `
    <div class="person">
        <h2>
        Car ID :   ${cars[1].carID}
        </h2>
        <p>Car brand : ${cars[1].carBrand}</p>
        <p>Car price : ${cars[1].price}</p>
        <p>Car year : ${cars[1].year}</p>
        <p>Car acceleration 0 100/kmh : ${cars[1].Acceleration0100kmh}</p>
    </div>
    `;
    $(".btnContainertwo").html(markup)

    
