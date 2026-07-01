# 🚀 To-Do API — Dockerized REST API with Automated CI/CD to AWS

![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/Cloud-AWS%20EC2-FF9900?logo=amazonaws&logoColor=white)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A lightweight REST API for managing tasks — built as an end-to-end **DevOps** project
demonstrating **containerization**, **Infrastructure automation**, and a fully
**automated CI/CD pipeline** deploying to **AWS Cloud**.

> Push to `main` → GitHub Actions builds & deploys automatically → live on AWS EC2 in under a minute. Zero manual steps.

---

## 📐 Architecture
<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#4a5568"/>
    </marker>
  </defs>

  <rect x="0" y="0" width="1000" height="480" fill="#ffffff"/>

  <text x="500" y="40" text-anchor="middle" font-size="22" font-weight="700" fill="#1a202c">To-Do API — CI/CD Pipeline Architecture</text>
  <text x="500" y="64" text-anchor="middle" font-size="13" fill="#718096">Push to main → automated build → automated deploy → live on AWS</text>

  <!-- Step 1: Developer -->
  <g>
    <rect x="30" y="150" width="150" height="100" rx="10" fill="#ebf8ff" stroke="#3182ce" stroke-width="2"/>
    <text x="105" y="190" text-anchor="middle" font-size="30">💻</text>
    <text x="105" y="220" text-anchor="middle" font-size="14" font-weight="600" fill="#2c5282">Developer</text>
    <text x="105" y="238" text-anchor="middle" font-size="11" fill="#4a5568">git push origin main</text>
  </g>

  <!-- Arrow 1 -->
  <line x1="180" y1="200" x2="238" y2="200" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Step 2: GitHub -->
  <g>
    <rect x="240" y="150" width="150" height="100" rx="10" fill="#f7fafc" stroke="#2d3748" stroke-width="2"/>
    <text x="315" y="190" text-anchor="middle" font-size="30">🐙</text>
    <text x="315" y="220" text-anchor="middle" font-size="14" font-weight="600" fill="#1a202c">GitHub</text>
    <text x="315" y="238" text-anchor="middle" font-size="11" fill="#4a5568">Repo: todo-api</text>
  </g>

  <!-- Arrow 2 -->
  <line x1="390" y1="200" x2="448" y2="200" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="419" y="190" text-anchor="middle" font-size="10" fill="#718096">triggers</text>

  <!-- Step 3: GitHub Actions -->
  <g>
    <rect x="450" y="130" width="170" height="140" rx="10" fill="#f0fff4" stroke="#38a169" stroke-width="2"/>
    <text x="535" y="168" text-anchor="middle" font-size="30">⚙️</text>
    <text x="535" y="196" text-anchor="middle" font-size="14" font-weight="600" fill="#22543d">GitHub Actions</text>
    <text x="535" y="214" text-anchor="middle" font-size="11" fill="#4a5568">1. Checkout code</text>
    <text x="535" y="230" text-anchor="middle" font-size="11" fill="#4a5568">2. SSH into EC2</text>
    <text x="535" y="246" text-anchor="middle" font-size="11" fill="#4a5568">3. Run deploy script</text>
  </g>

  <!-- Arrow 3 -->
  <line x1="620" y1="200" x2="678" y2="200" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="649" y="190" text-anchor="middle" font-size="10" fill="#718096">SSH</text>

  <!-- Step 4: AWS EC2 -->
  <g>
    <rect x="680" y="110" width="290" height="220" rx="10" fill="#fffaf0" stroke="#dd6b20" stroke-width="2"/>
    <text x="825" y="138" text-anchor="middle" font-size="14" font-weight="700" fill="#7b341e">AWS EC2 Instance</text>

    <!-- Docker container inside EC2 -->
    <rect x="710" y="155" width="230" height="140" rx="8" fill="#ebf8ff" stroke="#3182ce" stroke-width="2" stroke-dasharray="4,3"/>
    <text x="825" y="178" text-anchor="middle" font-size="12" font-weight="600" fill="#2c5282">🐳 Docker Container</text>

    <rect x="730" y="192" width="190" height="80" rx="6" fill="#ffffff" stroke="#a0aec0" stroke-width="1.5"/>
    <text x="825" y="216" text-anchor="middle" font-size="11" font-weight="600" fill="#1a202c">Node.js + Express</text>
    <text x="825" y="234" text-anchor="middle" font-size="10" fill="#4a5568">To-Do API</text>
    <text x="825" y="250" text-anchor="middle" font-size="10" fill="#4a5568">Port 3000</text>

    <text x="825" y="312" text-anchor="middle" font-size="10" fill="#7b341e">git pull → docker build → docker run</text>
  </g>

  <!-- Arrow down to user -->
  <line x1="825" y1="330" x2="825" y2="380" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="880" y="358" text-anchor="middle" font-size="10" fill="#718096">HTTP:3000</text>

  <!-- Step 5: End user -->
  <g>
    <rect x="750" y="385" width="150" height="80" rx="10" fill="#faf5ff" stroke="#805ad5" stroke-width="2"/>
    <text x="825" y="415" text-anchor="middle" font-size="26">🌐</text>
    <text x="825" y="440" text-anchor="middle" font-size="13" font-weight="600" fill="#44337a">Public Internet</text>
    <text x="825" y="456" text-anchor="middle" font-size="10" fill="#4a5568">curl /health → 200 OK</text>
  </g>

