// require('../.sass-cache/main.scss');
// ^ cannot get this to link to the main.scss !!!

var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab')),
    currentTab = 'eat';

tabs.map(function(tab) {
    tab.addEventListener('click', function(e) {
        var previousTab = document.getElementById(currentTab),
            newTabValue = e.target.attributes.value.value,
            activeTab = document.getElementById(newTabValue)

        previousTab.classList.add('hidden');

        activeTab.classList.remove('hidden');

        document.querySelector('.tab[value="' + currentTab + '"]').classList.remove('tab--active');
        
        e.target.classList.add('tab--active');

        currentTab = newTabValue;
    });
});


function setActive(event) {
  if (event.target.tagName !== 'A') {
    return false;
  }
  
  addActiveClass(event.target);
}

function addActiveClass(link) {
  var activeLink = document.getElementsByClassName('active');
  if (activeLink.length) {
    activeLink[0].className = '';
  }
  
  link.className = 'active';
}

window.onload = function () {    
  var nav = document.getElementsByClassName('nav');
  nav[0].addEventListener('click', setActive);
}
