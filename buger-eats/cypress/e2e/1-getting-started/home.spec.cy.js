import SignupPage from '../2-advanced-examples/SignupPage';

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        var entregador = {
            nome: 'Jose',
            cpf: '12345678900',
            email: 'ze@hotmail.com',
            whatsapp: '11888888888',

            endereco: {
                cep: '09080210',
                rua: 'Travessa Itaúna',
                numero: '2800',
                complemento: 'ap 88',
                bairro: 'Campestre',
                cidade_uf: 'Santo André/SP',
            },
            metodo_entrega: 'Moto',
            //metodo_entrega: 'Bicicleta', para selecionar outras opções descomente o código
            //metodo_entrega: 'Van/Carro'

            cnh: 'cnh-digital.jpg',
        };

        var signup = new SignupPage();

        signup.go();
        signup.fillForm(entregador);
        signup.submit();

        const expectedMessage =
            'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expectedMessage);

        //cy.get('.swal2-confirm').click()
    });

    it('CPF incorreto', () => {
        var entregador = {
            nome: 'Jose',
            cpf: '123456789AA',
            email: 'ze@hotmail.com',
            whatsapp: '11888888888',

            endereco: {
                cep: '09080210',
                rua: 'Travessa Itaúna',
                numero: '2800',
                complemento: 'ap 88',
                bairro: 'Campestre',
                cidade_uf: 'Santo André/SP',
            },
            metodo_entrega: 'Moto',
            //metodo_entrega: 'Bicicleta', para selecionar outras opções descomente o código
            //metodo_entrega: 'Van/Carro'

            cnh: 'cnh-digital.jpg',
        };

        var signup = new SignupPage();

        signup.go();
        signup.fillForm(entregador);
        signup.submit();

        // const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        // signup.modalContentShouldBe(expectedMessage)

        signup.alertMessageShouldBe('Oops! CPF inválido');
    });
});
