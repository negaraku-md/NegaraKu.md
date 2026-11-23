@echo off
title NegaraKu.md - LOCAL server
rem Runs the local dev server only. Nothing is exposed to the internet.
rem To share a public URL, ALSO run negaraku-md-start-public.bat in a separate window.
cd /d "%~dp0"
rem If this .bat was copied elsewhere (e.g. the Desktop), jump to the repo.
if not exist "package.json" cd /d "D:\Workspace\negaraku.md"
echo ============================================================
echo   NegaraKu.md  -  LOCAL dev server
echo.
echo   URL:   http://localhost:4321
echo.
echo   Full local stack: site + login (GitHub OAuth) + analytics.
echo   LOCAL ONLY - this window exposes nothing to the internet.
echo.
echo   To share a temporary public URL, ALSO run:
echo       negaraku-md-start-public.bat   (opens its own window)
echo.
echo   Keep this window OPEN while you work.
echo   Press Ctrl+C or close it to stop the server.
echo ============================================================
echo.
rem Clear Astro's incremental content cache first. After heavy content
rem churn it goes stale (a flood of "Duplicate id" warnings) and bloats
rem memory until the dev server OOM-crashes. A clean start avoids that.
echo Clearing stale Astro cache...
call npm run clean
echo.
call npm run dev:local
echo.
echo Local server stopped.
pause
