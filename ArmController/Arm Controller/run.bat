@echo off
echo Executing %* with LibusbJava...

java -cp "c:\LibUsbJava\LibUsbJava.jar;." -Djava.library.path="c:\LibUsbJava;." %*

echo Finished.

timeout 10
