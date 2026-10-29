# Sitio Inicial - Centro de oficios del barrio

Que esperaba:

Que se habrán los dos enlaces

El de Agenda de talleres no se abrió como esperaba.
El de Consultar por un taller se abrió correctamente.

---

| Acción manual                                                   | Resultado esperado                           |
| --------------------------------------------------------------- | -------------------------------------------- |
| Enviar vacío                                                    | Bloquea Nombre                               |
| Lu, luz, Huerta, Tarde                                          | Bloquea formato de Correo                    |
| L, luz@example.org, Huerta, Tarde                               | Bloquea mínimo de Nombre                     |
| Lu, correo válido, opción pendiente, Tarde                      | Bloquea Taller                               |
| Lu, correo válido, Huerta, sin respuesta                        | Bloquea grupo de radios                      |
| Lu, correo válido, Huerta, Tarde, opcionales vacíos             | Permite intento de envío; no guarda consulta |
| Escribir seis veces abcdefghij en Nombre e intentar otra letra  | 60 caben; 61 normalmente no se añade         |
| Escribir doce veces abcdefghij en Mensaje e intentar otra letra | 120 caben; 121 normalmente no se añade       |

## Enlace a Inicio

El enlace a Inicio debería apuntar a "index.html" para abrir la página de inicio correctamente.

<a href="index.html">Inicio</a>

```html
<a href="index.html">Inicio</a>
```

[Inicio](index.html)
