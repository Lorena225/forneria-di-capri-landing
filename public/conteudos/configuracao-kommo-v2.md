# Configuração do Kommo CRM

## ESTRUTURA GERAL KOMMO

### ESTRUTURA GERAL KOMMO - CONFIGURAÇÃO PARA DESENVOLVIMENTO

| Módulo | Descrição | Responsável | Status | Observações |
| --- | --- | --- | --- | --- |
| Pipelines / Funis | 4 funis de vendas (MAT + INEP) + 2 Redes Sociais + 2 Sucesso do Aluno | Admin | FINALIZADO | Ver aba FUNIS |
| Campos Personalizados | 15 campos customizados para controle de leads, pagamentos e qualificação | Admin | A configurar | Ver aba CAMPOS |
| Atividades | configuração de atividades | Admin | A configurar | Ver Calendário |
| Tags | 12 tags para classificação automática e manual de leads | Admin/Bot | FINALIZADO | Ver aba TAGS |
| Produtos / Catálogo | Cadastro de cursos MAT (22 cursos) + INEP (3 cursos) com preços | Admin | FINALIZADO | Ver aba PRODUTOS |
| Salesbot - Triagem IA | Bot de qualificação automática na etapa Triagem com IA ativa | Dev | A configurar | Ver aba BOTS |
| Salesbot - Cobrança | Bot de cobrança automática de pagamento na etapa Pré-Matriculado | Dev | A configurar | Ver aba BOTS |
| Salesbot - Reengajamento | Bot de follow-up automático para leads sem resposta | Dev | A configurar | Ver aba BOTS |
| Automações por Etapa | Gatilhos de mudança de etapa, inatividade e campo alterado | Dev | A configurar | Ver aba AUTOMAÇÕES |
| Integrações | WhatsApp Business API, Duotalk, Gateway Pgto, Meta Ads, Sistema Acadêmico | Dev | A configurar | Webhook + API |
| Temperatura por Etapa | Scoring de temperatura nativo do Kommo (1-10) por etapa | Admin | FINALIZADO | Ver aba FUNIS coluna Temperatura |
| Usuários e Permissões | Consultores, Supervisores, Secretaria, Admin | Admin | A configurar | Ver aba USUÁRIOS |
| Templates WhatsApp | 8 templates de mensagem com placeholders para aprovação Meta | Mkt/Dev | A submeter | Ver aba AUTOMAÇÕES |

### MOTIVOS DE PERCA

### MOTIVOS FINACEIROS

### ESCOLHEU OUTRA ESCOLA

### PREFERE CURSO PRESENCIAL

### PREFERE CURSO 100% ONLINE

### DUVIDAS SOBRE A INSTITUIÇAO

### FALTA DE TEMPO

### SEM RESPOSTA

### NÃO GOSTOU DA INSTITUIÇAO

### ATENDIMENTO RUIM

### MUDANÇA DE CIDADE

### OPTOU POR OUTRO CURSO

### NÃO CONSEGUIU COMPROVAR DOCUMENTAÇAO

### DESISTIU DE ESTUDAR

### SEM VAGA/TURMA

### NÃO QUER MAIS CONTATO

SPAM

## SEGMENTAÇÃO MATRICULA

### ESTRATÉGIA DE SEGMENTAÇÃO: VALIDAR+ vs CAMINHO TÉCNICO

### Como tagear o lead desde o primeiro contato e direcionar TODO o atendimento com base no perfil.

### 1. ONDE E COMO O LEAD É TAGUEADO (3 camadas de segmentação)

| CAMADA | MOMENTO | COMO FUNCIONA | TAG APLICADA | PRECISÃO | QUEM FAZ | OBSERVAÇÕES |
| --- | --- | --- | --- | --- | --- | --- |
| 1ª CAMADA PRÉ-TAGUEAMENTO | Antes do lead entrar no Kommo | UTM da Landing Page identifica o perfil: - LP Competência → TAG= VALIDAR+ - LP Regular → TAG = CAMINHO TECNICO | VALIDAR+ ou CAMINHO_TECNICO | ~70% (baseado na LP de origem) | Sistema baseado na integração de traqueamento. |   |
| 2ª CAMADA CONFIRMAÇÃO BOT | Etapa de entrada com bot inicial SEM TAG | Salesbot faz a Pergunta de Ouro: [A] Já trabalho na área → VALIDAR+ [B] Quero começar do zero → CAMINHO TÉCNICO Bot adiciona automaticamente as tags | VALIDAR+ ou CAMINHO_TECNICO | ~95% (lead confirmou) | Salesbot Kommo |   |
| 3ª CAMADA CORREÇÃO HUMANA | Etapa Follow Up Ativo (consultor) | Consultor pode corrigir a tag se detectar erro: Ex: Lead disse 'A' ao bot mas na verdade quer curso regular. Consultor muda manualmente o campo e a tag. | Mantém ou corrige [VALIDAR+] ↔ [CAMINHO_TECNICO] | 100% (validação humana) | Consultor |   |
| 2. COMO A TAG IMPACTA CADA ETAPA DO FUNIL (o que muda para VALIDAR+ vs CAMINHO TÉCNICO) |   |   |   |   |   |   |
| ETAPA | O QUE MUDA P/ VALIDAR+ | O QUE MUDA P/ CAMINHO TÉCNICO | AUTOMAÇÃO DIFERENCIADA | BOT DIFERENCIADO | OBS |   |
| TRIAGEM E QUALIFICAÇÃO (Bot IA) | Bot assume postura 'Analista' com atendimento mais tecnico. | Bot assume postura 'Orientador'. Pergunta rotina, dispositivo de estudo. Menciona mercado de trabalho, bolsa. | Mesma automação, template diferente por tag. | BOT_TRIAGEM_IA com ramos 3A/3B |   |   |
| FOLLOW UP ATIVO (Consultor) | Consultor = 'Analista de Documentação'. Foco: validação documental, prazos legais, CREA/CFT. Tom: sério, burocrático, autoridade. | Consultor = 'Orientador de Carreira'. Foco: mercado, empregabilidade, facilidade EaD. Tom: acolhedor, motivacional. | Mesma automação de resgate 24h, mas msg diferente por tag. | N/A (etapa humana) | Consultor vê a tag no card e sabe qual script usar. |   |
| AGUARDANDO DECISÃO | Objeção típica: 'É golpe?', 'É reconhecido?' | Objeção típica: 'Não tenho dinheiro', 'Não vou dar conta'. Resgate: depoimento aluno, parcelamento. | Template de resgate diferente por tag. | N/A |   |   |
| NEGOCIAÇÃO PERSONALIZADA | Desconto menor (ticket alto). Argumento: ROI profissional, CREA. | Desconto maior (ticket recorrente). Argumento: bolsa, parcelamento, matrícula isenta. | Cadência nutrição com conteúdo diferente por tag. | N/A |   |   |
| LEAD SEM RESPOSTA | Tentativa com prova social institucional: Print SISTEC, vídeo sede, depoimento técnico. | Tentativa com prova social emocional: Vídeo aluno, resultado emprego, desconto. | BOT_REENGAJAMENTO com template diferente por tag. | Sim - ramos por tag |   |   |
| PRÉ-MATRICULADO | Cobrança mais formal. Tom institucional. | Cobrança mais próxima. Tom motivacional. | BOT_COBRANCA com template por tag. | Sim |   |   |

## FUNIS

### CONFIGURAÇÃO DE FUNIS - VERSÃO DESENVOLVIMENTO

