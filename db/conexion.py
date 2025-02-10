import psycopg2
from psycopg2 import sql

# Configura la conexión a PostgreSQL
def obtener_conexion():
    return psycopg2.connect(
        "postgresql://neondb_owner:npg_Pz2XQfgh4bak@ep-wispy-hat-a53laenz-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
        #dbname="AirBnb",
        #user="neondb_owner",
        #password="npg_Pz2XQfgh4bak",
        #host="ep-wispy-hat-a53laenz-pooler.us-east-2.aws.neon.tech",
        #port="5432"
    )