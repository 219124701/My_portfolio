

document.addEventListener('DOMContentLoaded', function() {
  // Get references to the menu icon and the navigation menu
  const menuIcon = document.getElementById('menuIcon');
  const navbar = document.querySelector('.navbar');

  // Add click event listener to the menu icon
  menuIcon.addEventListener('click', function() {
      // Toggle the 'active' class on the navigation menu
      navbar.classList.toggle('active');
  });
});





let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

    /*========scroll section active link ========*/

    let sections = document.querySelectorAll('section');
    let navLink = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach.apply(Links => {
                     Links.classList.remove('active');
                     document.querySelector('header nav a[href=' + id +'}') .classList.add('active');

                });  
            };
        });
    };





  function toggleMode() {
    const body = document.body;
    const modeToggleBtn = document.getElementById('modeToggleBtn');
    
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      modeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon if needed
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      modeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon if needed
    }
  }
  
  // Initialize mode based on current preference or default to light mode
  document.addEventListener('DOMContentLoaded', (event) => {
    if (document.body.classList.contains('dark-mode')) {
      document.getElementById('modeToggleBtn').innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      document.getElementById('modeToggleBtn').innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
  


function sendMessage() {
    (function () {
      emailjs.init("xSpbX9MCq3BRrB199"); // Account Public key
    })();
  
    var params = {
      FullName: document.querySelector("#FullName").value,
      Email: document.querySelector("#Email").value,
      Subject: document.querySelector("#Subject").value,
      Mobile: document.querySelector("#Mobile").value,
      Message: document.querySelector("#Message").value,
    };
  
    var serviceID = "service_sr97xy8"; // Email Service ID
    var templateID = "template_7fi70m6"; // Email template ID
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        alert("Email sent successfully");
        // clear the form
        document.getElementById('contact-form').reset();
      })
      .catch(err => {
        alert("Failed to send email: " + JSON.stringify(err));
      });
  }



  document.addEventListener('DOMContentLoaded', function() {
    // DOM is fully loaded, now execute the script
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.querySelector('.navbar');

    // Add click event listener to the menuIcon
    menuIcon.addEventListener('click', function() {
        // Toggle the active class on the navbar
        navbar.classList.toggle('active');
    });
});


function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}


