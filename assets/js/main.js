// Navbar Object.
const navbar = {
    logo: {
        text1: "Portfolio",
        text2: "iamtt.tech",
    },
    socialLinks: {
        link1: {
            name: "Github",
            imgSrc: "../assets/images/github.png",
            link: "https://github.com/tomost2019/"
        },
        link2: {
            name: "Linkedin",
            imgSrc: "../assets/images/linkedin.png",
            link: "https://www.linkedin.com/in/tom-amnuay/"
        },
      },
      hamburgerMenu: {
        link1: {
            text: "Projects",
            href: "#projectskill"
        },
        link2: {
            text: "About",
            href: "#about"
        },
        link3: {
            text: "Contact",
            href: "#contact-all"
        },
      },
      showLogo: () => {
        $('.item-portfolio').text(`${navbar.logo.text1}`);
        $('.item-iamtt').text(`${navbar.logo.text2}`);
    },
      showLinks: () => {
        let social = Object.values(navbar.socialLinks);
        // Iterate through social and append social icons.
        for (let value of social) {
          $(".social-icons").append(`
            <div class="item-social">
                <a href="${value.link}" target="_rel">
                <img src="${value.imgSrc}" alt="${value.name}">
                </a>
            <div class="item-social-text">
                <div class="underscore"></div>
                <span class="open">Open</span>
            </div>
        `);
        $(".social-icons-bottom").append(`
            <a href="${value.link}" target="_rel">
            <img src="${value.imgSrc}" alt="${value.name}">
            </a>
        `)
        };
      },
      showHamburgerMenu: () => {
        $('.hamburger').on('click', function () {
        $('.hamburger-menu').css('display', 'grid');
        })
        let hamburgerMenu = Object.values(navbar.hamburgerMenu);
        // Iterate through hamburgerMenu and append the links.
        for (let value of hamburgerMenu) {
            $('.menu-content').append(`
            <div class="menu-content-text">
                <a class="menu" href="${value.href}">${value.text}</a>
            </div>
        `);
        }
      },
      closeHamburgerMenu: () => {
          $(document).on('keydown', function(e) {
            if (e.keyCode == 27) /* ESC Key */ {
                $('.hamburger-menu').css('display', 'none');
            }
          })
          $('.escape').on('click', function() {
            $('.hamburger-menu').css('display', 'none');
          })
          $('.menu').on('click', function() {
            $('.hamburger-menu').css('display', 'none');
          })
      }
    };

// One function to create the navbar. 
function createNavBar() {
    // Display the logo
    navbar.showLogo();

    // Display social links
    navbar.showLinks();

    // Hamburger Menu
    navbar.showHamburgerMenu();
    navbar.closeHamburgerMenu();
};

