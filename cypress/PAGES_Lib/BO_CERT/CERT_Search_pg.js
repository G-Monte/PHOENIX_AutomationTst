class CERT_Search_pg {

    Criteria_ShowTestOrder(decision){

        if (decision = "Yes") {
            cy.get('.selected .delete').click();            
        }
    }

    Search_Order(order_id){
        cy.get('input[id=searchOrderNo]').should("be.visible").type(order_id);
        cy.wait(100);
        cy.get('input[id=searchOrderNo]').type('{enter}');
        cy.wait(100);
        cy.get('input[id=searchOrderNo]').type('{esc}');
    }

    Button_Search(){
        //cy.get('button[type=button][nodename=INPUT]').click
        //cy.get('input[type=button][nodeName=INPUT]').click
        
    }

    OpenOrder(order_ID){
        cy.get('tr')
            .contains('td', order_ID)
            .first().click();
         /*  .closest('tr')
            .find('input[type="checkbox"]')
            .click(); */
      // Use .check() for checkbox, or .click() if the checkbox is styled and custom
      
      /*
      cy.get('tr')
      .contains('td', 'R-Cloud-staging-2401017')
      .first()
      .closest('tr')
      .within(() => {
        // Extract the orderid value from the input element
        cy.get('input[type="hidden"]').invoke('attr', 'orderid').then((orderidValue) => {
          // Log the orderid value for debugging purposes
          cy.log(`Extracted orderid: ${orderidValue}`);
          
          // Construct the href using cy.get and invoke('attr', 'href') to fetch the href of the `<a>` tag
          cy.get('a').invoke('attr', 'href').then((href) => {
            // Log the href for debugging purposes
            cy.log(`Navigating to: ${href}`);

            // Navigate to the extracted href
            cy.visit(href);
          });
        });
      });
      */
    }

    Search_TestOrder(decision, order_ID){
        this.Criteria_ShowTestOrder(decision);
        this.Search_Order(order_ID);
        this.Button_Search();
        this.OpenOrder(order_ID);
    }
}
export default new CERT_Search_pg();