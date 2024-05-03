//    navigation buttons animation and open close function
   document.addEventListener("DOMContentLoaded", function() {
    var dropdownActivators = document.querySelectorAll(".h-dropdown__activator");
    var dropdownContents = document.querySelectorAll(".h-dropdown__content");
  
    function closeDropdowns() {
      dropdownContents.forEach(function(content) {
        content.classList.remove("h-dropdown__content--visible");
      });
      dropdownActivators.forEach(function(activator) {
        activator.classList.remove("active");
      });
    }
  
    function toggleDropdown(dropdownContent, activator) {
      dropdownContent.classList.toggle("h-dropdown__content--visible");
      activator.classList.toggle("active");
    }
  
    dropdownActivators.forEach(function(activator) {
      activator.addEventListener("click", function() {
        var dropdownContent = activator.nextElementSibling;
        var isActive = dropdownContent.classList.contains("h-dropdown__content--visible");
  
        closeDropdowns();
  
        if (!isActive) {
          toggleDropdown(dropdownContent, activator);
        }
      });
    });
  
    document.addEventListener("click", function(event) {
      var isDropdownClick = false;
  
      dropdownActivators.forEach(function(activator) {
        if (activator.contains(event.target)) {
          isDropdownClick = true;
        }
      });
  
      if (!isDropdownClick) {
        closeDropdowns();
      }
    });
  });

  //side navigation bar open close function
// side nav open close & scroll off when side nav open

function openNav() {
   document.getElementById("sidenav").style.width = "300px";
   document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "white";
}

// side nav bar close whem scroll 
document.addEventListener("scroll", function() {
  closeNav();
});


// copied code from GainNode.html

function r(n, i = false) {
  let r = y(n, i).toLowerCase();
  r = r.substring(0, r.length - 1).replace(/ |-|#/g, "_");
  t.handlers.forEach(function(t) {
      let {
          dataset: {
              itc: o,
              trackName: s,
              trackPromoId: u
          }
      } = n;
      const h = s.toLowerCase().replace(/ |-/g, "_");
      let i = "00000000-0000-0000-0000-000000000000";
      const f = n.hasAttribute("id"),
          e = n.parentElement;
      if (f || e.classList.contains("swp-react")) {
          const t = f ? n.getAttribute("id") : e.getAttribute("id");
          i = t.startsWith("id-") ? t.substring(3) : t
      }
      i == "00000000-0000-0000-0000-000000000000" && u && (i = u);
      t.setTrackingAttrs(n, r, h, i, o)
  })
}