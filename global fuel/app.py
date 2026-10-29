"""
Global Fuel Analytics - Flask Web Application
Project: Global Fuel Prices and Taxation Trends: A Comprehensive Analysis
Technology Stack: Python Flask, HTML5, CSS3, JavaScript, Bootstrap 5, Tableau Public
"""

import os
from datetime import datetime
from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
# Secret key for session management and flash messages
app.secret_key = os.environ.get('SECRET_KEY', 'global-fuel-analytics-secure-key-2025')

# Tableau Public Visualization URL provided by user
# Used across the dashboard, story, and interactive views
TABLEAU_VIZ_URL = (
    "https://public.tableau.com/views/GLOBALfuelpriceandtaxationtrends/"
    "globalfuelpriceandtaxationtrends?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
)

# Context processor to inject global variables across all templates
@app.context_processor
def inject_global_data():
    return {
        'tableau_url': TABLEAU_VIZ_URL,
        'app_name': 'Global Fuel Analytics',
        'project_title': 'Global Fuel Prices and Taxation Trends: A Comprehensive Analysis',
        'current_year': datetime.now().year
    }

@app.route('/')
def home():
    """Home Page route: introduces the project, core objectives, and fuel metrics."""
    return render_template('index.html', active_page='home')

@app.route('/dashboard')
def dashboard():
    """Interactive Tableau Dashboard Page route."""
    return render_template('dashboard.html', active_page='dashboard')

@app.route('/story')
def story():
    """Tableau Story Page route."""
    return render_template('story.html', active_page='story')

@app.route('/about')
def about():
    """About Project Page route: details dataset, methodology, and limitations."""
    return render_template('about.html', active_page='about')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Contact & Feedback route."""
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        message = request.form.get('message', '').strip()
        subject = request.form.get('subject', 'General Inquiry').strip()

        if not name or not email or not message:
            flash('Please fill in all required fields (Name, Email, Message).', 'danger')
        else:
            # Flash success notification for the user
            flash(f'Thank you, {name}! Your message has been received successfully.', 'success')
            return redirect(url_for('contact'))

    return render_template('contact.html', active_page='contact')

@app.errorhandler(404)
def page_not_found(e):
    """Custom 404 error handler."""
    return render_template('404.html', active_page='404'), 404

@app.errorhandler(500)
def server_error(e):
    """Custom 500 error handler."""
    return render_template('404.html', error_code=500, error_message="Internal Server Error"), 500

if __name__ == '__main__':
    # Running in debug mode for local development
    # Host 0.0.0.0 or 127.0.0.1
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port, debug=True)