| NOME DO FUNIL | ETAPA DO FUNIL | ORDEM | TEMPERATURA KOMMO (1-10) | RESUMO DA ETAPA | QUEM OPERA | SLA | CRITÉRIO DE ENTRADA | CRITÉRIO DE SAÍDA | ATIVIDADES MANUAIS | TAGS APLICADAS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAT - FUNIL DE VENDAS (Matrícula EAD) |   |   |   |   |   |   |   |   |   |   |
| MAT - FUNIL DE VENDAS | NOVO LEAD | 1 | 10 | Etapa de entrada automática. Lead recém-chegado de qualquer canal. | Sistema | Imediato | Lead criado Automaticamente via formulário, pop-up, whatsapp, Meta Ads, Google, site. | Lead processado → move automaticamente para Potenciais ou Triagem. |   | [VALIDAR+] ou [CAMINHO_TECNICO] |
| MAT - FUNIL DE VENDAS | POTENCIAIS | 2 | 9 | Entrada de leads de formulários e integrações. Aguarda triagem. | Bot/Sistema | < 1 min | Lead criado por integração (pop-up, formulário site). | Bot inicia triagem → move para Triagem e Qualificação. | Nenhuma. | [VALIDAR+] ou [CAMINHO_TECNICO] |
| MAT - FUNIL DE VENDAS | TRIAGEM E QUALIFICAÇÃO | 3 | 9 | Agente de IA ativa para atendimento e qualificação Automatica | Salesbot IA | < 5 min | IA PARA ATENDIMENTO | Qualificação concluída → distribui Round Robin → move Follow Up → move Aguardando decisão → move Negociaçao Personalizada → move Pré-matriculado. |   | [VALIDAR+] ou [CAMINHO_TECNICO] |
| MAT - FUNIL DE VENDAS | FOLLOW UP ATIVO | 4 | 8 | Núcleo de vendas. Consultor humano atende, qualifica e conduz lead ao fechamento. Etapa com maior esforço do consultor. | Consultor | 1ª resposta ≤ 10min. Resposta contínua ≤ 2h. | Lead distribuído pelo bot (Etapa 3) ou retorno de Ag. Decisão/Sem Resposta. | AT-200 Solicitou Matrícula → Pré-Mat. AT-150 → Neg. Personalizada. AT-006/007 → Perdido. Inatividade 24h → Sem Resposta. | AT-005: Aguardando Info (48h) AT-006: Declarou Sem Interesse → Perdido AT-007: Desqualificado → Perdido AT-150: Interesse Próx. Campanha → Neg. Personalizada AT-200: Solicitou Matrícula → Pré-Matriculado |   |
| MAT - FUNIL DE VENDAS | AGUARDANDO DECISÃO | 5 | 7 | Lead quer fechar, masprecisa validar com terceiros ou já deixa data para novo contato. | Consultor | Data do lead ou intervalos 2/5/7/10 dias. | Consultor aplica AT-056 (com data) ou AT-057 (sem data). | Lead retorna → Follow Up. Sem retorno ciclo completo → Sem Resposta. | AT-056: Ag. Decisão COM Data → atividade na data do lead AT-057: Ag. Decisão SEM Data → sequência 2/5/7/10 dias |   |
| MAT - FUNIL DE VENDAS | NEGOCIAÇÃO PERSONALIZADA | 6 | 5 | Leads com objeções claras sobre valor ou aguardando proxima campanha promocional. | Consultor + supervisor | 60 dias máx. Cadência: D0/D3/D7/D14. | AT-150 ou AT-033 (sem resposta após valor). | Lead retorna → Follow Up. Ação comercial sem retorno → Perdido. 5d → Perdido. | AT-WP-07: Ação Comercial (supervisor cria em massa) |   |
| MAT - FUNIL DE VENDAS | LEAD SEM RESPOSTA | 7 | 3 | Etapa em que leads sem resposta entram em cadência automatizada de follow‑up | Bot + IA + Supervisor | 25 dias (tentativas D2/D3/D4/D5/D12/D22). Cobrança Pré-Mat: D1/D2/D5/D7/D15/D30. | Inatividade 5H Follow Up, move manual, ou Pré-Mat inadimplente. | Lead responde → Follow Up. Esgota 12 tentativas → Perdido. |   |   |
| MAT - FUNIL DE VENDAS | PRÉ-MATRICULADO | 8 | 9 | Lead sinalizou que quer se matricular, gerou o contrato e está aguardando pagamento. | Consultor | 20 dias. Cobrança auto: D1/D2/D5. Manual após D5. | AT-200 (solicitou matrícula) ou AT-058 (pré-mat online). | Pgto + contrato → Matriculado. Inadimplente sem resposta → Sem Resposta. Desistiu → Perdido. | DC-003: Pendente TX/Contrato (cobrança 24h) DC-004: Pendente Contrato Assinado DC-006: 1ª Parcela Inadimplente (48h) DC-009: Pendente Docs → move Matriculado AT-058: Pré-Mat Online (prioridade) AT-155: Desistiu → Perdido + cancelar |   |
| MAT - FUNIL DE VENDAS | MATRÍCULA REALIZADA | 9 | 10 | Pagamento confirmado, contrato assinado, AVA liberado. Handoff para Secretaria. | Consultor | Secretaria contata ≤ 24h. Boas-vindas + login AVA. | Pagamento confirmado + contrato (webhook ou manual DC-009). | Lead ganho (Won). Handoff Secretaria concluído. | DC-WP-01: Tarefa Secretaria Boas Vindas (imediato) |   |
| MAT - FUNIL DE VENDAS | MATRÍCULA PERDIDA | 10 | 1 | Base de leads perdidos com objeções registradas para ações futuras de remarketing. | Bot | Indefinido. | Lead perdido em qualquer etapa com objeção registrada. | Ação comercial futura pode reativar → Novo Lead. | Registro de objeção obrigatório ao perder. |   |

### MAT - FUNIL REDES SOCIAIS

| MAT - REDES SOCIAIS | INTERAÇÕES | 1 | 6 | Leads que interagiram via Instagram/Facebook (DM, story reply). | Bot/Consultor | ≤ 30min | Mensagem recebida via Instagram/Facebook. | Qualificado → MAT Funil de Vendas (Potenciais). |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAT - REDES SOCIAIS | COMENTÁRIOS | 2 | 4 | Leads que comentaram em posts/anúncios. | Bot | ≤ 1h | Comentário detectado em post/anúncio/FACEBOOK/INSTAGRAM. | Bot responde + convida para DM → Interações. |

### MAT - SUCESSO DO ALUNO

| MAT - SUCESSO DO ALUNO | BOAS VINDAS | 1 | 10 | Aluno matriculado recebe onboarding da Secretaria. | Secretaria | ≤ 24h | Lead ganho (Won) no Funil de Vendas. | Documentos recebidos + acesso AVA confirmado. | Verificar/cobrar envio de docs pessoais. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INEP - FUNIL DE VENDAS (INEPROTEC) |   |   |   |   |   |   |   |   |   |
| INEP - FUNIL DE VENDAS | NOVO LEAD | 1 | 10 | Etapa de entrada automática. Lead recém-chegado de qualquer canal. | Sistema | Imediato | Lead criado Automaticamente via formulário, pop-up, whatsapp, Meta Ads, Google, site. | Lead processado → move automaticamente para Potenciais ou Triagem. |   |
| INEP - FUNIL DE VENDAS | POTENCIAIS | 2 | 9 | Entrada de leads de formulários e integrações. Aguarda triagem. | Bot/Sistema | < 1 min | Lead criado por integração (pop-up, formulário site). | Bot inicia triagem → move para Triagem e Qualificação. | Nenhuma. |
| INEP - FUNIL DE VENDAS | TRIAGEM E QUALIFICAÇÃO | 3 | 9 | Agente de IA ativa para atendimento e qualificação Automatica | Salesbot IA | < 5 min | IA PARA ATENDIMENTO | Qualificação concluída → distribui Round Robin → move Follow Up → move Aguardando decisão → move Negociaçao Personalizada → move Pré-matriculado. |   |
| INEP - FUNIL DE VENDAS | FOLLOW UP ATIVO | 4 | 8 | Núcleo de vendas. Consultor humano atende, qualifica e conduz lead ao fechamento. Etapa com maior esforço do consultor. | Consultor | 1ª resposta ≤ 10min. Resposta contínua ≤ 2h. | Lead distribuído pelo bot (Etapa 3) ou retorno de Ag. Decisão/Sem Resposta. | AT-200 Solicitou Matrícula → Pré-Mat. AT-150 → Neg. Personalizada. AT-006/007 → Perdido. Inatividade 24h → Sem Resposta. | AT-005: Aguardando Info (48h) AT-006: Declarou Sem Interesse → Perdido AT-007: Desqualificado → Perdido AT-150: Interesse Próx. Campanha → Neg. Personalizada AT-200: Solicitou Matrícula → Pré-Matriculado |
| INEP - FUNIL DE VENDAS | AGUARDANDO DECISÃO | 5 | 7 | Lead quer fechar, masprecisa validar com terceiros ou já deixa data para novo contato. | Consultor | Data do lead ou intervalos 2/5/7/10 dias. | Consultor aplica AT-056 (com data) ou AT-057 (sem data). | Lead retorna → Follow Up. Sem retorno ciclo completo → Sem Resposta. | AT-056: Ag. Decisão COM Data → atividade na data do lead AT-057: Ag. Decisão SEM Data → sequência 2/5/7/10 dias |
| INEP - FUNIL DE VENDAS | NEGOCIAÇÃO PERSONALIZADA | 6 | 5 | Leads com objeções claras sobre valor ou aguardando proxima campanha promocional. | Bot + Supervisor | 60 dias máx. Cadência: D0/D3/D7/D14. | AT-150 ou AT-033 (sem resposta após valor). | Lead retorna → Follow Up. Ação comercial sem retorno → Perdido. 5d → Perdido. | AT-WP-07: Ação Comercial (supervisor cria em massa) |
| INEP - FUNIL DE VENDAS | LEAD SEM RESPOSTA | 7 | 3 | Etapa em que leads sem resposta entram em cadência automatizada de follow‑up | Bot + Consultor | 25 dias (tentativas D2/D3/D4/D5/D12/D22). Cobrança Pré-Mat: D1/D2/D5/D7/D15/D30. | Inatividade 5H Follow Up, move manual, ou Pré-Mat inadimplente. | Lead responde → Follow Up. Esgota 12 tentativas → Perdido. |   |
| INEP - FUNIL DE VENDAS | PRÉ-MATRICULADO | 8 | 9 | Lead sinalizou que quer se matricular, gerou o contrato e está aguardando pagamento. | Bot + Consultor | 20 dias. Cobrança auto: D1/D2/D5. Manual após D5. | AT-200 (solicitou matrícula) ou AT-058 (pré-mat online). | Pgto + contrato → Matriculado. Inadimplente sem resposta → Sem Resposta. Desistiu → Perdido. | DC-003: Pendente TX/Contrato (cobrança 24h) DC-004: Pendente Contrato Assinado DC-006: 1ª Parcela Inadimplente (48h) DC-009: Pendente Docs → move Matriculado AT-058: Pré-Mat Online (prioridade) AT-155: Desistiu → Perdido + cancelar |
| INEP - FUNIL DE VENDAS | MATRÍCULA REALIZADA | 9 | 10 | Pagamento confirmado, contrato assinado, AVA liberado. Handoff para Secretaria. | Sistema + Secretaria | Secretaria contata ≤ 24h. Boas-vindas + login AVA. | Pagamento confirmado + contrato (webhook ou manual DC-009). | Lead ganho (Won). Handoff Secretaria concluído. | DC-WP-01: Tarefa Secretaria Boas Vindas (imediato) |
| INEP - FUNIL DE VENDAS | MATRÍCULA PERDIDA | 10 | 1 | Base de leads perdidos com objeções registradas para ações futuras de remarketing. | Inativo | Indefinido. | Lead perdido em qualquer etapa com objeção registrada. | Ação comercial futura pode reativar → Novo Lead. | Registro de objeção obrigatório ao perder. |
| INEP - FUNIL REDES SOCIAIS |   |   |   |   |   |   |   |   |   |
| INEP - REDES SOCIAIS | INTERAÇÕES | 1 | 6 | Leads que interagiram via Instagram/Facebook (DM, story reply). | Bot/Consultor | ≤ 30min | Mensagem recebida via Instagram/Facebook. | Qualificado → MAT Funil de Vendas (Potenciais). |   |
| INEP - REDES SOCIAIS | COMENTÁRIOS | 2 | 4 | Leads que comentaram em posts/anúncios. | Bot | ≤ 1h | Comentário detectado em post/anúncio. | Bot responde + convida para DM → Interações. |   |
| INEP - REDES SOCIAIS | CURTIDAS | 3 | 2 | Leads que curtiram posts (menor intenção). | Sistema | N/A | Curtida detectada. | Nutrição passiva. |   |
| INEP - SUCESSO DO ALUNO |   |   |   |   |   |   |   |   |   |
| INEP - SUCESSO DO ALUNO | BOAS VINDAS | 1 | 10 | Aluno INEP matriculado recebe onboarding. | Secretaria | ≤ 24h | Lead ganho (Won) no Funil INEP. | Documentos + AVA confirmado. | Verificar/cobrar docs. |

