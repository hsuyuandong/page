from unicodedata import name
from flask import Flask #載入Flask
from flask import request #載入請求物件
from flask import redirect #載入redirect 函式
from flask import render_template #載入render_template函式
from datetime import datetime
import json
#建立application物件，可以設定靜態檔案的路徑處理
app=Flask(__name__,static_folder="dao",  static_url_path="/hui") 

# 使用GET方法 建立路徑 /en/ 對應的處理函式
@app.route("/")
def studentpage():
    return render_template("studentpage.html", name="小東", time=datetime.now().strftime("%Y-%m-%d %H:%M:%S %p"))

@app.route("/register")
def register():
    return render_template("register.html")   

@app.route("/studentpage")
def one():
    return render_template("studentpage.html")   

@app.route("/login")
def login():
    return render_template("login.html")   

@app.route("/show")
def show():
    name=request.args.get("name")
    return render_template("show.html",name=name,time=datetime.now().strftime("%Y-%m-%d %H:%M:%S %p"))

#啟動網站伺服器，可透過port參數指定埠號
app.run(port=9527)