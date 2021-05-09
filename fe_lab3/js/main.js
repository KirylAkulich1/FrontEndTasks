
var firebaseConfig = {
    apiKey: "AIzaSyAkamp3yqLvqJfuv3_ttT6BPKZHQZBznE0",
    authDomain: "jsaliasgame.firebaseapp.com",
    projectId: "jsaliasgame",
    storageBucket: "jsaliasgame.appspot.com",
    messagingSenderId: "411259658225",
    appId: "1:411259658225:web:b7c27c526f9a06c0f3ae50",
    measurementId: "G-BCRWX65H20"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function setTheme(themeName) {
    console.log('Theme set');
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    console.log('Toggle theme');
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}



// Immediately invoked function to set the theme on initial load
(function () {
    console.log('Theme called');
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();

