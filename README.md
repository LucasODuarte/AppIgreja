<h1 align="center">AppIgreja ⛪</h1>

<p align="center">
  Aplicativo para engajar a comunidade e organizar atividades da <strong>Igreja Nossa Senhora de Fátima</strong> (Bairro Cidade Nova),
  desenvolvido como projeto social-acadêmico no <strong>CEFET-MG/Timóteo</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-concluído-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/versão-1.0.0-blue" alt="Versão">
</p>


> **Status:** `<MVP em desenvolvimento>`  
> **Plataforma:** `<mobile (Android/iOS) | web (PWA)>`  
> **Stack:** `<ex.: React Native (Expo) + Firebase | Angular + Firebase | Flutter + Supabase>`

---

## 🎯 Objetivo

- Facilitar a comunicação entre membros da comunidade.
- Organizar eventos, escalas e pedidos de oração.
- Promover inclusão digital e engajamento social.

---

## 👥 Equipe

- **Joice Figueiredo** — Desenvolvimento & Coordenação  
- **Lucas Oliveira Duarte** — Desenvolvimento  
- **Emilly Luiza** — Desenvolvimento & Conteúdo

---

## ✨Funcionalidades

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
```
AppIgreja/
      ├─ src/
      │   ├─ app/           # Navegação / shell
      │   ├─ assets/        # Ícones, imagens, fontes
      │   ├─ components/    # UI reutilizável
      │   ├─ features/      # Módulos por domínio (eventos, mural, oração, grupos, auth)
      │   ├─ services/      # APIs e repositórios
      │   ├─ styles/        # Tema e tokens
      │   └─ utils/         # Helpers
      ├─ .env.example       # Variáveis de ambiente
      ├─ package.json       # Dependências
      └─ README.md          # Este arquivo
```

---

## ▶️ Executar

### Pré-requisitos
- **Node.js** `>= 18` e **npm**/**yarn**/**pnpm**  
- `<Expo CLI | Angular CLI | Flutter SDK>` (se aplicado)

### Instalação
```bash
git clone https://github.com/LucasODuarte/AppIgreja.git
cd AppIgreja
npm install
```
---

### Rodando o projeto

```bash
# Ambiente de desenvolvimento
npm start

# Expo (mobile)
expo start

# Web (PWA)
npm run dev

```
---

## 🧩 Lógica em alto nível

- Autenticação: Firebase Auth (e-mail, Google, Microsoft).
- Eventos: CRUD integrado ao Firestore.
- Notificações: Push via FCM ou OneSignal.
- Interface: React Native + Design System responsivo.
- 
---

##🛠️ Desenvolvimento

- Recomendado usar VS Code com ESLint e Prettier.
- Boas práticas: SOLID, Clean Architecture, lint + format.

---

## ✅ Status do projeto
MVP em desenvolvimento, com espaço para melhorias:

- Escala de ministérios.
- Relatórios de engajamento.
- Modo offline.

---
### Roadmap

- [ ] Calendário com recorrência e lembretes
- [ ] Moderação de conteúdo (mural/comunicados)
- [ ] Escala de ministérios com confirmação de presença
- [ ] Relatórios de engajamento (eventos, grupos)
- [ ] Modo offline (cache seletivo)
- [ ] Acessibilidade (WCAG AA)

---
### Contribuição

```bash
# Passos para contribuir
git checkout -b feat/minha-feature
npm run lint && npm test
git commit -m "feat: descreva sua mudança"
git push origin feat/minha-feature
```

---

### Licença

> Projeto **acadêmico e sem fins lucrativos**, desenvolvido no âmbito da disciplina **Contexto Social** (CEFET-MG/Timóteo).

---

### Contato

- **Instituição beneficiada:** Igreja Nossa Senhora de Fátima — Bairro Cidade Nova
- **Equipe:** Joice Figueiredo · Lucas Oliveira Duarte · Emilly Luiza
- **Repositório:** https://github.com/LucasODuarte/AppIgreja
