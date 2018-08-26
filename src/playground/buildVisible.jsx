console.log("App.js is running!");

let visibility = false;

const toggleVisibility = () => {
    visibility =!visibility;
    renderOptions();
};

var appRoot = document.getElementById("app");

const renderOptions = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                    <p>Hey, These are some details you can see!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderOptions();