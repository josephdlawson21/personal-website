
const App = (function() {
  return class App {
    static init() {
      console.log('init');
      fetch('https://cors-anywhere.herokuapp.com/https://medium.com/@josephdlawson21/latest?format=json')
        .then(res => res.json())
        .then(json => console.log(json))
    }
  }
})();
