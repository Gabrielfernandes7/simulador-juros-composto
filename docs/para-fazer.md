# Tarefas que podem ser desenvolvidas

Ainda faltam:

• Crescimento percentual total exibido  
• Simulação sem aporte (toggle) 
• Simulação comparativa lado a lado  
• Simulação com imposto (IR)  
• Simulação de meta (“quanto preciso investir para chegar em X?”)

**O que fazer com o nosso projeto sabendo que tudo não pode ficar na mesma página?**

Exemplo: Simulação de meta (“quanto preciso investir para chegar em X?”) não pode ficar na mesma página de
simulação de juros e simulação com IR

3. MONETIZAÇÃO (não iniciado)

Nada implementado ainda:

• Estrutura de layout preparada para AdSense  
• Espaços estratégicos de anúncio  
• Bloco educativo para aumentar tempo de permanência  
• SEO técnico (metadata dinâmica)  
• Páginas específicas (/juros-compostos-anual etc.)

Hoje é produto técnico.  
Ainda não é micro SaaS monetizável.

4. LANDING COMPLETA (não implementada)

Falta:

• Headline forte  
• Subheadline  
• Bloco educativo  
• FAQ  
• Rodapé profissional  
• Estrutura SEO otimizada

Hoje você tem apenas o simulador.


5. DIFERENCIAL DE MERCADO (parcial)

Você já tem:

• Visual premium  
• Cálculo correto  
• Gráfico elegante  
• Inflação

Falta para se diferenciar fortemente:

• Comparação nominal vs real no mesmo gráfico  
• Cenário A vs B  
• Exportação PDF  
• Compartilhamento  
• Conteúdo educativo real

Se quiser seguir a rota mais inteligente para monetização, o próximo passo ideal é:

Implementar crescimento percentual + melhorar UX + preparar layout para AdSense.

Se quiser seguir rota de diferenciação técnica, o próximo passo ideal é:

Comparação Nominal vs Real no mesmo gráfico.

## 1. Crescimento Percentual Total

### Regra

Crescimento percentual deve ser baseado no total investido.

total_investido = capital_inicial + (aporte_mensal × total_meses)

crescimento_percentual =  
((valor_final - total_investido) / total_investido) × 100

### Exibição obrigatória

• Valor final  
• Total investido  
• Juros acumulados  
• Crescimento percentual

Isso aumenta percepção de ganho.

## 2. Simulação sem aporte (Toggle)

### Regra

Se aporte_mensal = 0:

saldo = saldo × (1 + taxa_mensal)

Sem adição mensal.

### Implementação ideal

Toggle boolean:

modoAporte: true | false

Se false → aporte_mensal = 0 internamente  
Não remover campo do form. Apenas desabilitar.

Isso melhora UX e permite comparação futura.

## 3. Simulação Comparativa Lado a Lado

Objetivo: Mostrar impacto do aporte.

### Cenário A

Sem aporte

### Cenário B

Com aporte

Ambos devem rodar a mesma função de cálculo.

Estrutura ideal:

simulateCompound(params)  
→ retorna objeto SimulationResult

Depois:

resultadoSemAporte = simulateCompound({...aporte: 0})  
resultadoComAporte = simulateCompound({...aporte: aporte})

Exibir:

• Dois cards lado a lado  
• Dois gráficos (ou um gráfico com duas linhas)

Regra matemática é a mesma.  
Apenas muda o aporte.
## 4. Simulação com Imposto (IR)

Modelo simples recomendado (MVP):

Aplicar imposto apenas sobre o lucro.

lucro = valor_final - total_investido

valor_liquido = valor_final - (lucro × aliquota)

### Tabela simples inicial (fixa)

Pra começar, pode usar:

15% padrão

Fase avançada (opcional):

Tabela regressiva brasileira:

22.5% até 180 dias  
20% até 360  
17.5% até 720  
15% acima de 720

Mas para micro SaaS inicial, 15% fixo já resolve.

## 5. Simulação de Meta

“Quanto preciso investir para chegar em X?”

Aqui muda a lógica.

Você tem:

meta_valor  
taxa  
tempo

Quer descobrir:

aporte_mensal necessário

### Fórmula matemática

Valor futuro com aportes:

FV = P(1+r)^n + A × [((1+r)^n - 1) / r]

Isolando A:

A =  
(FV - P(1+r)^n) / (((1+r)^n - 1) / r)

Onde:

P = capital inicial  
r = taxa mensal  
n = total meses  
FV = meta

Essa função deve ficar isolada em:

lib/goal.ts

Retorno:

aporteNecessario

# Estrutura Final Recomendada em /lib

compound.ts  
→ simulação base

inflation.ts  
→ ajuste real

tax.ts  
→ cálculo de imposto

goal.ts  
→ cálculo de meta

Todos com funções puras.
# Resultado Esperado Depois de Implementar

Você terá:

✔ Simulação base  
✔ Simulação com inflação  
✔ Simulação comparativa  
✔ Simulação com imposto  
✔ Simulação de meta  
✔ Crescimento percentual

Isso já eleva o projeto de “calculadora” para ferramenta de planejamento.

# O que ainda NÃO é regra de negócio

• UI premium  
• SEO  
• Blog  
• Monetização  
• Testes  
• Landing estruturada

Esses são camadas estratégicas.

Se quiser, próximo passo objetivo:

1. Definir a ordem técnica de implementação
2. Implementar o módulo de imposto
3. Implementar simulação comparativa
4. Implementar meta