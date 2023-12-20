// Navbar toggle



// $(function(){
//     $("#form-total").steps({
//         headerTag: "h2",
//         bodyTag: "section",
//         transitionEffect: "fade",
//         enableAllSteps: true,
//         stepsOrientation: "vertical",
//         autoFocus: true,
//         transitionEffectSpeed: 500,
//         titleTemplate : '<div class="title">#title#</div>',
//         labels: {
//             previous : 'Back Step',
//             next : 'Next',
//             finish : 'Submit',
//             current : ''
//         },
//     })
// });


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}







// NAvbar BG 

let navbarBg = document.querySelector('.top-nav');
let navBtn = document.querySelector('.navbar-toggler');

window.addEventListener('scroll', () => {

  if (window.scrollY >= 90) {
    navbarBg.classList.add('nav-background');
  } else if (window.scrollY < 90) {
    navbarBg.classList.remove('nav-background');

  }

});

navBtn.addEventListener('click', () => {

  if (navbarBg.classList.add('nav-background')) {
    navbarBg.classList.remove('nav-background');

  } else {
    navbarBg.classList.add('nav-background');

  }

})




    //////////// Format the message content/////////////


    
    
    
    
        //////////// Format the message content/////////////
    
   
function Whatsapp() {
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var date = document.getElementById('formDate').value;
    var select = document.getElementById('category').value;





//     //////////// Format the message content/////////////

    var formattedMessage = (
        " *Name* : " + name + "\n" +
        " *Location* : " + email + "\n" +
        " *Phone Number* : " + number + "\n" +
        " *Email* : " + date + "\n" +
        " *Category* : " + select);


    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(formattedMessage);

    // Construct the WhatsApp URL

    var url = "https://wa.me/+918973056764?text=" + encodedMessage;


    // Open the WhatsApp URL in a new tab/window
    window.open(url);


}

