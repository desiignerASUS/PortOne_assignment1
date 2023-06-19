import Home_PO from "../../support/POM/LifeStyle/HomePage";
//import Amount from "../../support/POM/LifeStyle/Popup";

///<reference types = "Cypress" />
///<reference types="@cypress/xpath" />

describe('First Suit', () => {
    const Home_link = new Home_PO()
    //const AMOUNT = new Amount();
    beforeEach(()=>{
         Home_link.visitHome();
    })

    it('1st-TC', () => {
        let amount=1000;
        let name = 'Prabhat';
        cy.xpath("//h4[normalize-space()='PortOne Global']").should('have.text',' PortOne Global');
        //cy.wait(1000) => explitcily wait for 1 second and value should be passed in milliseconds(ms); 
        cy.wait(1000);
        // passing the id as a element locator for id =>'#id_value';
        cy.get("#mySelect").click();
        cy.wait(1000);
        cy.get("li").contains('English').click();
        cy.wait(1000);
        cy.get("#amount").type(amount);
        cy.wait(1000);
        cy.get('#2R5s8kRxgWmnOa62FsVfHa7mQog').type(name);
        cy.wait(1000);
        cy.get('#2R5s8gTLnMViCb1izrbpOb6LpQJ').type('prabhatjain19950@gmail.com');
        cy.wait(1000);
         // passing the class name as a element locator for class =>'.class_name';
        cy.get('.arrow').click();
        //cy.scrollintoView('India').click();
        //cy.get('.country-name').scrollIntoView('India').click() // Scrolls 'footer' into view
        cy.get('span').contains('India').click();
        cy.wait(1000);
        cy.get('#2R5s8eI56kojIqXqlHsVj4NphfE').type('7566458512');
        cy.wait(1000);
        cy.get('#2R5s8kFBsF2cD52JTyCjU34Lvcj').click();
        cy.get(1000);
        cy.get('li').contains('Yes').click();
        cy.get(1000);
        //cy.get('button').click();//.and('have.value',' PAY NOW @ 12.000,00 ₫')
        cy.get("div[class='MuiBox-root css-1l4w6pd'] button[type='button']").click();
        cy.wait(1000);
        cy.xpath("//div[@class='MuiAlert-message css-1w0ym84']").should('have.text','The amount selected is invalid. Amount should be between : 10000.000000 - 20000.000000');
        cy.wait(1000);
        //Successfully Reload the page
        cy.reload();
        cy.wait(1000);
    })
     
    it('2nd-TC', () => {
        let amount=12000;// Replace with the actual value you want to check
        let name = 'Prabhat';
        let value = 8827453233989325;
        cy.wait(1000);
        cy.get("#mySelect").click();
        cy.wait(1000);
        cy.get("li").contains('English').click();
        cy.wait(1000);
        cy.get("#amount").type(amount);  
        cy.wait(1000);
        cy.get('#2R5s8kRxgWmnOa62FsVfHa7mQog').type(name);
        cy.wait(1000);
        cy.get('#2R5s8gTLnMViCb1izrbpOb6LpQJ').type('prabhatjain19950@gmail.com');
        cy.wait(1000);
        cy.get('.arrow').click();
        //cy.scrollintoView('India').click();
        //cy.get('.country-name').scrollIntoView('India').click() // Scrolls 'footer' into view
        cy.get('span').contains('India').click();
        cy.wait(1000);
        cy.get('#2R5s8eI56kojIqXqlHsVj4NphfE').type('7566458512');
        cy.wait(1000);
        cy.get('#2R5s8kFBsF2cD52JTyCjU34Lvcj').click();
        cy.get(1000);
        cy.get('li').contains('Yes').click();
        cy.get(1000);
        //cy.get('button').click();//.and('have.value',' PAY NOW @ 12.000,00 ₫')
        cy.get("div[class='MuiBox-root css-1l4w6pd'] button[type='button']").click();
        cy.wait(2000);
        cy.get('#defaultAddressName').should('have.text',name);
        cy.get(1000);
        cy.xpath("//body/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]").click();
        cy.wait(1000);
        cy.xpath("//body/div[4]/div[1]/div[1]/ul[1]/li[2]/a[1]").click();
        cy.wait(1000);
        cy.get("#creditdebitcardlangDirect").should('have.text','Credit/Debit Card').click();
        cy.wait(1000);
        cy.get('#PayNowButtonWeb').click();
        cy.wait(2000);
        cy.get('h1').should('have.text','Order');
        //cy.get(".hidden-xs").should('have.text','Order');
        cy.wait(1000);
        cy.get('#card_number').type(value);
        cy.get('#card_number').invoke('val').then((value) => {
            //by removing any non-numeric characters using a regular expressio
            const digitCount = value.replace(/\D/g, '').length;
            expect(digitCount).to.eq(16); // Card desired number of digits is 16;
        });

        cy.wait(1000);
        cy.get('#card_name').type(name);
        cy.wait(1000);
        cy.get('#card_date').type('0527');
        cy.get('#card_date').invoke('val').then((value) => {
            const digitCount = value.replace(/\D/g, '').length;
            expect(digitCount).to.eq(4);  //expiry MM/YR desired number of digits is 4;
        });

        cy.wait(1000);
        cy.get('#cvv').type('732');
        cy.get('#cvv').invoke('val').then((value) => {
            const digitCount = value.replace(/\D/g, '').length;
            expect(digitCount).to.eq(3); // CVV desired number of digits is 3;
         });
        cy.wait(1000);
        cy.get('#btn-submit').click();
        //cy.go('back') moved you to the previous page;
        cy.go('back');


    });
});
