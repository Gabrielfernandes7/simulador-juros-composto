# Requisitos Técnicos da Aplicação

Este documento descreve os requisitos técnicos e princípios de arquitetura utilizados no projeto.

# Stack Tecnológica

| Camada      | Tecnologia           |
| ----------- | -------------------- |
| Framework   | Next.js (App Router) |
| Linguagem   | TypeScript           |
| Estilização | Tailwind CSS         |
| Gráficos    | Recharts             |
| Estrutura   | Arquitetura modular  |

> [!IMPORTANT]
> Toda regra de domínio financeiro deve permanecer **independente da interface**.

# Arquitetura do Projeto

Estrutura principal:

```id="2b3a3c"
src/
 ├── app
 ├── components
 ├── hooks
 ├── lib
 └── types
```

Responsabilidade de cada diretório:

| Diretório     | Responsabilidade                              |
| ------------- | --------------------------------------------- |
| `/lib`        | regras de negócio e cálculos financeiros      |
| `/hooks`      | gerenciamento de estado e lógica da interface |
| `/components` | componentes reutilizáveis da UI               |
| `/types`      | tipagens globais da aplicação                 |

> [!NOTE]
> O diretório `/lib` representa o **core matemático da aplicação**.

# Princípios de Engenharia

O projeto segue os seguintes princípios:

### Separação de Responsabilidades

A lógica de cálculo não deve estar na interface.

Fluxo ideal:

```id="3e19b0"
UI
 ↓
Hooks
 ↓
Core financeiro (/lib)
```

### Isolamento do Domínio Financeiro

As regras matemáticas devem ser:

* independentes de React
* testáveis isoladamente
* reutilizáveis

### Tipagem Forte

Todas as funções do core devem possuir:

* tipos explícitos
* contratos bem definidos

Exemplo:

```ts id="3f821a"
function simulateCompound(input: SimulationInput): SimulationResult
```

# Motor de Simulação Financeira

A aplicação possui um motor responsável por calcular o crescimento do investimento.

Responsabilidades do motor:

* converter taxa anual para taxa mensal
* calcular juros compostos
* gerar histórico mês a mês
* calcular crescimento percentual
* retornar um contrato único para o core e a UI

## Conversão de Taxa

Conversão correta de taxa anual para mensal:

```ts id="3a15dd"
monthlyRate = (1 + annualRate)^(1/12) - 1
```

> [!IMPORTANT]
> Nunca dividir taxa anual por 12.
> A conversão deve respeitar juros compostos.

# Estrutura de Resultado da Simulação

Todas as simulações retornam um objeto padronizado em inglês, enquanto as páginas podem documentar ou exibir equivalentes em PT-BR.

Tipo principal:

```ts id="96b63c"
SimulationResult
```

Campos finais usados no código:

| Campo em código | Equivalente PT-BR         | Descrição                                 |
| --------------- | ------------------------- | ----------------------------------------- |
| `finalAmount`   | valor final               | patrimônio acumulado ao final             |
| `totalInvested` | total investido           | soma do capital inicial com os aportes    |
| `totalInterest` | total em juros            | rendimento acumulado                      |
| `growthPercent` | crescimento percentual    | crescimento relativo sobre o investido    |
| `monthlyRate`   | taxa mensal equivalente   | taxa efetiva mensal derivada da taxa anual |
| `history`       | histórico mensal          | coleção de `SimulationMonth`              |

Estrutura de cada item de histórico:

| Campo em código | Equivalente PT-BR      | Descrição                               |
| --------------- | ---------------------- | --------------------------------------- |
| `month`         | mês                    | índice mensal da simulação              |
| `totalInvested` | total investido        | acumulado investido até o mês           |
| `balance`       | saldo total            | patrimônio acumulado no mês             |
| `totalInterest` | juros acumulados       | diferença entre saldo e valor investido |
| `growthPercent` | crescimento percentual | evolução percentual acumulada           |

# Interface da Aplicação

A interface é responsável apenas por **apresentar resultados e coletar inputs**.

Características da UI:

* layout responsivo
* componentes reutilizáveis
* visualização gráfica da simulação
* documentação textual em PT-BR quando necessário

Componentes principais:

| Componente          | Função                              |
| ------------------- | ----------------------------------- |
| `ResultCard`        | exibição dos resultados principais  |
| `SimulationChart`   | gráfico de evolução do investimento |
| `Simulator`         | entrada de dados e composição da UI |

# Visualização de Dados

A evolução do investimento é exibida através de gráficos.

Biblioteca utilizada:

* Recharts

Estratégia de carregamento:

```id="3b5b64"
lazy loading
```

Objetivo:

* reduzir bundle inicial
* melhorar performance

# Testes (Planejado)

> [!WARNING]
> Testes automatizados do core ainda não foram implementados.

Plano de testes:

* testes unitários do motor financeiro
* validação matemática automática
* testes de regressão dos cálculos

Arquivos a serem testados:

```id="8bdbb5"
/lib/compound.ts
/lib/tax.ts
/lib/goal.ts
```

# Critérios de Qualidade

Para garantir consistência matemática:

* funções puras
* ausência de efeitos colaterais
* testes unitários obrigatórios no core
* validação de inputs
