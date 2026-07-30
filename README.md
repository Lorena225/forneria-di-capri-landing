# VirtruvIA — Portal de materiais

Página institucional que reúne os documentos, estratégias e materiais desenvolvidos pela
VirtruvIA para a **Ineprotec** e a **Matrícula EAD**.

Página única, sem backend, sem banco de dados e sem área administrativa. Todo o conteúdo
vem de um único arquivo de dados: `src/data/documentos.ts`.

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
npm run dev
```

A página abre em `http://localhost:5173`.

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # abre a versão de produção localmente
```

---

## Estrutura de pastas

```
public/
  logo-virtruvia.png        → logotipo usado no cabeçalho e no rodapé
  documentos/               → todos os arquivos disponíveis para download
  conteudos/                → texto dos documentos, exibido dentro dos popups
src/
  data/documentos.ts        → ÚNICO arquivo a editar no dia a dia
  components/               → componentes da página
  lib/utils.ts              → pesquisa, filtros e ordenação
  index.css                 → variáveis de cor da marca
  App.tsx                   → montagem da página
```

---

## 1. Trocar o logotipo

1. Salve o novo arquivo como `public/logo-virtruvia.png`, mantendo o mesmo nome.
2. Use PNG com fundo transparente e altura mínima de 300 px.
3. Se preferir outro nome ou formato (SVG, por exemplo), altere o caminho em dois lugares:
   - `src/components/Cabecalho.tsx`
   - `src/components/Rodape.tsx`

O logotipo aparece em altura fixa; a largura se ajusta sozinha.

---

## 2. Alterar as cores

Todas as cores estão no início de `src/index.css`, no bloco `:root`:

```css
:root {
  --vtr-papel: #fbfaf8;          /* fundo da página */
  --vtr-superficie: #ffffff;     /* fundo dos cards e dos popups */
  --vtr-tinta: #14130f;          /* títulos e texto principal */
  --vtr-grafite: #3f3d38;        /* texto de apoio */
  --vtr-neutro: #737069;         /* legendas e metadados */
  --vtr-linha: #e4e0d8;          /* bordas discretas */

  --vtr-destaque: #8a6b32;       /* cor principal de destaque */
  --vtr-destaque-forte: #6c5225; /* versão escura, usada em texto */
  --vtr-destaque-suave: #f4eee2; /* versão clara, usada em fundos */
}
```

Basta trocar os valores. A página inteira acompanha, sem precisar mexer em componentes.
Ao mudar a cor de destaque, ajuste também as versões **forte** (mais escura, para manter
contraste em texto) e **suave** (bem clara, para fundos de hover).

---

## 3. Cadastrar novos documentos

Abra `src/data/documentos.ts` e acrescente um objeto na lista `documentos`:

```ts
{
  id: 'documento-13',                                   // precisa ser único
  titulo: 'Plano de campanha — volta às aulas',
  descricao: 'Conceito, mensagens e cronograma da campanha.',
  escolas: ['ineprotec'],                               // uma ou as duas escolas
  area: 'marketing',                                    // ver lista abaixo
  categoria: 'Campanhas',                               // ver lista abaixo
  tipo: 'PDF',                                          // PDF | DOCX | PPTX | XLSX | Link
  dataAtualizacao: '29/07/2026',                        // sempre dd/mm/aaaa
  arquivo: '/documentos/plano-campanha-volta-as-aulas.pdf',
}
```

**Material comum às duas escolas** — informe as duas no campo `escolas`:

```ts
escolas: ['ineprotec', 'matricula-ead'],
```

O documento passa a aparecer nos dois filtros, e a página mostra
"Ineprotec e Matrícula EAD" acima do título.

**Material hospedado fora da página** (brandbook, painel, sistema) — use
`tipo: 'Link'` e coloque o endereço completo em `arquivo`:

```ts
tipo: 'Link',
arquivo: 'https://ineprotec-branding.manus.space/',
```

Nesse caso a página mostra um único botão **Abrir**, que leva ao endereço em
uma nova aba, em vez de Visualizar e Baixar.

Valores aceitos em `area`:

| Valor                     | Bloco na página          |
| ------------------------- | ------------------------ |
| `pesquisa-de-mercado`     | Pesquisa de mercado      |
| `posicionamento-de-marca` | Posicionamento de marca  |
| `marketing`               | Marketing                |
| `estruturacao-comercial`  | Estruturação comercial   |
| `treinamentos`            | Treinamentos             |

Valores aceitos em `escolas`: `ineprotec` e `matricula-ead`.

O campo `categoria` é texto livre, mas o ideal é usar uma das categorias já
listadas na área correspondente (elas aparecem no array `areas`, no mesmo
arquivo). A categoria é usada na pesquisa e aparece acima do nome do documento.

Os documentos aparecem automaticamente no bloco da área, ordenados da data mais
recente para a mais antiga. Não é preciso mexer em nenhum componente.

Quando uma frente ainda não tiver nenhum material, o bloco aparece na página em
tom mais suave, com o aviso "Materiais em preparação", e não abre o popup.

---

## 4. O que já está publicado e o que falta

Os materiais reais já estão cadastrados e os arquivos estão em
`public/documentos/`:

| Frente                  | Materiais                                                                |
| ----------------------- | ------------------------------------------------------------------------ |
| Pesquisa de mercado     | *(nenhum material ainda)*                                                |
| Posicionamento de marca | Brandbook Ineprotec e Brandbook Matrícula EAD (links externos)           |
| Marketing               | Calendários de junho e de julho das duas escolas                         |
| Estruturação comercial  | Configuração do Kommo, Controle de atividades e Script de vendas         |
| Treinamentos            | Treinamento de supervisão no Kommo e Treinamento de excelência           |

**Pendências marcadas no código:**

1. **Datas** — todos os registros estão com `29/07/2026`. Ajuste o campo
   `dataAtualizacao` de cada documento para a data real da última versão.
2. **Manual de treinamento dos consultores — comercial** — o registro está
   pronto, porém comentado no final de `src/data/documentos.ts`. Coloque o
   arquivo em `public/documentos/` e remova os `/*` e `*/` em volta do bloco.
3. **Pesquisa de mercado** — a frente ainda não tem materiais e aparece com o
   aviso "Materiais em preparação".

Para acrescentar novos arquivos:

1. Coloque o arquivo em `public/documentos/`.
2. Use nomes sem acento, sem espaço e sem letra maiúscula
   (exemplo: `calendario-editorial-agosto.pdf`).
3. No arquivo de dados, aponte o campo `arquivo` para
   `/documentos/nome-do-arquivo.pdf` — o caminho sempre começa com
   `/documentos/`, sem incluir `public`.

O botão **Visualizar** abre o arquivo em uma nova aba e o botão **Baixar** faz o
download. PDF abre direto no navegador; DOCX e XLSX são baixados pelo próprio
navegador.

---

## 5. O texto dos documentos na página

Ao clicar no nome de um documento (ou no botão **Ler aqui**), o texto completo
aparece dentro do popup, com títulos, listas e tabelas. O botão **Baixar**
continua disponível para pegar o arquivo original.

Esse texto não sai do arquivo em tempo real: ele fica em `public/conteudos/`,
um arquivo `.md` por documento, indicado no campo `conteudo` do registro:

```ts
arquivo: '/documentos/calendario-junho-ineprotec.docx',
conteudo: '/conteudos/calendario-junho-ineprotec.md',
```

Documentos sem o campo `conteudo` mostram apenas **Visualizar** e **Baixar** —
nada quebra, apenas não há leitura na página.

### Formato aceito nos arquivos de conteúdo

A página entende um Markdown simples:

| Escrita              | Resultado                                  |
| -------------------- | ------------------------------------------ |
| `## Título`          | título de seção, com linha divisória       |
| `### Subtítulo`      | subtítulo                                  |
| `- item`             | lista com marcadores                       |
| `1. item`            | lista numerada                             |
| `**texto**`          | negrito                                    |
| `_texto_`            | linha em itálico discreto                  |
| `\| a \| b \|`       | tabela (a linha `\| --- \| --- \|` define o cabeçalho) |

