# TERMINOLOGIA
==============================================================
# 1. ECMAScript v6

    Abreviado como ES6 o ES2015 es una especificación de lenguaje de programación publicada por ECMA International.
    Ejemplo de lenguaje basado en este estandar: Javascript

==============================================================
# 2. MIDDLEWARE - Software intermedio entre SO y aplicaciones
    Principales:
    - JSON
    - WebAPI
    - RestAPI

==============================================================
# 3. Deploy y Pipelines

==============================================================
# 4. Jenkins

==============================================================
# 5. Websockets vs ajax
    https://www.youtube.com/watch?v=qJT2FY1jjjE&ab_channel=EDteam


==============================================================
# 6. Cookies (WEB)

    QUE ES? 
        Fichero de datos que una página web le envía a tu ordenador con informacion sobre el visitante para "recordarte cuando accedas de nuevo"
    COMO FUNCIONA? 
        En la web moderna este archivo solo tiene un codigo de identificacion, el resto de la informacion esta en los propios sistemas back-end 
        Las webs actuales funcionan utilizando estos elementos

    NOTA 1: Las empresas publicitarias pueden usarlas para saber gustos y vender mejor publicidad.
    Nota 2: Siempre se solicitará el almacenamiento de la cookie en el ordenador.

    fuente:
    https://www.youtube.com/watch?v=QFrUTDfYgnM&ab_channel=MarketingDigitalyRedesSociales

==============================================================
# 7. CORS (Intercambio de recursos de origenes cruzados)

    Mecanismo de seguridad de los navegadores, cuando llega una peticion al sevidor, este deterinara si el origen tiene permitido acceder
    a la informacion y por cuantas veces, si no tiene los permisos mandara un error (403 - CORS) o de lo contrario permitira el envio de la infomacion  

    NOTA: se arregla instalando un paquete desde consola del lado del back-end

    fuente:
    https://www.youtube.com/watch?v=YfN9hElekuM&ab_channel=LeiferMendez

==============================================================
#  8. GUI (Graphical user interface)

    Interfaz de usuario grafica, para facilitar el uso de la app

==============================================================
# 9. CLI (Command-line Interface)

    Interfaz de linea de comandos, o interprete de linea de comandos

==============================================================
# 10. WYSIWYG (Editor de texto HTML) 

    Permite ver resultados en ejecucion

==============================================================
# 11. SCM, VCS (System Control Manager)

    Sistema de control de versiones como GIT

==============================================================
# 12. CMS (Content Managment System)

    Sistema de control de contenido o gestor de contenido como JOOMLA o WORDPRESS

==============================================================
# 13. UI (User Interface) /UX (User Experience)

    Diseño enfocado a la interfaz grafica y a la experiencia del usuario

==============================================================
# 14. WIP (Work in progress)

    En GIT por ejemplo al ahcer commit 'wip' significaria que el trabajo esta en progreso 

==============================================================
# 15. CDN (Delivery Content Network)

    Mandar llamar API, herramientas, funciones etc desde una URL, sin instalarlo en el equipo o proyecto

==============================================================
# 16. Hosting vs VPS (Virtual Private Server)

    Hosting - Servicio de almacenamiento de sitio/pagina/app web con servicios NO personalizables disponibles 
              pero de facil acceso y uso (pues todo ya esta configurado) como base de datos (MySQL p. ej.), Servidor (apache p. ej.) 
              y lenguaje de programación disponible (php p. ej.)
    Servidor VPS - Servidor virtual con capacidades (hardware) configurables y adaptables con total libertad
              de instalacion de paquetes, software, librerias, etc como node, MariaDB, PHP-Laravel etc y con total acceso SSH

==============================================================
# 17. NGINX

    Software libre y opensource de alto rendimiento, es una alternativa al servidor Apache, permite deplegar paginas, es decir 
    responder peticiones HTTP. 
    Anteriormente se usaba la arquitectura LAMP (Linux - Apache - MySQL - PHP) para sitios dinamicos, actualmente la arquitectura 
    se puede ajustar segun las necesidades, existiendo NGINX como servidor (software) para dicho fin, esta tecnologia estas mas acorde 
    al sofware actual como docker, api-rest, etc. Puede soportar millones de peticiones a un servidor 

    Ejemplo de empresas usando NGINX:
        - WORDPRESS
        - Netflix
        - Youtube
        - Facebook
        - Google

    NOTA: NGINX solo sirve para paginas estaticas, se necesitasn MODULOS DE PHP para desplegar paginas dinamicas 

    Instalacion y configuracion:
    https://www.youtube.com/watch?v=_LQv96MdtCk&ab_channel=PeladoNerd

==============================================================
# 18. ORM

    En bases de datos ORM es Mapeo Objeto-Relacional

    Permite convertir los datos de tus objectos en un formato correcto para poder guardar la información en una base de datos (mapeo) 
    creándose una base de datos virtual donde los datos que se encuentran en nuestra aplicación, quedan vinculados a la base de 
    datos (persistencia).

    NOTA. en node el modulo 'sequelize' permite trabajar con ORM

==============================================================
# 19. Arquitectura ARM (Advanced RISC Machine - máquina RISC avanzada)

    Arquitectura para chips x86 (32 bits) como procesadores para tareas muy especificas, tiene un bajo consumo energetico por la reduccion 
    de uso de transistores reduciendo la temperatura, una ventaja de esta arquitectura es que el procesador puede estar personalizada a la funcion 
    del producto que lo use
    
    Basado en el diseño R.I.S.C. (Conjunto reducido de instrucciones - enfocado a tener instrucciones
    simples y rapidas de ejecutar, los porgramas suelen ser de mas lineas de codigo) 

    Ejemplos de esta arquitectura:
        - Raspberry pi
        - SmartPhone, procesadores snapdragon
        - Apple esta apostando por esta arq.


==============================================================
# 20. Samba

    Alternativa de FTP para intercambio de ficheros dentro de la misma red entre un dispositivo y una PC con Windows
    ya que Samba fue creado por windows, su intalacion 