</svg>

![Architecture diagram](docs/architecture-diagram.svg)<img width="300" height="144" alt="architecture-diagram" src="https://github.com/user-attachments/assets/598664a7-08dd-422e-94aa-b2d487f6692e" />


**Flow:** Developer pushes code → GitHub triggers a workflow → GitHub Actions connects to AWS EC2 over SSH → pulls the latest code, rebuilds the Docker image, and restarts the container → app is live and publicly reachable.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Application** | Node.js, Express.js |
| **Containerization** | Docker |
| **CI/CD Automation** | GitHub Actions |
| **Cloud Infrastructure** | AWS EC2 (Amazon Linux 2023) |
| **Version Control** | Git & GitHub |
| **Monitoring** | UptimeRobot (uptime checks on `/health`) |

---

## ✨ Features

- ✅ RESTful API with proper HTTP status codes and input validation
- ✅ Containerized with a production-conscious Dockerfile (non-root user, healthcheck, optimized layer caching)
- ✅ Fully automated **CI/CD pipeline** — no manual SSH deploys
- ✅ Secrets managed securely via **GitHub Actions Secrets** (never hardcoded)
- ✅ Deployed and running live on **AWS Cloud infrastructure**
- ✅ Health check endpoint for uptime monitoring and orchestration readiness

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/health` | Health check |
| `GET` | `/tasks` | List all tasks |
| `POST` | `/tasks` | Create a task — `{ "title": "..." }` |
| `PATCH` | `/tasks/:id/complete` | Mark a task as completed |
| `DELETE` | `/tasks/:id` | Delete a task |

---

## 🖥️ Run Locally

```bash
npm install
npm start
```
Server runs on `http://localhost:3000`

## 🐳 Run with Docker

```bash
docker build -t todo-api .
docker run -p 3000:3000 todo-api
```

## ☁️ Deployment

This project auto-deploys to **AWS EC2** via **GitHub Actions** on every push to `main`.
See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the full pipeline definition.

**Pipeline steps:**
1. Checkout latest code
2. SSH into AWS EC2 instance
3. Pull latest changes from `main`
4. Rebuild Docker image
5. Restart container with zero-downtime restart policy (`--restart unless-stopped`)

---

## 📈 What This Project Demonstrates

Built to showcase practical, job-ready **DevOps Engineering** skills:
- Container orchestration fundamentals with **Docker**
- **CI/CD pipeline** design and implementation with **GitHub Actions**
- **Cloud infrastructure** provisioning and deployment on **AWS**
- Secure secrets management and SSH-based deployment automation
- Production practices: health checks, restart policies, and uptime monitoring

---

## 🗺️ Roadmap

- [ ] Add automated tests to the pipeline (CI test stage before deploy)
- [ ] Migrate to Infrastructure as Code with **Terraform**
- [ ] Add a persistent database (PostgreSQL/DynamoDB)
- [ ] Set up centralized logging and metrics (CloudWatch / Grafana)
- [ ] Add HTTPS via a reverse proxy (Nginx + Let's Encrypt)

---

## 📄 License

MIT

---

**Tags:** `devops` `cicd` `docker` `aws` `github-actions` `cloud-computing` `nodejs` `automation` `infrastructure-as-code` `rest-api` `containerization` `sre`
