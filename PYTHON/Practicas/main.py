print ("Hola munndo!!! ")
#---------------------------------------------------------
# Comentario de una linea
"""
comenterios
multi-
linea
"""
#---------------------------------------------------------
#variables
texto = "variable de prueba"
numero = 2022
#print (texto,numero)

#---------------------------------------------------------
#concatenar
nombre = "Luis Fer"
apellido = "Garcia"
altura = "173 cm"
#print (nombre,apellido,altura)
#print (f"{nombre} - {apellido} - {altura}")
#print (nombre + "-" + apellido + "-" + str(numero))

#---------------------------------------------------------
#convertir numero a String
numeroString = str(numero)

#---------------------------------------------------------
#Entrada de datos
#nombreUsuario = input ("Cual es tu nombre?:")

#---------------------------------------------------------
#Condiciones
altura = int(input ("Cual es tu altura?:")) # con la funcion 'input' todo lo ingresado sera un String, la funcion 'int' transforma lo ingresado en entero

if altura >= 180:
    print (str(altura) + " rayos eres una persona alta")
else:
    print ("eres bajito homi")

#---------------------------------------------------------
#Funciones
#Declaracion, llamada, parametros
def mostrarAltura (altura):
    resultado = ""

    if altura >= 180:
        resultado = str(altura) + " rayos eres una persona alta"
    else:
        resultado =  "eres bajito homi"

    return resultado

alturaUsuario = int(input ("Cual es tu altura?:")) # con la funcion input todo lo ingresado sera un String, la funcion 'int' transforma lo ingresado en entero
print (mostrarAltura(alturaUsuario))

#---------------------------------------------------------
#Listas
personas = ["hugo","Paco","Luis"] #indice 0,1,2
print (personas)
print (personas[0] + ", " + personas[2])


#Bucles
for persona in personas:
    print ("- " + persona)
    
#---------------------------------------------------------
