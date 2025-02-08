from conexion import obtener_conexion
import bcrypt

def registrar_usuario_bd(usuario, correo, contrasena):
    """Registra un nuevo usuario en la base de datos Neon."""
    conn = obtener_conexion()
    if conn is None:
        return False, "Error al conectar con la base de datos."

    try:
        with conn.cursor() as cur:
            hashed_password = bcrypt.hashpw(contrasena.encode('utf-8'), bcrypt.gensalt())

            cur.execute(
                "INSERT INTO usuario (usuario, correo, contrasena) VALUES (%s, %s, %s)",
                (usuario, correo, hashed_password.decode('utf-8'))
            )
            conn.commit()
            return True, "Usuario registrado exitosamente."

    except Exception as e:
        print(f"Error al registrar usuario: {e}")
        return False, "Error al registrar usuario."

    finally:
        conn.close()
