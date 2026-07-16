# 2daynews — one-command push to GitHub (Windows PowerShell)
# Place this file in D:\websites\2daynews\  then run:  .\push.ps1 "your commit message"
param([string]$msg = "Update from 2daynews design system")

$repo = "https://github.com/prasadkumarg202/2daynews.git"

# First run only: initialise the repo and link the remote
if (-not (Test-Path ".git")) {
  git init
  git branch -M main
  git remote add origin $repo
}

git add -A
git commit -m $msg
git push -u origin main
Write-Host "Pushed to $repo" -ForegroundColor Green
