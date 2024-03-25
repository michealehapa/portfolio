//scroll navbar section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });

            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }

        //if want to use animation that repeats on scroll use this 
        else {
            sec.classList.remove('show-animate');
        }
    });


    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    
    //animation footer on scroll

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}



//toggle menu

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//get the current year
var currentYear = new Date().getFullYear();

var yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = currentYear;
}


// Initialize EmailJS with your user ID
// emailjs.init("ehapamicheal@gmail.com");

// Function to send email
// function sendEmail() {
//     // Get form data
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var mobileNumber = document.getElementById('mobileNumber').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;

//     // Send email
//     emailjs.send('service_xzdpcmq','template_keilg2d','#contactForm','uqqMBYrxyccHfQz85' {
//         name: name,
//         email: email,
//         mobileNumber: mobileNumber,
//         subject: subject,
//         message: message
//     })
//     .then(function(response) {
//         // Email sent successfully
//         alert('Your message has been sent.');
//         // You can redirect the user to another page if needed
//     }, function(error) {
//         // Error occurred while sending email
//         console.error('Error sending email:', error);
//         alert('There was an error sending your message. Please try again later.');
//     });
// }


// emailjs.init("uqqMBYrxyccHfQz85");


// function sendEmail() {
//     // Get form data
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var mobileNumber = document.getElementById('number').value; // Corrected ID
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;

//     // Send email
//     emailjs.send('service_xzdpcmq', 'template_ogsddxl', {
//         name: name,
//         email: email,
//         mobileNumber: mobileNumber,
//         subject: subject,
//         message: message
//     })
//     .then(function(response) {
//         // Email sent successfully
//         alert('Your message has been sent.');
//         // You can redirect the user to another page if needed
//     }, function(error) {
//         // Error occurred while sending email
//         console.error('Error sending email:', error);
//         alert('There was an error sending your message. Please try again later.');
//     });
// }


// Send Email     template_ogsddxl   use this later template_keilg2d




// const contactForm = document.getElementById("contactForm");

// const sendEmail = (e) => {
//     e.preventDefault()


//     emailjs.sendForm('service_xzdpcmq','template_keilg2d','#contactForm','uqqMBYrxyccHfQz85')

//     .then(function(response) {
//         // Email sent successfully
//         alert('Your message has been sent.');
//         // You can redirect the user to another page if needed
//         }, function(error) {
//         // Error occurred while sending email
//         console.error('Error sending email:', error);
//         alert('There was an error sending your message. Please try again later.');
//     });
    
// }


// contactForm.addEventListener('submit', sendEmail)


// function sendMessage() {
//     (function () {
//         emailjs.init("uqqMBYrxyccHfQz85");
//     })();

//     let serviceID = "service_xzdpcmq";
//     let templateID = "template_ogsddxl";

//     let params = {
//         sendername: document.querySelector("#name").value,
//         senderemail: document.querySelector("#email").value,
//         subject: document.querySelector("#subject").value,
//         nuumber: document.querySelector("#number").value,
//         message: document.querySelector("#message").value
//     };

//     emailjs.send(serviceID, templateID, params)
//     .then(res => {
//         alert('Thank you, ' + params['sendername'] + '! Your message has been sent.');
//     })
//     .catch();
// }



 

























