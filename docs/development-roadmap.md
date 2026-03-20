# Roadmap de Desenvolvimento

Este documento define a ordem técnica de evolução do projeto.

A estratégia segue quatro princípios:

* Construir primeiro o **motor financeiro**
* Expandir a **capacidade analítica**
* Melhorar a **experiência de produto**
* Implementar **monetização**

# Fase 1 — Consolidação do Core Financeiro

> [!IMPORTANT]
> Objetivo: garantir um motor matemático confiável e isolado da interface.

## 1. Padronizar o retorno da simulação

Status atual: **concluído**.

O contrato principal da aplicação agora usa nomes em inglês no core e na tipagem global.

```ts
SimulationResult
```

Campos obrigatórios atualmente usados:

* `finalAmount`
* `totalInvested`
* `totalInterest`
* `growthPercent`
* `monthlyRate`
* `history[]`

Cada item de `history` segue o contrato `SimulationMonth`:

* `month`
* `totalInvested`
* `balance`
* `totalInterest`
* `growthPercent`

Esse tipo é o **contrato central entre o core financeiro e a interface**.

## 2. Consolidar cálculo de crescimento percentual

Status atual: **concluído**.

O crescimento percentual passou a ser calculado definitivamente no core matemático.

Fórmula:

```
growthPercent =
((finalAmount - totalInvested) / totalInvested) * 100
```

O mesmo princípio também é aplicado em cada item do histórico mensal.

## 3. Implementar módulo de imposto

Arquivo sugerido:

```
lib/tax.ts
```

Fluxo de execução planejado:

```
simulateCompoundInterest()
      ↓
resultado bruto
      ↓
applyTax()
      ↓
resultado líquido
```

> [!NOTE]
> O cálculo de imposto não deve ficar dentro do módulo de juros compostos.

# Fase 2 — Expansão Analítica

> [!IMPORTANT]
> Objetivo: permitir análises financeiras mais avançadas.

## 4. Simulação comparativa

Criar função:

```ts
simulateComparison(params)
```

Implementação:

```
simulateCompoundInterest() → cenário A
simulateCompoundInterest() → cenário B
```

Retorno esperado:

```ts
{
  withoutContribution: SimulationResult
  withContribution: SimulationResult
}
```

## 5. Simulação de meta financeira

Arquivo:

```
lib/goal.ts
```

Responsabilidade:

Calcular **aporte necessário para atingir um objetivo financeiro**.

Possível fluxo:

```
calculateRequiredContribution()
        ↓
rodar simulateCompoundInterest()
        ↓
validar resultado
```

# Fase 3 — Camada de Produto

> [!IMPORTANT]
> Objetivo: melhorar experiência do usuário e performance.

## 6. Criar hook central de simulação

Arquivo sugerido:

```
hooks/useSimulation.ts
```

Status atual: **concluído em versão base**.

Responsabilidades:

* gerenciar estado da simulação
* controlar toggles de inflação
* expor resultado consolidado
* evitar re-renderizações desnecessárias

A interface **não deve conter lógica matemática**.

## 7. Otimizações de performance

Implementar e manter:

* memoização de cálculos
* debounce em inputs
* lazy loading de gráficos

Exemplo:

```
dynamic(() => import("./SimulationChart"))
```

# Fase 4 — Camada Estratégica

> [!IMPORTANT]
> Objetivo: transformar o projeto em um produto monetizável.

## 8. Estrutura SEO

Implementar:

* metadata otimizada
* páginas indexáveis
* conteúdo educativo

## 9. Landing page

Criar página focada em conversão contendo:

* proposta de valor
* exemplos de simulação
* benefícios do produto

## 10. Blog

Publicar conteúdo como:

* juros compostos
* planejamento financeiro
* aposentadoria

Objetivo: **aquisição orgânica de usuários**.

## 11. Integração com AdSense

Adicionar monetização por anúncios.

## 12. Modo Premium

Possíveis funcionalidades:

* exportação de simulações
* simulações avançadas
* comparações ilimitadas
* relatórios financeiros

# Ordem Consolidada

* [x] Padronizar `SimulationResult` e `SimulationMonth`
* [x] Finalizar `growthPercent` no core
* [ ] Implementar módulo de imposto
* [ ] Implementar simulação comparativa
* [ ] Implementar simulação de meta
* [x] Criar hook central `useSimulation`
* [x] Otimizar performance base
* [ ] Estrutura SEO
* [ ] Landing page
* [ ] Blog
* [ ] AdSense
* [ ] Modo Premium
