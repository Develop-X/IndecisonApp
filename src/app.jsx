console.log("App.js is running!");

//JSX - Practice

var app = {
    title: "Indecison App",
    subtitle: "This is some info",
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.options.length>0 ? 'Here are your options' :'No Options'}
        {app.subtitle && <p> {app.subtitle} </p>}
        <ol>
            <li> Item One</li>
            <li> Item Two</li>
        </ol>
    </div>
);


// Work
var user = {
    name: "Dip",
    age: 27,
    location: "Newyork"
};

function getLocation(location) {
    if (location) {
        return <p> Location: {location} </p>;
    }
    else {
        return "Unknown"
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && (user.age >= 18) && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
