# Controle de atividades do CRM

## MATRICULA EAD

### ATIVIDADES - MANUAIS E GERADAS POR AUTOMAÇÃO

| CÓDIGO | NOME DA ATIVIDADE | ETAPA | TIPO | INSTRUÇÕES DE USO | AÇÃO NO CRM | RESPONSÁVEL | SLA/VENCIMENTO |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MAT-AT-001 | ENVIAR MENSAGEM WPP | Follow Up / Ag. Decisão | Manual | Enviar primeira mensagem WhatsApp ao lead. Usar script por perfil (VALIDAR+ ou CAMINHO TÉCNICO). | Gera automaticamente ao sair do atendimento IA | Consultor | Imediato |
| MAT-AT-002 | AGUARDANDO INFO PARA AVANÇAR | Follow Up Ativo | Manual | Lead aguarda análise de documentação ou certificação por competência. | Gera atividade AT-WP-002 com vencimento 48h. | Consultor | 48h |
| MAT-AT-003 | DECLAROU NÃO TER INTERESSE | Follow Up Ativo | Manual | Lead declarou sem interesse. Registrar objeção obrigatória (exceto valor). | Mover para Matrícula Perdida. Status: Perdido. | Consultor | Imediato |
| MAT-AT-004 | DESQUALIFICADO | Follow Up Ativo | Manual | Lead sem critérios mínimos (idade, escolaridade, cursos gratuitos, fraude). | Mover para Matrícula Perdida. Status: Perdido. Objeção obrigatória. | Consultor | Imediato |
| MAT-AT-005 | COM INTERESSE - PRÓXIMA CAMPANHA | Follow Up Ativo | Manual | Lead com interesse mas prefere aguardar desconto. | Mover para Negociação Personalizada. | Consultor | Imediato |
| MAT-AT-006 | SOLICITOU MATRÍCULA | Follow Up Ativo | Manual | Lead qualificado solicita matrícula. Consultor cadastra no sistema acadêmico, gera contrato e link pagamento. | Mover para Pré-Matriculado. Gera DC-ST-03. | Consultor | Imediato |
| MAT-AT-007 | AG. DECISÃO COM DATA | Aguardando Decisão | Manual | Lead informou data prevista para retorno. Criar atividade com vencimento na data do lead. | Mover para Ag. Decisão. Gera AT-WP-001 na data do lead. | Consultor | Data do lead |
| MAT-AT-008 | AG. DECISÃO SEM DATA | Aguardando Decisão | Manual | Lead sem data específica. Sequência automática 2/5/7/10 dias. | Mover para Ag. Decisão. Ativa AUT-07. | Consultor | 48h (1º) |
| MAT-AT-009 | AÇÃO COMERCIAL | Negociação Personalizada | Manual | Supervisor cria em massa com novas condições/descontos. | Atividade distribuída para consultores. | Supervisor | Definido pelo supervisor |
| MAT-AT-010 | PENDENTE TX MATRÍCULA/CONTRATO | Pré-Matriculado | Manual | Contrato e pagamento enviados. Cobrar pagamento e assinatura. | Gera AT-WP-003 cobrança 24h. | Consultor | 24h |
| MAT-AT-011 | PENDENTE CONTRATO ASSINADO | Pré-Matriculado | Manual | Lead pagou mas não assinou contrato. Cobrança assinatura. | Gera AT-WP-003 cobrança assinatura 24h, depois 2/5/7/10d. | Consultor | 24h |
| MAT-AT-012 | PRIMEIRA PARCELA INADIMPLENTE | Pré-Matriculado | Manual | Lead não pagou na data combinada e não retorna. | Gera AT-WP-003 cobrança 48h. Se não retorna → AT-035. | Consultor | 48h |
| MAT-AT-013 | PENDENTE DE DOCS PESSOAIS | Pré-Matriculado | Manual | Pagamento e contrato OK. Enviar boas-vindas + login AVA. | Mover para Matriculado. Gera DC-WP-01 para Secretaria. | Consultor | Imediato |
| MAT-AT-014 | PRÉ-MATRICULADO ONLINE | Pré-Matriculado | Auto | Leads do formulário site entram direto. Prioridade máxima. | Gera AT-ST-01 + AT-WP-02. Tag [PRE_MATRIC_ONLINE]. | Consultor | Imediato |
| MAT-AT-015 | DESISTIU DE CONTINUAR | Pré-Matriculado | Manual | Lead pré-matriculado declara desistência. | Mover Perdido. Objeção: Pré-Mat Desistente. Gera DC-ST-11 cancelar. | Consultor | Imediato |
| MAT-AT-016 | CANCELAR FATURAS/INATIVAR | Matrícula Perdida | Manual | Cancelar faturas geradas e inativar aluno no sistema. | Atividade de cancelamento. | Financeiro | Imediato |
| MAT-AT-017 | AGENDAR LIGAÇAO |   |   |   |   |   |   |

