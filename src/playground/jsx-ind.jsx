console.log("App.js is running!");

//JSX - Practice

var app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: []
};

const onFormSubmit = (e) => {
    //To stop full page refresh and default form submission process
    e.preventDefault();
    const option = e.target.options.value;
    if (option) {
        app.options.push(option);
        e.target.options.value = '';
        renderOptions();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderOptions();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById("app");

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="options"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderOptions();