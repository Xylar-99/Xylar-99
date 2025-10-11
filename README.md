# 👋 Hello, I'm Abdelbassat

<div align="center">
  
![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=4000&pause=1000&color=00D4FF&center=true&vCenter=true&width=600&lines=Backend+Developer+🚀;1337+Student+🎓;System+Programmer+💻;Problem+Solver+🧩)

[![1337 School](https://img.shields.io/badge/1337_School-000000?style=for-the-badge&logo=42&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Xylar-99)

</div>

---

## 🚀 About Me

**Backend Developer** | **1337 (42 Network) Student** | **Morocco 🇲🇦**

I'm a passionate backend developer studying at **1337 School**, part of the prestigious **42 Network**. I specialize in building robust server-side applications and system programming with a focus on clean, efficient code.

```cpp
class Developer {
public:
    std::string name = "Abdelbassat";
    std::string school = "1337 (42 Network)";
    # Abdelbassat — Backend Developer

    <div align="center">

    ![Header](https://github.com/Xylar-99/Xylar-99/raw/main/.github/assets/header.png)

    [![1337 School](https://img.shields.io/badge/1337_School-000000?style=for-the-badge&logo=42&logoColor=white)](#)
    [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Xylar-99)

    </div>

    ---

    Brief, focused, and practical README tailored for backend engineers. This file highlights your skills, project experience, development setup, architecture patterns, testing, CI/CD and deployment notes so other developers and employers can quickly evaluate and reproduce your work.

    ## Quick Snapshot

    - Role: Backend Developer
    - Location: Morocco 🇲🇦
    - Education: 1337 (42 Network)
    - Primary languages: C, C++, Python, JavaScript/Node.js
    - Key topics: System programming, backend APIs, DevOps (Docker)

    ## About

    I'm Abdelbassat — a backend-focused engineer and 1337 School student who builds robust server-side systems and enjoys low-level systems programming. I aim for clean, testable code and reproducible environments.

    ```cpp
    // Personal signature snippet
    class Developer {
    public:
            std::string name = "Abdelbassat";
            std::vector<std::string> languages = {"C", "C++", "Python", "JavaScript"};
            std::vector<std::string> interests = {"System Programming", "Backend APIs", "DevOps"};
    };
    ```

    ## Tech Stack

    Badges below summarize commonly used tools and platforms. The stack emphasizes backend-friendly tech.

    ![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)
    ![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
    ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
    ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
    ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
    ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
    ![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

    ---

    ## Projects & Experience

    Highlighted 1337 School projects that showcase system and backend skills:

    - Libft — custom C library (core C concepts and memory management)
    - Get Next Line — robust file I/O utilities
    - Born2beRoot — system administration and security exercises
    - Push Swap — algorithmic problem solving and optimization
    - Minishell — building a Unix-like shell (process control)
    - So Long — small 2D game (project structure and asset handling)

    ## Development Setup (Recommended)

    These steps assume a Linux environment (WSL/Ubuntu) and zsh. Replace values with your preferred versions.

    1) Install core tools

    ```bash
    sudo apt update && sudo apt install -y build-essential git curl zsh docker.io docker-compose
    ```

    2) Clone the repo

    ```bash
    git clone https://github.com/Xylar-99/Xylar-99.git
    cd Xylar-99
    ```

    3) If you use Docker for services (Postgres, Redis), start them with Docker Compose (example below)

    ```yaml
    # docker-compose.yml (example)
    version: "3.8"
    services:
        db:
            image: postgres:15
            environment:
                POSTGRES_USER: app
                POSTGRES_PASSWORD: changeme
                POSTGRES_DB: appdb
            volumes:
                - pgdata:/var/lib/postgresql/data
    volumes:
        pgdata:
    ```

    4) Environment variables (example .env)

    ```env
    APP_ENV=development
    DATABASE_URL=postgres://app:changeme@localhost:5432/appdb
    PORT=8080
    ```

    5) Run and test services locally

    ```bash
    # start docker-compose in background
    docker compose up -d
    # run tests or start a local dev server depending on project language
    ```

    ---

    ## Architecture & Patterns

    Common patterns I use in backend projects:

    - Layered architecture: controllers, services, repositories
    - Config via environment variables and 12-factor app principles
    - Containerization with Docker + Docker Compose for local dev
    - Use PostgreSQL as relational storage and migrate with tools (Flyway, Alembic, prisma, etc.)
    - Logging, metrics, and health endpoints

    ## Testing

    - Unit tests for pure functions and services
    - Integration tests using ephemeral Docker containers or test databases
    - End-to-end smoke tests for critical paths

    Add a minimal test run example in your project language (e.g., pytest, jest, or custom C test harness):

    ```bash
    # Python (pytest)
    pytest -q

    # Node.js (jest)
    npm ci && npm test
    ```

    ---

    ## CI/CD Suggestions

    Provide a lightweight GitHub Actions workflow that runs lint/test/build and optionally builds Docker images and pushes tags on release. Example pipeline steps:

    - checkout
    - set up language (node/python)
    - install dependencies
    - run lint
    - run tests
    - build and push Docker image (on release)

    ---

    ## Deployment Notes

    - Build reproducible Docker images with pinned base images.
    - Use environment-specific secrets (GitHub Secrets, Vault).
    - Provide a health check endpoint and readiness probes for orchestrators.

    ## Contact & Links

    - Email: abdoqoubai@gmail.com
    - Portfolio: http://abquaoub.me/
    - GitHub: https://github.com/Xylar-99

    ---

    ## Visitor & GitHub Stats

    <div align="center">

    ![GitHub Stats](https://github-readme-stats.vercel.app/api?username=Xylar-99&show_icons=true&theme=tokyonight&hide_border=true&count_private=true)

    ![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=Xylar-99&theme=tokyonight&hide_border=true)

    ![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=Xylar-99.Xylar-99)

    </div>

    ---

    "Code is poetry written in logic." ✨
