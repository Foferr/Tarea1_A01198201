Tarea 1 - Estructuras de Datos en JavaScript (Node.js)
Alumno: Rodolfo Emiliano Salazar Rodarte
Matricula: A01198201
Repositorio Git: https://github.com/Foferr/Tarea1_A01198201

Estructuras implementadas:
- Stack (Pila, LIFO)
- Queue (Cola, FIFO)
- Hash Table 


Test-cases usados (en el archivo test.js):

1. STACK
   - Metí "A", "B" y "C" a la pila.
   - Revisé el elemento de arriba con `peek()` (debería ser "C").
   - Luego saqué el último con `pop()`.
   - Al final, chequé cuántos quedaban con `size()`.

2. QUEUE
   - Metí "1", "2" y "3" a la cola.
   - Usé `front()` para ver el primero ("1").
   - Quité el primero con `dequeue()`.
   - Vi cuántos quedaban usando `size()`.

3. HASH TABLE
   - Guardé tres datos: nombre, edad y ciudad.
   - Con `get("nombre")` revisé si podía acceder a uno.
   - También imprimí las llaves (`keys()`) y todo el contenido (`entries()`).

---

Instrucciones de ejecución:
1. Clonar el repositorio.
2. Instalar Node.js si no se tiene.
3. Ejecutar desde consola:

   node test.js