## AUTOMAÇÕES POR ETAPA

### AUTOMAÇÕES DETALHADAS POR ETAPA - PARA DESENVOLVIMENTO

| ID | NOME DA AUTOMAÇÃO | TIPO | ETAPA | GATILHO NO KOMMO | CONDIÇÕES | AÇÕES | CANAL | TEMPLATE/MENSAGEM | CAMPOS/TAGS USADOS | TESTE: PASSOS | TESTE: RESULTADO ESPERADO | OBSERVAÇÕES |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUT-01 | Disparar Bot Triagem | Bot | POTENCIAIS | Quando criado em etapa 'Potenciais' | Canal de mensageiro conectado | Ativar BOT_TRIAGEM_IA | WhatsApp | TPL_BOAS_VINDAS (variável por UTM) | Origem_Lead, UTM_Source | Criar lead via form → bot dispara | Msg < 1min, bot ativado | Gatilho: imediatamente |
| AUT-02 | E-mail Apresentação 24h | Salesbot | POTENCIAIS | Quando criado em etapa (após 1 dia) | Campo Curso_Interesse preenchido | Enviar e-mail template curso | E-mail | TPL_EMAIL_CURSO: {{nome}}, {{curso}}, {{link}} | Curso_Interesse, Email | Criar lead → 24h → e-mail | E-mail com dados corretos do curso | Verificar no Kommo: e-mail nativo ou SendGrid |
| AUT-03 | Resgate Bot Sem Resposta | Salesbot | TRIAGEM E QUALIFICAÇÃO | Quando movido para etapa (após 24h) | Lead não respondeu ao bot (sem tag BOT_COMPLETO) | Enviar WPP resgate: 'Oi {{nome}}, ainda precisa de ajuda?' | WhatsApp | TPL_RESGATE_BOT | Tag: BOT_COMPLETO | Lead 24h sem resposta ao bot | Msg resgate enviada | Se 48h total → mover para Follow Up sem tag |
| AUT-04 | Resgate Inatividade 24h | Salesbot | FOLLOW UP ATIVO | Bot periódico (checar inatividade diária) | Última mensagem recebida > 24h. Lead não AT-005. | 1) WPP resgate. 2) Criar tarefa consultor 'Verificar 4h'. | WhatsApp | TPL_RESGATE_24H: 'Oi {{nome}}, ficou alguma dúvida?' | Tag [VALIDAR+]/[CAMINHO_TECNICO] | Lead 24h sem msg → msg enviada | Msg resgate + tarefa criada | Verificar: Salesbot checar timestamp última msg |
| AUT-05 | Move Auto Sem Resposta 5d | Automação | FOLLOW UP ATIVO | Bot periódico (checar inatividade) | Lead sem mensagem recebida > 5 dias. Não AT-005. | 1) change_status → Sem Resposta. 2) set_tag [ORIGEM_FOLLOWUP]. 3) Tarefa consultor. | Sistema | N/A | Tag: [ORIGEM_FOLLOWUP] | Lead 5d sem msg | Lead movido + tag + notificação | Consultor pode reverter manualmente |
| AUT-06 | Notificação Tarefa Vencida | Automação | FOLLOW UP ATIVO | Tarefa vencida (nativo Kommo) | Tarefa com vencimento passado | Notificação push/e-mail ao consultor e supervisor | Sistema | N/A |   | Tarefa vence → notif. | Notificação enviada | Recurso nativo do Kommo |
| AUT-07 | Sequência Reengajamento Sem Data | Salesbot | AGUARDANDO DECISÃO | Quando movido para etapa | Campo Tem_Data_Decisao = Não | D2: WPP. D5: WPP. D7: Tarefa áudio. D10: Última + move Sem Resposta. | WhatsApp | TPL_DECISAO_D2/D5/D10 | Tem_Data_Decisao, Tentativa_Decisao | Lead sem data movido → D2 msg | Sequência completa executada | Salesbot com goto + timer steps |
| AUT-08 | Alerta Tarefa Ag. Decisão | Automação | AGUARDANDO DECISÃO | Tarefa vencida | Tarefa AT-056 vencida | Notificação consultor | Sistema | N/A |   | Tarefa AT-056 vence | Notif enviada |   |
| AUT-09 | Cadência Nutrição Valor | Salesbot | NEGOCIAÇÃO PERSONALIZADA | Quando movido para etapa | Tag [OBJECAO_PRECO] | D0: WPP benefícios. D3: WPP depoimento. D7: WPP desconto. D14: Tarefa supervisor. | WhatsApp | TPL_NUTRICAO_D0/D3/D7 | Tags: OBJECAO_PRECO, NUTRICAO_VALOR. Campo: Curso_Interesse | Lead movido → D0 msg | Sequência 4 msgs executada | Templates aprovados Meta obrigatório |
| AUT-10 | Auto-perder 60 dias | Automação | NEGOCIAÇÃO PERSONALIZADA | Bot periódico (checar tempo na etapa) | Lead > 60 dias na etapa sem interação | Criar tarefa supervisor: 'Perder oportunidade após 60d' | Sistema | N/A |   | Lead 60d na etapa | Tarefa criada para supervisor | Não perde automaticamente - supervisor decide |
| AUT-11 | Sequência 3 Tentativas Auto | Salesbot | LEAD SEM RESPOSTA | Quando movido para etapa | Tag origem ([ORIGEM_FOLLOWUP], [ORIGEM_PREMATRICULA], [ORIGEM_POS_VALOR]) | D5: WPP personalizado por tag. D12: WPP gatilho emocional. D22: Última. POS_VALOR → Neg.Pers. Outros → tarefa perder. | WhatsApp | TPL_TENTATIVA_1/2/3 (variável por tag) | Tags origem. Campo: Tentativa_SemResposta | Lead movido → D5 msg1 | 3 msgs + destino correto por tag | Conditions handler por tag |
| AUT-12 | Lead Respondeu - Parar Seq. | Salesbot | LEAD SEM RESPOSTA | Mensagem recebida no chat | Lead na etapa Sem Resposta respondeu | 1) Parar sequência. 2) Notificar consultor. 3) Mover para Follow Up. 4) set_tag [RESGATADO]. | WhatsApp/Sistema | N/A | Tag: [RESGATADO] | Lead responde msg | Sequência para + move Follow Up | Prioridade alta para consultor |
| AUT-13 | Cobrança Auto Pagamento | Salesbot | PRÉ-MATRICULADO | Quando movido para etapa | Status_Pagamento = Pendente. Link_Pagamento preenchido. | D1: WPP vencimento. D2: WPP não concluído. D5: WPP último aviso. | WhatsApp | TPL_COBR_DIA1/2/5 | Status_Pagamento, Link_Pagamento, Data_Vencimento | Lead na etapa → D1 msg | 3 msgs cobrança enviadas | Templates Meta aprovados |
| AUT-14 | Webhook Pgto Confirmado | Webhook | PRÉ-MATRICULADO | Webhook externo: payment_confirmed | Lead identificado por CPF/email | 1) Status_Pagamento = Pago. 2) Parar cobrança. 3) Mover Matriculado. 4) Criar tarefa Secretaria. | Webhook | N/A | Status_Pagamento, Status_Contrato | Simular webhook pgto | Lead move Matriculado + tarefa Secretaria | Requer integração privada Kommo |
| AUT-15 | Inadimplente 6 dias | Salesbot | PRÉ-MATRICULADO | Continuação bot cobrança (D6) | Sem pagamento após 5 dias | set_tag [INADIMPLENTE]. Mover Sem Resposta com tag [ORIGEM_PREMATRICULA]. | Sistema | N/A | Tags: INADIMPLENTE, ORIGEM_PREMATRICULA | Lead D6 sem pgto | Lead movido Sem Resposta + tags |   |
| AUT-16 | WPP Boas-Vindas Aluno | Salesbot | MATRÍCULA REALIZADA | Quando movido para etapa | Status_Pagamento = Pago | Enviar WPP com login/senha AVA. | WhatsApp | TPL_BOAS_VINDAS_ALUNO: {{nome}}, Login: {{login_ava}}, Senha: {{senha_ava}} | Login_AVA, Senha_AVA | Lead movido → WPP enviado | Msg com credenciais corretas |   |
| AUT-17 | Criar Tarefa Secretaria | Automação | MATRÍCULA REALIZADA | Quando movido para etapa |   | Criar tarefa DC-WP-01 para usuário Secretaria, vencimento imediato. | Sistema | N/A | Usuário: Secretaria | Lead movido → tarefa criada | Tarefa com vencimento imediato | Verificar: tarefa para grupo ou usuário |
| AUT-18 | Alerta SLA Secretaria | Automação | MATRÍCULA REALIZADA | Tarefa vencida > 24h | Tarefa DC-WP-01 não concluída | Notificação supervisor: 'SLA Secretaria estourado para {{nome}}' | Sistema | N/A |   | Tarefa 24h sem conclusão | Alerta enviado ao supervisor |   |
| AUT-RS1 | Auto-Reply DM Redes | Salesbot | REDES SOCIAIS - INTERAÇÕES | Mensagem recebida via Instagram/Facebook |   | Responder DM com msg padrão + perguntar interesse em curso. | Instagram/Facebook | TPL_DM_REDE: 'Oi {{nome}}! Vi sua mensagem. Qual curso te interessa?' |   | DM recebida → auto-reply | Msg padrão enviada | Pipeline Digital do Kommo |
| AUT-RS2 | Criar Lead de Rede Social | Salesbot | REDES SOCIAIS - INTERAÇÕES | Lead demonstra interesse (responde bot) | Resposta contém interesse em curso | Criar lead no Funil de Vendas (Potenciais) com tag [REDE_SOCIAL] + dados coletados. | Sistema | N/A | Tag: [REDE_SOCIAL]. Campo: Origem_Lead = Instagram/Facebook | Lead responde interesse → lead criado | Lead no Funil Vendas + tag |   |
| AUT-RS3 | Auto-Reply Comentário | Salesbot | REDES SOCIAIS - COMENTÁRIOS | Comentário recebido em post |   | Responder comentário + convidar para DM. | Instagram/Facebook | 'Obrigado pelo interesse! Te mandei uma mensagem no privado 😊' |   | Comentário → auto-reply + DM | Comentário respondido + DM enviada | Recurso nativo Kommo Instagram |

