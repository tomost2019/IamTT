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

// Show navBar

createNavBar()