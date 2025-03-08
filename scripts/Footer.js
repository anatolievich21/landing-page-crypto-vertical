class Footer {
    selectors = {
        logo: '.footer__logo',
        navbar: '.menu--footer',
    };

    mobileBreakpoint = 767.98;

    constructor() {
        this.logoElement = document.querySelector(this.selectors.logo);
        this.navbarElement = document.querySelector(this.selectors.navbar);

        if (this.logoElement && this.navbarElement) {
            this.init();
        }
    }

    rem = (pixel) => {
        if (typeof pixel === 'number' && !isNaN(pixel)) {
            return `${pixel / 16 + 2}rem`;
        }
        throw new Error('Параметр pixel повинен бути числом.');
    };

    updateNavbarPosition = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth > this.mobileBreakpoint) {
            const logoHeight = this.logoElement.offsetHeight;
            const logoHeightRem = this.rem(logoHeight);
            this.navbarElement.style.marginTop = logoHeightRem;
        } else {
            this.navbarElement.style.marginTop = '';
        }
    };

    init() {
        this.updateNavbarPosition();
        window.addEventListener('resize', this.updateNavbarPosition);
    }
}

export default Footer;