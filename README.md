

<h1 align="center">AppIgreja ⛪</h1>

<p align="center">
  Aplicativo para engajar a comunidade e organizar atividades da <strong>Igreja Nossa Senhora de Fátima</strong> (Bairro Cidade Nova),
  desenvolvido como projeto social-acadêmico no <strong>CEFET-MG/Timóteo</strong>.
</p>

<p align="center">
  <!-- Badges principais (ajuste os links do repositório se necessário) -->
  <a href="https://github.com/LucasODuarte/AppIgreja/actions">
    <img alt="CI status" src="https://img.shields.io/github/actions/workflow/status/LucasODuarte/AppIgreja/ci.yml?label=CI&logo=githubactions&logoColor=white">
  </a>
  <a href="https://github.com/LucasODuarte/AppIgreja/issues">
    <img alt="Issues abertas" src="https://img.shields.io/github/issues/LucasODuarte/AppIgreja?logo=github">
  </a>
  <a href="https://github.com/LucasODuarte/AppIgreja/pulls">
    <img alt="PRs abertos" src="https://img.shields.io/github/issues-pr/LucasODuarte/AppIgreja?logo=github">
  </a>
  <img alt="Último commit" src="https://img.shields.io/github/last-commit/LucasODuarte/AppIgreja?logo=git&label=last%20commit">
  <img alt="Tamanho do repo" src="https://img.shields.io/github/repo-size/LucasODuarte/AppIgreja?label=repo%20size">
  <img alt="License" src="https://img.shields.io/badge/license-Academic%20/%20No%20Profit-blue">
  <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen">
  <img alt="Code style Prettier" src="https://img.shields.io/badge/code%20style-Prettier-ff69b4?logo=prettier">
  <img alt="Commitizen" src="https://img.shields.io/badge/commitizen-friendly-orange">
</p>

---

## 🧭 Sobre o projeto

O **AppIgreja** é um aplicativo criado para apoiar a comunicação, a organização de eventos e a gestão de grupos da **Igreja Nossa Senhora de Fátima**.  
Nasceu no contexto da disciplina **Contexto Social (CEFET-MG/Timóteo)**, com propósito **não lucrativo**, promovendo impacto social real por meio de tecnologia.

> **Status:** `<MVP em desenvolvimento>`  
> **Plataforma:** `<mobile (Android/iOS) | web (PWA)>`  
> **Stack:** `<ex.: React Native (Expo) + Firebase | Angular + Firebase | Flutter + Supabase>`

---

## 👥 Equipe

- **Joice Figueiredo** — Desenvolvimento & Coordenação  
- **Lucas Oliveira Duarte** — Desenvolvimento  
- **Emilly Luiza** — Desenvolvimento & Conteúdo

---

## ✨ Principais funcionalidades

- 📅 **Eventos e agenda:** criação, listagem, inscrições e lembretes  
- 📰 **Mural de comunicados:** avisos e notícias para a comunidade  
- 🙏 **Pedidos de oração:** envio e acompanhamento  
- 👥 **Grupos/Ministérios:** organização de equipes e escalas  
- 🔔 **Notificações:** push/alertas de atividades e mudanças de agenda  
- 🔐 **Autenticação:** `<e-mail/senha | Google | Microsoft | anônima>`

> Adapte a lista conforme as features já implementadas.

---

## 🧱 Arquitetura & Padrões

- **Camadas por domínio** (feature-first)  
- **Gerenciamento de estado:** `<Redux Toolkit | Context API | NgRx | Provider>`  
- **Services/Repositories:** abstração de APIs (ex.: Auth, Database, Storage, Notifications)  
- **Design System:** `<tokens de cor, tipografia, spacing>`  
- **Boas práticas:** **SOLID**, **Clean Architecture** (quando aplicável), **lint + format**

**Estrutura de pastas (exemplo):**

