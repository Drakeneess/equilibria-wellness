# Equilibria Wellness — Sistema visual (fase 1)

## Concepto

Una atmósfera de quietud y escucha. El diseño recupera el brillo del bronce envejecido, la luz de vela, madera y piedra de la fotografía de referencia, sin replicar la dirección visual de Equilibria Beauty.

## Paleta

- Nocturno `#19110d`: fondos de bienvenida y descanso.
- Bronce `#d5a669`: elementos de atención y CTAs.
- Marfil `#f7f2e9`: superficies de lectura.
- Pergamino `#efe7da`: tarjetas.
- Tinta `#241914`: texto de contraste.
- Marrón tierra `#69584c`: texto secundario.
- Verde hoja `#587454`: acento orgánico en títulos, pequeños símbolos y estados de interacción.
- Verde bosque `#344f3c`: profundidad de los pétalos y etiquetas sobre superficies claras.
- Verde salvia `#8eab81`: líneas y detalles suaves.
- Verde niebla `#e6ebdf`: fondos de apoyo en el tercer pilar.

## Logotipo

Se adapta el SVG vectorial de Equilibria Beauty conservando las formas originales del isotipo y las letras **EQUILIBRIA**. Combinación visual actual: **isotipo de madera con contorno de cobre luminoso**, nombre **EQUILIBRIA** en bronce y leyenda **WELLNESS** con sus líneas decorativas en verde salvia claro.

- `public/brand/equilibria-wellness.svg`: logotipo completo para navbar y footer.
- `public/brand/wellness-mark.svg`: isotipo independiente con madera, contorno de cobre e iluminación integrada en SVG.
- Interacción del logotipo del header y footer: ligera elevación, resplandor cobrizo y subrayado verde al pasar el cursor o enfocar con teclado. Clic/tap vuelve a `#inicio`. Se deshabilita el movimiento con `prefers-reduced-motion`.
- Beauty no se modifica y no se importa código de otro repositorio.

## Tipografía

- Titulares: Marcellus (fallback Times New Roman).
- Interfaz y textos: DM Sans (fallback system-ui).

## Componentes

- Header con menú móvil accesible.
- Hero de dos columnas, fotografía editorial con arco y marco fino.
- Tres pilares de experiencia con arte lineal vectorial.
- Interludio gráfico con círculos concéntricos.
- Acordeón de preguntas nativo y accesible.
- Pie institucional.

## Límites de contenido

- Sin precios ni venta hasta definir oferta y alojamiento apto para uso comercial.
- Sin atribuir eficacia clínica a sonidos o cuencos.
- Sin inventar datos de atención, testimonios, horarios o dirección específicos.
- Enlace institucional únicamente, hasta conocer el canal de contacto Wellness.

## Isotipo de madera tostada con borde cobrizo — versión C (archivada)

En `public/brand/equilibria-wellness-cobre-madera.svg` y `public/brand/wellness-mark-cobre-madera.svg` se conserva exactamente la geometría del símbolo y se experimenta con un **contorno metálico de cobre** y **relleno madera clara/nogal con vetas vectoriales discretas**. El nombre «EQUILIBRIA» permanece en bronce y la leyenda «WELLNESS» con sus líneas permanece en verde salvia. Los SVG utilizan patrones y degradados internos, sin imágenes ni recursos externos.

**Versión activa C (inspirada en el isotipo de la fotografía de referencia):** se conserva la geometría de los pétalos y su espacio negativo. Relleno de madera tostada con contrastes ámbar y algunas vetas irregulares visibles a tamaño grande. Filete cobrizo-dorado de **6.7 unidades SVG**, con reflejos cálidos pero **sin halos ni filtros de desenfoque**. El acabado pretende evocar la iluminación del letrero de referencia sin sacrificar definición a tamaño de navbar. Nombre «EQUILIBRIA» en bronce y «WELLNESS» más líneas en verde. Logo principal, variantes e icono sincronizados. **Ajuste de tonalidad:** los rellenos de madera del isotipo y del favicon se oscurecieron aproximadamente un 10 % en sus canales RGB, sin modificar el cobre, los reflejos, la textura ni la leyenda verde.

## Variante D — relleno crema con borde cobrizo (archivada)

El isotipo conserva sus 11 trazados, las separaciones de los pétalos y el borde de cobre de 6.7 unidades SVG. Sustituye la madera por dos degradados crema cálido sin vetas. «EQUILIBRIA» sigue en bronce y «WELLNESS», junto con sus líneas, permanece en verde salvia.

- Versión aplicada al encabezado y pie: `public/brand/equilibria-wellness.svg`; isotipo `public/brand/wellness-mark.svg`; favicon `public/icon.svg`.
- Copias independientes para comparación: `public/brand/equilibria-wellness-crema.svg` y `public/brand/wellness-mark-crema.svg`.
- La versión madera anterior se preserva en `public/brand/equilibria-wellness-cobre-madera.svg` y `public/brand/wellness-mark-cobre-madera.svg`.

Pendiente comparar visualmente a tamaño de navbar.

## Variante E — madera oscura y EQUILIBRIA crema (activa)

- El isotipo vuelve a los 11 pétalos de madera nogal tostada, vetas cálidas y filete cobrizo de **6.7 unidades SVG**, sin halos difusos.
- El nombre «EQUILIBRIA» ahora emplea un degradado **crema cálida/marfil** pensado para contrastar con el fondo oscuro.
- La leyenda «WELLNESS» y las dos líneas continúan en **verde salvia**.
- Activos: `public/brand/equilibria-wellness.svg`, `public/brand/wellness-mark.svg`, `public/icon.svg`.
- Copia de la combinación para comparación: `public/brand/equilibria-wellness-madera-crema.svg`.
- Se mantienen las variantes anteriores: `equilibria-wellness-crema.svg` (pétalos crema, EQUILIBRIA bronce) y `equilibria-wellness-cobre-madera.svg` (pétalos madera, EQUILIBRIA bronce).

La interacción hover/foco y la navegación al inicio se mantienen sin cambios. Validar visualmente a escala de navbar antes de dar por aprobada la identidad.
