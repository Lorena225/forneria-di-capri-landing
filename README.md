# VirtruvIA × Forneria Di Capri — Posicionamento e Marketing

Página de entrega da consultoria estratégica da VirtruvIA para a **Forneria Di Capri**.
Reúne o resumo do trabalho, o mini-case e o acervo de materiais, organizados em duas macroáreas: **Posicionamento de Marca** e **Marketing e Mídias Sociais**.

Página única, sem backend, sem banco de dados e sem área administrativa.

---

## Tecnologia

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Lucide React (ícones)

---

## Executar localmente

Requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev     # abre em http://localhost:5173
npm run build   # gera a versão de produção em dist/
npm run preview # abre a versão de produção localmente
```

---

## Estrutura da página

1. **Hero** — título, subtítulo e badge do cliente
2. **Resumo da consultoria** — texto e cinco pontos do trabalho realizado
3. **Mini-case** — Forneria Di Capri com desafio, entregas e foco estratégico
4. **Áreas da consultoria** — dois cards: Posicionamento de Marca e Marketing e Mídias Sociais
5. **Rodapé institucional**

**Como a navegação funciona — em camadas:**

1. A pessoa lê a página e entende a consultoria.
2. Clica em uma das duas áreas. Abaixo dos cards abre um painel com o contexto daquela frente e apenas os materiais dela.
3. Clicar em um material abre a ficha completa em modal — área, categoria, cliente, formato, data e download.

---

## Estrutura de pastas

```
public/
  logo-virtruvia.png    → logotipo do cabeçalho e do rodapé
  documentos/           → arquivos disponíveis para download
  conteudos/            → texto dos documentos, exibido na página
src/
  data/textos.ts        → todo o conteúdo escrito da página
  data/documentos.ts    → áreas e materiais
  components/           → componentes da página
  lib/utils.ts          → pesquisa, filtros e ordenação
  index.css             → paleta e estilos base
  App.tsx               → montagem da página
```

---

## 1. Alterar os textos

Todo o conteúdo escrito está em `src/data/textos.ts`: hero, resumo, mini-case, títulos das seções, microcopy e rodapé.

---

## 2. Cadastrar novos documentos

Em `src/data/documentos.ts`, acrescente um objeto na lista `documentos`:

```ts
{
  id: 'documento-novo',
  titulo: 'Nome do material',
  descricao: 'Descrição breve do que o material contém.',
  escolas: ['forneria-di-capri'],
  area: 'posicionamento',              // posicionamento | marketing
  categoria: 'Posicionamento de marca',
  tipo: 'PDF',                         // PDF | DOCX | PPTX | XLSX | Link
  dataAtualizacao: '03/08/2026',       // sempre dd/mm/aaaa
  arquivo: '/documentos/arquivo.pdf',
  destaque: true,                      // opcional: aparece em primeiro lugar
}
```

### Áreas e seus itens

| `area`           | Itens aceitos em `categoria`                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `posicionamento` | Diagnóstico estratégico · Posicionamento de marca · Identidade de perfil digital · Kickoff estratégico |
| `marketing`      | Planejamento mensal · Calendários editoriais · Estratégia de conteúdo · Identidade de perfil digital |

---

## 3. Publicar

O projeto está no repositório **https://github.com/Lorena225/forneria-di-capri-landing** (público), conectado ao projeto `forneria-di-capri-landing` no Vercel. Cada envio ao repositório gera uma publicação nova automaticamente.

```bash
git add -A
git commit -m "descrição da mudança"
git push
```
