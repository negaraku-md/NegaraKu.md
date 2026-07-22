@echo off
title NegaraKu.md - local server
rem Start the local dev server from wherever this repo is cloned.
cd /d "%~dp0"
echo ============================================================
echo   NegaraKu.md  -  starting local dev server
echo.
echo   URL:   http://localhost:4321
echo.
echo   Keep this window OPEN while you work.
echo   Press Ctrl+C or close it to stop the server.
echo ============================================================
echo.
call npm run dev
echo.
echo Server stopped.
pause