## CAMPOS RESUMOS POR ETAPA

### SISTEMA DE RESUMOS AUTOMÁTICOS - RASTREABILIDADE COMPLETA DO LEAD

### Cada resumo é preenchido AUTOMATICAMENTE por gatilhos do Kommo. O consultor NÃO precisa alterar manualmente na maioria dos casos.

### Campo no Kommo: 'Resumo_Atual' (tipo Lista) — atualizado por automação. Campo 'Resumo_Anterior' (tipo Texto) — salva histórico.

| CÓDIGO | RESUMO | ETAPA | AUTO? | SIGNIFICADO (o que aconteceu com o lead) | GATILHO KOMMO PARA PREENCHER | QUEM PREENCHE | O QUE O CONSULTOR DEVE FAZER | PRÓXIMO RESUMO PROVÁVEL | PRIORIDADE | OBSERVAÇÕES |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ETAPA: NOVO LEAD / POTENCIAIS |   |   |   |   |   |   |   |   |   |   |
| R-001 | NÃO CONTACTADO | Novo Lead / Potenciais | SIM | Lead acabou de entrar no CRM. Nenhuma interação realizada ainda. | Gatilho: Lead criado em etapa Novo Lead/Potenciais. | Sistema | Nenhuma. Bot assume em segundos. | R-010 (Em Triagem IA) | — | Resumo padrão de entrada. |
| R-002 | LEAD DUPLICADO | Novo Lead | SIM | Lead já existe na base (mesmo telefone/e-mail). | Gatilho: Deduplicação detectou duplicata. | Sistema | Verificar se lead ativo tem responsável. Mesclar se necessário. | Manter resumo do lead original | BAIXA | Verificar no Kommo: dedup nativa ou widget. |
| ETAPA: TRIAGEM E QUALIFICAÇÃO (IA Ativa) |   |   |   |   |   |   |   |   |   |   |
| R-010 | EM TRIAGEM IA | Triagem e Qualificação | SIM | Bot está ativamente conversando com o lead. Pergunta de Ouro enviada, aguardando resposta. | Gatilho: Lead movido para etapa Triagem. | Bot | NÃO INTERFERIR. Bot está operando. | R-011 ou R-012 ou R-013 | — |   |
| R-011 | TRIAGEM COMPLETA - VALIDAR+ | Triagem e Qualificação | SIM | Lead confirmou experiência profissional. Classificado como VALIDAR+ (Certificação por Competência). | Gatilho: Bot classificou resposta = A. | Bot | Aguardar distribuição. Preparar script 'Analista'. | R-020 (Primeira Abordagem) | ALTA | Tag [VALIDAR+] aplicada automaticamente. |
| R-012 | TRIAGEM COMPLETA - CAMINHO TÉCNICO | Triagem e Qualificação | SIM | Lead quer começar do zero. Classificado como CAMINHO TÉCNICO (Curso Regular). | Gatilho: Bot classificou resposta = B. | Bot | Aguardar distribuição. Preparar script 'Orientador'. | R-020 (Primeira Abordagem) | ALTA | Tag [CAMINHO_TECNICO] aplicada automaticamente. |
| R-013 | TRIAGEM INCOMPLETA - BOT SEM RESPOSTA | Triagem e Qualificação | SIM | Lead não respondeu ao bot após 2 tentativas (fallback). Será distribuído sem classificação. | Gatilho: Bot esgotou fallback (2 tentativas). | Bot | Consultor PRECISA classificar manualmente na 1ª interação. | R-020 (Primeira Abordagem) | ALTA | Tag [BOT_INCOMPLETO]. Consultor deve perguntar. |
| R-014 | TRIAGEM - SEM RESPOSTA 24H | Triagem e Qualificação | SIM | Lead não respondeu ao bot em 24h. Msg resgate enviada. | Gatilho: 24h sem resposta ao bot. | Bot | Aguardar. Se 48h sem resposta → move Follow Up sem tag. | R-020 ou R-050 (Sem Resposta 1ª Interação) | MÉDIA |   |
| ETAPA: FOLLOW UP ATIVO (Consultor Humano) |   |   |   |   |   |   |   |   |   |   |
| R-020 | PRIMEIRA ABORDAGEM | Follow Up Ativo | SIM | Consultor recebeu o lead e está fazendo o primeiro contato humano. | Gatilho: Lead movido para Follow Up (vindo da Triagem). | Automação | Enviar primeira mensagem usando script do perfil (VALIDAR+ ou CAMINHO TÉCNICO). | R-021, R-022, R-023, R-024, R-025, R-026, R-030 | ALTA |   |
| R-021 | EM INTERAÇÃO ATIVA | Follow Up Ativo | MANUAL | Lead está respondendo. Conversa fluindo. Consultor qualificando. | Consultor atualiza ao iniciar conversa fluida. | Consultor | Continuar qualificação. Identificar perfil, dúvidas, objeções. | R-024, R-025, R-026, R-030 | — | Resumo mais comum durante atendimento ativo. |
| R-022 | INTERAÇÃO LENTA (40min-4h) | Follow Up Ativo | MANUAL | Lead respondeu mas demora 40min a 4h entre respostas. Interação não flui. | Consultor identifica padrão de demora. | Consultor | Manter contato. Não pressionar. Aguardar. | R-021, R-023, R-024 | MÉDIA | Não confundir com 'sem resposta'. Lead ESTÁ respondendo, só devagar. |
| R-023 | AGUARDANDO RESPOSTA (>4h) | Follow Up Ativo | SIM | Lead parou de responder há mais de 4h. Última tentativa antes de classificar. | Gatilho: Automação detecta >4h sem msg recebida no chat. | Automação | Aguardar 48h. Se não responder → definir se vai para Sem Resposta. | R-050 ou R-051 (depende do histórico) | MÉDIA | AUT-04 envia resgate automático. |
| R-024 | AGUARDANDO INFO PARA AVANÇAR | Follow Up Ativo | MANUAL | Lead interessado mas aguarda análise de documentação ou certificação por competência. | Consultor seleciona este resumo. | Consultor | Acompanhar análise. Atividade com vencimento 48h. | R-021, R-030 | MÉDIA | Específico para VALIDAR+. Gera atividade automática 48h. |
| R-025 | DECLAROU SEM INTERESSE | Follow Up Ativo | MANUAL | Lead disse claramente que não quer prosseguir. | Consultor seleciona ao ouvir recusa clara. | Consultor | Tentar entender objeção real. Se confirma: mover para Perdido com objeção. | R-090 (Perdido) | — | Objeção obrigatória (exceto valor → usar R-026). |
| R-026 | DESQUALIFICADO - SEM CRITÉRIOS | Follow Up Ativo | MANUAL | Lead não tem requisitos mínimos (idade, escolaridade, dados inválidos, fraude). | Consultor identifica falta de critério. | Consultor | Mover para Perdido. Marcar objeção específica. | R-091 (Perdido - Desqualificado) | — |   |
| R-027 | INTERESSE - AGUARDA DESCONTO | Follow Up Ativo | MANUAL | Lead tem interesse mas o preço é barreira. Prefere aguardar desconto/campanha. | Consultor identifica objeção de preço. | Consultor | Mover para Negociação Personalizada. | R-070 (Em Nutrição Valor) | — | Tag [OBJECAO_PRECO] aplicada ao mover. |
| R-030 | SOLICITOU MATRÍCULA | Follow Up Ativo | MANUAL | Lead qualificado decidiu matricular! Consultor coleta dados e gera contrato/pagamento. | Consultor identifica decisão de compra. | Consultor | Cadastrar no sistema acadêmico. Gerar contrato + link pagamento. Mover para Pré-Matriculado. | R-080 (Matrícula Solicitada) | URGENTE | Momento mais importante. Agir rápido. |
| ETAPA: AGUARDANDO DECISÃO |   |   |   |   |   |   |   |   |   |   |
| R-040 | AG. DECISÃO COM DATA | Aguardando Decisão | MANUAL | Lead precisa validar com terceiros (empresa, família) e informou uma data de retorno. | Consultor seleciona + informa data. | Consultor | Criar atividade na data do lead. Priorizar áudio/ligação no retorno. | R-021 (volta Follow Up) ou R-051 | ALTA |   |
| R-041 | AG. DECISÃO SEM DATA | Aguardando Decisão | MANUAL | Lead precisa de tempo mas NÃO informou data. Sequência automática 2/5/7/10 dias. | Consultor seleciona (sem data). | Consultor | Bot assume sequência automática. Consultor age se lead responder. | R-021 ou R-053 | MÉDIA | AUT-07 ativa sequência automática. |
| R-042 | AG. DECISÃO - RETORNOU | Aguardando Decisão | SIM | Lead retornou contato durante período de espera. | Gatilho: Msg recebida do lead nesta etapa. | Automação | Mover de volta para Follow Up. Retomar atendimento. | R-021 (Em Interação Ativa) | ALTA | Tag [RESGATADO] aplicada. |
| ETAPA: NEGOCIAÇÃO PERSONALIZADA (Aguardando Desconto) |   |   |   |   |   |   |   |   |   |   |
| R-070 | EM NUTRIÇÃO DE VALOR | Negociação Personalizada | SIM | Lead entrou na cadência automática de nutrição por valor (D0/D3/D7/D14). | Gatilho: Lead movido para Negociação Personalizada. | Automação | Aguardar. Bot envia sequência automática. Consultor age se lead responder. | R-071, R-072, R-021 | — | Tag [NUTRICAO_VALOR]. |
| R-071 | AGUARDANDO AÇÃO COMERCIAL | Negociação Personalizada | MANUAL | Cadência concluída. Lead aguarda próxima campanha/desconto do supervisor. | Consultor ou automação ao fim da cadência. | Consultor/Bot | Supervisor cria ação comercial (AT-WP-07) quando houver condições. | R-021 ou R-092 | BAIXA |   |
| R-072 | RETORNOU POR DESCONTO | Negociação Personalizada | SIM | Lead respondeu à campanha de desconto. Oportunidade quente. | Gatilho: Msg recebida do lead nesta etapa. | Automação | Mover para Follow Up IMEDIATAMENTE. Prioridade máxima. | R-021 ou R-030 | URGENTE | Tag [RESGATADO]. |
| ETAPA: LEAD SEM RESPOSTA (Resumos de ORIGEM — de onde o lead veio) |   |   |   |   |   |   |   |   |   |   |
| R-050 | PAROU NA PRIMEIRA INTERAÇÃO | Lead Sem Resposta | SIM | Lead NUNCA respondeu à primeira mensagem do consultor. Ghostou desde o começo. | Gatilho: AUT-05 (5 dias sem resposta) + lead só teve 1 msg enviada sem resposta. | Automação | Bot envia tentativas automáticas. Abordagem: curiosidade/reintrodução. | R-055 (Tentativa 1) → R-093 | — | Tag [ORIGEM_FOLLOWUP]. Histórico: nunca interagiu. |
| R-051 | PAROU DURANTE QUALIFICAÇÃO | Lead Sem Resposta | SIM | Lead interagiu, estava sendo qualificado, mas parou de responder sem motivo claro. | Gatilho: AUT-05 + lead teve múltiplas msgs trocadas. | Automação | Bot envia tentativas. Abordagem: retomar de onde parou. | R-055 → R-093 | — | Tag [ORIGEM_FOLLOWUP]. Histórico: qualificado parcialmente. |
| R-052 | PAROU APÓS RECEBER VALOR | Lead Sem Resposta | SIM | Lead estava qualificado, recebeu o preço do curso e sumiu. Objeção provável: preço. | Gatilho: AUT-05 + tag [OBJECAO_PRECO] ou consultor marcou. | Automação | Bot envia tentativas com foco em valor/desconto. Destino final: Neg. Personalizada. | R-055 → Neg. Personalizada (R-070) | — | Tag [ORIGEM_POS_VALOR]. NÃO vai para Perdido, vai para Negociação. |
| R-053 | PAROU EM AGUARDANDO DECISÃO | Lead Sem Resposta | SIM | Lead estava aguardando decisão de terceiros e sumiu. Não retornou na data combinada. | Gatilho: Sequência Ag. Decisão esgotada sem resposta. | Automação | Bot envia tentativas. Abordagem: 'já conversou com a família/empresa?' | R-055 → R-093 | — | Tag [ORIGEM_FOLLOWUP]. |
| R-054 | DESISTIU NA PRÉ-MATRÍCULA | Lead Sem Resposta | SIM | Lead solicitou matrícula, recebeu contrato/pagamento, mas sumiu. NÃO pagou. | Gatilho: AUT-15 (inadimplente 6 dias Pré-Mat) ou consultor AT-035. | Automação | Bot envia cobranças D7/D15/D30. Abordagem: 'sua matrícula está pendente'. | R-056 (Cobrança T1) → R-094 | ALTA | Tag [ORIGEM_PREMATRICULA]. Lead mais quente — quase comprou. |
| R-055 | TENTATIVA DE REENGAJAMENTO 1 | Lead Sem Resposta | SIM | Primeira tentativa automática de contato (D5 na etapa). | Gatilho: Bot dia 5 na etapa. | Bot | Aguardar resposta. Se responder → volta Follow Up. | R-057 ou R-021 (se responder) | — | Campo Tentativa_SemResposta = 1. |
| R-056 | COBRANÇA PRÉ-MAT - TENTATIVA 1 | Lead Sem Resposta | SIM | Primeira cobrança para lead que desistiu na pré-matrícula (D7). | Gatilho: Bot dia 7 (específico ORIGEM_PREMATRICULA). | Bot | Aguardar pagamento/resposta. | R-058 ou R-080 (se pagar) | ALTA | Cobrança diferente de reengajamento normal. |
| R-057 | TENTATIVA DE REENGAJAMENTO 2 | Lead Sem Resposta | SIM | Segunda tentativa (D12). | Gatilho: Bot dia 12. | Bot | Aguardar. Msg com prova social/emocional. | R-059 ou R-021 (se responder) | — | Campo Tentativa_SemResposta = 2. |
| R-058 | COBRANÇA PRÉ-MAT - TENTATIVA 2 | Lead Sem Resposta | SIM | Segunda cobrança pré-matrícula (D15). | Gatilho: Bot dia 15. | Bot | Aguardar. | R-060 ou R-080 | — |   |
| R-059 | TENTATIVA DE REENGAJAMENTO 3 (ÚLTIMA) | Lead Sem Resposta | SIM | Terceira e última tentativa (D22). Msg de encerramento. | Gatilho: Bot dia 22. | Bot | Se [ORIGEM_POS_VALOR] → move Neg. Personalizada. Demais → Tarefa consultor perder com objeção. | R-070 ou R-093 | — | Campo Tentativa_SemResposta = 3. |
| R-060 | COBRANÇA PRÉ-MAT - TENTATIVA 3 (ÚLTIMA) | Lead Sem Resposta | SIM | Terceira cobrança (D30). Última tentativa. | Gatilho: Bot dia 30. | Bot | Tarefa: cancelar faturas + perder oportunidade. | R-094 | — | Gera DC-ST-11 cancelar faturas. |
| R-061 | RESPONDEU - RESGATADO! | Lead Sem Resposta | SIM | Lead RESPONDEU a uma das tentativas! Oportunidade ressuscitada. | Gatilho: Msg recebida do lead na etapa Sem Resposta. | Automação | PARAR sequência. Mover para Follow Up. Prioridade MÁXIMA. | R-021 (Em Interação Ativa) | URGENTE | Tag [RESGATADO]. Notificação push ao consultor. |
| ETAPA: PRÉ-MATRICULADO |   |   |   |   |   |   |   |   |   |   |
| R-080 | MATRÍCULA SOLICITADA - CONTRATO PENDENTE | Pré-Matriculado | SIM | Lead solicitou matrícula. Consultor está gerando contrato e link de pagamento. | Gatilho: Lead movido para Pré-Matriculado (AT-200). | Automação | Gerar contrato + pagamento no sistema acadêmico. Enviar ao lead. | R-081 | URGENTE |   |
| R-081 | CONTRATO ENVIADO - PGTO PENDENTE | Pré-Matriculado | MANUAL | Contrato e link de pagamento já foram enviados. Aguardando pagamento. | Consultor seleciona após envio (DC-003). | Consultor | Bot assume cobrança automática (D1/D2/D5). Consultor age se lead responder. | R-082, R-083, R-054 | ALTA | Bot BOT_COBRANCA_PGTO ativado. |
| R-082 | PGTO REALIZADO - CONTRATO PENDENTE | Pré-Matriculado | SIM | Lead PAGOU mas ainda NÃO assinou contrato. | Gatilho: Webhook pagamento confirmado + Status_Contrato ≠ Assinado. | Webhook | Cobrar assinatura do contrato. Intervalos 2/5/7/10 dias. | R-084 (Matrícula Confirmada) | ALTA | DC-004. Cancelamento se não assinar após todas tentativas. |
| R-083 | 1ª PARCELA INADIMPLENTE | Pré-Matriculado | MANUAL | Lead não pagou na data combinada e não informou motivo. | Consultor identifica inadimplência (DC-006). | Consultor | Cobrança 48h. Se não retorna → mover Sem Resposta (R-054). | R-054 (Desistiu Pré-Mat) | ALTA | Tag [INADIMPLENTE] ao mover. |
| R-084 | MATRÍCULA CONFIRMADA - BOAS VINDAS | Pré-Matriculado | SIM | Pagamento + contrato OK! Lead é agora ALUNO. | Gatilho: Status_Pagamento=Pago E Status_Contrato=Assinado. | Automação | Enviar boas-vindas + login AVA. Mover para Matriculado. | R-085 | URGENTE | DC-009 → move Matriculado automaticamente. |
| R-085 | PRÉ-MATRÍCULA ONLINE | Pré-Matriculado | SIM | Lead fez pré-matrícula pelo site sem atendimento humano. PRIORIDADE MÁXIMA. | Gatilho: Lead criado via formulário completo de matrícula. | Sistema | Verificar inscrição + enviar WPP. Tratar como lead mais quente. | R-081 ou R-021 | URGENTE | Tag [PRE_MATRIC_ONLINE]. Atividades AT-ST-01 + AT-WP-02. |
| R-086 | DECLAROU DESISTÊNCIA | Pré-Matriculado | MANUAL | Lead pré-matriculado declarou que deseja desistir. | Consultor seleciona (AT-155). | Consultor | Mover para Perdido. Gerar cancelamento de faturas. | R-094 (Perdido Pré-Mat) | — | Objeção: Pré-Matriculado Desistente. Gera DC-ST-11. |
| ETAPA: MATRÍCULA REALIZADA |   |   |   |   |   |   |   |   |   |   |
| R-085 | BOAS VINDAS - SECRETARIA | Matrícula Realizada | SIM | Aluno matriculado. Tarefa criada para Secretaria fazer onboarding. | Gatilho: Lead movido para Matrícula Realizada. | Automação | Secretaria: enviar boas-vindas, cobrar docs, liberar AVA. | R-086 (Docs Pendentes) | ALTA | DC-WP-01 criada automaticamente. |
| R-086M | DOCS PENDENTES | Matrícula Realizada | MANUAL | Aluno precisa enviar documentos pessoais. | Secretaria seleciona. | Secretaria | Cobrar envio de docs. Acompanhar. | R-087 (Aluno Ativo) | MÉDIA |   |
| R-087 | ALUNO ATIVO - COMPLETO | Matrícula Realizada | MANUAL | Todos docs recebidos. Aluno ativo no AVA. Processo concluído. | Secretaria seleciona ao receber tudo. | Secretaria | Lead ganho (Won). Fechar card. | FIM | — | Lead ganho. 🎉 |
| ETAPA: MATRÍCULA PERDIDA (Resumos de MOTIVO — por que perdeu) |   |   |   |   |   |   |   |   |   |   |
| R-090 | PERDIDO - SEM INTERESSE DECLARADO | Matrícula Perdida | SIM | Lead disse que não quer. Consultor não conseguiu identificar objeção real. | Gatilho: Lead movido para Perdido + Objeção='Sem Interesse'. | Automação | — | — | — | Objeção deve ser última opção. Consultor deve tentar descobrir motivo. |
| R-091 | PERDIDO - DESQUALIFICADO | Matrícula Perdida | SIM | Lead não tem critérios mínimos (idade, escolaridade, fraude, etc). | Gatilho: Lead movido para Perdido + Objeção='Desqualificado'. | Automação | — | — | — | Objeção específica: qual critério faltou. |
| R-092 | PERDIDO - PREÇO / SEM RETORNO CAMPANHA | Matrícula Perdida | SIM | Lead tinha objeção de preço. Não retornou após campanha de desconto. | Gatilho: Lead perdido da Neg. Personalizada. | Automação | — | — | — | Pode ser reativado em campanhas futuras. |
| R-093 | PERDIDO - SEM RESPOSTA (1ª ABORDAGEM ou QUALIFICADO) | Matrícula Perdida | SIM | Lead esgotou 3 tentativas sem responder. | Gatilho: Bot esgotou tentativas + tag [ORIGEM_FOLLOWUP]. | Automação | — | — | — | Objeção: '1ª Abordagem Sem Resposta' ou 'Qualificado Sem Resposta'. |
| R-094 | PERDIDO - PRÉ-MATRICULADO (DESISTIU ou INADIMPLENTE) | Matrícula Perdida | SIM | Lead quase comprou mas desistiu ou não pagou. | Gatilho: Lead perdido da Pré-Mat ou Sem Resposta com tag [ORIGEM_PREMATRICULA]. | Automação | Gerar DC-ST-11 cancelar faturas. | — | — | Lead mais quente entre os perdidos. Prioridade em campanhas. |
| R-095 | PERDIDO - CONCORRÊNCIA | Matrícula Perdida | MANUAL | Lead escolheu outra escola/curso. | Consultor seleciona + identifica concorrente. | Consultor | — | — | — | Dado valioso para inteligência competitiva. |
| REGRAS DE PREENCHIMENTO AUTOMÁTICO DOS RESUMOS NO KOMMO |   |   |   |   |   |   |   |   |   |   |
| Cada regra é um gatilho no Pipeline Digital ou Salesbot que atualiza o campo 'Resumo_Atual' automaticamente. |   |   |   |   |   |   |   |   |   |   |
| RESUMO DESTINO | EVENTO/GATILHO NO KOMMO | ETAPA DO LEAD | CONDIÇÃO (SE...) | AÇÃO (ENTÃO...) | TIPO GATILHO | COMO CONFIGURAR NO KOMMO | OBS |   |   |   |
| R-001 | Lead criado | Novo Lead | Qualquer lead criado no pipeline | set_custom_fields Resumo_Atual = 'NÃO CONTACTADO' | Pipeline Digital | Leads > Automatize > Etapa Novo Lead > Adicionar gatilho > Ação: Alterar campo |   |   |   |   |
| R-010 | Lead movido para Triagem | Triagem | Lead movido para etapa Triagem | set_custom_fields Resumo_Atual = 'EM TRIAGEM IA' Salvar anterior em Resumo_Anterior | Pipeline Digital | Gatilho na etapa Triagem | Bot cuida do resto |   |   |   |
| R-011 | Bot classifica VALIDAR+ | Triagem | Bot: resposta = A | Resumo_Atual = 'TRIAGEM COMPLETA - VALIDAR+' Perfil_Lead = 'VALIDAR+' | Salesbot | Step do BOT_TRIAGEM: action set_custom_fields |   |   |   |   |
| R-012 | Bot classifica CAMINHO | Triagem | Bot: resposta = B | Resumo_Atual = 'TRIAGEM COMPLETA - CAMINHO TÉCNICO' Perfil_Lead = 'CAMINHO TÉCNICO' | Salesbot | Step do BOT_TRIAGEM |   |   |   |   |
| R-020 | Lead movido p/ Follow Up | Follow Up | Lead movido (de Triagem ou retorno) | Resumo_Atual = 'PRIMEIRA ABORDAGEM' Salvar anterior | Pipeline Digital | Gatilho na etapa Follow Up | Se voltando de Sem Resposta: Resumo = 'RESPONDEU - RESGATADO' |   |   |   |
| R-023 | Inatividade >4h detectada | Follow Up | Última msg recebida > 4h E lead não é AT-024 | Resumo_Atual = 'AGUARDANDO RESPOSTA (>4h)' | Salesbot periódico | Bot checa timestamp de msgs | Verificar: capacidade do Kommo checar timestamps |   |   |   |
| R-050 | Lead movido p/ Sem Resposta (vindo do Follow Up, nunca interagiu) | Sem Resposta | Movido de Follow Up + histórico: 0 msgs recebidas do lead | Resumo_Atual = 'PAROU NA PRIMEIRA INTERAÇÃO' | Salesbot | conditions: checar qtd msgs recebidas Se 0 → R-050 Se >0 e sem tag PRECO → R-051 Se tag PRECO → R-052 | Lógica condicional no bot |   |   |   |
| R-051 | Lead movido p/ Sem Resposta (vindo do Follow Up, já interagiu) | Sem Resposta | Movido de Follow Up + histórico: >0 msgs + sem tag [OBJECAO_PRECO] | Resumo_Atual = 'PAROU DURANTE QUALIFICAÇÃO' | Salesbot | Mesmo bot, ramo diferente |   |   |   |   |
| R-052 | Lead movido p/ Sem Resposta (após receber valor) | Sem Resposta | Movido de Follow Up + tag [OBJECAO_PRECO] | Resumo_Atual = 'PAROU APÓS RECEBER VALOR' | Salesbot | Mesmo bot, ramo por tag | Destino final: Neg. Personalizada (não Perdido) |   |   |   |
| R-053 | Lead movido p/ Sem Resposta (vindo de Ag. Decisão) | Sem Resposta | Movido de Ag. Decisão | Resumo_Atual = 'PAROU EM AGUARDANDO DECISÃO' | Salesbot | conditions: checar etapa anterior | Verificar: Kommo tem variável de etapa anterior? |   |   |   |
| R-054 | Lead movido p/ Sem Resposta (vindo de Pré-Mat) | Sem Resposta | Movido de Pré-Matriculado OU tag [ORIGEM_PREMATRICULA] | Resumo_Atual = 'DESISTIU NA PRÉ-MATRÍCULA' | Salesbot | conditions: tag ORIGEM_PREMATRICULA | Lead mais quente. Cobrança diferenciada. |   |   |   |
| R-055/57/59 | Tentativas automáticas D5/D12/D22 | Sem Resposta | Bot timer step D5/D12/D22 | Resumo_Atual = 'TENTATIVA 1/2/3' Tentativa_SemResposta = 1/2/3 | Salesbot | Bot steps com goto + timer |   |   |   |   |
| R-061 | Lead respondeu na etapa Sem Resposta | Sem Resposta | Msg recebida do lead | Resumo_Atual = 'RESPONDEU - RESGATADO!' Parar bot Mover p/ Follow Up | Salesbot | Gatilho: msg recebida no chat (na seção do bot ou Pipeline Digital) | PRIORIDADE. Notif push consultor. |   |   |   |
| R-080 | Lead movido p/ Pré-Matriculado | Pré-Matriculado | Lead movido (AT-200 ou AT-058) | Resumo_Atual = 'MATRÍCULA SOLICITADA' Salvar anterior | Pipeline Digital | Gatilho na etapa Pré-Mat |   |   |   |   |
| R-084 | Pagamento + Contrato OK | Pré-Matriculado | Status_Pagamento=Pago E Status_Contrato=Assinado | Resumo_Atual = 'MATRÍCULA CONFIRMADA' Mover p/ Matriculado | Webhook + Automação | Webhook pgto → checar contrato → se ambos OK → mover |   |   |   |   |
| R-090-095 | Lead movido p/ Perdido | Perdido | Lead perdido + Objeção selecionada | Resumo_Atual = 'PERDIDO - [MOTIVO]' Baseado na Objeção_Perda selecionada | Pipeline Digital | Condição: mapear Objeção_Perda → Resumo correspondente | Automação preenche resumo baseado na objeção escolhida. |   |   |   |
| MECÂNICA DO CAMPO 'Resumo_Anterior' (histórico sem sobrecarregar) |   |   |   |   |   |   |   |   |   |   |
| CONCEITO | Sempre que Resumo_Atual mudar, o valor anterior é salvo em Resumo_Anterior. | Todas | Automação antes de cada set_custom_fields de Resumo_Atual | 1) Copiar Resumo_Atual → Resumo_Anterior 2) Então setar novo Resumo_Atual | Salesbot/Pipeline | Cada gatilho que muda resumo deve ter 2 ações: 1ª: set Resumo_Anterior = {{Resumo_Atual}} 2ª: set Resumo_Atual = novo valor | Verificar: Kommo suporta placeholder {{custom_field}} em set_custom_fields? |   |   |   |
| BENEFÍCIO | Consultor vê no card: Resumo_Atual + Resumo_Anterior. Sabe de onde o lead veio e onde está. | — | — | — | — | Campos visíveis no card do lead no Kommo. | Sem necessidade de abrir histórico. |   |   |   |
| ALTERNATIVA | Se Kommo não suporta copiar campo para campo nativamente: usar Notas automáticas. | — | — | Criar nota no lead: 'Resumo alterado de [X] para [Y] em [data]' | Salesbot | handler: action, name: add_note | Mais robusto mas exige mais config. |   |   |   |

