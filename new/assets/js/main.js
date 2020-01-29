const navbar = {
    "logo": {
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
            link: "https://www.github.com"
        },
        link2: {
            name: "Line",
            imgSrc: "assets/images/line_logo.png",
            link: ""
        },
        link3: {
            name: "Linkedin",
            imgSrc: "assets/images/linkedin_logo.png",
            link: "https://www.linkedin.com"
        },
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
      }
    };


function createNavBar() {

    // Display the logo
    navbar.showText();

    // Display social links
    navbar.showLinks()
    
};

// Show navBar

createNavBar()




    



