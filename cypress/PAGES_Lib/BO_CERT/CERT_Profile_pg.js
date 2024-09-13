class CERT_Profile_pg {

    Select_Role (role){
        cy.get('input[type=radio][value=' + role +']').should('be.visible').check();
    }

    Click_Proceed(role){
        
        cy.setupUserSession(role).then(() => {
            //cy.intercept('/food-certification/roles*').as('roleSelection');

            // Visit the initial URL
            cy.visit('https://stagingsso.qima.com/inspection/wqs/');

            // Add assertions to ensure you are on the correct page
            cy.url().should('include', 'wqs');
            //cy.wait('@roleSelection');
        });
    }

    Set_UserProfile(role){
        
        this.Select_Role(role);
        this.Click_Proceed(role);
    }

}
export default new CERT_Profile_pg();