## ATIVIDADES

### ATIVIDADES - MANUAIS E GERADAS POR AUTOMAÇÃO

| CÓDIGO | NOME DA ATIVIDADE | ETAPA | TIPO | INSTRUÇÕES DE USO | AÇÃO NO CRM | RESPONSÁVEL | SLA/VENCIMENTO |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-WP-001 | ENVIAR MENSAGEM WPP | Follow Up / Ag. Decisão | Manual | Enviar primeira mensagem WhatsApp ao lead. Usar script por perfil (VALIDAR+ ou CAMINHO TÉCNICO). | Gera automaticamente ao sair do atendimento IA | Consultor | Imediato |
| AT-WP-002 | AGUARDANDO INFO PARA AVANÇAR | Follow Up Ativo | Manual | Lead aguarda análise de documentação ou certificação por competência. | Gera atividade AT-WP-002 com vencimento 48h. | Consultor | 48h |
| AT-WP-003 | DECLAROU NÃO TER INTERESSE | Follow Up Ativo | Manual | Lead declarou sem interesse. Registrar objeção obrigatória (exceto valor). | Mover para Matrícula Perdida. Status: Perdido. | Consultor | Imediato |
| AT-WP-004 | DESQUALIFICADO | Follow Up Ativo | Manual | Lead sem critérios mínimos (idade, escolaridade, cursos gratuitos, fraude). | Mover para Matrícula Perdida. Status: Perdido. Objeção obrigatória. | Consultor | Imediato |
| AT-WP-005 | COM INTERESSE - PRÓXIMA CAMPANHA | Follow Up Ativo | Manual | Lead com interesse mas prefere aguardar desconto. | Mover para Negociação Personalizada. | Consultor | Imediato |
| AT-WP-006 | SOLICITOU MATRÍCULA | Follow Up Ativo | Manual | Lead qualificado solicita matrícula. Consultor cadastra no sistema acadêmico, gera contrato e link pagamento. | Mover para Pré-Matriculado. Gera DC-ST-03. | Consultor | Imediato |
| AT-WP-007 | AG. DECISÃO COM DATA | Aguardando Decisão | Manual | Lead informou data prevista para retorno. Criar atividade com vencimento na data do lead. | Mover para Ag. Decisão. Gera AT-WP-001 na data do lead. | Consultor | Data do lead |
| AT-WP-008 | AG. DECISÃO SEM DATA | Aguardando Decisão | Manual | Lead sem data específica. Sequência automática 2/5/7/10 dias. | Mover para Ag. Decisão. Ativa AUT-07. | Consultor | 48h (1º) |
| AT-WP-009 | AÇÃO COMERCIAL | Negociação Personalizada | Manual | Supervisor cria em massa com novas condições/descontos. | Atividade distribuída para consultores. | Supervisor | Definido pelo supervisor |
| AT-WP-010 | PENDENTE TX MATRÍCULA/CONTRATO | Pré-Matriculado | Manual | Contrato e pagamento enviados. Cobrar pagamento e assinatura. | Gera AT-WP-003 cobrança 24h. | Consultor | 24h |
| AT-WP-011 | PENDENTE CONTRATO ASSINADO | Pré-Matriculado | Manual | Lead pagou mas não assinou contrato. Cobrança assinatura. | Gera AT-WP-003 cobrança assinatura 24h, depois 2/5/7/10d. | Consultor | 24h |
| AT-WP-012 | PRIMEIRA PARCELA INADIMPLENTE | Pré-Matriculado | Manual | Lead não pagou na data combinada e não retorna. | Gera AT-WP-003 cobrança 48h. Se não retorna → AT-035. | Consultor | 48h |
| AT-WP-013 | PENDENTE DE DOCS PESSOAIS | Pré-Matriculado | Manual | Pagamento e contrato OK. Enviar boas-vindas + login AVA. | Mover para Matriculado. Gera DC-WP-01 para Secretaria. | Consultor | Imediato |
| AT-WP-014 | PRÉ-MATRICULADO ONLINE | Pré-Matriculado | Auto | Leads do formulário site entram direto. Prioridade máxima. | Gera AT-ST-01 + AT-WP-02. Tag [PRE_MATRIC_ONLINE]. | Consultor | Imediato |
| AT-WP-015 | DESISTIU DE CONTINUAR | Pré-Matriculado | Manual | Lead pré-matriculado declara desistência. | Mover Perdido. Objeção: Pré-Mat Desistente. Gera DC-ST-11 cancelar. | Consultor | Imediato |
| AT-WP-016 | CANCELAR FATURAS/INATIVAR | Matrícula Perdida | Manual | Cancelar faturas geradas e inativar aluno no sistema. | Atividade de cancelamento. | Financeiro | Imediato |