O `# Título` da primeira linha é ignorado na exibição, porque o nome do
documento já aparece logo acima no popup. Tabelas com mais de cinco colunas
ganham rolagem horizontal automática.

### Para incluir o texto de um documento novo

1. Crie `public/conteudos/nome-do-arquivo.md` seguindo o formato acima.
2. Aponte o campo `conteudo` do registro para esse caminho.

---

## 6. Publicar na Vercel

O projeto já vem vinculado ao projeto **virtruvia-materiais** da sua conta
(o arquivo `.vercel/project.json` guarda essa ligação), então publicar é um
comando só, sem perguntas de vinculação:

```bash
bash publicar.sh
```

O script confere se a CLI da Vercel está instalada, confere o login e publica em
produção. Na primeira vez ele abre o navegador para você entrar na conta.

Se preferir fazer na mão:

```bash
npm install -g vercel
vercel --prod
```

Endereços do projeto:

- https://virtruvia-materiais.vercel.app
- https://virtruvia-materiais-lorenas-projects-bd05a256.vercel.app

### Liberar o acesso

A Vercel cria o projeto com autenticação ligada, o que faz o link abrir apenas
para quem está logado na sua conta. Para que qualquer pessoa com o link consiga
acessar: painel da Vercel → projeto `virtruvia-materiais` → **Settings** →
**Deployment Protection** → **Vercel Authentication** → **Disabled** → Save.

### Alternativa sem terminal

1. Crie um repositório no GitHub e envie a pasta do projeto.
2. Em vercel.com, **Add New → Project**, importe o repositório e escolha o
   projeto existente `virtruvia-materiais`.
3. Cada envio ao repositório passa a gerar uma publicação nova automaticamente.

---

## O que a página faz

- Pesquisa por nome do documento, descrição, categoria e instituição, com ou sem acento.
- Filtro por instituição no cabeçalho, na seção de frentes e dentro de cada popup.
- Cinco blocos de frentes de trabalho, cada um abrindo um popup com os documentos.
- Popup fecha pelo botão, pela tecla `Esc` e ao clicar fora; a rolagem da página fica
  bloqueada enquanto ele estiver aberto e o foco do teclado permanece dentro dele.
- Texto completo de cada documento dentro do popup, com títulos, listas e
  tabelas, sem sair da página e sem substituir o download do arquivo original.
- Estados vazios com orientação de como seguir quando não há resultados.
- Navegação completa por teclado, foco visível e respeito à preferência de redução de
  movimento do sistema.
- Layout responsivo para computador, tablet e celular.
