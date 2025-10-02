
import 'cypress-iframe'


describe('learning Cypress', () => {

    it('first test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded('#courses-iframe')

        //        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

        // Click and wait for navigation
        cy.iframe({ timeout: 10000 }).find('a[href*="mentorship"]').first().click()

        // Add a longer wait for the iframe content to update
        cy.wait(3000)

        // Force a fresh iframe reference
        cy.iframe({ timeout: 15000 }).then(($iframe) => {
            return cy.wrap($iframe).find("h1[class*='pricing-title']")
                .should('be.visible')
                .and('have.length', 2)
        })


    })

})