## CAMPOS PERSONALIZADOS

### CAMPOS PERSONALIZADOS - PARA CRIAÇÃO NO KOMMO

| NOME DO CAMPO | ID SUGERIDO | TIPO KOMMO | ENTIDADE | OPÇÕES (se lista) | FINALIDADE | PREENCHIDO POR | ETAPA DE USO | OBRIGATÓRIO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Perfil_Lead | perfil_lead | Lista | Lead | VALIDAR+ | CAMINHO TÉCNICO | NÃO DEFINIDO | Classificação binária do lead pelo bot de triagem | Bot | Triagem | Sim |
| Curso_Interesse | curso_interesse | Lista | Lead | Ver aba PRODUTOS (todos os cursos MAT + INEP) | Curso escolhido/interessado pelo lead | Bot/Consultor | Triagem/Follow Up | Sim |
| Origem_Lead | origem_lead | Lista | Lead | Formulário Site | Pop-up | Duotalk | Meta Ads | Google Ads | Instagram | Facebook | Indicação | Outro | Canal de origem do lead | Sistema | Novo Lead | Sim |
| Escola | escola | Lista | Lead | MATRÍCULA EAD | INEPROTEC | Qual escola o lead pertence | Sistema | Novo Lead | Sim |
| Temperatura | temperatura | Lista | Lead | Quente | Morno | Frio | Temperatura qualitativa do lead (complementa score Kommo) | Automação | Todas | Não |
| Motivo_perda |   |   |   |   |   |   |   |   |
| Status_Pagamento | status_pgto | Lista | Lead | Pendente | Pago | Inadimplente | Cancelado | Reembolsado | Status do pagamento da matrícula | Consultor/Webhook | Pré-Matriculado | Sim (Pré-Mat) |
| CPF | cpf | Texto | Contato | N/A | Identificação para deduplicação e integração com gateway de pagamento | Consultor | Follow Up/Pré-Mat | Sim (Pré-Mat) |
| UTM_Source | utm_source | Texto | Lead | N/A | Parâmetro UTM de origem para rastreamento de campanha | Sistema | Novo Lead | Não |
| UTM_Medium | utm_medium | Texto | Lead | N/A | Parâmetro UTM de mídia | Sistema | Novo Lead | Não |
| UTM_Campaign | utm_campaign | Texto | Lead | N/A | Parâmetro UTM de campanha | Sistema | Novo Lead | Não |

