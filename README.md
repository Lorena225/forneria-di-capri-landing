# VirtruvIA — Página da consultoria

Página de entregas da consultoria estratégica da VirtruvIA para a **Ineprotec** e a
**Matrícula EAD**. Reúne o resumo do trabalho, os dois mini-cases e o acervo de
materiais, organizados em três macroáreas.

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

1. **Hero** — título, subtítulo, texto de apoio e selo institucional
2. **Resumo da consultoria** — texto e cinco pontos do trabalho realizado
3. **Mini-cases** — Ineprotec e Matrícula EAD, cada um com desafio, entregas e foco
4. **Áreas da consultoria** — três cards: Fundação estratégica, Marketing e Comercial
5. **Acervo de entregas** — filtro por instituição e materiais agrupados por área
6. **Rodapé institucional**

Os cards das áreas levam direto ao grupo correspondente no acervo, sem abrir popup e
sem repetir a lista de documentos em dois lugares.

---

## Estrutura de pastas

```
public/
  logo-virtruvia.png    → logotipo do cabeçalho e do rodapé
  documentos/           → arquivos disponíveis para download
  conteudos/            → texto dos documentos, exibido na página
src/
  data/textos.ts        → todo o conteúdo escrito da página
  data/documentos.ts    → áreas, instituições e materiais
  components/           → componentes da página
  lib/utils.ts          → pesquisa, filtros e ordenação
  index.css             → paleta e estilos base
  App.tsx               → montagem da página
```

---

## 1. Trocar o logotipo

Substitua `public/logo-virtruvia.png`, mantendo o nome. Use PNG com fundo
transparente e altura mínima de 300 px. No rodapé ele é exibido em branco
automaticamente. Para usar outro nome ou formato, ajuste o caminho em
`src/components/Cabecalho.tsx` e `src/components/Rodape.tsx`.

---

## 2. Alterar as cores

A paleta fica no início de `src/index.css`. Os valores estão em **R G B separados por
espaço** — esse formato é o que permite aplicar transparências. O hexadecimal
correspondente está anotado ao lado de cada linha.

```css
:root {
  --vtr-argila: 176 115 69;        /* #b07345 — destaque da marca */
  --vtr-argila-forte: 138 87 50;   /* #8a5732 — botões e texto */
  --vtr-areia: 219 194 180;        /* #dbc2b4 — hero e superfícies quentes */
  --vtr-areia-clara: 242 233 225;  /* #f2e9e1 — fundos sutis */
  --vtr-pedra: 139 132 125;        /* #8b847d — bordas e apoio */
  --vtr-pedra-escura: 110 103 95;  /* #6e675f — legendas */
  --vtr-sereno: 133 155 164;       /* #859ba4 — elementos técnicos */
  --vtr-sereno-forte: 95 114 123;  /* #5f727b — rótulos */
  --vtr-sereno-claro: 231 237 239; /* #e7edef — badges e filtros */
}
```

Para converter um hexadecimal novo: `#b07345` → `b0`=176, `73`=115, `45`=69 →
`176 115 69`.

As quatro cores oficiais da marca são a argila, a areia, a pedra e a serena. As
versões **forte** existem porque as cores originais não têm contraste suficiente para
texto pequeno sobre fundo claro — elas garantem leitura acessível mantendo a mesma
família de cor.

---

## 3. Alterar os textos

Todo o conteúdo escrito está em `src/data/textos.ts`: hero, resumo, mini-cases,
títulos das seções, microcopy dos filtros, estado vazio e rodapé. Dá para revisar a
comunicação inteira sem tocar em componente nenhum.

---

## 4. Cadastrar novos documentos

Em `src/data/documentos.ts`, acrescente um objeto na lista `documentos`:

