from flask import app, render_template, request, redirect, url_for, Flask

from datab import conexion

app = Flask(__name__)

def insertarUsuario(usuario, email, password):
    try:
        conexion.execute(
            "INSERT INTO usuario (usuario, correo, contrasena) VALUES (%s, %s, %s)",
            (usuario, email, password)
        )
        conexion.connection.commit()
        return True, "Inserción exitosa"
    except Exception as e:
        # Si ocurre un error, revierte y captura el mensaje
        conexion.rollback()
        print(f"Error en la inserción: {e}")
        return False, str(e)
    finally:
        conexion.close()

@app.route('db/registrar', methods=['get', 'post'])
def registrarUsuario():
    if request.method == 'post':
        # Recibe los datos del formulario
        usuario = request.form['usuario']
        email = request.form['email']
        password = request.form['password']
        
        # Llama a la función de inserción
        exito, mensaje = insertarUsuario(usuario, email, password)
        
        # Devuelve mensaje de éxito o error
        if exito:
            return redirect(url_for('iniciar_sesion'))
        else:
            return f"Error en el registro: {mensaje}"
    else:
        # Si es GET, muestra el formulario de registroO
        return render_template('login.html')

@app.route('/iniciar_sesion')
def iniciar_sesion():
    return render_template('login.html') #Acá irá el link al html de iniciar sesión, HACER INICIAR SESIÓN

if __name__ == '__main__':
    app.run(debug=True)