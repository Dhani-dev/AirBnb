from conexion import obtener_conexion

try:
    conn = obtener_conexion()
    print("✅ Conexión exitosa a la base de datos")
    conn.close()
except Exception as e:
    print(f"❌ Error al conectar a la base de datos: {e}")

