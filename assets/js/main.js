const navbar = {
    logo: {
        text1: "Portfolio",
        text2: "iamtt.tech",
    },
    socialLinks: {
        link1: {
            name: "Github",
            imgSrc: "https://img.icons8.com/material-sharp/70/000000/github.png",
            link: "https://github.com/tomost2019/"
        },
        link2: {
            name: "Linkedin",
            imgSrc: "https://img.icons8.com/color/70/000000/linkedin.png",
            link: "https://www.linkedin.com/in/tom-amnuay/"
        },
        link3: {
            name: "Line",
            imgSrc: "https://img.icons8.com/color/70/000000/line-me.png",
            link: ""
        }
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
            href: ""
        },
      },
      showText: () => {
        // Display the logo text.
        $('.item-portfolio').text(`${navbar.logo.text1}`)
        $('.item-iamtt').text(`${navbar.logo.text2}`)
    },
      showLinks: () => {
        let social = Object.values(navbar.socialLinks);
        // Iterate through social and append data.
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
        }
      },
      showMenu: () => {
        $('.hamburger').on('click', function () {
        $('.hamburger-menu').css('display', 'grid')   
        })
        let hamburgerMenu = Object.values(navbar.hamburgerMenu);
        // Iterate through hamburger data and append it. 
        for (let value of hamburgerMenu) {
            $('.menu-content').append(`
            <div class="menu-content-text">
                <a class="menu" href="${value.href}">${value.text}</a>
            </div>
        `)
        }
      },
      closeMenu: () => {
          // Even triggers for closing the hamburger menu.
          $(document).on('keydown', function(e) {
            if (e.keyCode == 27) {
                $('.hamburger-menu').css('display', 'none')
            }
          })
          $('.escape').on('click', function() {
            $('.hamburger-menu').css('display', 'none')
          })
          $('.menu').on('click', function() {
            $('.hamburger-menu').css('display', 'none')
          })
      }
    };

function createNavBar() {
    // Display the logo
    navbar.showText();

    // Display social links
    navbar.showLinks()

    // Hamburger Menu
    navbar.showMenu()
    navbar.closeMenu()
};

const projects = {
    cards: {
        card1: {
            name: "Dj-Colors",
            skills: "html, css, js, bootstrap, jquery",
            thumbnail: "assets/images/dj-color-thumbnail.png",
            github: "https://github.com/tomost2019/dj-colors",
            live: "https://tomost2019.github.io/dj-colors/"
        },
        card2: {
            name: "MixMatch",
            skills: "html, css, js, bootstrap, jquery",
            thumbnail: "assets/images/mixmatch-thumbnail.png",
            github: "https://github.com/tomost2019/MixMatch",
            live: "https://tomost2019.github.io/MixMatch/"
        },
        card3: {
            name: "Portfolio IamTT",
            skills: "html, css, js, jquery",
            thumbnail: "assets/images/iamtt-thumbnail.png",
            github: "https://github.com/tomost2019/IamTT",
            live: ""
        },
    },
    skills: {
        skill1: {
            name: "html",
            imgSrc: "https://img.icons8.com/color/96/000000/html-5.png"
        },
        skill2: {
            name: "css",
            imgSrc: "https://img.icons8.com/color/96/000000/css3.png"
        },
        skill3: {
            name: "js",
            imgSrc: "https://img.icons8.com/color/96/000000/javascript.png"
        },
        skill4: {
            name: "python",
            imgSrc: "https://img.icons8.com/color/96/000000/python.png"
        },
        skill5: { 
            name: "bootstrap",
            imgSrc: "https://img.icons8.com/color/96/000000/bootstrap.png"
        },
        skill6: {
            name: "jquery",
            imgSrc: "https://img.icons8.com/ios-filled/96/000000/jquery.png"
        },
        skill7: {
            name: "react",
            imgSrc: "https://img.icons8.com/color/96/000000/react-native.png"
        },
        skill8: {
            name: "mongodb",
            imgSrc: "https://img.icons8.com/color/96/000000/mongodb.png"
        },
        skill9: {
            name: "django",
            imgSrc: "https://img.icons8.com/ios-filled/100/000000/django.png"
        },
    },
    showCards: () => {
        let cards = Object.values(projects.cards);

        // Iterate through cards and append data.
        for(let value of cards) {

            $('.project-container').append(`
            <div class="card" data-skill="${value.skills}"> 
                <div class="card-thumbnail">
                    <img src="${value.thumbnail}" alt="${value.name}">
                </div>
                <div class="card-link">
                <a href="${value.live}" target="_rel"><img src="https://img.icons8.com/clouds/120/000000/domain.png" alt"Live"></a>
                <a href="${value.github}" target="_rel"><img src="https://img.icons8.com/clouds/120/000000/github.png" alt="github"></a>
                </div>
            </div>
            `)
        }

        // Checks if the web browser is edge and add proper css.

        if(navigator.appVersion.indexOf("Edge") != -1){
            $('.card-link').css('justify-content', 'space-around')
          };

    },
    showSkills: () => {
        let skills = Object.values(projects.skills);

        // Iterate through skills and append data.
        for (let value of skills) {
            $('.icons').append(`

            <img id="${value.name}" src="${value.imgSrc}" alt="${value.name}">

            `)

        }
    },
    cardShowSkills: () => {

        $('.card').hover(function () {

            // Get the data from the data-tag.
            let dataSkills = $(this).data('skill');

            // Convert it into an array
            let arrDataSkills = dataSkills.split(", ");
    
            allDataSkills = []
    
            // Add a id tag to enable matching arrays later.
            for (let value of arrDataSkills) {
                allDataSkills.push("#" + value);
            }

            // Get the data from the object
    
            skills = Object.values(projects.skills)

            // All skills array. 
    
            allSkills = []
    
            // Add a id tag to enable matching arrays later.
            for (let value of skills) {
                allSkills.push("#" + value.name)
            }
    
            // filter matching arrays and re-write the original array to the new one.
            allSkills = allSkills.filter(function(item) {
                return !allDataSkills.includes(item); 
              })

            // Add effects from allSkills array. 
            
            for (let value of allSkills) {
                $(value).removeClass('icons-out');
                $(value).addClass('icons-in');
            }
    
            for(let value of allDataSkills) {
                $(value).removeClass('icons-zoom-out');
                $(value).addClass('icons-zoom-in');
            }
    
            // Remove effects, reset data.

            }, function () {


                for (let value of allSkills) {
                    $(value).removeClass('icons-in');
                    $(value).addClass('icons-out');
                }
    
                for(let value of allDataSkills) {
                    $(value).removeClass('icons-zoom-in');
                    $(value).addClass('icons-zoom-out');
                }
              
                allSkills.length = 0;
                allDataSkills.length = 0;
                
            })
    }

}

function showProjects() {
    // Display cards
    projects.showCards()

    // Display skills
    projects.showSkills()

    // Display which skills were used for creating a project
    projects.cardShowSkills();
}

// Show Portfolio
createNavBar()
showProjects()
