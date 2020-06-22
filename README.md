# React II - Conteúdo de aula
-----------------

## Documentação Oficial React

[Documentação Oficial React - Português BR](https://pt-br.reactjs.org/)

--------------

## O que é SPA?

> Uma aplicação WEB onde a maioria das interações dos usuários acontecem em uma única página. Essa página contém todas as views que precisamos para nossa aplicação e carrega os dados do backend. 

Em relação aos websites tradicionais, SPA's possuem menos refresh, já que podemos renderizar múltiplas views nelas. As aplicações React possuem somente uma página HTML (public/index.html) e o framework se encarrega de carregar os "pedaços" de html (templates) neste html principal de acordo com a interação do usuário.


## Reutilização de Componentes e Parametrização

As aplicações React são construídas através da combinação de múltiplos componentes. Essa estrutura pode ser representada pelo que chamamos de Árvore de Componentes, que possui um componente principal (geralmente App.js) de onde partem todos os demais (infinitamente). Tais componentes podem possuir states, e a depender do state a interface do componente é, ou não, alterada. As views são então compostas por componentes diversos e mudam de acordo com seus states; estes, por sua vez, são alterados por fatores como alteração nos dados recebidos ou enviados pelo/para o backend e as interaçÕes do usuário.

Podemos passar parâmetros - dados - para definir as características dos componentes e renderizá-los de formas diferente durante os diversos estados da aplicação.

## Rotas e React Router

A biblioteca de rotas do React é composta por três packages: react-router, react-router-dom e react-router-native. Ela serve para lidar com o redirecionamento e renderização de rotas da nossa aplicação. Para aplicações web utilizamos o react-router-dom e para mobile o react-router-native, já o react-router é o package core dessa biblioteca. Para instalá-la no nosso app usaremos o seguinte cmd: 

```javascript
npm install react-router-dom
```
### Router

Um Router permite que a aplicação navegue entre diferentes componentes, mudando a URL, modificando o browser history e mantendo o state da UI sincronizado.

### React Router

O React Router é baseado em três componentes principais:

- <Router> - Mantém a Interface do Usuário (UI) sincronizada com a URL.
- <Link> - Renderiza um link de navegação (uma tag <a></a> que muda a URL sem dar refresh na página).
- <Route> - Renderiza um componente de acordo com a URL.
  
Em relação às implementações do Router podemos escolher entre duas:

- <BrowserRouter> - Usa History API.
- <HashRouter> - Usa hash presente na URL (obs: browser antigos).

## Links 

- Protótipo do projeto da semana: https://reprogramatechjobs.netlify.app/
- Biblioteca Ant Design: https://ant.design/docs/react/introduce
- React Router DOM: https://reacttraining.com/react-router/web/guides/quick-start
- Netlify CLI: https://docs.netlify.com/cli/get-started/
