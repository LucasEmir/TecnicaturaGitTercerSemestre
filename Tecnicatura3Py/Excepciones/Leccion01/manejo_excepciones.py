from NumerosIgualesException import NumerosIgualesException

resultado = None

try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    if a == b:
        raise NumerosIgualesException('Son números iguales')
    resultado = a / b #modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {e}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {e}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {e}')
else:
    print("No se arrojo ninguna excepción")
finally: #Siempre se va a ejecutar
    print("Ejecución del bloque finally")

print(f'El resultado es: {resultado}')
print('seguimos...')