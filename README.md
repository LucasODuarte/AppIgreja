

<h1 align="center">AppIgreja ⛪</h1>

<p align="center">
  Aplicativo para engajar a comunidade e organizar atividades da <strong>Igreja Nossa Senhora de Fátima</strong> (Bairro Cidade Nova),
  desenvolvido como projeto social-acadêmico no <strong>CEFET-MG/Timóteo</strong>.
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
```
/src
/app              # navegação / shell
/assets           # fontes, ícones, imagens
/components       # UI reutilizável
/features         # módulos por domínio (events, feed, prayer, groups, auth)
/services         # APIs e repositórios
/styles           # tema e tokens
/utils            # helpers
```

---

## 🚀 Como executar localmente

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

### Variáveis de ambiente

Crie um arquivo `.env` (ou `.env.local`) baseado em `.env.example` com as chaves do backend, push e (opcional) pagamentos.

```dotenv
# -------------------------
# Autenticação / Backend
# -------------------------
AUTH_PROVIDER="<firebase | keycloak | custom>"

# Firebase (exemplo)
FIREBASE_API_KEY="<sua-api-key>"
FIREBASE_AUTH_DOMAIN="<seu-dominio.firebaseapp.com>"
FIREBASE_PROJECT_ID="<seu-project-id>"
FIREBASE_MESSAGING_SENDER_ID="<seu-sender-id>"
FIREBASE_APP_ID="<seu-app-id>"

# -------------------------
# Notificações Push
# -------------------------
PUSH_PROVIDER="<FCM | OneSignal>"
PUSH_KEY="<sua-chave-push>"

# -------------------------
# Pagamentos (opcional)
# -------------------------
PAYMENTS_PROVIDER="<Stripe | MercadoPago>"
PAYMENTS_PUBLIC_KEY="<sua-chave-publica>"
```
---

### Rodando o projeto

```bash
# Ambiente de desenvolvimento
npm run dev
# ou
npm start

# Expo (mobile)
expo start

# Angular (web)
ng serve
```

---

### Build / Distribuição

```bash
# Web / PWA
npm run build

# Mobile (Expo EAS)
eas build -p android
eas build -p ios

# Angular (produção)
ng build --configuration production
```

---

### Qualidade de código

- **Lint:** `npm run lint` — `<ESLint | TSLint>`
- **Formatação:** `npm run format` — **Prettier**
- **Testes unitários:** `npm test` — `<Jest | Vitest | Karma>`
- **Cobertura:** `npm run test:coverage` (se configurado)
- **E2E:** `npm run e2e` — `<Cypress | Detox>`
---

### Segurança & Privacidade

- Nunca comitar chaves e segredos (use `.env` + **Secrets** no CI).
- Regras de segurança no backend (ex.: **Firestore Rules** / **RBAC**).
- Coleta mínima de dados pessoais; adequação à **LGPD**.
- Revisões periódicas de dependências (`npm audit` / `pnpm audit`).

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

Projeto **acadêmico e sem fins lucrativos**, desenvolvido no âmbito da disciplina **Contexto Social** (CEFET-MG/Timóteo).
---

### Contato

- **Instituição beneficiada:** Igreja Nossa Senhora de Fátima — Bairro Cidade Nova
- **Equipe:** Joice Figueiredo · Lucas Oliveira Duarte · Emilly Luiza
- **Repositório:** https://github.com/LucasODuarte/AppIgreja
