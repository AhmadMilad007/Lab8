describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  //slider test
  it('slider changes when volume input changes', () => {
      cy.get('#volume-number').clear().type('75');
      cy.get('#volume-slider').then ($el =>{
        expect($el).to.have.value(75)
      })
  });
  //reverse slider test
  it('volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then ($el =>{
      expect($el).to.have.value(33)
    })
  });
  //audio element test
  it ('audio element chnages when value of slider change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then ($el =>{
      expect($el).to.prop('volume', 0.33)
    })
  });

  //Test if the image and sound sources change when you select the party horn radio button
  it ('image and sound sources should change depending on party horn radio button selection', () => {
    cy.get('#radio-party-horn').check();
    //sound image test
    cy.get('#sound-image').then ($el =>{
      expect($el).to.have.attr('src', './assets\/media\/images\/party-horn.svg')
    })
    //horn audio test
    cy.get('#horn-sound').then ($el =>{
      expect($el).to.have.attr('src', './assets\/media\/audio\/party-horn.mp3')
    })
   });

   //Test if the volume image changes when increasing volumes (you must test for all 3 cases)
   it ('Volume image must change on every volume level', () => {
    //Mute 
    cy.get('#volume-number').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then ($el =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    })
    //Level 1 
    cy.get('#volume-number').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then ($el =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })
    //Level 2
    cy.get('#volume-number').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then ($el =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    })
    //Level 3
    cy.get('#volume-number').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then ($el =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    })
    });

    //Test if the honk button is disabled when the textbox input is a empty or a non-number
    it ('honk button is disabled when the textbox input is a empty or a non-number', () => {
      
      //input is regular non 0 inrange numnber
      cy.get('#volume-number').clear().type('6');
      cy.get('#honk-btn').then ($el =>{
        expect($el).to.not.have.attr('disabled')
      })
      //input is 0
      cy.get('#volume-number').clear().type('0');
      cy.get('#honk-btn').then ($el =>{
        expect($el).to.have.attr('disabled')
      })
      //input is empty
      cy.get('#volume-number').clear().type(' ');
      cy.get('#honk-btn').then ($el =>{
        expect($el).to.have.attr('disabled')
      })
      //input is non-number
      cy.get('#volume-number').clear().type('A');
      cy.get('#honk-btn').then ($el =>{
        expect($el).to.have.attr('disabled')
      })
    });

    //Test if an error is shown when you type a number outside of the given range for the volume textbox input
    it ('An error must be shown when volume textbox input is off range', () => {
      //error test
      cy.get('#volume-number').clear().type('101');
      cy.get('#honk-btn').trigger('input');
      cy.get('#volume-number:invalid').should('exist');
    });



});
