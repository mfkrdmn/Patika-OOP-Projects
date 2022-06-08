const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(  //Reduce fonksiyonu, verilen bir koşula göre tek bir değer dizisine azaltmak için kullanılır. 
                                //Bu örnekte kategori verilerini çekip en sonda da All u ekledik
                                //array.reduce(function(accumulator, currentValue), initialValue)
                                //accumulator - It accumulates the function's return values.(required)
                                //currentValue - The current element being passed from the array.(required)
                                //initialValue - A value that will be passed to callback() on first call.(optional) 

    function(values,item) { // (values, item) => {
      if (!values.includes(item.category)) {   //To check if an array doesn't include a value, use the logical NOT (!) operator
        values.push(item.category);
      }
      return values;
    },
    ["All"]

  );

  const categoryList = function() { // () => {
    const categoryBtns = categories.map(function(category){ //(category) => {
    //array.map(function(currentValue, index))
    //Array Map fonksiyonu, kendisine parametre olarak gönderilen dizinin(categories) her bir elemanını belirlenen bir işleme tabi tutup, yeni bir dizi meydana getirir. 
    //map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır. Her bir eleman tek tek işlenir, değerleri değiştirilebilir,
    //geriye ne döndürüleceği belirlenebilir. Ve sonunda ise, işlemden geçen öğelerden oluşan bir dizi geriye döner.
    //currentValue : Dizideki elemanın değerini saklar ve kullanımı zorunludur.    
    //index : Dizideki elemanın index değerini saklar zorunlu değildir.

    /*const array1 = [1, 4, 9, 16];       //map() örnek
    const map1 = array1.map(function(x){
       return  x * 2
      });
    console.log(map1); //[2, 8, 18, 32]*/
                                                                                            //The data attributes is used to store custom data private to the page or application.
                                                                                            //An id on a <data> tag assigns an identifier to the data element.
        return `
                <button class="btn btn-outline-dark btn-item" data-id=${category}> 
                    ${category} 
                </button>`;

        //The ? operator is used in conditional statements, and when paired with a :, can function as a compact alternative to if...else statements.
        //The operator is represented by a question mark ?.
        //condition ? value1 : value2;
        // (Condition to test) ? value if true : value if false
        //a = 10 
        //let b = a>7 ? "true" : "false"
        //console.log(b) true
      })
      .join(""); //Returns a string version of the array
      
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    filterBtns.forEach(function(btn) {   //(btn) =>
      btn.addEventListener("click", function(e) {  //(e) =>
        filterBtns.forEach(function(f){ //(f => f.classList.remove('active'));
        f.classList.remove('active')}
        );
        e.target.classList.toggle("active");  //event.target.classList : Hangi ögenin olayı tetiklendiyse o öğenin classListini döndürülür.
        const category = e.currentTarget.dataset.id; //currentTarget is the element that the event listener is attached to.
        const menuCategory = menu.filter(function(menuItem) {  /*filter() metodunu her bir dizi elemanını belirlediğimiz bir koşula tabi 
                                                            tutup sonuçlarını yeni bir diziye atamak için kullanırız.*/
          if (menuItem.category === category) {
            return menuItem;
          }

        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };


  const menuList = function(menuItems) {
    let displayMenu = menuItems.map(function(item) { //(item) =>
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();



