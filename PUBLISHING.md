# Publicar Equilibria Wellness en GitHub

El código es independiente de Equilibria Beauty y está preparado para ser el contenido inicial de `Drakeneess/equilibria-wellness`.

## Alternativa A: GitHub web

1. Visita https://github.com/new.
2. Crea un repositorio llamado `equilibria-wellness` en la cuenta `Drakeneess`.
3. Déjalo vacío (sin README, .gitignore ni licencia creados por GitHub).
4. Importa los archivos de este proyecto o solicita a tu asistente que los suba usando la conexión GitHub.

## Alternativa B: GitHub CLI (Windows / PowerShell)

Desde la carpeta descomprimida, con Git y GitHub CLI autenticados:

```powershell
git init -b main
git add .
git commit -m "feat: initial Equilibria Wellness experience"
gh repo create Drakeneess/equilibria-wellness --public --source . --remote origin --push
```

Si se prefiere un repositorio privado, cambiar `--public` por `--private`.

## Vercel

Después de crear el repositorio, puedes importarlo como proyecto Next.js independiente. En la primera fase se mantiene `noindex`; antes del lanzamiento revisa los textos, los derechos de uso de la imagen y el tipo de plan de hosting para actividad comercial.
