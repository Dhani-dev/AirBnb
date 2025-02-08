
#from flask import Flask
#from flask import Flask, request, redirect, url_for, flash
#from database import registrar_usuario_bd

#app = Flask(__name__)
#app.secret_key = 'clave'

#@app.route('/registrar_usuario', methods=['POST'])
#def registrar_usuario():
#    """Recibe los datos del formulario y los guarda en la base de datos."""
 #   usuario = request.form.get('usuario')
  #  correo = request.form.get('correo')
   # contrasena = request.form.get('contrasena')

#    if not usuario or not correo or not contrasena:
#        flash("Todos los campos son obligatorios.")
#        return redirect(url_for('registro'))  # Ajusta esto según tu página de registro
#
#    exito, mensaje = registrar_usuario_bd(usuario, correo, contrasena)#

    #if exito:
     #   flash(mensaje)
      #  return redirect(url_for('login'))  # Ajusta según tu página de login
    #else:
     #   flash(mensaje)
      #  return redirect(url_for('registro')

from database import conexion

