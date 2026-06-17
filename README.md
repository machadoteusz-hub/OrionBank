# 🏦 OrionBank

<p align="center">
  <img src="./frontend/public/images/logo.png" width="180" alt="OrionBank Logo">
</p>

<p align="center">
  <strong>Seu futuro financeiro, agora.</strong>
</p>

---

# 📖 Sobre o Projeto

O OrionBank é uma plataforma bancária digital inspirada em fintechs modernas como Nubank, Inter e C6 Bank.

O sistema foi desenvolvido utilizando arquitetura Full Stack moderna com:

- Frontend em Next.js
- Backend em Spring Boot
- Autenticação JWT
- Spring Security
- Banco de Dados H2 (ambiente local)
- Arquitetura RESTful
- Design focado em experiência bancária digital

---

# 🚀 Objetivos

O OrionBank tem como objetivo oferecer:

✅ Cadastro de usuários

✅ Login seguro

✅ Recuperação de senha

✅ Gestão de saldo

✅ Transferências financeiras

✅ Dashboard financeiro

✅ Investimentos

✅ Perfil do cliente

✅ Segurança baseada em JWT

---

# 🏗️ Arquitetura

```text
OrionBank
│
├── frontend
│   ├── app
│   ├── components
│   ├── services
│   ├── hooks
│   ├── public
│   └── styles
│
└── backend
    ├── controller
    ├── service
    ├── repository
    ├── entity
    ├── dto
    ├── security
    ├── config
    └── resources
```

---

# 🖥️ Frontend

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- TailwindCSS
- Axios
- JWT Decode
- React Hook Form
- Zod

---

## Estrutura

```text
frontend
│
├── app
│   ├── dashboard
│   ├── login
│   ├── register
│   ├── forgot-password
│   ├── investments
│   ├── transfers
│   └── profile
│
├── components
│   ├── layout
│   ├── dashboard
│   ├── auth
│   └── ui
│
├── services
│   ├── api.ts
│   └── auth.ts
│
└── public
    └── images
```

---

# ⚙️ Backend

## Tecnologias

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT
- H2 Database
- Maven
- Lombok

---

## Estrutura

```text
backend
│
└── src
    └── main
        ├── java
        │
        └── com.orionbank
            │
            ├── controller
            ├── dto
            ├── entity
            ├── repository
            ├── service
            ├── security
            ├── config
            ├── exception
            ├── mapper
            └── enums
```

---

# 🔐 Segurança

O OrionBank utiliza:

## Spring Security

Controle de autenticação e autorização.

## JWT

Após o login:

```json
{
  "token": "eyJhbGc..."
}
```

O frontend armazena o token e envia:

```http
Authorization: Bearer TOKEN
```

para acessar rotas protegidas.

---

# 📌 Principais Endpoints

## Autenticação

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "cpf": "12345678901",
  "password": "123456"
}
```

Response:

```json
{
  "token": "jwt-token"
}
```

---

### Cadastro

```http
POST /api/auth/register
```

---

### Recuperação de Senha

```http
POST /api/auth/forgot-password
```

---

## Conta

### Consultar saldo

```http
GET /api/account/balance
```

---

### Extrato

```http
GET /api/account/statement
```

---

## Transferências

### Transferir

```http
POST /api/transfers
```

---

### Histórico

```http
GET /api/transfers
```

---

## Investimentos

### Listar investimentos

```http
GET /api/investments
```

---

### Criar investimento

```http
POST /api/investments
```

---

# 🎨 Design System

## Paleta Oficial

### Roxo Principal

```css
#7C3AED
```

### Roxo Escuro

```css
#4C1D95
```

### Preto

```css
#000000
```

### Branco

```css
#FFFFFF
```

---

# 💾 Banco de Dados

Durante desenvolvimento:

```properties
spring.datasource.url=jdbc:h2:mem:orionbank
```

A migração futura será realizada para:

- PostgreSQL
- Docker
- AWS RDS

---

# 🔮 Roadmap

## Fase 1

- [x] Landing Page
- [x] Navbar
- [x] Login
- [x] Cadastro
- [x] Dashboard

## Fase 2

- [ ] JWT
- [ ] Spring Security
- [ ] Recuperação de Senha
- [ ] Integração Front ↔ Back

## Fase 3

- [ ] PIX
- [ ] Cartão Virtual
- [ ] Investimentos
- [ ] Extrato

## Fase 4

- [ ] PostgreSQL
- [ ] Docker
- [ ] Kubernetes
- [ ] AWS

---

# 👨‍💻 Desenvolvedor

**Ruivo Machado**

Projeto desenvolvido para estudos de arquitetura Full Stack Java + Next.js focado em sistemas financeiros modernos.

---

# 📄 Licença

Projeto para fins educacionais e portfólio.
