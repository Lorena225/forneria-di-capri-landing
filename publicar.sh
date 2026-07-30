#!/usr/bin/env bash
# Publica a página na Vercel, no projeto virtruvia-materiais.
# Uso:  bash publicar.sh
set -e

echo "→ Verificando a CLI da Vercel..."
if ! command -v vercel >/dev/null 2>&1; then
  echo "  instalando..."
  npm install -g vercel
fi

echo "→ Verificando o login..."
if ! vercel whoami >/dev/null 2>&1; then
  vercel login
fi

echo "→ Publicando em produção..."
vercel --prod

echo
echo "Pronto. Se o link ainda pedir login da Vercel, desative a proteção em:"
echo "Settings → Deployment Protection → Vercel Authentication → Disabled"
