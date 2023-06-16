PUERTOS
==================================================================================================

Puertos lógicos (NO del procesador o PC) para diferentes fines administrados por el SO, los puertos logicos
permiten que a travez de un solo puerto fisico (ethernet) haya varias conexiones en simultaneo 

21      -       Conexiones a servidores FTP

22      -       Establece una conexión SSH y SFTP, este puerto se configura automáticamente durante la instalación del sistema operativo
                NOTA: para evitar ataques se puede configurar otro puerto para tal fin

80      -       Navegacion web no segura HTTP

8080    -       Puerto alternativo al puerto 80, normalmente usado para pruebas

443     -       Navegacion web segura HTTPS

445,139    -    Archivos Compartidos (carpetas compartidas)

3389    -       Escritorio remoto

25,587,465,2525    -    SMTP, correo electronico 

53      -       DNS

3306    -       MySQL

1521    -       Oracle




PROTOCOLOS
------------------------------------------------

TCP/IP  
TCP(Transfer Control Protocol) - Se asegura q los paquetes lleguen a su destino y en orden 
IP(Intenet Protocol) - Se encarga del enrutamiento, es decir, la ruta mas corta para llegar al destino


UDP 

HTTP


fuentes:
https://www.redeszone.net/tutoriales/configuracion-puertos/puertos-tcp-udp/


TERMINOS
------------------------------------------------

IP PRIVADA - IP PUBLICA

IP 
Codigo que identifica una PC en una red
Exisitian las IP de 32 bits (IPv4), se agotan a la actualidad por ello se estan implementando las 
IP de version 6 (IPv6 - 128 bits) 

MASCARA DE RED
Codigo que le permite al router saber si la peticion esta dentro de la red local  

PUERTA DE ENLACE PREDETERMINADA
Dierccion IP del Router 

PAQUETES
Division de los datos para ser enviados, esta accion lo hacen los dispositivos de red para poder enviar informacion

NODOS
Computadora conectada a la red

LATENCIA
Tiempo que tarda en llegar un paquete a su destino

LAN
Red de area local, pocas maquinas conectadas entre si (casa o trabajo p ej.)

WLAN
Igual q LAN pero por red inalambrica

WAN
Red de área amplia, conexion entre varias LAN entre si (internet p ej.)

VLAN
Red de area local virtual (redes logicas o virtuales)
