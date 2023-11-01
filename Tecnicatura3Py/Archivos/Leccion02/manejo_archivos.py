#Declaramos una varuable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') #La w es de write que significa escribir
    archivo.write("Programamos con diferentes tipos de archivo, ahora en txt.\n")
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write("Las letras son: \n'r' read, \n'a' append, \n'w' write,\n'x' crea un archivo\n")
    archivo.write('t esta es para texto o text, \nb archivos de tipo binarios, \nw+ lee y escribe, \nr+ escribe y lee\n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:#siempre se ejecuta
    archivo.close() #Con esto se debe cerrar el archivo
#archivo.write('Todo quedó perfecto'): este es un error, no se puede escribir una vez que se cerro el archivo.

