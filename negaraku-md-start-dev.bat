@echo off
rem Convenience launcher: opens the LOCAL server and the PUBLIC tunnel in two
rem SEPARATE windows. Close the PUBLIC window alone to stop public access -
rem the LOCAL server keeps running. (You can also run the two .bat files directly.)
cd /d "%~dp0"
echo Opening LOCAL server and PUBLIC tunnel in separate windows...
echo   - Close the PUBLIC window to stop sharing (server stays up).
echo   - Close the LOCAL window to stop the server.
start "" "%~dp0negaraku-md-start-local.bat"
start "" "%~dp0negaraku-md-start-public.bat"
