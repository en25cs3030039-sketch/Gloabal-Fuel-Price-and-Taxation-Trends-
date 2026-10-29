# Global Fuel Analytics: Global Fuel Prices & Taxation Trends 🌍⛽

> **A Comprehensive Data Analytics Web Application & Tableau Public Integration**  
> Capstone Project for Data Analytics with Tableau: *“Global Fuel Prices and Taxation Trends: A Comprehensive Analysis”*

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/)
[![Framework](https://img.shields.io/badge/Framework-Flask%203.x-black.svg)](https://flask.palletsprojects.com/)
[![Visualization](https://img.shields.io/badge/Visualizations-Tableau%20Public-E97627.svg)](https://public.tableau.com/)
[![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%205.3-7952B3.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📌 Project Overview

**Global Fuel Analytics** is a modern, responsive web application developed using **Python Flask**, **Bootstrap 5**, and **Tableau Public**. The application is designed to help analysts, policymakers, students, and citizens explore:

1. **Global Fuel Price Disparities**: Standardized retail prices for Petrol, Diesel, and LPG across worldwide nations in USD per Liter.
2. **Fiscal Policy & Taxation**: The profound impact of excise taxes, carbon taxes, and VAT versus sovereign government subsidies.
3. **Crude Oil Elasticity**: The transmission of international Brent crude benchmark price fluctuations into domestic retail prices.
4. **Income Level Patterns**: Cross-sectional comparisons between High, Upper-Middle, Lower-Middle, and Low Income economies.

The application embeds the official **Tableau Public** interactive dashboard and story, providing real-time filtering, cross-highlighting, and detailed tooltips.

---

## 🔗 Live Visualizations Link

* **Tableau Public Workbook / Story URL**:  
  [https://public.tableau.com/views/GLOBALfuelpriceandtaxationtrends/globalfuelpriceandtaxationtrends](https://public.tableau.com/views/GLOBALfuelpriceandtaxationtrends/globalfuelpriceandtaxationtrends?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Backend** | Python 3 (Flask 3.x) | Web routing, server-side template rendering, form handling, error management |
| **Frontend UI** | HTML5, CSS3, JavaScript | Modern semantic markup, responsive dark navy & teal design |
| **CSS Framework** | Bootstrap 5.3.3 + Bootstrap Icons | Mobile-first grid, flexible navigation, accessible components |
| **Data Visualization** | Tableau Public (Embedding API v3) | Interactive geospatial choropleths, scatter plots, dual-axis trends, stories |
| **Version Control** | Git & GitHub | Source tracking, code branching, open-source portfolio hosting |
| **WSGI Server** | Gunicorn (for production) / Flask Dev Server | Production-ready HTTP application server |

---

## 📂 Project Architecture

```text
global-fuel-analytics/
│
├── app.py                     # Main Flask application with routes and Tableau configuration
├── requirements.txt           # Python dependencies (Flask, Gunicorn)
├── README.md                  # Comprehensive documentation and setup instructions
├── .gitignore                 # Excludes cache, venv, and temporary OS files
│
├── templates/                 # Jinja2 HTML Templates
│   ├── base.html              # Base template with responsive navbar, footer & theme
│   ├── index.html             # Home page with hero, objective pillars, and fuel dimensions
│   ├── dashboard.html         # Interactive Tableau dashboard with embed controls & guide
│   ├── story.html             # Tableau Story presentation with observation framework
│   ├── about.html             # Methodology, dataset field dictionary & limitations
│   ├── contact.html           # Feedback form, SkillWallet details & repository links
│   └── 404.html               # Custom 404 error page
│
└── static/                    # Static Assets
    ├── css/
    │   └── style.css          # Modern dark navy, teal, and amber styling
    ├── js/
    │   └── main.js            # Tableau controls (reload, fullscreen, copy link)
    └── images/                # Static image assets & screenshots
        └── .gitkeep
```

---

## 📊 Dataset Dictionary

The analytics model is built upon 10 core fields standardized for global cross-comparability:

| Field Name | Data Type | Units / Classification | Description |
|---|---|---|---|
| `Country` | Geographic / String | ISO Country Standard | Target sovereign nation or territory |
| `Date` | Temporal / Date | Temporal Observation | Date of reported price snapshot |
| `Income Level` | Categorical | High / Upper-Mid / Lower-Mid / Low | World Bank income classification based on GNI per capita |
| `Region` | Categorical | Continental Blocks | Geographic region (Europe, Asia-Pacific, Americas, etc.) |
| `Subsidy Level` | Categorical | High / Moderate / None / Negative | Sovereign subsidy intervention status |
| `Brent Crude USD` | Numeric (Float) | USD per Barrel ($/bbl) | Global international crude benchmark reference |
| `Diesel USD Liter`| Numeric (Float) | USD per Liter ($/L) | Retail pump price for commercial transport diesel |
| `LPG USD Liter`   | Numeric (Float) | USD per Liter Equivalent | Retail pump/cylinder price for Liquefied Petroleum Gas |
| `Petrol USD Liter`| Numeric (Float) | USD per Liter ($/L) | Retail pump price for automotive motor gasoline |
| `Tax Percentage`  | Numeric (Percent)| % of Retail Pump Price | Estimated total fiscal burden (excise, carbon, VAT/GST) |

---

## 🚀 Local Installation & Setup Guide

Follow these simple steps in your terminal (PowerShell or Bash) to run the application locally on your computer:

### Step 1: Clone or Navigate to the Project Folder
```bash
cd "c:\Users\nehar\Downloads\global fuel"
```

### Step 2: (Recommended) Create and Activate a Virtual Environment
```bash
# Windows PowerShell:
python -m venv venv
.\venv\Scripts\Activate.ps1

# macOS / Linux:
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Required Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Run the Flask Web Application
```bash
python app.py
```

### Step 5: Open the Application in Your Browser
Once started, open your favorite web browser and visit:
```text
http://127.0.0.1:5000/
```

You can now navigate between:
* **Home**: `http://127.0.0.1:5000/`
* **Interactive Dashboard**: `http://127.0.0.1:5000/dashboard`
* **Tableau Story**: `http://127.0.0.1:5000/story`
* **About Project**: `http://127.0.0.1:5000/about`
* **Contact & Inquiries**: `http://127.0.0.1:5000/contact`

---

## 🐙 Git & GitHub Publishing Instructions

To track your project in Git and push it to your GitHub account:

### 1. Initialize Git Repository
```bash
git init
```

### 2. Add All Files and Create the Initial Commit
```bash
git add .
git commit -m "Initial commit: Global Fuel Analytics Flask application with Tableau embed"
```

### 3. Create a New Repository on GitHub
1. Log in to [GitHub](https://github.com).
2. Click the **+** (plus icon) in the top-right corner and select **New repository**.
3. Repository name: `global-fuel-analytics`.
4. Keep it **Public** (recommended for portfolio / SkillWallet review).
5. Do **NOT** initialize with a README, `.gitignore`, or license (we already have them).
6. Click **Create repository**.

### 4. Link Local Repository and Push to GitHub
Copy your repository URL from GitHub and run:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/global-fuel-analytics.git
git push -u origin main
```

---

## 🌐 Free Cloud Deployment Instructions

You can host this Flask web application online for free using platforms like **Render** or **PythonAnywhere**:

### Option A: Deploying on Render (Recommended & Free)
1. Sign up / Log in to [Render](https://render.com/) using your GitHub account.
2. Click **New +** -> **Web Service**.
3. Select **Build and deploy from a Git repository** and connect your `global-fuel-analytics` repository.
4. Fill in the deployment settings:
   * **Name**: `global-fuel-analytics`
   * **Region**: Choose the closest region (e.g. Frankfurt, Oregon, Singapore)
   * **Branch**: `main`
   * **Runtime**: `Python 3`
   * **Build Command**: `pip install -r requirements.txt`
   * **Start Command**: `gunicorn app:app`
   * **Instance Type**: `Free`
5. Click **Create Web Service**.
6. Render will automatically build the app and give you a live HTTPS link (e.g., `https://global-fuel-analytics.onrender.com`).

---

## 💼 SkillWallet Submission Instructions

To submit your completed capstone project to **SkillWallet**:

1. **Log in to SkillWallet**: Open your SkillWallet student/professional dashboard.
2. **Locate Assignment**: Go to **Data Analytics with Tableau** -> **Global Fuel Prices and Taxation Trends Project**.
3. **Fill in the Required Submission Fields**:
   * **GitHub Repository URL**:  
     `https://github.com/<YOUR-GITHUB-USERNAME>/global-fuel-analytics`
   * **Live Deployed Website URL**:  
     `https://<YOUR-RENDER-SUBDOMAIN>.onrender.com` (or your chosen hosting URL)
   * **Tableau Public Dashboard URL**:  
     `https://public.tableau.com/views/GLOBALfuelpriceandtaxationtrends/globalfuelpriceandtaxationtrends?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link`
4. **Project Description**:
   > *"Built a full-stack Flask web application integrating interactive Tableau Public visualizations and analytical story points exploring global fuel prices, taxation policies, Brent crude benchmark correlations, and regional subsidy tiers across international economies."*
5. Click **Submit Project**.

---

## ⚙️ How to Update Your Tableau Public URL

If you ever republish or rename your Tableau Public workbook:
1. Open `app.py` in your code editor.
2. Update the `TABLEAU_VIZ_URL` variable at the top of the file:
   ```python
   TABLEAU_VIZ_URL = "https://public.tableau.com/views/YOUR_NEW_WORKBOOK/YOUR_NEW_VIEW?:language=en-US&:display_count=n&:origin=viz_share_link"
   ```
3. In `templates/dashboard.html` and `templates/story.html`, update the `src` attribute of the `<tableau-viz>` element if desired.
4. Save the file and restart your Flask server.

---

## 🔧 Troubleshooting Common Errors

### 1. `ModuleNotFoundError: No module named 'flask'`
* **Cause**: Flask is not installed in your active Python environment.
* **Solution**: Run `pip install -r requirements.txt` or `pip install Flask`.

### 2. `Address already in use` or `Port 5000 is in use`
* **Cause**: Another service or process is using port 5000.
* **Solution**: Run on another port using:
  ```bash
  python -c "from app import app; app.run(port=5001, debug=True)"
  ```
  Or change the port in `app.py` to `5001`.

### 3. Tableau Dashboard shows blank or takes time to load
* **Cause**: Third-party cookies or tracker blockers (Brave shields, ad blockers) may restrict external iframes.
* **Solution**: 
  * Disable ad-blockers for `127.0.0.1:5000`.
  * Click the **"Open on Tableau Public"** button provided on the page to view the live viz directly.

### 4. PowerShell Execution Policy Error when activating `venv`
* **Cause**: Windows PowerShell restricts running scripts by default.
* **Solution**: Run this command once in PowerShell:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

---

## 📄 License & Attribution

This project is open-source under the [MIT License](LICENSE).  
Data visualizations and dashboards created with **Tableau Public**.  
Developed for educational, analytical, and professional portfolio demonstration.

