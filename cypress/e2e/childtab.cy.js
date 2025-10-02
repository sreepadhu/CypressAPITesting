

describe('learning Cypress', () => {

    it('first test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'qaclickacademy')
        cy.origin("https://www.qaclickacademy.com/", () => {

            cy.get('div[class*="button"] a.main-btn').click()

        })

        cy.origin("https://www.udemy.com/user/testing-minds/", () => {
            cy.wait(10000)
            cy.get('input[type="checkbox"]').check({ force: true }).should('be.checked')
        })



    })

})