## TAGS

### TAGS - PARA CRIAÇÃO NO KOMMO

| TAG | COR SUGERIDA | APLICADA POR | ETAPA DE APLICAÇÃO | FINALIDADE | CONDIÇÃO PARA APLICAR | CONDIÇÃO PARA REMOVER |
| --- | --- | --- | --- | --- | --- | --- |
| [VALIDAR+] | Verde | Bot Triagem | Triagem | Lead com experiência profissional, busca certificação por competência. | Resposta A na Pergunta de Ouro. | Nunca (tag permanente). |
| [CAMINHO_TECNICO] | Azul | Bot Triagem | Triagem | Lead sem experiência, quer curso regular. | Resposta B na Pergunta de Ouro. | Nunca (tag permanente). |

## PRODUTOS

### CATALOGO DE PRODUTOS - MATRICULA EAD

| CODIGO | NOME DO CURSO | ESCOLA | TIPO | CARGA HORARIA | DURACAO | MODALIDADE | PRECO DE (R$) | PRECO POR (R$) | PARCELA 12X (R$) | GRUPO/AREA | OBSERVACOES |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAT001 | SUPLETIVO EJA | MATRICULA EAD | SUPLETIVO |   |   | EAD |   |   |   | EDUCACAO | VERIFICAR PRECO NO SITE |
| MAT002 | ESP. TECNICA EM GEORREFERENCIAMENTO | MATRICULA EAD | ESPECIALIZACAO | 600H | 6 MESES | EAD |   |   |   | GEOCIENCIAS | VERIFICAR PRECO |
| MAT003 | TECNICO EM ELETROELETRONICA | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 2999.9 | 1744.36 | 159.9 | ELETRICA/ELETRONICA |   |
| MAT004 | TECNICO EM ACUCAR E ALCOOL | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 2900 | 1744.36 | 159.9 | INDUSTRIA |   |
| MAT005 | TECNICO EM ADMINISTRACAO | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 2900 | 1744.36 | 159.9 | GESTAO |   |
| MAT006 | TECNICO EM AGRICULTURA | MATRICULA EAD | CURSO TECNICO | 1760H | 6 MESES | EAD | 3900 | 2337.42 | 214.26 | AGRO |   |
| MAT007 | TECNICO EM AGRIMENSURA | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 3759.8 | 2399.9 | 219.99 | GEOCIENCIAS |   |
| MAT008 | TECNICO EM AGROPECUARIA | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 3900 | 2399.9 | 219.99 | AGRO |   |
| MAT009 | TECNICO EM CONTABILIDADE | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 1999.9 | 1744.36 | 159.9 | GESTAO |   |
| MAT010 | TECNICO EM EDIFICACOES | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 2699.9 | 1744.36 | 159.9 | CONSTRUCAO |   |
| MAT011 | TECNICO EM ELETROMECANICA | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 3850 | 2399.9 | 219.99 | ELETRICA/MECANICA |   |
| MAT012 | TECNICO EM ELETRONICA | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 3200 | 1744.36 | 159.9 | ELETRONICA |   |
| MAT013 | TECNICO EM ELETROTECNICA | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 3200 | 1744.36 | 159.9 | ELETRICA |   |
| MAT014 | TECNICO EM MECANICA INDUSTRIAL | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 3999 | 2399.9 | 219.99 | MECANICA |   |
| MAT015 | TECNICO EM MEIO AMBIENTE | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 2499 | 1744.36 | 159.9 | AMBIENTAL |   |
| MAT016 | TECNICO EM MINERACAO | MATRICULA EAD | CURSO TECNICO | 1680H | 6 MESES | EAD | 3999 | 2399.9 | 219.99 | MINERACAO |   |
| MAT017 | TECNICO EM PETROLEO E GAS | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD | 2900 | 1744.36 | 159.9 | ENERGIA | PRECO INCOMPLETO NO SITE - VERIFICAR |
| MAT018 | TECNICO EM QUIMICA | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD |   |   |   | QUIMICA | VERIFICAR PRECO NO SITE |
| MAT019 | TECNICO EM SECRETARIO ESCOLAR | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD |   |   |   | EDUCACAO | VERIFICAR PRECO |
| MAT020 | TECNICO EM SEGURANCA DO TRABALHO | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD |   |   |   | SEGURANCA | VERIFICAR PRECO |
| MAT021 | TECNICO EM TELECOMUNICACOES | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD |   |   |   | TELECOM | VERIFICAR PRECO |
| MAT022 | TECNICO EM TTI | MATRICULA EAD | CURSO TECNICO | 1200H | 6 MESES | EAD |   |   |   | TRANSPORTES | VERIFICAR PRECO |
| CATALOGO DE PRODUTOS - INEPROTEC |   |   |   |   |   |   |   |   |   |   |   |
| INEP001 | TECNICO EM AGRIMENSURA | INEPROTEC | CURSO TECNICO | 1200H | 6 MESES | EAD | 3600 | 2508 | 239.39 | GEOCIENCIAS | CRT/CFTA |
| INEP002 | TECNICO EM ELETROTECNICA | INEPROTEC | CURSO TECNICO | 1200H | 6 MESES | EAD | 3200 | 2071.64 | 189.9 | ELETRICA | CRT |
| INEP003 | ESP. EM GEORREFERENCIAMENTO | INEPROTEC | ESPECIALIZACAO | 600H | 6 MESES | EAD | 2790.9 | 1526.18 | 139.9 | GEOCIENCIAS | CRT/CFTA |

