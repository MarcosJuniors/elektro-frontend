# Elektro - Front-end

Projeto desenvolvido durante o processo de treinamento da EJCM com o objetivo de desenvolver uma interface de e-commerce utilizando React e TypeScript, seguindo o protótipo disponibilizado no Figma.

A proposta foi desenvolver a parte visual da aplicação, praticando principalmente React, componentização, rotas, responsividade e organização do código.

## Tecnologias utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* React Icons
* HTML
* CSS
* Git
* GitHub

## Estrutura do projeto

A estrutura do projeto foi organizada separando as páginas, componentes, imagens e dados utilizados pela aplicação.

De forma geral, a estrutura principal ficou organizada assim:

```text
src/
├── assets/
├── components/
├── data/
├── pages/
├── routes/
└── ...
```

Os componentes reutilizáveis foram mantidos dentro de `components`, enquanto as telas principais da aplicação ficam dentro de `pages`.

O componente `Menu`, por exemplo, fica dentro de `components`, pois ele é utilizado como parte da interface e não como uma página independente.

## Páginas

As principais páginas desenvolvidas foram:

* Login
* Cadastro
* Home
* Error 404

A Home foi desenvolvida seguindo a estrutura apresentada no protótipo, incluindo as seções de categorias e produtos.

Também foram criados componentes reutilizáveis para elementos que aparecem em diferentes partes da aplicação.

## Componentes

Alguns dos componentes utilizados no projeto:

* Header
* Footer
* Menu
* Button
* Input
* ProductCard
* CategoryCard
* ProductCarousel
* SocialButton

O `ProductCard`, por exemplo, recebe informações através de props, como nome, preço e imagem. Dessa forma, consigo utilizar o mesmo componente para produtos diferentes.

O `ProductCarousel` foi utilizado para organizar a exibição dos produtos em formato de carrossel, permitindo visualizar diferentes produtos através da rolagem horizontal.

O `Menu` foi criado como componente para organizar as opções disponíveis no menu da aplicação.

Também utilizei `useState` em algumas partes do projeto para controlar interações da interface, como o botão de favorito dos produtos.

## Rotas

Para realizar a navegação entre as páginas utilizei o React Router DOM.

Também foi criada uma página de erro 404 para rotas que não estão disponíveis.

Alguns comportamentos da aplicação foram deixados direcionando para a página 404 nesta versão do projeto.

Por exemplo:

* Ao clicar no carrinho, o usuário é direcionado para a página 404.
* Na tela de Login, ao clicar no botão de voltar, o usuário também é direcionado para a página 404.

Essas funcionalidades ainda não possuem uma implementação completa nesta versão, então o direcionamento para a página de erro foi mantido.

## Responsividade

O projeto foi desenvolvido pensando em diferentes tamanhos de tela, utilizando principalmente uma abordagem mobile-first.

Utilizei as classes responsivas do Tailwind CSS para ajustar tamanhos, espaçamentos, posições e organização dos elementos.

Também utilizei propriedades relacionadas ao `overflow` para permitir a rolagem quando o conteúdo ultrapassa o espaço disponível.

No `ProductCarousel`, a rolagem horizontal foi utilizada para permitir que o usuário visualize outros produtos sem precisar aumentar excessivamente o tamanho da página.

## Ícones

Os ícones utilizados no projeto foram obtidos através da biblioteca React Icons.

Documentação utilizada:

https://react-icons.github.io/react-icons/

A biblioteca foi utilizada para facilitar a utilização dos ícones presentes na interface, evitando a necessidade de criar os ícones manualmente.

## Documentações utilizadas

Durante o desenvolvimento consultei principalmente as documentações das tecnologias utilizadas no projeto.

### React

https://react.dev/

Utilizada para consultar conceitos relacionados a componentes, props, estados e estrutura da aplicação.

### TypeScript

https://www.typescriptlang.org/docs/

Utilizada para consultar a tipagem utilizada nos componentes e interfaces do projeto.

