<h1>💻 Website - LABEDDIT - FRONT END</h1>

<h2>📝 Descrição do Projeto</h2>

Este é o projeto final do meu curso de Desenvolvimento Web FullStack, em que foram aplicados os conhecimentos adquiridos em back-end e front-end. O design do aplicativo segue o conceito Mobile First, priorizando o desenvolvimento para dispositivos móveis e adaptando-o para telas maiores, como tablets ou desktops.

O projeto consiste em criar uma aplicação web, utilizando ReactJS no front-end e uma API no back-end. No front, as funcionalidades devem respeitar o layout definido no Figma e consumir a API criada no back, como requisito de projeto, garantindo uma experiência consistente para o usuário. No back, as requisições devem se conectar com o banco de dados para realizar essas funcionalidades, fazendo verificações e validações, além de testes unitários. O objetivo final é criar uma aplicação FullStack deployável e em funcionamento.

<h2>Repositórios</h2>

Para facilitar o processo de deploy, os códigos foram divididos em repositórios separados para o front-end e back-end. Certifique-se de clonar ambos os repositórios para ter o projeto completo.

<h2>Informação Geral</h2>

<h3>👩🏻‍💻 Este projeto foi criado utilizando as seguintes tecnologias:</h3>

React.Js and React Router DOM
Styled Componentes
React Hooks (UseState, UseEffect, useContext, useNavigate, useForm, useProtectedPage e outros custom hooks)
Fluxo de dados por Props
Renderização de listas e consumo de API
LocalStorage do navegador

<h3>Este projeto possui 4 telas (páginas) interativas:</h3>

Login

Onde o usuário pode preencher o formulário de login e entrar na área protegida da aplicação (apenas usuários logados possuem acesso)
Ou, caso não possua conta, o usuário pode se direcionar para a página de cadastro e realizar sua inscrição.

Cadastro

Onde o usuário pode preencher o formulário de cadastro e ser redirecionado para a página de login
Ou, caso já possua cadastro, clicar no botão de entrar para ser redirecionado para a página de login para entrar na área protegida da aplicação.

Feed de postagens

Onde o usuário pode realizar uma nova postagem preenchendo o campo de texto da forma que desejar e clicar no botão "Postar".
Onde o usuário pode visualizar todos os posts existentes em forma de lista e interagir com eles da seguinte forma:
Clicar no botão ícone de seta para cima em um cartão de postagem para curtir aquela postagem. Caso já o tenha feito, a curtida será removida.
Ou clicar no botão ícone de seta para baixo em um cartão de postagem para descurtir aquela postagem. Caso já o tenha feito, a descurtida será removida.
Ou clicar no botão ícone de comentários para ser redirecionado para a página de comentários daquela postagem e interagir com ela.
Onde o usuário pode sair da aplicação clicando no botão "Logout" no canto superior da tela, deslogando e perdendo o acesso a área protegida.

Feed de comentários de uma postagem

Onde o usuário pode realizar um novo comentário naquela postagem, preenchendo o campo de texto da forma que desejar e clicar no botão "Responder".
Onde o usuário pode visualizar todos os comentário existentes naquela postagem em forma de lista e interagir com eles da seguinte forma:
Clicar no botão ícone de seta para cima em um cartão de comentário para curtir aquele comentário. Caso já o tenha feito, a curtida será removida.
Ou clicar no botão ícone de seta para baixo em um cartão de comentário para descurtir aquele comentário. Caso já o tenha feito, a descurtida será removida.
Também é possivel as mesmas interações com o cartão de postagem ao qual os comentários estão relacionados.
Onde o usuário pode sair da aplicação clicando no botão "Logout" no canto superior da tela, deslogando e perdendo o acesso a área protegida.
Onde o usuário pode retornar a página de postagens clicando no botão "X" no canto superior da tela.
