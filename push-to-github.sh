#!/bin/bash
# Push this project to a NEW, EMPTY GitHub repo.
# 1) Create an empty repo on github.com (no README / no .gitignore).
# 2) Run:  ./push-to-github.sh https://github.com/<you>/<new-repo>.git
set -e
REMOTE="$1"
if [ -z "$REMOTE" ]; then echo "Usage: $0 <new-github-repo-url>"; exit 1; fi
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE"
git branch -M main
git push -u origin main
echo "Pushed. Now import the repo at https://vercel.com/new"
