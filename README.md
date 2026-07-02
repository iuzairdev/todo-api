# 🚀 To-Do API — Multi-Container (API + DB) with Automated CI/CD to AWS

![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker%20%7C%20Compose-2496ED?logo=docker&logoColor=white)
![Database](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/Cloud-AWS%20EC2-FF9900?logo=amazonaws&logoColor=white)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?logo=nodedotjs&logoColor=white)

A production-ready, multi-container REST API for managing tasks. This repository tracks an end-to-end **DevOps** progression demonstrating container orchestration, persistent databases, networking, and fully **automated CI/CD pipelines** deploying to **AWS Cloud**.

> **Day 1:** Stateless App + Docker + GitHub Actions + AWS EC2
> **Day 2:** Multi-Container Setup + PostgreSQL + Docker Compose + Volumes & Networking

---

## 📐 Architecture

On every `git push`, the architecture dynamically provisions and manages isolated application and storage tiers within AWS.

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#4a5568"/>
    </marker>
  </defs>

  <rect x="0" y="0" width="1000" height="480" fill="#ffffff"/>

  <text x="500" y="40" text-anchor="middle" font-size="22" font-weight="700" fill="#1a202c">To-Do API — Multi-Container CI/CD Architecture</text>
  <text x="500" y="64" text-anchor="middle" font-size="13" fill="#718096">Automated build & multi-container orchestration with Docker Compose</text>

  <g>
    <rect x="20" y="150" width="140" height="100" rx="10" fill="#ebf8ff" stroke="#3182ce" stroke-width="2"/>
    <text x="90" y="190" text-anchor="middle" font-size="30">💻</text>
    <text x="90" y="220" text-anchor="middle" font-size="14" font-weight="600" fill="#2c5282">Developer</text>
    <text x="90" y="238" text-anchor="middle" font-size="11" fill="#4a5568">git push</text>
  </g>

  <line x1="160" y1="200" x2="208" y2="200" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"/>

  <g>
    <rect x="210" y="150" width="150" height="100" rx="10" fill="#f0fff4" stroke="#38a169" stroke-width="2"/>
    <text x="285" y="190" text-anchor="middle" font-size="30">⚙️</text>
    <text x="285" y="220" text-anchor="middle" font-size="14" font-weight="600" fill="#22543d">GitHub Actions</text>
    <text x="285" y="238" text-anchor="middle" font-size="11" fill="#4a5568">Trigger SSH Deploy</text>
  </g>

  <line x1="360" y1="200" x2="418" y2="200" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="389" y="190" text-anchor="middle" font-size="10" fill="#718096">SSH</text>

  <g>
    <rect x="420" y="110" width="550" height="260" rx="10" fill="#fffaf0" stroke="#dd6b20" stroke-width="2"/>
    <text x="695" y="135" text-anchor="middle" font-size="15" font-weight="700" fill="#7b341e">AWS EC2 Instance (Docker Compose Engine)</text>

    <rect x="445" y="160" width="500" height="190" rx="8" fill="#f7fafc" stroke="#4a5568" stroke-width="1.5" stroke-dasharray="6,4"/>
    <text x="460" y="180" font-size="11" font-weight="bold" fill="#4a5568">🔒 Isolated Bridge Network</text>

    <rect x="460" y="200" width="180" height="120" rx="6" fill="#ebf8ff" stroke="#3182ce" stroke-width="2"/>
    <text x="550" y="230" text-anchor="middle" font-size="24">🐳</text>
    <text x="550" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="#2c5282">Node.js API</text>
    <text x="550" y="275" text-anchor="middle" font-size="10" fill="#4a5568">Internal Port 3000</text>
    <text x="550" y="290" text-anchor="middle" font-size="9" fill="#e53e3e">depends_on: db</text>

    <line x1="640" y1="260" x2="730" y2="260" stroke="#2b6cb0" stroke-width="2" stroke-dasharray="2,2"/>
    
    <rect x="740" y="200" width="180" height="120" rx="6" fill="#ebf4ff" stroke="#4269e1" stroke-width="2"/>
    <text x="830" y="230" text-anchor="middle" font-size="24">💾</text>
    <text x="830" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="#1a365d">PostgreSQL DB</text>
    <text x="830" y="275" text-anchor="middle" font-size="10" fill="#4a5568">Internal Port 5432</text>
    <text x="830" y="295" text-anchor="middle" font-size="9" fill="#2b6cb0">📁 Named Volume Mount</text>
  </g>

  <line x1="550" y1="410" x2="550" y2="332" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="610" y="380" text-anchor="middle" font-size="11" fill="#718096">Public HTTP (Port 80->3000)</text>

  <g>
    <rect x="460" y="410" width="180" height="50" rx="8" fill="#faf5ff" stroke="#805ad5" stroke-width="2"/>
    <text x="550" y="440" text-anchor="middle" font-size="13" font-weight="600" fill="#44337a">🌐 Public Internet Clients</text>
  </g>
</svg>

---

## 🧰 Tech Stack

| Layer | Technology | Key Implementation Details |
|---|---|---|
| **Application Runtime** | Node.js / Express.js | Fixed environment loading, input validation |
| **Database Container** | PostgreSQL | Multi-container link, custom init schemas |
| **Containerization** | Docker & Docker Compose | Multi-stage optimization, healthcheck synchronization |
| **CI/CD Automation** | GitHub Actions | Context-aware actions, automated composition reload |
| **Cloud Infrastructure** | AWS EC2 | Custom security groups, network path constraints |
| **Data Persistence** | Docker Named Volumes | Decoupled local file structure mappings |

---

## ✨ Features Added / Maintained

- ✅ **Multi-Container Orchestration:** Unified provisioning of API server and database container via `docker-compose.yml`.
- ✅ **State Persistence:** Persistent database storage using **Docker Named Volumes** — data remains intact across rebuilds and deployments.
- ✅ **Network Isolation:** Built-in bridge network prevents public external lookups directly hitting the database engine port (`5432`). Only the API container can connect.
- ✅ **Startup Order Control:** Uses dependencies combined with health check parameters (`pg_isready`) preventing the API container from dropping requests prior to full database compilation.
- ✅ **Production Caching:** High-efficiency, multi-stage layout builds to decrease final production target size.

---

## 📡 API Endpoints

All data mutations are persistently tracked on the PostgreSQL runtime volume.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/health` | Core system & DB link availability checks |
| `GET` | `/tasks` | Retrieves all relational database task listings |
| `POST` | `/tasks` | Appends a single structured entry to the DB |
| `PATCH` | `/tasks/:id/complete` | Updates completeness fields |
| `DELETE` | `/tasks/:id` | Drop specified entry id from table |

---

## 🖥️ Local Execution

### Prerequisites
Ensure both **Docker** and **Docker Compose** are active on your system workspace.

### 1. Configure Environment Variables
Create a `.env` file in the root workspace folder:
```env
PORT=3000
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_secure_password
DB_NAME=todo_db
