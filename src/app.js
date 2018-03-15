console.log('App.js is Running');

const app = {
  title: 'Good Will Hunting 2',
  subtitle: 'Hunting Season',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderList();
  }
}

const onRemoveClick = (e) => {
  e.preventDefault();

  app.options = [];
  renderList();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderList = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveClick}>Remove List</button>

      <ol>
        {
          app.options.map((listItem, i) => {
            return <li key={i}>{listItem}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderList();
