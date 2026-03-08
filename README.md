# Simulador de Juros Compostos

Aplicação web para simulação de investimentos com juros compostos, aportes mensais e análise de crescimento patrimonial.

O objetivo do projeto é oferecer uma ferramenta simples e visual para planejamento financeiro, permitindo ao usuário compreender como seu patrimônio evolui ao longo do tempo.

---

# Funcionalidades

* Simulação de juros compostos
* Aportes mensais
* Histórico de crescimento mês a mês
* Visualização gráfica da evolução do investimento
* Simulação considerando inflação
* Comparação de cenários de investimento

---

# Tecnologias Utilizadas

| Camada      | Tecnologia           |
| ----------- | -------------------- |
| Framework   | Next.js (App Router) |
| Linguagem   | TypeScript           |
| Estilização | Tailwind CSS         |
| Gráficos    | Recharts             |

---

# Arquitetura do Projeto

A aplicação segue uma arquitetura modular separando domínio financeiro da interface.

```id="a5d1f7"
src/
 ├── app
 ├── components
 ├── hooks
 ├── lib
 └── types
```

Descrição dos diretórios:

| Diretório     | Responsabilidade                         |
| ------------- | ---------------------------------------- |
| `/lib`        | regras de negócio e cálculos financeiros |
| `/hooks`      | gerenciamento de estado da aplicação     |
| `/components` | componentes reutilizáveis da interface   |
| `/types`      | tipagens globais                         |

---

# Motor Financeiro

O core da aplicação implementa:

* conversão correta de taxa anual para mensal
* cálculo de juros compostos
* simulação mês a mês
* cálculo de crescimento percentual
* ajuste por inflação

> [!IMPORTANT]
> Todas as regras matemáticas são isoladas da interface para permitir testes e reutilização.

---

# Executando o Projeto

## Pré-requisitos

* Node.js 18+
* npm ou pnpm

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-repositorio/simulador-juros-compostos.git
```

Entre na pasta do projeto:

```bash
cd simulador-juros-compostos
```

Instale as dependências:

```bash
npm install
```

---

## Rodando em ambiente de desenvolvimento

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:3000
```

---

# Estrutura da Documentação

Documentação técnica disponível em:

```
docs/
```

Arquivos principais:

* `product-overview.md`
* `technical-requirements.md`
* `development-roadmap.md`

---

# Roadmap do Produto

Principais evoluções planejadas:

* simulação comparativa
* cálculo de metas financeiras
* otimizações de performance
* estratégia SEO
* monetização com anúncios
* versão premium

---

# Status do Projeto

> [!NOTE]
> O projeto encontra-se em desenvolvimento ativo.

Próxima etapa:

* consolidação do motor financeiro
* implementação de testes unitários

---

# Licença

Este projeto é distribuído sob a licença MIT.
