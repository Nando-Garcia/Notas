CERTIFICADO
==================================================================================================

El certificado SSL permite el acceso de forma segura (informacion cifrada) en un sitio web, da presencia 
y seguridad al usuario al visitarlo


Instalación:
--------------------------------------------- Windows

Paso 1. Se genera el CSR para enviarlo a la empresa provedoora del certificado, esto lleva
        un tiempo de proceso, donde en la respuesta vendra el certificado (.cer)
   
            1. Abrir el IIS, Ctrl + R -> Inetmgr.exe
            2. Panel izquierdo, clic sobre el nombre del servidor
            3. IIS -> Server Certificates (doble clic)
            4. panel derecho -> Create Certificate Request...
            5. Al abrir la ventana colocar los datos solicitados, ej:
            	- servicios1.cenapred.unam.mx	(sin http ni /)   - Fijarse bien en el domindio (no todos llevan www)
            	- SUPERIOR
            	- SUB
            	- CDMX
            	- CDMX
            	- MX
            6. En la seccion de servicio de criptografia dejar la opcion predefinida solo 
               seleccionar la longitud en bits de 2048
            7. Seleccinar directorio y asignar nombre (/desktop - CSR_Servidor1.csr), Finalizar
            8. Al momento de adquirir el certificado SSL copiar el contenido cuando el sistema
               requiera el CSR

Paso 2. Se debe asociar el dominio dentro del IIS al certificado (puerto 443), ver guia de instalacion en 
        el enlace de abajo

https://www.digicert.com/kb/ssl-certificate-installation.htm



--------------------------------------------- Linux

