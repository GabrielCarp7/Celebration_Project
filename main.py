from datetime import datetime
from flask import Flask, render_template
from flask_bootstrap import Bootstrap5
import os
from dotenv import find_dotenv, load_dotenv

"""

Countdown project for celebrations

"""

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)
SECRET_KEY = os.getenv("SECRET_KEY")

app = Flask(__name__)
app.config['SECRETE_KEY'] = SECRET_KEY
Bootstrap5(app)


@app.route("/")
def home():
    # Get the current time
    now = datetime.now()

    # Calculate the next New Year's Day
    next_new_year = datetime(now.year + 1, 1, 1)

    return render_template("index.html", newyear_date=next_new_year.strftime("%Y-%m-%dT%H:%M:%S"))


@app.route("/easter")
def easter():
    # Calculate the next Easter
    next_easter = datetime(2025, 4, 20)

    return render_template("easter.html", easter_date=next_easter.strftime("%Y-%m-%dT%H:%M:%S"))


@app.route("/christmas")
def christmas():
    # Get the current time
    now = datetime.now()

    # Calculate the next Christmas Day
    next_christmas = datetime(now.year, 12, 25)

    return render_template("christmas.html", christmas_date=next_christmas.strftime("%Y-%m-%dT%H:%M:%S"))


if __name__ == '__main__':
    app.run(debug=True)
