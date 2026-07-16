# 2daynews — one-command push to GitHub (macOS / Linux / Git Bash)
# Place in the repo folder, then run:  ./push.sh "your commit message"
#!/usr/bin/env bash
set -e
MSG="${1:-Update from 2daynews design system}"
REPO="https://github.com/prasadkumarg202/2daynews.git"

if [ ! -d .git ]; then
  git init
  git branch -M main
  git remote add origin "$REPO"
fi

git add -A
git commit -m "$MSG"
git push -u origin main
echo "Pushed to $REPO"
