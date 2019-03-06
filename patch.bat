@echo off
set "rar=D:\Program Files\2345Soft\HaoZip\HaoZipC"
"%rar%" a -tzip online.zip -x!.git -x!node_modules -x!.* -x!online.bat
pause