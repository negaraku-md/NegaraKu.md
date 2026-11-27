@echo off
title NegaraKu.md - PUBLIC tunnel (publish access)
rem Creates a TEMPORARY public URL to the local server via a Cloudflare quick tunnel.
rem Run negaraku-md-start-local.bat FIRST. CLOSE THIS WINDOW to stop public access -
rem the local server in the other window keeps running.
cd /d "%~dp0"
echo ============================================================
echo   NegaraKu.md  -  PUBLIC tunnel  (publish access)
echo.
echo   Exposes your LOCAL server (http://localhost:4321) to the internet
echo   via a temporary Cloudflare URL:  https://....trycloudflare.com
echo.
echo   1. Make sure negaraku-md-start-local.bat is already running.
echo   2. Watch below for the  https://....trycloudflare.com  address
echo      (that is the link you share).
echo.
echo   To STOP public access: CLOSE THIS WINDOW (or press Ctrl+C).
echo   Your local server keeps running - only the public URL goes away.
echo ============================================================
echo.
rem Use cloudflared from PATH, else fall back to the default install location.
where cloudflared >nul 2>nul
if %errorlevel%==0 (
  cloudflared tunnel --url http://localhost:4321
) else (
  "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --url http://localhost:4321
)
echo.
echo Public tunnel closed - public access stopped. Local server unaffected.
pause
