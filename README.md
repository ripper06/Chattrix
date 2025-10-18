# 💬 Chattrix – Real-time Team Communication Platform

**Chattrix** is a modern, production-grade team communication platform built for seamless **chat, video calls, and team collaboration** — similar to Slack, but crafted with a custom architecture designed for scalability, security, and real-time performance.

---

## 🚀 Overview
Chattrix enables teams to communicate efficiently through **real-time messaging, group video calls, and workspace management**.  
It’s deployed on **Vercel** for frontend and backed by **Node.js microservices** orchestrated with **Docker** and **AWS** for production reliability.

---

## 🧩 Key Features
- 💬 **Real-time Chat:** Instant team and private messaging using **Stream APIs**.  
- 🎥 **Video Calling:** Integrated video conferencing with smooth WebRTC connections.  
- 👥 **Team Management:** Create, manage, and collaborate in workspaces.  
- 📢 **Notifications:** Asynchronous email & app notifications via **RabbitMQ queues**.  
- ⚙️ **Event Automation:** Workflow automation handled with **Inngest**.  
- 🔐 **Error Tracking:** Real-time monitoring and alerting using **Sentry**.  
- ☁️ **Cloud-Ready:** Containerized deployment using **Docker** with **CI/CD pipelines** via GitHub Actions.  

---

## 🏗️ Tech Stack
**Frontend:** React.js, Tailwind CSS, Stream SDK, Clerk Authentication  
**Backend:** Node.js, Express.js, MongoDB, RabbitMQ, Inngest  
**DevOps & Cloud:** Docker, AWS, GitHub Actions  
**Monitoring:** Sentry  
**Deployment:** Vercel (Frontend), AWS (Backend)

---

## 🧠 System Design Highlights
- **Microservices Architecture:** Modular backend with isolated services for chat, call, and notifications.  
- **Queue-based Communication:** RabbitMQ for decoupled email and in-app notification handling.  
- **Event-driven Automation:** Inngest for async workflows and event scheduling.  
- **Scalable Deployment:** Dockerized services deployed on AWS for high availability.  

---

## 🔗 Project Links
| Component | Description | Link |
|------------|-------------|------|
| 🌐 **Frontend (React + Stream)** | Deployed production version on Vercel | [Live App](#) |
| ⚙️ **Backend (Node.js)** | REST APIs and WebSocket services | [GitHub Repo](#) |
| 📩 **Notification Service** | RabbitMQ + Email microservice | [GitHub Repo](#) |

---

## 👨‍💻 Developer
**Jyoti Ranjan Dash**  
Full Stack Developer | Backend Engineer  
📧 [jyotiranjan.pvt@gmail.com](mailto:jyotiranjan.pvt@gmail.com)  
🔗 [GitHub Profile](https://github.com/ripper06)

---

⭐ *Built with performance, reliability, and collaboration in mind.*