// Projects and Skills Object.
const projects = {
    cards: {
        card1: {
            name: "Dj-Colors",
            skills: "html, css, js, bootstrap, jquery",
            thumbnail: "assets/images/dj-color-thumbnail.png",
            github: "https://github.com/tomost2019/dj-colors",
            live: "https://dj-colors.iamtt.tech"
        },
        card2: {
            name: "MixMatch",
            skills: "html, css, js, bootstrap, jquery",
            thumbnail: "assets/images/mixmatch-thumbnail.png",
            github: "https://github.com/tomost2019/MixMatch",
            live: "https://mixmatch.iamtt.tech"
        },
        card3: {
            name: "Portfolio IamTT",
            skills: "html, css, js, jquery",
            thumbnail: "assets/images/iamtt-thumbnail.png",
            github: "https://github.com/tomost2019/IamTT",
            live: "https://iamtt.tech"
        },
    },
    skills: {
        skill1: {
            name: "html",
            imgSrc: "../assets/images/skills/html-5.png"
        },
        skill2: {
            name: "css",
            imgSrc: "../assets/images/skills/css3.png"
        },
        skill3: {
            name: "js",
            imgSrc: "../assets/images/skills/js.png"
        },
        skill4: {
            name: "python",
            imgSrc: "../assets/images/skills/python.png"
        },
        skill5: { 
            name: "bootstrap",
            imgSrc: "../assets/images/skills/bootstrap.png"
        },
        skill6: {
            name: "jquery",
            imgSrc: "../assets/images/skills/jquery.png"
        },
        skill7: {
            name: "react",
            imgSrc: "../assets/images/skills/react.png"
        },
        skill8: {
            name: "mongodb",
            imgSrc: "../assets/images/skills/mongodb.png"
        },
        skill9: {
            name: "django",
            imgSrc: "../assets/images/skills/django.png"
        },
    },
    showProjectCards: () => {
        let cards = Object.values(projects.cards);

        // Iterate through cards and append project cards.
        for(let value of cards) {
            /* Add the attribute data-skills with the skills from each projects.
            It is used to compare skills in the projectShowSkills function. */
            $('.project-container').append(`
            <div class="card" data-skills="${value.skills}"> 
                <div class="card-thumbnail">
                    <img src="${value.thumbnail}" alt="${value.name}">
                </div>
                <div class="card-link">
                <a href="${value.live}" target="_rel"><img src="../assets/images/live.png" alt"Live"></a>
                <a href="${value.github}" target="_rel"><img src="../assets/images/github-live.png" alt="github"></a>
                </div>
            </div>
            `)
        };

        // Checks if the web browser is edge and add proper css.
        if(navigator.appVersion.indexOf("Edge") != -1){
            $('.card-link').css('justify-content', 'space-around')
          };

    },
    showSkills: () => {
        let skills = Object.values(projects.skills);

        // Iterate through skills and append skill icons.
        for (let value of skills) {
            $('.icons').append(`

            <img id="${value.name}" src="${value.imgSrc}" alt="${value.name}">

            `)
        };
    },
    /* This function is to hightlight the skills 
    when hovering over the projects cards. 
    This shows which skills were used to make the project. 
    After hover the icons return to their normal state */
    projectShowSkills: () => {

        $('.card').hover(function ()  {

            // Get the data from the data-tag.
            let dataSkills = $(this).data('skills');

            // Convert it into an array
            let arrDataSkills = dataSkills.split(", ");
    
            allDataSkills = [];
    
            /* Add an id tag so that allDataSkills and allSkills 
            are in the same format to enable filter later. */
            for (let value of arrDataSkills) {
                allDataSkills.push("#" + value);
            };

            // Get the data from the skills object.
            skills = Object.values(projects.skills);

            // All skills array. 
            allSkills = [];
    
            /* Add an id tag so that allDataSkills and allSkills 
            are in the same format to enable filter later. */
            for (let value of skills) {
                allSkills.push("#" + value.name);
            };
    
            /* Filter allSkills array from the content of allDataSkills array 
            and re-decklare the original array of allSkills.*/
            allSkills = allSkills.filter(function(item) {
                return !allDataSkills.includes(item); 
              });

            // Add effects from allSkills array.
            for (let value of allSkills) {
                $(value).removeClass('icons-out');
                $(value).addClass('icons-in');
            };
    
            for(let value of allDataSkills) {
                $(value).removeClass('icons-zoom-out');
                $(value).addClass('icons-zoom-in');
            };
    
            // Remove effects, reset data.
            }, function () {

                for (let value of allSkills) {
                    $(value).removeClass('icons-in');
                    $(value).addClass('icons-out');
                };
    
                for(let value of allDataSkills) {
                    $(value).removeClass('icons-zoom-in');
                    $(value).addClass('icons-zoom-out');
                };
              
                allSkills.length = 0;
                allDataSkills.length = 0;
                
            });
    }

};

// One function to create projects and skills section. 
function showProjects() {
    // Display project cards.
    projects.showProjectCards();

    // Display skills.
    projects.showSkills();

    // Display which skills were used for creating a project.
    projects.projectShowSkills();
};

// Enables the contact form to send email through EmailJS API. 
function contactForm() {

    /* When the mail has been sent from the contact form 
    the function changes the css heights for the contact section
    to proper display the "MESSAGE SENT" text.*/
    function sentMail() {
        let width = $(window).width();
        
        if (width > 767) {
            $('.contact').hide()
            $('.contact-text').text('MESSAGE SENT').css('bottom', '180px').css('padding', '35px');
            $('.social-icons-bottom').css('top', '90px');
            $('.copyright').css('top', '210px');
            $('#contact-all').css('height', '310px');
            $('.contact-content').css('height', '310px');
            $('.about-content').css('margin-bottom', '150px');
        }
        
        if(width <= 767) {
            $('.contact').hide()
            $('.contact-text').text('MESSAGE SENT');
            $('.contact-text').css('bottom', '100px').css('height', '170px');
            $('.social-icons-bottom').css('top', '190px');
            $('.copyright').css('top', '300px');
            $('#contact-all').css('height', '350px');
            $('.contact-content').css('height', '350px');
            $('.about-content').css('margin-bottom', '50px');
        }
    }

    // Send the information from the form to my email through emailJS Api.
    $('form#contact').submit(function(event){
        event.preventDefault();
        
        (function(){
            emailjs.init("user_gu8GAa6Qyz2ypOgNiIYpe");
         })();
    
      let service_id = "gmail";
      let template_id = "portfolio";
      let myForm = $("form#contact");
    
      myForm.find('button').text('SENDING...');
      emailjs.sendForm(service_id, template_id ,myForm[0])
          .then(function(){ 
            sentMail();
            myForm.find('button').text('SEND');
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myForm.find('button').text('SEND');
        });
      return false;
    });

};


// Drift (insta chat) Icon at the bottom right. 
function driftChat() {
    "use strict";
    !function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
          if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
          };
        }
      }();
      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('kvx7dnbxr8t9');
};

// Show the whole portfolio.
createNavBar();
showProjects();
contactForm();
driftChat();