## BOTS DE AUTOMAÇÃO

### BOTS (SALESBOT) - FLUXOS DETALHADOS PARA DESENVOLVIMENTO

| NOME DO BOT | ETAPA | GATILHO | OBJETIVO | PASSO | AÇÃO DO BOT | RESPOSTA ESPERADA | PRÓXIMA AÇÃO/RAMO | EXCEÇÃO/FALLBACK | HANDOFF HUMANO | OBSERVAÇÕES |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BOT_TRIAGEM_IA - Qualificação Automática com IA Ativa |   |   |   |   |   |   |   |   |   |   |
| BOT_TRIAGEM_IA | Triagem e Qualificação | Lead criado em etapa Potenciais (imediatamente) | Qualificar lead automaticamente, coletar dados e classificar perfil antes de distribuir. | 1 | Enviar msg boas-vindas personalizada por TAG | — | Ir para passo 2. | — | — | Usar placeholder {{origin}} para personalizar |
| BOT_TRIAGEM_IA |   |   |   | 2 | BOT PARA LEADS SEM TAG CONFIGURADA 'Para direcionar seu atendimento, me confirme: [A] Já trabalho na área e quero apenas o diploma [B] Quero começar a estudar do zero' | A ou B (texto ou botão) | Se A → passo 3A Se B → passo 3B Outro → passo 2F | — | — | Verificar: botões WhatsApp (limitação Kommo) |
| BOT_TRIAGEM_IA |   |   |   | 2F | FALLBACK: 'Não entendi 😅 Pode digitar apenas A ou B?' | A ou B | Se 2 falhas → passo 4 (handoff sem tag) | 2ª falha → handoff humano | Distribuir sem classificação | Marcar tag [BOT_INCOMPLETO] |
| BOT_TRIAGEM_IA |   |   |   | 3A | AÇÕES: 1) set_tag [VALIDAR+] 2) set_custom_fields Perfil_Lead=VALIDAR+ 3) Msg: 'Perfeito! Vou te conectar com nosso Analista de Documentação.' | — | Ir para passo 4. | — | — | IA pode fazer pré-check documental aqui |
| BOT_TRIAGEM_IA |   |   |   | 3B | AÇÕES: 1) set_tag [CAMINHO_TECNICO] 2) set_custom_fields Perfil_Lead=CAMINHO TÉCNICO 3) Msg: 'Ótimo! Vou te conectar com nosso Orientador de Carreira.' | — | Ir para passo 4. | — | — |   |
| BOT_TRIAGEM_IA |   |   |   | 4 | DISTRIBUIÇÃO + HANDOFF: 1) Msg: 'Um especialista vai te atender agora! 🚀' 2) Distribuir Round Robin (consultores online) 3) change_status → Follow Up Ativo 4) set_tag [BOT_COMPLETO] | — | Encerrar bot. | Se nenhum consultor online → msg 'Nosso time te responde em até 10 min' | Lead distribuído ao consultor |   |
| BOT_COBRANCA_PGTO - Cobrança Automática de Pagamento |   |   |   |   |   |   |   |   |   |   |
| BOT_COBRANCA_PGTO | Pré-Matriculado | Lead movido para etapa (imediatamente) | Automatizar cobrança de pagamento nos primeiros 5 dias. | 1 | VERIFICAR PAGAMENTO: Condicional: Status_Pagamento = Pago? Se sim → Encerrar (AUT-14 cuida) Se não → Passo 2 | — | Status != Pago → passo 2 | — | — |   |
| BOT_COBRANCA_PGTO |   |   |   | 2 | DIA 1 - WPP: 'Oi {{nome}}, seu link de pagamento vence hoje às 18h: {{link_pagamento}} Qualquer dúvida, estamos aqui!' | Lead pode responder | Se responde → notificar consultor + pausar Se não → passo 3 (D2) | — | Lead responde → consultor assume | Template Meta: TPL_COBR_DIA1 |
| BOT_COBRANCA_PGTO |   |   |   | 3 | DIA 2 - WPP: '{{nome}}, notamos que o pagamento não foi concluído. Quer alterar a data de vencimento? Estamos aqui para ajudar.' | Sim/Não ou texto | Se responde → notificar consultor Se não → passo 4 (D5) | — | Consultor negocia nova data | Template Meta: TPL_COBR_DIA2 |
| BOT_COBRANCA_PGTO |   |   |   | 4 | DIA 5 - WPP: '{{nome}}, último aviso: sua vaga está reservada até amanhã. Não perca esta oportunidade!' | — | Se responde → consultor Se não → passo 5 (D6) | — | — | Template Meta: TPL_COBR_DIA5 |
| BOT_COBRANCA_PGTO |   |   |   | 5 | DIA 6 - AÇÕES: 1) set_tag [INADIMPLENTE] 2) change_status → Lead Sem Resposta 3) set_tag [ORIGEM_PREMATRICULA] | — | Encerrar bot. | — | — | Lead entra na AUT-11 automaticamente |
| BOT_REENGAJAMENTO - Sequência Automática Sem Resposta |   |   |   |   |   |   |   |   |   |   |
| BOT_REENGAJAMENTO | Lead Sem Resposta | Lead movido para etapa | Substituir tentativas manuais AT-020 a AT-033. | 1 | CLASSIFICAR POR TAG: - [ORIGEM_FOLLOWUP] → ramo A - [ORIGEM_POS_VALOR] → ramo B - [ORIGEM_PREMATRICULA] → ramo C | — | Ramo A/B/C | Sem tag → ramo A (padrão) | — |   |
| BOT_REENGAJAMENTO |   |   |   | 2 | DIA 5 - TENTATIVA 1: Ramo A: '{{nome}}, ainda tem interesse no curso {{curso}}?' Ramo B: '{{nome}}, temos condições especiais este mês!' Ramo C: '{{nome}}, sua matrícula ainda está pendente.' | Resposta do lead | Se responde → passo 5 (parar + handoff) Se não → passo 3 | — | — | set_custom_fields Tentativa_SR=1 |
| BOT_REENGAJAMENTO |   |   |   | 3 | DIA 12 - TENTATIVA 2: Msg com gatilho emocional/prova social: 'Mais de 3.000 alunos já se formaram conosco. O que te impede de começar?' | Resposta | Se responde → passo 5 Se não → passo 4 | — | — | set_custom_fields Tentativa_SR=2 |
| BOT_REENGAJAMENTO |   |   |   | 4 | DIA 22 - TENTATIVA 3 (ÚLTIMA): 'Última mensagem: estamos encerrando seu atendimento. Se mudar de ideia, é só responder.' AÇÕES: - Se tag [ORIGEM_POS_VALOR] → move Neg. Personalizada - Demais → Criar tarefa 'Perder oportunidade' | — | Encerrar bot. | — | Tarefa para consultor registrar objeção | set_custom_fields Tentativa_SR=3 |
| BOT_REENGAJAMENTO |   |   |   | 5 | LEAD RESPONDEU: 1) Parar sequência 2) set_tag [RESGATADO] 3) Notificar consultor (push) 4) change_status → Follow Up Ativo | — | Encerrar bot. | — | Consultor assume imediatamente | Prioridade alta na fila |

## CADASTRO DE USUÁRIOS

### CADASTRO DE USUÁRIOS E PERMISSÕES

| SETOR | PERFIL KOMMO | NOME | E-MAIL | PERMISSÕES | FUNIS COM ACESSO | OBSERVAÇÕES |
| --- | --- | --- | --- | --- | --- | --- |
| Comercial | Consultor | (A preencher) | (A preencher) | Leads próprios. Etapas 2-7. Não move para Etapa 1. Não exclui. | MAT + INEP Vendas | Round Robin distribui leads |

## INTEGRAÇÕES

### CATALOGO DE INTEGRAÇOES

| NOME INTEGRAÇAO | LOCAL | STATUS |
| --- | --- | --- |
| WHATSAPP | KOMMO | PENDENTE |
| INSTAGRAM |   |   |
| FACEBOOK |   |   |
| GOOGLE |   |   |
| AGENTE KWID |   |   |
| REPORTEI |   |   |
