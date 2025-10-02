

describe('learning Cypress', () => {

    it('first test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($element, index, $list) => {

            const courseName = $element.text()
            if (courseName.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    cy.log("the price of the course " + courseName + " is " + price.text())
                    expect(parseInt(price.text())).to.equal(25)

                })
            }

        })




    })

})