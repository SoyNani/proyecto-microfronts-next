# 🧩 Proyecto: Micro Frontend de Pokémons con Next.js y Tailwind CSS

## Descripción

Este proyecto es una aplicación web construida con [Next.js](https://nextjs.org/) que implementa una arquitectura de micro frontends utilizando la funcionalidad de [Multi-Zones](https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones). La aplicación principal presenta una introducción al mundo Pokémon, un ranking de los 5 Pokémon más populares y un botón que redirecciona a un micro frontend independiente. Este micro frontend muestra un carrusel de Pokémon obtenidos desde la [PokéAPI](https://pokeapi.co/), y al seleccionar uno, se despliega información detallada del mismo.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para renderizado del lado del servidor y generación de sitios estáticos.
- **Multi-Zones de Next.js**: Permite dividir la aplicación en múltiples zonas o micro frontends independientes, facilitando el desarrollo y despliegue modular.
- **Tailwind CSS**: Framework de utilidad para estilos CSS rápidos y responsivos, que permite construir diseños personalizados directamente en el HTML mediante clases de utilidad.
- **PokéAPI**: API pública para obtener datos de Pokémon.
- **TypeScript**: Superset de JavaScript que añade tipado estático, mejorando la mantenibilidad y escalabilidad del código.

## Decisiones Técnicas

- **Arquitectura de Micro Frontends con Multi-Zones**: Se eligió esta arquitectura para permitir el desarrollo y despliegue independiente de cada sección de la aplicación, facilitando la escalabilidad y el mantenimiento. Esta estrategia permite que diferentes equipos trabajen en distintas partes de la aplicación sin interferencias, mejorando la eficiencia del desarrollo.
- **Uso de Tailwind CSS**: Se optó por Tailwind CSS para lograr una rápida prototipación y mantener estilos consistentes sin escribir CSS personalizado. Su enfoque utility-first permite construir interfaces de usuario modernas y responsivas de manera eficiente, promoviendo la reutilización de estilos y la coherencia visual en toda la aplicación.
