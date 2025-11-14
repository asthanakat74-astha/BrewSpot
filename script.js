// script.js - shared helpers for BrewSpot frontend demo
// Ensures default cafes exist and exposes helper functions

(function(){
  const defaultCafes = [
    {id:'c1', name:'Brew Hub Cafe', lat:19.076, lng:72.877, type:'Cozy', fee:'mid', dishes:['mocha','pastry'], theme:'Vintage', motto:'Fresh Brews Daily', famous:'Cold Coffee', rating:4.3, photos:[], reviews:[], reservations:[]},
    {id:'c2', name:'Cafe Aroma', lat:19.078, lng:72.875, type:'Work-friendly', fee:'low', dishes:['americano','sandwich'], theme:'Minimal', motto:'Best Coffee in Town', famous:'Espresso', rating:4.5, photos:[], reviews:[], reservations:[]},
    {id:'c3', name:'Choco Delight Cafe', lat:19.074, lng:72.879, type:'Family', fee:'mid', dishes:['cakes','hot chocolate'], theme:'Boho', motto:'Taste the Magic', famous:'Desserts', rating:4.1, photos:[], reviews:[], reservations:[]},
  ];
  if(!localStorage.getItem('cf_cafes')) localStorage.setItem('cf_cafes', JSON.stringify(defaultCafes));
  window.BrewSpot = {
    getCafes: ()=> JSON.parse(localStorage.getItem('cf_cafes')||'[]'),
    saveCafes: (arr)=> localStorage.setItem('cf_cafes', JSON.stringify(arr)),
    getUsers: ()=> JSON.parse(localStorage.getItem('cf_users')||'{}'),
    saveUsers: (obj)=> localStorage.setItem('cf_users', JSON.stringify(obj)),
    getSession: ()=> localStorage.getItem('cf_session') || null,
    setSession: (email)=> localStorage.setItem('cf_session', email),
    clearSession: ()=> localStorage.removeItem('cf_session')
  };
})();
