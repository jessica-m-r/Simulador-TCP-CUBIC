# Simulación TCP CUBIC
 
Simulación del algoritmo de control de congestión TCP CUBIC en JavaScript.
 
## Clases
 
- **Paquete**:Representa un paquete con ID y estado.
- **Cubic**:Implementa el algoritmo CUBIC.
- **Main**:Coordina el envío y aplica el algoritmo ante pérdidas.

## Algoritmo 
Ante una pérdida, la ventana se reduce al 70% y se calcula K:
```
K = raizCubica((Wmax * 0.3 / C))
```
Donde 
- Wmax es mi ventana antes de reducir es decir solo tomamos el 0.3 restante.
- C esta con un valor estatico de 0.4
La recuperación sigue una función cúbica por cada grupo transcurrido:
```
W(t) = C * (t - K)^3 + Wmax
```
 
Donde:
- C = 0.4 un valor estatico. 
- t es el número de grupos desde la última pérdida.
## Aclaraciones
Para determinar el valor de C y cuanto deberia reducir la ventana se consulto a la IA, los valores sugeridos fueron de 0.4 y reducir un 0.7 la ventana ante una congestión.
[Fuente documentación](https://datatracker.ietf.org/doc/html/rfc9438#cubic-inc)
En el punto 3.4. igual se menciona que el factor para derecer la ventana es de 0.7.
## Uso
En la consola del navegador ejecutar lo siguiente
```
const main = new Main(100);
main.enviarPaquetes(10);
```