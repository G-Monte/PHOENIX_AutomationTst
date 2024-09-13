//This import one file at time
import CERT_Login_pg from '../../PAGES_Lib/BO_CERT/CERT_Login_pg.js';
import CERT_Profile_pg from '../../PAGES_Lib/BO_CERT/CERT_Profile_pg.js';
import CERT_Search_pg from '../../PAGES_Lib/BO_CERT/CERT_Search_pg.js';

//I want to import all at once '../PAGES_Lib/BO_CERT/'
// Also I want to access them like cy.funcationA();

//const data = require('../../fixtures/data.json');

describe('Login Test', () => {
  it('should login successfully', () => {

    //Excel fields: Environment	URL	User	PWD	Profile
    
    //data.forEach((row) => {
    //  cy.log(row.User);
    //});

    CERT_Login_pg.login('https://stagingsso.qima.com/inspection/wqs', 'guilherme.monte', 'qimacerT@786');
    //then system moves to next page

    CERT_Profile_pg.Set_UserProfile("admin");
    //cy.wait('@roleSelection');

    //then system moves to next page

    CERT_Search_pg.Search_TestOrder("Yes", "R-Cloud-staging-2401017");
    //then system moves to next page

  });
/*
  before(() => {
    // Perform login once before all tests
    CERT_Login_pg2.visit('https://stagingsso.qima.com/inspection/wqs');
    cy.wait(2000);
    
  });
  it('should login successfully', () => {
    
    CERT_Login_pg2.login('guilherme.monte', 'qimacerT@786');
    cy.wait(3000);
    //CERT_Profile_pg2.Select_Role("sales");
  });

  it('should select user role successfully', () => {
    
    CERT_Profile_pg2.Select_Role("sales");
    cy.wait(2000);
  });
*/
});