from flask import Flask, render_template # Importa as biblitecas Flask, render_template do módulo flask
import sqlite3 # Importa o módulo sqlite3

app = Flask(__name__) # Instância para aplicação do Flask

@app.route('/') # Definição da rota para a página inicial
def index(): # Cria uma função chama 'index'
    return render_template('index.html') # Redenderiza o arquivo index.html para carregar o arquivo indicado.

if __name__ == '__main__': # Verifica se o script está sendo executado diretamente.
    app.run(debug=True) # Inicia o servidor de desenvolvimento Flask com o modo de depuração ativado.

