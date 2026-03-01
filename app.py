from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/survival")
def survival():
    return render_template("survival.html")

@app.route("/separation")
def separation():
    return render_template("separation.html")

@app.route("/reactions")
def reactions():
    return render_template("reactions.html")

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)