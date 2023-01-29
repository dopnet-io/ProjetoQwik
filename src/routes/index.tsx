import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Bem-vindo ao Qwik <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li>
          Confira o diretório <code>src/routes</code> para começar.
        </li>
        <li>
          Adicione integrações com <code>npm run qwik add</code>.
        </li>
        <li>
          Mais informações sobre desenvolvimento em <code>README.md</code>
        </li>
      </ul>

      <h2>Comandos</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run dev</code>
          </td>
          <td>Inicie o servidor de desenvolvimento e observe as alterações.</td>
        </tr>
        <tr>
          <td>
            <code>npm run preview</code>
          </td>
          <td>Criação de produção e início do servidor de visualização.</td>
        </tr>
        <tr>
          <td>
            <code>npm run build</code>
          </td>
          <td>Construção de produção.</td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add</code>
          </td>
          <td>Selecione uma integração para adicionar.</td>
        </tr>
      </table>

      <h2>Adicionar integrações</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run qwik add azure-swa</code>
          </td>
          <td>
            <a href="https://learn.microsoft.com/azure/static-web-apps/overview" target="_blank">
              Aplicativos Web Estáticos do Azure
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add cloudflare-pages</code>
          </td>
          <td>
            <a href="https://developers.cloudflare.com/pages" target="_blank">
              Servidor de páginas Cloudflare
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add express</code>
          </td>
          <td>
            <a href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add netlify-edge</code>
          </td>
          <td>
            <a href="https://docs.netlify.com/" target="_blank">
              Funções de borda do Netlify
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add static</code>
          </td>
          <td>
            <a
              href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
              target="_blank"
            >
              Geração de Site Estático (SSG)
            </a>
          </td>
        </tr>
      </table>

      <h2>Comunidade</h2>

      <ul>
        <li>
          <span>Dúvidas ou apenas quer dizer oi? </span>
          <a href="https://qwik.builder.io/chat" target="_blank">
            Bate papo no discord!
          </a>
        </li>
        <li>
          <span>Seguir </span>
          <a href="https://twitter.com/QwikDev" target="_blank">
            @QwikDev
          </a>
          <span> no Twitter</span>
        </li>
        <li>
          <span>Abra questões e contribua em </span>
          <a href="https://github.com/BuilderIO/qwik" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <span>Assistir </span>
          <a href="https://qwik.builder.io/media/" target="_blank">
            Apresentações, Podcasts, Vídeos, etc.
          </a>
        </li>
      </ul>
      <Link class="mindblow" href="/flower/">
        Explodir minha mente 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Bem-vindo ao Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
