Fiz a automação em Cypress usando o padrão page objects com a IDE VsCode e usei as seguintes bibliotecas e dependências usando o gerenciador de pacotes npm do NodeJS :

usei o ESLint para ajudar a automatizar regras de padronização do código, achar códigos fora do padrão e consertá-los automaticamente.

usei também o Prettier e outras dependências para formatar o código baseado nas regras do ESLint e também integrar o Prettier com o ESLint.

usei o Husky para evitar commit ruim antes de subir no Github ( o Husky faz a verificação se o código está com a formatação correta quando sobe no Github)

Husky detecta eventos do GIT, tipo commit, push etc.. e faz validações entre esses eventos

o lintstaged permite formatação de arquivos antes do commit .

para rodar o projeto basta ir na pasta buger-eats pela linha de comando (cmd/prompt) e digitar npm run test ,
logo na sequência irá abrir o cypress na versão 10.6.0, clique na opção "E2E Testing" no lado esquerdo da tela , escolha a opção de rodar o projeto no chrome e clique no botão "Start E2E Testing in Chrome" , quando abrir o browser controlado pelo Cypress , clique no arquivo "home.spec.cy.js" para rodar o teste.
