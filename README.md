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

![Architecture diagram](docs/architecture-diagram.svg)

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
