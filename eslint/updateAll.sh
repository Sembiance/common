#!/usr/bin/env bash
set -euo pipefail

echo "Installing latest versions of dependencies..."

jq -r '.dependencies | to_entries[] | select(.value | test("^(file:|link:)") | not) | .key' package.json | while read -r pkg; do
  echo
  echo "==> Installing $pkg@latest"
  npm install "${pkg}@latest"
done

echo
echo "✅ Done"
