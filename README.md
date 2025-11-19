# Voltique

## Table of Contents

- [Project Setup](#project-setup)
    - [1. Create and Activate Virtual Environment](#1-create-and-activate-virtual-environment)
    - [2. Install Required Packages](#2-install-required-packages)
    - [3. Create `.env` File](#3-create-env-file)
    - [4. Create `media/` Directory](#4-create-media-directory)
    - [5. Run Migrations and Create Admin User](#5-run-migrations-and-create-admin-user)
    - [6. Run the Project](#6-run-the-project)
- [Notes](#notes)

---

## Project Setup

### 1. Create and Activate Virtual Environment

#### On Ubuntu/Linux/macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

#### On Windows (CMD):

```cmd
python -m venv venv
venv\Scripts\activate
```

---

### 2. Install Required Packages

```bash
pip install -r requirements.txt
```

---

### 3. Create `.env` File

Copy the contents of `.env.example` to `.env`:

#### On Ubuntu/Linux/macOS:

```bash
cp .env.example .env
```

#### On Windows:

```cmd
copy .env.example .env
```

Then edit the `.env` file to provide the correct environment variable values (e.g. database credentials, secret key,
etc.).

---

### 4. Create `media/` Directory

```bash
mkdir media
```

---

### 5. Run Migrations and Create Admin User

```bash
python3 manage.py migrate
python3 manage.py createsuperuser
```

Follow the prompts to create your admin credentials.

---

### 6. Run the Project

```bash
python3 manage.py runserver 0.0.0.0:8000
```

Then open your browser and go to:

```
http://localhost:8000
```
