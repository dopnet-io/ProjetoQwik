# Projeto Qwik

Qwik é um novo tipo de framework recuperável (sem JS e sem hidratação), construído para o edge e familiar para desenvolvedores React.

[Stackblitz Qwik + Vite](https://qwik.new/)
[Exemplos de playground](https://qwik.builder.io/examples/reactivity/counter/)

# Pré-Requisitos

[node.js v16](https://nodejs.org/en/download/) ou superior
Seu IDE favorito ([vscode](https://code.visualstudio.com/) recomendado)
Comece a [pensar qwik](https://qwik.builder.io/docs/think-qwik/)

# Execute o Qwik CLI em seu shell

Escolha o gerenciador de pacotes de sua preferência e execute o seguinte comando:

> Dos três comandos a baixo refere-se de acordo com o que instalou em seu sistema operacional.


    $ npm create qwik@latest

        [NPM](https://www.npmjs.com/) é o maior registro de software do mundo. Desenvolvedores de código aberto de todos os continentes usam o npm para compartilhar e emprestar pacotes, e muitas organizações também usam o npm para gerenciar o desenvolvimento privado.

    $ pnpm create qwik@latest

        [PNPM](https://pnpm.io/) é usado para instalar todas as dependências de um projeto.
        Em um ambiente CI, a instalação falhará se um arquivo de bloqueio estiver presente, mas precisar de uma atualização.
        Dentro de um espaço de trabalho, o pnpm install instala todas as dependências em todos os projetos. Se você deseja desabilitar esse     comportamento, defina a configuração recursive-install como false.

    $ yarn create qwik

        [YARN](https://yarnpkg.com/) é um gerenciador de pacotes para o seu código. Ele permite que você use e compartilhe código com outros desenvolvedores de todo o mundo. O Yarn faz isso de forma rápida, segura e confiável para que você nunca precise se preocupar.

# Criação do projeto

A CLI irá guiá-lo através de um menu interativo para definir o nome do projeto, selecionar um dos iniciadores e perguntar se você deseja instalar as dependências.

Depois que seu novo aplicativo for criado, você verá uma saída como a seguinte em seu terminal:

🐰 Vamos criar um aplicativo Qwik 🐇 v0.16.1

✔ Onde você gostaria de criar seu novo projeto? … aplicativo qwik

✔ Selecione um iniciante › Aplicativo básico (QwikCity)

✔ Deseja instalar as dependências do pnpm? yes

✔ Instalando dependências do pnpm...


🦄 Sucesso! Projeto criado no diretório qwik-app

🐰 Próximos passos:
    cd qwik-app
    início pnpm

🔌 Integrações? Adicione Netlify, Cloudflare, Tailwind...
    adicionar pnpm qwik

📚 Documentos relevantes:
    https://qwik.builder.io/docs/getting-started/

💬 Dúvidas? Inicie a conversa em:
    https://qwik.builder.io/chat
    https://twitter.com/QwikDev

📺 Apresentações, Podcasts e Vídeos:
    https://qwik.builder.io/media/

# Executando em desenvolvimento

Uma vez que o aplicativo é baixado.

> Mude para o diretório criado.

    $ cd projeto-qwik

> Chamar o servidor de desenvolvimento

    $ npm install && npm start
    $ pnpm start
    $ yarn start

> Você deve ver um servidor em execução com seu aplicativo inicial

VITE v4.0.1  ready in 515 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

> Visite http://localhost:5173/ para explorar o aplicativo.
# Clonando e Inicializando o projeto

 Como foi utilizado para extrair as dependecias, recomendo que instale esse pacote. Após o procedimento.

    $ pnpm i

    $ npm start

[seguindo os passos a cima](#executando-em-desenvolvimento)