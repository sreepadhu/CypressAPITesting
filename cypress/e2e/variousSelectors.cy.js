

describe('learning Cypress', () => {

    it('first test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option404']).should('be.checked')

        cy.get('select#dropdown-class-example').select('option1')

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($element, index, $list) => {

            if ($element.text() === 'India') {
                cy.wrap($element).click()
            }
        })


        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (str1) => {
            expect(str1).to.equal('Hello , Are you sure you want to confirm?')
            return false;
        })

    })

})