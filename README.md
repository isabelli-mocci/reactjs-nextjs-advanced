# ⚛️ React JS + Next.js | Estudos Avançados

## 📚 About this Repository

Esse repositório é meu **diário de estudos avançados** no desenvolvimento front-end usando React JS 19 e Next.js 15, baseado no curso atualizado do Luiz Otávio Miranda (Udemy). Aqui documento tudo que aprendo, aplico e experimento — desde hooks avançados, Context API, Web Workers, até autenticação, testes e deploy.  

O objetivo é criar um projeto real, o **Chronos**, que reúne funcionalidades como pomodoro, formulário complexo, upload seguro, rotas dinâmicas, SSR e SSG, para consolidar meus conhecimentos e preparar meu portfólio para o mercado.

---

## 🛠️ Tech Stack

- **Linguagens:** TypeScript, JavaScript  
- **Frameworks & Bibliotecas:** React JS 19, Next.js 15, NestJS (API backend)  
- **Estilo:** Tailwind CSS, Storybook  
- **Testes:** Vitest, React Testing Library, Playwright  
- **Banco de Dados:** PostgreSQL via Drizzle ORM  
- **Autenticação e Segurança:** JWT, validações com Zod, variáveis de ambiente (.env)  
- **Ferramentas de Build e Deploy:** Vite, Vercel, PM2, NGINX  

---

## 🧠 O que estou aprendendo

### 🔹 React JS 19 & Next.js 15
- Server-side Rendering (SSR) e Static Site Generation (SSG)
- Rotas dinâmicas e layouts aninhados com App Router
- Server Actions e APIs com segurança
- Composição de componentes reutilizáveis e estados com `useState`, `useReducer`, Context API
- Criação de formulários com validação usando **Zod**

### 🔹 Estilização moderna  
- **Tailwind CSS** para estilo rápido e responsivo
- Componentização com **Storybook**

### 🔹 Arquitetura & Backend
- Integração com **NestJS** e **Drizzle ORM**
- Clean Architecture com camadas de domínio, aplicação e infraestrutura
- Upload de imagem com segurança e múltiplos ambientes (dev, prod)

### 🔹 Testes automatizados
- Testes de unidade e integração com **Vitest** e **React Testing Library**
- Testes de ponta a ponta com **Playwright**

### 🔹 Boas práticas
- Linting com **ESLint**
- Formatação automática com **Prettier**
- Git Hooks com **Husky**
- Deploy com **PM2**, **NGINX**, **Vercel** e **Netlify**

## 🎯 What I Learned & Applied

- Domínio do **useReducer + Context API** para gerenciar estados globais complexos, melhorando performance e organização.
- Implementação de **Web Workers** para rodar tarefas em background e evitar travamentos na UI.
- Uso avançado do **Next.js Server Actions** para reduzir cargas no client e melhorar segurança.
- Técnicas de autenticação com **JWT**, integração com backend NestJS, e validação de dados com **Zod**.
- Deploy profissional usando **Vercel** e configuração do servidor com **PM2 + NGINX** para ambientes Node.
- Criação e organização da arquitetura seguindo padrões de **Clean Architecture**.

---

## ✅ Features Implemented

- [ ] Pomodoro timer com gerenciamento de estados customizados  
- [ ] Formulário complexo com validações usando Zod  
- [ ] Autenticação JWT com backend NestJS  
- [ ] Upload de imagem com segurança  
- [ ] Rotas dinâmicas e SSR com Next.js  
- [ ] Testes unitários e end-to-end com Vitest e Playwright  
- [ ] Deploy na Vercel com configuração de ambiente  
- [ ] Dashboard administrativo para usuário (em desenvolvimento)  
- [ ] Integração com WebSockets para notificações em tempo real  

---

## 🎥 Demo & Screenshots

Aqui vou adicionar GIFs e vídeos mostrando a aplicação rodando.

---

## 🗂️ Project Structure

```bash
📦 react-next-advanced-course
├── src/
│   ├── app/
│   ├── components/
│   ├── pages/ (quando aplicável)
│   ├── services/
│   ├── tests/
├── public/
├── .storybook/
├── .husky/
├── .env.example
├── drizzle.config.ts
├── tailwind.config.ts
├── vitest.config.ts
└── README.md
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/moccinx/chronos.git
cd chronos
npm install
cp .env.example .env
# Preencha as variáveis de ambiente no .env
npm run dev
```

---

# 💡 Challenges & Personal Growth
Me desafiei a dominar padrões arquiteturais (Clean Architecture) que são novidade pra mim, o que me fez entender a importância de manter o código organizado e testável.

Aprendi a lidar com bugs complexos de sincronização entre front e back, melhorando minha paciência e persistência (e minha habilidade em debug também! 😅).

Consegui evoluir minha leitura de documentação oficial, especialmente com ferramentas novas como Drizzle ORM e Playwright, o que me deixa mais autônoma.

----

## 📬 Author & Contact

Feito com 💜 por [Isabelli Mocci](https://www.instagram.com/moccinx/?hl=pt-br) <br>

[🌐 Portfolio](www.isabellimocci.com) 
| [🐱 GitHub](https://github.com/isabelli-mocci) 
| [💼 LinkedIn](https://linkedin.com.br/in/isabelli-mocci/)
| [📬 E-mail](isabellimocci.tech@gmail.com)