## INEPROTEC

### ATIVIDADES - MANUAIS E GERADAS POR AUTOMAÇÃO

| CÓDIGO | NOME DA ATIVIDADE | ETAPA | TIPO | INSTRUÇÕES DE USO | AÇÃO NO CRM | RESPONSÁVEL | SLA/VENCIMENTO |
| --- | --- | --- | --- | --- | --- | --- | --- |
| INE-AT-001 | ENVIAR MENSAGEM WPP | Follow Up / Ag. Decisão | Manual | Enviar primeira mensagem WhatsApp ao lead. Usar script por perfil (VALIDAR+ ou CAMINHO TÉCNICO). | Gera automaticamente ao sair do atendimento IA | Consultor | Imediato |
| INE-AT-002 | AGUARDANDO INFO PARA AVANÇAR | Follow Up Ativo | Manual | Lead aguarda análise de documentação ou certificação por competência. | Gera atividade AT-WP-002 com vencimento 48h. | Consultor | 48h |
| INE-AT-003 | DECLAROU NÃO TER INTERESSE | Follow Up Ativo | Manual | Lead declarou sem interesse. Registrar objeção obrigatória (exceto valor). | Mover para Matrícula Perdida. Status: Perdido. | Consultor | Imediato |
| INE-AT-004 | DESQUALIFICADO | Follow Up Ativo | Manual | Lead sem critérios mínimos (idade, escolaridade, cursos gratuitos, fraude). | Mover para Matrícula Perdida. Status: Perdido. Objeção obrigatória. | Consultor | Imediato |
| INE-AT-005 | COM INTERESSE - PRÓXIMA CAMPANHA | Follow Up Ativo | Manual | Lead com interesse mas prefere aguardar desconto. | Mover para Negociação Personalizada. | Consultor | Imediato |
| INE-AT-006 | SOLICITOU MATRÍCULA | Follow Up Ativo | Manual | Lead qualificado solicita matrícula. Consultor cadastra no sistema acadêmico, gera contrato e link pagamento. | Mover para Pré-Matriculado. Gera DC-ST-03. | Consultor | Imediato |
| INE-AT-007 | AG. DECISÃO COM DATA | Aguardando Decisão | Manual | Lead informou data prevista para retorno. Criar atividade com vencimento na data do lead. | Mover para Ag. Decisão. Gera AT-WP-001 na data do lead. | Consultor | Data do lead |
| INE-AT-008 | AG. DECISÃO SEM DATA | Aguardando Decisão | Manual | Lead sem data específica. Sequência automática 2/5/7/10 dias. | Mover para Ag. Decisão. Ativa AUT-07. | Consultor | 48h (1º) |
| INE-AT-009 | AÇÃO COMERCIAL | Negociação Personalizada | Manual | Supervisor cria em massa com novas condições/descontos. | Atividade distribuída para consultores. | Supervisor | Definido pelo supervisor |
| INE-AT-010 | PENDENTE TX MATRÍCULA/CONTRATO | Pré-Matriculado | Manual | Contrato e pagamento enviados. Cobrar pagamento e assinatura. | Gera AT-WP-003 cobrança 24h. | Consultor | 24h |
| INE-AT-011 | PENDENTE CONTRATO ASSINADO | Pré-Matriculado | Manual | Lead pagou mas não assinou contrato. Cobrança assinatura. | Gera AT-WP-003 cobrança assinatura 24h, depois 2/5/7/10d. | Consultor | 24h |
| INE-AT-012 | PRIMEIRA PARCELA INADIMPLENTE | Pré-Matriculado | Manual | Lead não pagou na data combinada e não retorna. | Gera AT-WP-003 cobrança 48h. Se não retorna → AT-035. | Consultor | 48h |
| INE-AT-013 | PENDENTE DE DOCS PESSOAIS | Pré-Matriculado | Manual | Pagamento e contrato OK. Enviar boas-vindas + login AVA. | Mover para Matriculado. Gera DC-WP-01 para Secretaria. | Consultor | Imediato |
| INE-AT-014 | PRÉ-MATRICULADO ONLINE | Pré-Matriculado | Auto | Leads do formulário site entram direto. Prioridade máxima. | Gera AT-ST-01 + AT-WP-02. Tag [PRE_MATRIC_ONLINE]. | Consultor | Imediato |
| INE-AT-015 | DESISTIU DE CONTINUAR | Pré-Matriculado | Manual | Lead pré-matriculado declara desistência. | Mover Perdido. Objeção: Pré-Mat Desistente. Gera DC-ST-11 cancelar. | Consultor | Imediato |
| INE-AT-016 | CANCELAR FATURAS/INATIVAR | Matrícula Perdida | Manual | Cancelar faturas geradas e inativar aluno no sistema. | Atividade de cancelamento. | Financeiro | Imediato |
| INE-AT-017 | AGENDAR LIGAÇAO |   |   |   |   |   |   |
