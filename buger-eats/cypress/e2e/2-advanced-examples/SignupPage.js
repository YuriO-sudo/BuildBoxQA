class SignupPage {
    go() {
        cy.visit('https://buger-eats.vercel.app/');
        cy.get('a[href="/deliver"]').click();
        cy.wait(3000);

        cy.get('a[href="/"]').click(); //aqui valida o botão voltar para home
        cy.wait(3000);

        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should(
            'have.text',
            'Cadastre-se para  fazer entregas',
        );
    }

    fillForm(entregador) {
        cy.get('input[name="name"]').type(entregador.nome);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[name="email"]').type(entregador.email);
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp);
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
        cy.get('input[type=button][value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type(entregador.endereco.numero);
        cy.get('input[name="address-details"]').type(
            entregador.endereco.complemento,
        );
        cy.get('input[name="address"]').should(
            'have.value',
            entregador.endereco.rua,
        );
        cy.get('input[name="district"]').should(
            'have.value',
            entregador.endereco.bairro,
        );
        cy.get('input[name="city-uf"]').should(
            'have.value',
            entregador.endereco.cidade_uf,
        );
        cy.contains('.delivery-method li', entregador.metodo_entrega).click();
        cy.get('input[accept^="image"]').attachFile(
            '/images/' + entregador.cnh,
        );
    }

    submit() {
        cy.get('form button[type="submit"]').click();
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should(
            'have.text',
            expectedMessage,
        );
    }

    //testar pra ver se tá funcionando corretamente clique botão fechar depois que preenche o form
    clickCloseButton() {
        cy.get('.swal2-confirm').click();
    }

    alertMessageShouldBe(expectedMessage) {
        cy.get('.alert-error').should('have.text', expectedMessage);
        //precisa testar isso antes de subir no git
    }
}

export default SignupPage;
