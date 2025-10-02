

describe('learning Cypress', () => {

    it('first test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('attr', 'href').then((url) => {

            cy.visit(url)
            cy.origin(url, () => {
                cy.get('div[class*="button"] a.main-btn').click()

            })

        })



    })

})