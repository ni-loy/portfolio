function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var massage = document.getElementById("massage").value;

  if (name && email && massage) {
    var params = {
      name: name,
      email: email,
      massage: massage
    };
    const serviceID = "service_rczsn4x";
    const templateID = "template_l05bpgk";
    emailjs.send(serviceID, templateID, params)
      .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("massage").value = "";
        console.log(res);

        swal({
          title: "Success!",
          text: "Your massage sent successfully!!",
          icon: "success",
          button: "Close",
        });
      })
      .catch(err=>console.log(err));
  } else {
    swal({
      title: "Error",
      text: "Please fill out all fields before sending the message.",
      icon: "error",
      button: "Close",
    });
  }
}
/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*==================== scroll reveal====================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { orange: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { orange: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { orange: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { orange: 'right' });
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });  
        };
    });
     /*==================== sticky navbar ====================*/
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Fronted Developer', 'Graphics Designer', 'Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