```ts
{
  id: 'documento-12',
  titulo: 'Plano de campanha — volta às aulas',
  descricao: 'Conceito, mensagens e cronograma da campanha.',
  escolas: ['ineprotec'],              // uma ou as duas escolas
  area: 'marketing',                   // fundacao-estrategica | marketing | comercial
  categoria: 'Campanhas',              // um dos itens da área (ver tabela abaixo)
  tipo: 'PDF',                         // PDF | DOCX | PPTX | XLSX | Link
  dataAtualizacao: '29/07/2026',       // sempre dd/mm/aaaa
  arquivo: '/documentos/plano-campanha.pdf',
  conteudo: '/conteudos/plano-campanha.md',  // opcional: texto exibido na página
}
```

### Áreas e seus itens

| `area`                  | Itens aceitos em `categoria`                                                                                                                        |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fundacao-estrategica`  | Pesquisa de mercado · Posicionamento de marca                                                                                                        |
| `marketing`             | Planejamento estratégico · Calendários de marketing · Calendários editoriais · Campanhas · Conteúdos e posts · Treinamentos de marketing              |
| `comercial`             | Diagnóstico comercial · Processos comerciais · Organização do funil de vendas · Etapas da jornada do lead · Scripts de atendimento · Treinamentos comerciais · Treinamentos de CRM |

Para incluir um item novo no escopo de uma área, acrescente-o ao array `itens` da
área, no mesmo arquivo. Itens sem material publicado aparecem no card como escopo e,
no acervo, com o aviso de frente em desenvolvimento.

**Material comum às duas escolas:** `escolas: ['ineprotec', 'matricula-ead']`.

**Material hospedado fora da página** (brandbook, painel): `tipo: 'Link'` e o endereço
completo em `arquivo`. A página mostra um botão **Abrir** em vez de Visualizar e Baixar.

---

## 5. O texto dos documentos na página

Ao clicar no nome de um documento, ou no botão **Ler aqui**, o texto completo aparece
na própria página, com títulos, listas e tabelas. O botão **Baixar** continua
disponível para o arquivo original.

O texto fica em `public/conteudos/`, um `.md` por documento, apontado pelo campo
`conteudo`. Formato aceito:

| Escrita          | Resultado                                              |
| ---------------- | ------------------------------------------------------ |
| `## Título`      | título de seção                                        |
| `### Subtítulo`  | subtítulo                                              |
| `- item`         | lista com marcadores                                   |
| `1. item`        | lista numerada                                         |
| `**texto**`      | negrito                                                |
| `_texto_`        | linha em itálico discreto                              |
| `\| a \| b \|`      | tabela (`\| --- \| --- \|` na segunda linha define o cabeçalho) |

O `# Título` da primeira linha é ignorado, porque o nome do documento já aparece
acima. Tabelas com mais de cinco colunas ganham rolagem horizontal.

---

## 6. O que já está publicado e o que falta

| Área                   | Materiais                                                             |
| ---------------------- | --------------------------------------------------------------------- |
| Fundação estratégica   | Brandbook Ineprotec e Brandbook Matrícula EAD (links externos)        |
| Marketing              | Calendários de junho e de julho das duas escolas                      |
| Comercial              | Configuração do Kommo, Controle de atividades, Script de vendas e os dois treinamentos |

**Pendências marcadas no código:**

1. **Datas** — todos os registros estão com `29/07/2026`. Ajuste `dataAtualizacao`
   para a data real de cada versão.
2. **Manual de treinamento dos consultores** — registro pronto e comentado no fim de
   `src/data/documentos.ts`. Coloque o arquivo em `public/documentos/` e remova os
   `/*` e `*/`.
3. **Pesquisa de mercado** — item sem material publicado, exibido com o aviso de
   frente em desenvolvimento.

---

## 7. Publicar

O projeto está no repositório **https://github.com/Lorena225/virtruvia-MAT-INE-CONSULTORIA**
(privado), conectado ao projeto `mat-ine-consultoria-virtruvia` no Vercel. Cada envio
ao repositório gera uma publicação nova automaticamente.

```bash
git add -A
git commit -m "descrição da mudança"
git push
```

Endereço no ar: **https://mat-ine-consultoria-virtruvia.vercel.app**

Alternativa que não depende do Git — publica a pasta local direto:

```bash
bash publicar.sh
```
