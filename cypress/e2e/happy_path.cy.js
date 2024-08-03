describe('OrangeHRM Basic Elements Validation', () => {
  //Validación de elementos básicos de OrangeHRM

    beforeEach('Enter URL',() => { 
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })

    it('Validate Orange HRM logo is visible', () => {
      // Validar que el logo de "Orange HRM" sea visible
      cy.get('.orangehrm-login-branding > img').should('be.visible')
    })
  
    it('Validate username field is visible', () => {
      // Validar que el campo de username sea visible
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
    })
  
    it('Validate that the "login" button is visiblet', () => {
      // validar que el boton "login" sea visible
      cy.get('.oxd-button').should('be.visible')
    })

    it('Validate footer contains OrangeHRM version text', () => {
      cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('be.visible', 'OrangeHRM')
    })

    it('Validate login with correct credentials', () => {
      // Validar inicio de sesión con credenciales correctas
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
    })

  
  })