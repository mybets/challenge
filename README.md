# Novos desenvolvedores

TL;DR; Para este desafio você precisará construir esta maravilhosa landing page utilizando algum framework Javascript (React, VueJS, Angular, Svelte, etc.).

![Etrader Landing](assets/landing.png)

## Descrição
Queremos através deste desafio analisar quais são seus conhecimentos em Javascript (e seus frameworks), HTML e CSS. Você deverá copiar o layout proposto para esta landing page utilizando algum framework conhecido como React, VueJS, Angular, Svelte e por aí vai. E aí, consegue? Então toca ficha e vem trabalhar com a gente! ;)

### Passo a passo
Eis aqui o que você precisa fazer. Vamos lá:
- Faça um ```git clone``` deste repositório na sua máquina
- Crie uma ```branch``` com seu nome no formato ```slug-case``` (Ex: ```john-doe```)
- No próprio repo clonado (dentro da sua branch), construa a landing usando React, VueJS, Angular, Svelte, etc.
- Todos os botões da landing não possuem ação
- Utilize as imagens e ícones que estão na pasta ```assets/```
- Fontes utilizadas: [Raleway](https://fonts.google.com/specimen/Raleway) e [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Para te ajudar, você pode se guiar visualmente pelo Figma usando o arquivo ```assets/landing-figma.fig```
- Substitua a seção **Build da minha landing** deste README.md e insira as instruções do que deve ser feito para fazer sua landing funcionar e a gente ver o resultado
- Assim que concluir, abra um PR neste repositório com o título sendo seu nome completo, escrito de maneira normal
- Feito, é só aguardar que vamos analisar e te responder ;)

### Bônus pra quem é bão memo, o bixão
Se você é fera e quiser uma atenção especial, faça algo ou tudo da lista abaixo:
- Utilize Scss/Less
- Utilize alguma biblioteca de ícones (Feather, FontAwesome, etc) via Javascript
- Crie uma API REST em Javascript (usando express, AdonisJS, etc.) que possua apenas uma rota chamada ```/features```. Esta rota deve devolver em formato lista/array as informações dos cards da área lateral direita (fundo laranja). Substitua o contúdo fixo e faça com que a landing consuma desta API e exiba as mesmas informações. Por fim, coloque o código desta API em uma pasta chamada ```api``` e entregue junto. Não se esqueça de colocar as instruções de como iniciar a API localmente na seção **Build da minha landing**

### Build da minha landing
Aqui é onde você insere os passos/comandos necessários pra fazer toda a bagaça que você codou funcionar.

- Acessar o diretório "backend" e executar o comando "yarn" para instalar as dependências
- Acessar o diretório "frontend" e executar o comando "yarn" para instalar as dependências
- No backend o arquivo de variáveis de ambiente (.env) possui o valor (http://localhost:3333) para o endereço da API
- Caso o backend seja executado em outro ambiente, este valor de variável deve ser alterado de acordo com o endereço do ambiente
- Acessar o diretório "backend" e executar o comando "yarn dev" para iniciar o servidor
- Acessar o diretório "frontend" e executar o comando "yarn start" para compilar e renderizar a tela
- O backend possui uma única rota (/features) com o método "GET" e está acessível no endereço (http://localhost:3333/features)
- O frontend possui uma única rota (/) e está acessível no endereço (http://localhost:3000)

### Dúvidas?
[Abra uma Issue e descreva sua dúvida clicando aqui](https://github.com/mybets/challenge/issues/new?labels=question).

