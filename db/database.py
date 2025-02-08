import psycopg2

DATABASE='neondb'
PGHOST='ep-wispy-hat-a53laenz-pooler.us-east-2.aws.neon.tech'
PGDATABASE='neondb'
PGUSER='neondb_owner'
PGPASSWORD='npg_Pz2XQfgh4bak'

connection = psycopg2.connect(database = 'neondb', user = PGUSER, password = PGPASSWORD, host = PGHOST, port = 5432)

conexion = connection.cursor()