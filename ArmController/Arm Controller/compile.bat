@echo off
echo Compiling %* with LibusbJava...

java -cp "c:\LibUsbJava\LibUsbJava.jar;." %*

echo Finished.

timeout 2