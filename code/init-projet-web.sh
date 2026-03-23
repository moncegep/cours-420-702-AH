#!/bin/bash

# Nom du projet
PROJET="mon-site"

echo "Création du projet : $PROJET"

# Création de la structure
mkdir -p "$PROJET/css" "$PROJET/js" "$PROJET/assets"

# Création des fichiers de base
touch "$PROJET/index.html"
touch "$PROJET/css/style.css"
touch "$PROJET/js/script.js"

# Remplir index.html
cat > "$PROJET/index.html" <<EOF
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon site</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Bienvenue sur mon site</h1>
  <p>Projet créé automatiquement avec un script Bash.</p>

  <script src="js/script.js"></script>
</body>
</html>
EOF

# Remplir style.css
cat > "$PROJET/css/style.css" <<EOF
body {
  font-family: Arial, sans-serif;
  margin: 2rem;
  background-color: #f4f4f4;
}

h1 {
  color: #2c3e50;
}
EOF

# Remplir script.js
cat > "$PROJET/js/script.js" <<EOF
console.log("Projet initialisé avec succès !");
EOF

echo "Structure créée :"
ls -R "$PROJET"