const navbar = {
    logo: {
        text1: "Portfolio",
        text2: "iamtt.tech",
    },
    showText: () => {
        $('.item-portfolio').text(`${navbar.logo.text1}`)
        $('.item-iamtt').text(`${navbar.logo.text2}`)
    },
    socialLinks: {
        link1: {
            name: "Github",
            imgSrc: "assets/images/github_logo.png",
            link: "https://github.com/tomost2019/"
        },
        link2: {
            name: "Linkedin",
            imgSrc: "assets/images/linkedin_logo.png",
            link: "https://www.linkedin.com/in/tom-amnuay/"
        },
        link3: {
            name: "Line",
            imgSrc: "assets/images/line_logo.png",
            link: ""
        }
      },
      showLinks: () => {
        let social = Object.values(navbar.socialLinks);
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
      hamburgerMenu: {
        link1: {
            text: "Projects",
            href: ""
        },
        link2: {
            text: "About",
            href: ""
        },
        link3: {
            text: "Skills",
            href: ""
        },
        link4: {
            text: "Contact",
            href: ""
        },
      },
      showMenu: () => {
        $('.hamburger').on('click', function () {
        $('.hamburger-menu').css('display', 'grid')   
        })
        let hamburgerMenu = Object.values(navbar.hamburgerMenu);
        for (let value of hamburgerMenu) {
            $('.menu-content').append(`
            <div class="menu-content-text">
                <a href="${value.href}">${value.text}</a>
            </div>
        `)
        }
      },
      closeMenu: () => {
          $(document).on('keydown', function(e) {
            if (e.keyCode == 27) {
                $('.hamburger-menu').css('display', 'none')
            }
          })
          $('.escape').on('click', function() {
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
            thumbnail: "assets/images/dj-color-thumbnail.png",
            github: "https://github.com/tomost2019/dj-colors",
            live: "https://tomost2019.github.io/dj-colors/"
        },
        card2: {
            name: "MixMatch",
            thumbnail: "assets/images/mixmatch-thumbnail.png",
            github: "https://github.com/tomost2019/MixMatch",
            live: "https://tomost2019.github.io/MixMatch/"
        },
        card3: {
            name: "Portfolio IamTT",
            thumbnail: "assets/images/iamtt-thumbnail.png",
            github: "https://github.com/tomost2019/IamTT",
            live: ""
        },
        card4: {
            name: "MixMatch",
            thumbnail: "",
            github: "https://github.com/tomost2019/MixMatch",
            live: "https://tomost2019.github.io/MixMatch/"
        },
        card5: {
            name: "Portfolio IamTT",
            thumbnail: "",
            github: "https://github.com/tomost2019/IamTT",
            live: ""
        },
        card6: {
            name: "MixMatch",
            thumbnail: "",
            github: "https://github.com/tomost2019/MixMatch",
            live: "https://tomost2019.github.io/MixMatch/"
        },

    },
    showCards: () => {
        let cards = Object.values(projects.cards);


        for(let value of cards) {

            $('.card-container').append(`
            <div class="card">
                <div class="card-thumbnail">
                    <img src="${value.thumbnail}" alt="${value.name}">
                </div>
                <div class="card-link">
                <a href="${value.live}" target="_rel"><img src="assets/images/live.png" alt"Live"></a>
                <a href="${value.github}" target="_rel"><img src="assets/images/github.png" alt="github"></a>
                </div>
            </div>
            `)
        };

        $('.card-link').hide();

        $('.card').hover(function () {
            $(this).find('.card-thumbnail').hide();
            $(this).find('.card-link').show();
        }, function() {
            $(this).find('.card-link').hide();
            $(this).find('.card-thumbnail').show();
        });

        if(navigator.appVersion.indexOf("Edge") != -1){
            $('.card-link').css('justify-content', 'space-around')
          };
    }
}

// Show Portfolio
createNavBar()
projects.showCards()




/*
-n+3 
*/