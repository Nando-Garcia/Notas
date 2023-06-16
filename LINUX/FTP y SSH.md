FTP y SSH
==================================================================================================

*FTP*

Para comunicacion mas directa con cualquier SO linux se puede habilitar el puerto 21
para transferecnia de archivos por el protocolo FTP, en lugar de por USB u otro medio, en 
este ejemplo se realizo con una Raspberry con el SO Raspbian:

# 1. Instalar el servicio vsftpd
    sudo apt install vsftpd
# 2. Editar el archivo /etc/vsftpd.conf
    sudo nano /etc/vsftpd.conf

    Buscar los siquientes comentarios y quita el “#” al inicio de cada uno
        #write_enable=YES
        #chroot_local_user=YES

    Agregar las siguientes 2 lineas en donde sea, en este caso, al final
        listen_port=21                  - Se puede usar otro puerto, pero usar el preestablecido por linux, 21
        allow_writeable_chroot=YES
# 3. Reinicia el servicio vsftpd
    sudo service vsftpd restart

# 4. Verificar servicio corriendo y el puerto
    sudo service vsftpd status                      - servicio 
    sudo netstat -netplan | grep vsftpd             - puerto 

# 5. Verificar desde PC externa conectada a la misma red
    Usar WinSCP p ej. ingresar credenciales de SO y usar puerto 21

fuente:
https://estudiaredes.com/linux/como-crear-un-servidor-ftp-en-una-raspberry-pi/


*SSH*

Para habilitar el purto 22 dentro de linuz no hace falta instalar nada solo iniciar el servicio
    sudo systemctl enable ssh 
    sudo systemctl start ssh