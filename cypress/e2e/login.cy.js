const loginPage = require('../pages/loginPage');

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('URL'));
    });

    it('Login link should be visible on the page', () => {
        loginPage.loginLinkShouldBeVisible();
    });

    it('Login link should have correct href attribute', () => {
        loginPage.loginLinkShouldHaveHref();
    });

    it('Login link should be expandable', () => {
        loginPage.loginLinkShouldBeExpandable();
    });

    it('Login link aria-expanded attribute should be false initially', () => {
        loginPage.loginLinkAriaExpandedStateShouldBeFalse();
    });

    it('Click on login link should expand login options', () => {
        loginPage.clickLoginLink();
        loginPage.loginLink.should('have.attr', 'aria-expanded', 'true');
    });

    it('Verify that the input field accepts a valid email format', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.fillEmail(Cypress.env('VALID_EMAIL'));
        loginPage.emailInput.should('have.value', Cypress.env('VALID_EMAIL'));
    });

    it('Check if the input field allows entering the maximum limit of characters', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        const longEmail = 'a'.repeat(254) + '@example.com';
        loginPage.fillEmail(longEmail);
        loginPage.emailInput.should('have.value', longEmail);
    });

    it('Ensure that the help text is visible and readable under the email input field', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.helpText.should('be.visible').and('contain', 'If you are a Hudl user, log in with your Hudl account here.');
    });

    it('Confirm that the icon and "Required" text are displayed when no email is entered and the form is submitted', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.submitForm();
        loginPage.criticalIcon.should('be.visible');
        loginPage.requiredText.should('contain', 'Required');
    });

    it('Confirm that the icon and "Required" text are displayed when only a valid email address is entered', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.fillEmail(Cypress.env('VALID_EMAIL'));
        loginPage.submitForm();
        loginPage.criticalIcon.should('be.visible');
        loginPage.requiredText.should('contain', 'Required');
    });

    it('Enter a string of characters without "@" and "." to check if the input correctly identifies the absence of essential email components', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.fillEmail('userexamplecom');
        loginPage.submitForm();
        loginPage.criticalIcon.should('be.visible');
        loginPage.requiredText.should('contain', 'Required');
    });

    it('Input HTML or JavaScript code into the email field to check for XSS vulnerabilities', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        const xssTestString = '<script>alert("XSS")</script>';
        loginPage.fillEmail(xssTestString);
        loginPage.emailInput.should('not.have.value', xssTestString);
    });


    it('navigates to password recovery on "Forgot Password" click', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.clickForgotPassword();
        loginPage.checkforgotPasswordPage();
    });

    it('opens terms of service in new tab', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.clickTermsOfService();
    });

    it('opens privacy policy in new tab', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.clickPrivacyPolicy();
    });

    it('redirects to Facebook authentication on Facebook login click', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.clickFacebookLogin();
    });

    it('redirects to Google authentication on Google login click', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.clickGoogleLogin();
    });

    it('redirects to Apple authentication on Apple login click', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.clickAppleLogin();
    });

    it.only('leads to registration form on "Create Account" click', () => {
        loginPage.clickLoginLink();
        loginPage.clickHudlLogin();
        loginPage.clickCreateAccount();
    });

    // it('allows user to log in with valid credentials', () => {
    //     loginPage.fillEmail(Cypress.env('ACTIVE_USER'));
    //     loginPage.fillPassword(Cypress.env('ACTIVE_PWD'));
    //     loginPage.clickLogin();
    //   cy.url().should('contain.value', 'https://www.hudl.com/home')
    // });


});