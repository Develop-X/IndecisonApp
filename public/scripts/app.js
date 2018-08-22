"use strict";

console.log("App.js is running!");

//JSX - Practice

var app = {
    title: "Indecison App",
    subtitle: "This is some info",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.options.length > 0 ? 'Here are your options' : 'No Options',
    app.subtitle && React.createElement(
        "p",
        null,
        " ",
        app.subtitle,
        " "
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            " Item One"
        ),
        React.createElement(
            "li",
            null,
            " Item Two"
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('addone', count);
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('Reset');
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "Reset"
    )
);

// // Work
// var user = {
//     name: "Dip",
//     age: 27,
//     location: "Newyork"
// };
//
// function getLocation(location) {
//     if (location) {
//         return <p> Location: {location} </p>;
//     }
//     else {
//         return "Unknown"
//     }
// }
//
// var template2 = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {user.age && (user.age >= 18) && <p>Age:{user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
