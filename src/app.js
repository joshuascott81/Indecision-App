console.log('App.js is Running');

const app = {
  title: 'Good Will Hunting 2',
  subtitle: 'Hunting Season',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name: 'Andrew',
  age: 36,
  location: 'San Marcos, Tx'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

// var templateThree = (
//   <div>
//     <h2>{appObject.title}</h2>
//     <h3>{appObject.subtitle}</h3>
//   </div>
// )

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
