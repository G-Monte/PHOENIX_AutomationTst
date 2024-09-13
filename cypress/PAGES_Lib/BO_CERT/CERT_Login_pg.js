class CERT_Login_pg {
  /*  
  accessLink(url) {
      //cy.visit('https://stagingsso.qima.com/inspection/wqs');
      cy.visit(url, {
        timeout: 120000, // Increase timeout to 2 minutes
        onBeforeLoad: (win) => {
          cy.log('Page is about to load');
        },
        onLoad: (win) => {
          cy.log('Page has loaded');
        }
      });
    }
    */

    accessLink(url) {
      cy.visit(url);
    }
    enterUsername(username) {
        //cy.get('input[name=username]').type('guilherme.monte');
        cy.get('input[name=username]').type(username);
    }
    enterPassword(password) {
        //cy.get('input[name=password]').type('qimacerT@786');
        cy.get('input[name=password]').type(password);
    }
    submit() {
        cy.get('input[type=submit][id=login]').click() 
    }
  
    login(url, username, password) {
      this.accessLink(url);
      this.enterUsername(username);
      this.enterPassword(password);
      this.submit();
    }
    login2(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.submit();
    }
  }
  
  export default new CERT_Login_pg();