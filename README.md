# Proyecto Intermedio — Auditoría Digital

## Descripción

Proyecto web sobre huella de carbono tecnológica y privacidad de datos.
Incluye simulador básico y campaña de concientización.

---

## ¿Por qué es un proyecto intermedio?

Este proyecto está bien encaminado y funciona, pero tiene varios aspectos que deberían mejorarse
para alcanzar el nivel de calidad esperado. A continuación se detallan los puntos positivos y los
aspectos pendientes de mejora:

### ✅ Lo que funciona bien

- El simulador calcula un resultado y lo muestra visualmente.
- La información sobre huella de carbono y privacidad de datos está presente.
- La campaña de concientización tiene mensajes concretos.
- El diseño es limpio y legible.
- Hay alguna validación de campos vacíos.
- El diseño es parcialmente responsive (funciona en móvil, aunque no perfectamente).

### ⚠️ Qué debería mejorarse

**Problema ético:** Se pide el nombre del usuario sin una justificación real y con un aviso
confuso ("no lo guardamos... creemos"). Esto genera desconfianza y va en contra de los principios
de privacidad por diseño.

**Mezcla conceptual:** El puntaje combina impacto ambiental y riesgo de privacidad en una sola
variable, lo que no es correcto conceptualmente. Deberían ser medidas separadas.

**Factores de cálculo arbitrarios:** Los coeficientes usados en el simulador no tienen base
en datos reales. No se explica de dónde vienen los números.

**Recomendaciones genéricas:** Las sugerencias son las mismas para todos los usuarios con el
mismo nivel, sin personalización según qué hábitos específicos tienen impacto.

**Validación incompleta:** No se verifica que los valores sean positivos ni que estén dentro de
rangos razonables.

**Código poco organizado:** El script mezcla lectura de datos, cálculo y renderizado en un solo
bloque. Sería mejor separar las responsabilidades en funciones.

**Accesibilidad mejorable:** Faltan roles ARIA, los mensajes de error no se anuncian a lectores
de pantalla, y el contraste en algunas áreas podría ser mayor.

**Diseño poco jerárquico:** La página tiene secciones bien diferenciadas, pero la jerarquía
visual podría mejorarse con mejor uso de tamaños, pesos y espaciado.

---

## Cómo usarlo

1. Abrí `index.html` en el navegador.
2. Completá el formulario y hacé clic en "Ver mi impacto".
3. No se requiere conexión a internet.

---

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura de la página |
| `styles.css` | Estilos básicos |
| `script.js` | Lógica del simulador |
| `README.md` | Este documento |

---

*Este proyecto es un ejemplo de nivel intermedio: funciona, pero tiene aspectos claros que mejorar.*
