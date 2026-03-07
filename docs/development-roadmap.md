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

Criar o contrato principal da aplicação.

```ts
SimulationResult
```

Campos obrigatórios:

* valorFinal
* totalInvestido
* totalJuros
* crescimentoPercentual
* historicoMensal[]
* valorFinalReal (quando inflação ativa)

Esse tipo será o **contrato central entre o core financeiro e a interface**.


## 2. Consolidar cálculo de crescimento percentual

Implementar definitivamente no core matemático.

Fórmula:

```
crescimentoPercentual =
(valorFinal - totalInvestido) / totalInvestido
```

Este cálculo deve estar **isolado da UI**.

## 3. Implementar módulo de imposto

Arquivo sugerido:

```
lib/tax.ts
```

Fluxo de execução:

```
simulateCompound()
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
simulateCompound() → cenário A
simulateCompound() → cenário B
```

Retorno esperado:

```ts
{
  semAporte: SimulationResult
  comAporte: SimulationResult
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
calcularAporteNecessario()
        ↓
rodar simulateCompound()
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

Responsabilidades:

* gerenciar estado da simulação
* controlar toggles (inflação / imposto)
* expor resultado consolidado
* evitar re-renderizações desnecessárias

A interface **não deve conter lógica matemática**.

## 7. Otimizações de performance

Implementar:

* memoização de cálculos
* debounce em inputs
* lazy loading de gráficos

Exemplo:

```
dynamic(() => import("Recharts"))
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

* [ ] Padronizar `SimulationResult`
* [ ] Finalizar crescimento percentual
* [ ] Implementar módulo de imposto
* [ ] Implementar simulação comparativa
* [ ] Implementar simulação de meta
* [ ] Criar hook central `useSimulation`
* [ ] Otimizar performance
* [ ] Estrutura SEO
* [ ] Landing page
* [ ] Blog
* [ ] AdSense
* [ ] Modo Premium
