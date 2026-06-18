# 🎓 Capstone Project: Antigravity Agentic Workspace Showcase
### 5-Day AI Agents: Intensive Vibe Coding Course with Google (June 15 - 19, 2026)

**Developer:** Abd Alrahaman gz  
**Deployment Link:** [https://61465.github.io/test/](https://61465.github.io/test/)  
**Source Code Repository:** [https://github.com/61465/test.git](https://github.com/61465/test.git)  

---

## 1. Project Overview & Use Case

During the **Google & Kaggle 5-Day AI Agents Intensive Course**, we explored the shift from traditional **"Vibe Coding"** (casual, unvalidated natural language prompting) to **"Agentic Engineering"** (structured, self-correcting autonomous workflows operating inside guarded containers). 

This project is an **Interactive Showcase & Educational Simulator** designed to demonstrate the core architectural paradigms of modern AI Agents. It provides hands-on interactive visualizations for Day 1 and Day 2 concepts, allowing students and developers to simulate agent behaviors, test security boundaries, observe multi-agent orchestration, and inspect protocol payloads in real-time.

---

## 2. Core Features & Architecture

The workspace is split into interactive simulation sections, each modeling a critical pillar of agentic systems:

### 🧩 1. The Harness Containment Paradigm (~90% vs ~10%)
- **Concept:** An LLM engine alone is just ~10% of an agent. The remaining ~90% is the **Harness** (sandbox, context window, security guardrails, evaluation judges).
- **Simulation:** A live 3D rotating viewport representing the Harness bounding box. Users can manipulate parameters (Temperature, Guardrails Strictness, Context Window) and toggle containment rules (Sandbox OS, MCP, Evals) to observe how constraints shape the agent's behavior.

### ⚙️ 2. Self-Correcting Execution Loop
- **Concept:** Autonomous agents operate in a closed feedback loop: **Perceive ➔ Plan ➔ Act ➔ Observe ➔ Iterate**.
- **Simulation:** A step-by-step console emulator displaying real-time execution trace logs as the agent attempts a task, reads errors from a simulated sandbox CLI, and refines its approach.

### 🛡️ 3. Security Sandbox & Vulnerability Audit
- **Concept:** Highlighting the risks of raw vibe coding.
- **Simulation:** A comparison of unvalidated code (e.g., Stripe webhook bypass, SQL query injection) and secure agentic code. Users can run simulated security attacks and trigger the agent to apply cryptographic signature checks and SQL parameters automatically.

### 🎻 4. Conductor vs. Orchestrator Modalities
- **Concept:** Switching between synchronous human-in-the-loop pair programming (**Conductor**) and asynchronous multi-agent delegation (**Orchestrator**).
- **Simulation:** An interactive flowchart that visualizes background task distribution to specialized subagents (Frontend, Backend, and QA testing agents) with real-time log inspector panels.

### 🔌 5. Model Context Protocol (MCP) Hub
- **Concept:** Secure interoperability allowing agents to query databases and filesystem tools via JSON-RPC 2.0 payloads.
- **Simulation:** Discovery and call request/response simulators showcasing raw JSON payload exchanges with simulated external database servers.

### 🎨 6. Agent-to-User Interface (A2UI) Dynamic Builder
- **Concept:** Autonomous UI drafting where the agent writes code and serves it instantly to the user's viewport.
- **Simulation:** A live prompt compilation tool where users can select widgets (weather charts, profile cards, system stats) and watch subagents design, audit, and render the output dynamically.

### 💳 7. Agent Payments Protocol (AP2/UCP) Wallet
- **Concept:** Enabling machines to pay for compute resources and third-party APIs using secure micropayment digital wallets.
- **Simulation:** A digital wallet ledger illustrating automatic billing for standard API calls, manual developer consent prompts for heavy reasoning calls, and cryptographic escrow locks that block budget drain loops.

---

## 3. Technology Stack & Implementation

- **Core Structure:** Semantic HTML5 & CSS Grid.
- **Styling & Effects:** Tailwind CSS (loaded via CDN) with custom 3D perspective overlays, glow states, and micro-animations.
- **Logic:** Vanilla JavaScript for state management, terminal logs output formatting, 3D CSS transforms, and JSON-RPC simulators.
- **Backend:** Node.js & Express server (`server.js`) serving static files.
- **Deployment:** GitHub Pages (deploying the compiled single-page bundle in the `/public` folder).

---

## 4. Run & Deploy Instructions

### Local Execution
1. Clone the repository:
   ```bash
   git clone https://github.com/61465/test.git
   cd test
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Express server on port 8080:
   ```bash
   npm start
   ```
4. Access the workspace at `http://localhost:8080`.

### GitHub Pages Deployment
To build and deploy the project to GitHub Pages:
```bash
# Push public build directory to gh-pages branch
cd public
git init
git remote add origin https://github.com/61465/test.git
git checkout -b gh-pages
git add .
git commit -m "Deploy Capstone Project"
git push origin gh-pages --force
```

---
*Developed as part of the Google & Kaggle Capstone Project Submission for the 5-Day AI Agents Course (June 2026).*
