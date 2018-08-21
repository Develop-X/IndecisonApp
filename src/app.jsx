console.log("App.js is running!");

//JSX - JavaScript XML

var app = {
  title: "Indecison App",
  subtitle: "This is some info"
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p> {app.subtitle}</p>
    <ol>
      <li> Item One </li>
      <li> Item Two </li>
    </ol>
  </div>
);

var user = {
  name: "Dip",
  age: 27,
  location: "Newyork"
};

function getLocation(location) {
  if (location) {
    return (
      <P>
        Location:
        {location}
      </P>
    );
  } else {
    return "Unknown";
  }
}
var template2 = (
  <div>
    <h1>{user.name + "!"}</h1>
    <p>
      Age:
      {user.age}
    </p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