### Vite

https://vite.dev/guide/

Utilizada como referência para configuração e execução do projeto.

### Tailwind CSS

https://tailwindcss.com/docs

Utilizada principalmente para consultar classes de estilização, espaçamento, responsividade, flexbox, grid, overflow e outras propriedades utilizadas na interface.

### React Router

https://reactrouter.com/

Utilizada para consultar a criação das rotas e a navegação entre as páginas.

### React Icons

https://react-icons.github.io/react-icons/

Utilizada como referência para os ícones presentes no projeto.

## Vídeos e outros materiais

Além das documentações, também utilizei vídeos do YouTube como material de apoio durante o desenvolvimento.

Os vídeos foram utilizados principalmente quando tive dúvidas sobre algum conceito ou quando precisava entender melhor uma determinada implementação.

Também realizei pesquisas em sites e materiais disponíveis na internet para complementar o entendimento dos assuntos utilizados no projeto.

Esses materiais foram utilizados como referência de estudo e as soluções foram adaptadas para a estrutura do meu projeto.

## Desenvolvimento

Durante o desenvolvimento tive algumas dificuldades principalmente com a organização dos componentes, estilização e responsividade.

Em alguns momentos precisei pesquisar soluções e testar diferentes formas de fazer determinada parte funcionar.

Uma das preocupações foi tentar manter o código organizado sem criar componentes ou funcionalidades que não fossem necessários para o projeto.

Também procurei manter a interface o mais próxima possível do protótipo disponibilizado no Figma.

A utilização de componentes separados ajudou a evitar repetição de código.

Por exemplo, ao invés de criar manualmente cada card de produto, utilizei o mesmo `ProductCard` passando as informações necessárias através das props.

## Interações

Também foram implementadas algumas interações na interface.

Um exemplo é o botão de favorito presente nos produtos. Para controlar essa interação foi utilizado o `useState` do React.

Quando o usuário interage com o botão, o estado do componente é alterado e a interface consegue representar essa mudança.

Essas interações foram utilizadas principalmente para deixar a interface mais próxima do comportamento esperado de uma aplicação de e-commerce.

## Funcionalidades não implementadas

Nesta versão o projeto está focado principalmente no desenvolvimento do front-end.

Algumas funcionalidades de um e-commerce completo ainda não foram implementadas, como:

* Carrinho funcional
* Finalização de compra
* Sistema completo de pedidos
* Autenticação completa
* Banco de dados
* Integração com API
* Persistência dos favoritos

Por isso, algumas ações da interface direcionam para a página 404.

O carrinho, por exemplo, ainda não possui uma implementação funcional. Ao clicar no acesso ao carrinho, o usuário é direcionado para a página de erro 404.

Da mesma forma, o botão de voltar presente na tela de Login direciona para a página 404 nesta versão.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/MarcosJuniors/elektro-frontend.git
```

Entre na pasta do projeto:

```bash
cd elektro-frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois é só acessar o endereço informado pelo Vite no terminal.

## Repositório

O código fonte do projeto está disponível no GitHub:

https://github.com/MarcosJuniors/elektro-frontend

## Considerações finais

Esse projeto foi uma forma de colocar em prática o que venho estudando sobre desenvolvimento front-end.

Durante a construção tive dificuldades em algumas partes e precisei pesquisar, testar e fazer alterações até conseguir chegar ao resultado atual.

Também foi uma experiência importante para entender melhor a utilização de componentes, props, estados, rotas e responsividade dentro de uma aplicação React.

Ainda existem pontos que podem ser melhorados e funcionalidades que poderiam ser adicionadas, principalmente com uma integração com backend.

Dentro do escopo desta entrega, o foco foi desenvolver a interface, organizar os componentes, trabalhar com React e TypeScript e aplicar responsividade e navegação entre as páginas.

A ideia é que o projeto possa continuar sendo desenvolvido posteriormente, adicionando as funcionalidades que ainda não fazem parte desta versão.
