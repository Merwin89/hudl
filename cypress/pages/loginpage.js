class LoginPage {
    get loginLink() {
        return cy.get('a[data-qa-id="login-select"]');
    }

    get hudlLoginButton() {
        return cy.get('[data-qa-id=login-hudl]');
    }

    get emailInput() {
        return cy.get('#email');
    }


    get helpText() {
        return cy.get('#username-helptext');
    }

    get criticalIcon() {
        return cy.get('svg.uni-icon--critical');
    }

    get requiredText() {
        return cy.get('#uniName_947Help');
    }

    get passwordInput() { 
        return cy.get('#password');
    }
    get loginButton() { 
        return cy.get('#logIn');
    }
    get forgotPasswordLink() { 
        return cy.get('#forgot-password'); 
    }
    get facebookLoginButton() { 
        return cy.get('#btn-facebook-login'); 
    }
    get googleLoginButton() { 
        return cy.get('#btn-google-login'); 
    }
    get appleLoginButton() { 
        return cy.get('#btn-apple-login'); 
    }
    get termsOfServiceLink() { 
        return cy.get('#site-terms'); 
    }
    get privacyPolicyLink() { 
        return cy.get('#privacy-policy'); 
    }
    get createAccountButton() { 
        return cy.get('#btn-show-signup'); 
    }
    get errorMessage() { 
        return cy.get('.error-message'); 
    }

    get forgotPasswordPage(){
        return cy.get('#reset-box > .headline')
    }

    get contactUsLink() {
        return cy.get('')
    }
    clickLoginLink() {
        this.loginLink.click();
    }

    loginLinkShouldBeVisible() {
        this.loginLink.should('be.visible');
    }

    loginLinkShouldHaveHref() {
        this.loginLink.should('have.attr', 'href', '#');
    }

    loginLinkShouldBeExpandable() {
        this.loginLink.should('have.class', 'mainnav__item--expandable');
    }

    loginLinkAriaExpandedStateShouldBeFalse() {
        this.loginLink.should('have.attr', 'aria-expanded', 'false');
    }

    clickHudlLogin() {
        this.hudlLoginButton.click();
    }

    fillEmail(email) {
        this.emailInput.type(email);
    }

    fillPassword(password) {
        this.passwordInput.type(password);
    }

    clickLogin() {
        this.logInButton.click();
    }

    clickForgotPassword() {
        this.forgotPasswordLink.click();
    }

    checkforgotPasswordPage() {
        this.forgotPasswordPage.should('contain.text','Forgot Password')
    }

    clickFacebookLogin() {
        this.facebookLoginButton.click();
        cy.wait(2000)
        
    
    }

    clickGoogleLogin() {
        this.googleLoginButton.click();

    }

    clickAppleLogin() {
        this.appleLoginButton.click();
    }

    clickCreateAccount() {
       this.createAccountButton.click();
    }

    clickContactUs() {
        this.contactUsLink.click();
    }

    checkErrorMessage() {
        this.errorMessage.should('contain', 'Required');
    }

    submitForm() {
        this.loginButton.click();
    }

    clearEmail() {
        this.emailInput.clear();
    }

    clearPassword() {
        this.passwordInput.clear();
    }

    clickTermsOfService() {
        this.termsOfServiceLinkinvoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
        })
        cy.url().should('contain','https://www.hudl.com/terms')
    }

    clickPrivacyPolicy() {
        this.privacyPolicyLink.invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
        })
        cy.url().should('contain','https://www.hudl.com/privacy')
    }

    verifyErrorMessage() {
        this.errorMessage.should('be.visible');
    }
}

module.exports = new LoginPage();