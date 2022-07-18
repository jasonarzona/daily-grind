// alert("It's working!");

/* 

One unique image, with appropriate and matching content in the alt tag.


        A paragraph or two of content that describes the daily item 
        (paragraph must include the name of the highlighted weekday)


        A unique color that supports the image and paragraph of content


        Here are the items we need to change for each coffee:

        image - src of pic
        alt - alt tag of pic
        description - a paragraph of content about the coffee
        name - a name of today's coffee
        color - a color representing the coffee

        We may also use the following, but not part of the coffee itself

        today - the current day of the week

*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += 
    `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>. ${coffee.desc}
        </p>
    `;

    return myReturn;
}


let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data available? show data from url
    myDay = urlParams.get("day");
}

//force to be an integer
myDay = parseInt(myDay);


switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            color: "orange", 
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of Caramel Latte",
            day: "Sunday",
            desc: `Get a caramel latte on Sunday! It won't disappoint!`
        }
    break;
    case 1:
        today = "Monday";
        coffee = {
            color: "black", 
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of Cold Brew",
            day: "Monday",
            desc: `Start your week off right. Get a cold brew on Monday!`
        }
    break;
    case 2:
        today = "Tuesday";
        coffee = {
            color: "darkblue", 
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of Drip",
            day: "Tuesday",
            desc: `Get some drip on a Tuesday. You need it!`
        }
    break;
    case 3:
        today = "Wednesday";
        coffee = {
            color: "pink", 
            name: "Bubble tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Wednesday",
            desc: `I like me some Bubble Tea!`
        }
    break;
    case 4:
        today = "Thursday";
        coffee = {
            color: "cyan", 
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Thursday",
            desc: `I love Mocha!`
        }
    break;
    case 5:
        today = "Friday";
        coffee = {
            color: "red", 
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of Frappaccino",
            day: "Friday",
            desc: `Get a Frappe on Friday to celebrate the weekend!`
        }
    break;
    case 6:
        today = "Saturday";
        coffee = {
            color: "green", 
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of Pumpkin Spice Latte",
            day: "Saturday",
            desc: `Get a pumpkin spice latte on Saturday to add some spice!`
        }
    break;

    default:
        today = "Something went wrong, idiot!"
}

// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);

//load coffee data to page
console.log(coffee);
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

//console.log(coffee);