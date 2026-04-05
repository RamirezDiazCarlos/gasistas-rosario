# GasistasRosario

Directorio de gasistas matriculados en Rosario, Santa Fe. Conecta vecinos con profesionales habilitados vía WhatsApp, sin intermediarios.

🌐 [gasistasrosario.com.ar](https://gasistasrosario.com.ar)

---

## Stack

- [Astro 5](https://astro.build) — generación estática
- [Tailwind CSS](https://tailwindcss.com) — estilos
- [Netlify](https://netlify.com) — hosting + formularios
- Vanilla JS — filtros y animaciones

## Estructura

```
src/
├── components/     # Hero, Header, GasistaCard, SearchFilter, etc.
├── data/
│   └── gasistas.json   # datos de cada profesional
├── layouts/
│   └── Layout.astro    # layout base con SEO y JSON-LD
└── pages/
    ├── index.astro     # página principal
    └── [slug].astro    # perfil individual
```

## Correr en local

```bash
npm install
npm run dev
```

## Agregar un gasista

Editá `src/data/gasistas.json` con el siguiente esquema:

```json
{
  "id": "7",
  "slug": "nombre-apellido",
  "name": "Nombre Apellido",
  "photo": "",
  "matricula": "MAT-00000",
  "zones": ["Barrio 1", "Barrio 2"],
  "services": ["Instalación", "Reparación"],
  "phone": "5493412345678",
  "rating": 5.0,
  "reviews": 0,
  "featured": false,
  "description": "Descripción del profesional."
}
```

> Dejá `phone` vacío (`""`) si todavía no tenés el número confirmado — el botón de WhatsApp no se muestra hasta que haya un valor.

## Formulario de contacto

Gestionado por Netlify Forms. Las solicitudes llegan al dashboard en **Site → Forms → gasista-listing** y por email.

---

Desarrollado por [KERNEL](https://www.kerneldev.com.ar)
