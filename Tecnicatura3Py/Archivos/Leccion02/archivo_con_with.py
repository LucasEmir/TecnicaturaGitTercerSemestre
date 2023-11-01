from ManejoArchivos import ManejoArchivos

#MANEJO DE CONTEXTO WITH: sintaxis simplificada, abre y cierra el archivo
#with open('prueba.txt', 'r', encoding='utf8') as archivo:
   # print(archivo.read())
# No hace falta try ni finally
# En este contexto de with lo que se ejecuta de manera automatica
# Utiliza diferentes metodos: __enter__ es el que abre

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())