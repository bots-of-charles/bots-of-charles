const tldata={
	"tl_nb1":"Inicio",
	"tl_nb2":"Guía",
	"tl_nb3":"Arriba",
	"tl_nb4":"English",
	"tl_page_title":"Referencia de comandos de MF Shell",
	"tl_sub":"Bots de Telegram",
	"show_all_commands":"Mostrar todos los comandos",
	"search_a_command":"Buscar un comando",
	"search_button":"Buscar",
	"cmd_about":"Muestra una breve información acerca del bot, el administrador, y un enlace al sitio web interno del bot",
	"cmd_help":"Muestra enlaces a la guía de usuario y la referencia de comandos del bot (o sea, este sitio web)",
	"cmd_start":"Muestra información real del bot y de su sesión en el bot",
	"cmd_ls":"Lista los contenidos de una ruta<br><br>N = (Opcional) Selección simple o de rango<br><br>La ruta puede ser el CWD (cuando se ejecuta sin argumentos), un subdirectorio o un pariente del CWD (una selección simple como argumento)<br>Si el argumento es una selección de rango, mostrará los elementos seleccionados. Esto puede usarse para hacer pruebas de rango",
	"cmd_cd":"Cambia de CWD<br><br>N = (Obligatorio) Selección simple de un subdirectorio presente en el CWD ó un pariente del CWD",
	"cmd_back":"Cambia el CWD al padre<br>Falla si el CWD es la raíz '/'",
	"cmd_adl":"Activa o desactiva el listado automático de directorio (ADL en inglés)<br>Desactivado de forma predeterminada<br>De forma predeterminada, la única forma de que el contenido del CWD sea listado de forma automática es después de ejecutar '/cd' y '/back', pero con el ADL activado, el listado automático está disponible para más comandos que trabajen con archivos",
	"cmd_mkdir":"Crea un nuevo subdirectorio (una carpeta) en el CWD<br><br>N = (Obligatorio) Nombre del subdirectorio<br><br>El comando da  error si hay un recurso con el mismo nombre en el CWD<br>Este comando es compatible con el modo ADL",
	"cmd_mv":"Uso 1<br>Mover uno o más recursos (archivos o directorios) presentes en el CWD a un subdirectorio o pariente del CWD<br>Los argumentos A y B son obligatorios<br>A = Selección simple, rango o libre de elementos del CWD<br>B = Selección simple de un subdirectorio o un pariente del CWD<br><br>Uso 2<br>Cambiar el nombre de un recurso del CWD<br>los argumentos C y D son obligatorios<br>C = Selección simple de un recurso del CWD<br>D = Nuevo nombre para el recurso. En el caso de ser un archivo, debe incluirse el sufijo (extensión)",
	"cmd_rm":"Elimina uno o más recursos del CWD<br><br>N = (Obligatorio) Selección simple, rango o libre de recursos del CWD<br><br>Este comando no pide confirmación al borrar: los recursos seleccionados son borrados de forma permanente y al instante<br>Usted bajo ningún concepto debe eliminar recursos que formen parte de operaciones pendientes o en curso de otros comandos",
	"cmd_bren":"Renombrador de archivos en masa<br><br>Los argumentos X, Y y Z son obligatorios<br>X = Selección simple, rango o libre de recursos en el CWD. En el caso particular de seleccionar a un directorio con un selector simple, lo que se hace es seleccionar todos los archivos que tenga el directorio dentro. En el caso de la selección por rango o libre todos los subdirectorios seleccionados son ignorados. El comando arrojará un error en caso de que la cantidad de archivos a procesar sea menor de 2<br>Y = El tipo de operación. Hay 3 operaciones: 'A' (añadir), 'E' (enumerar), y 'R' (remplazar)<br>Z = Parámetros de la operación. Los parámetros deben estar en cierto formato según el tipo de operación ya que cada tipo de operación lleva su propio formato<br><br>Los parámetros de operaciones<br>A (agregar)<br>Agrega una cadena de texto adicional al principio (prefijo) o al final (sufijo) del tallo (el nombre del archivo sin la extensión<br>Formato (refijo): 'StringToAdd/'<br>Formato (sufijo):  '/StringToAdd'<br>E (enumerar): Renombra los archivos de modo tal que quede así: 'NuevoNombre + Número + extensión')<br>Formato: 'NewStem/InitialNumber/Digits'<br>R (remplazar):<br>Encuentra en el nombre de cada archivo dado un acadena de caracteres específica y la remplaza por una cadena de caracteres diferente<br>Format: 'ExistenteEnElNombre/NuevoTexto'<br><br>Cuando ejecuta este comando, va a salir un mensaje con el resultado de renombrar los archivos seleccionados pidiendo una confirmación para aplicar los cambios, Si ejecuta '/ok', los cambios serán aplicados. Si usa cualquier otro comando o una órden distinta de '/bren', la propuesta para renombrar se cancela o se cambia",
	"cmd_seven":"Utilidad de archivado sin compresión<br><br>El argumento 'A' es obligatorio, los argumentos 'B' y 'C' son optionales pero el argumento 'C' depende de la existencia de 'B'<br>A = Selección simple de un recurso del CWD. En el caso de ser un subdirectorio, seleccionará todos los archivos y subdirectorios recursivamente. La selección no funciona para parientes del CWD<br>B = Entero positivo o cero. Un entero positivo indica el tamaño de cada parte MegaBytes (No hay necesidad de poner M o MB, etc... solamente el número). En el caso de ser cero, se creará un archivo único. El valor predeterminado es cero, asi que si omitiera este argumento, lo que ocurrirá es que se creará un archivo único<br>C = Contraseña para cifrar los archivos resultantes<br><br>Los archivos creados son archivos 7z con cero compresión. La razón por la cual este comando no aplica compresión es porque el objetivo de este comando es agrupar o dividir archivos a alta velocidad sin importar el tamaño de los archivos resultantes (el mismo tamaño que los archivos originales). La compresión es lenta y tiende a consumir muchos recusos de cómputo",
	"cmd_bren_tutorial":"Ver tutorial",
	"cmd_info":"Muestra información de un archivo de Telegram<br>Se usa respondiendo a un archivo de Telegram",
	"cmd_ss":"Toma capturas de un archivo de vídeo y sube las imágenes a tu chat con el bot<br><br>El argumento F es obligatorio; los argumentos Q y M son opcionales pero para que M exista, primero debe existir Q<br>F = Selección simple de un archivo de vídeo en el CWD<br>Q = Cantidad de imágenes a generar. La cantidad predeterminada es de 10 imágenes<br>M = Opciones. Hay dos opciones: la opción \"g\" para subir las imágenes de forma gradual en lugar de subirlas como un álbum y la opción \"f\" para subir los archivos de imágenes como archivos en vez de como imágenes. Puede activar una o ambas opciones a la vez, asi que en total serían 3 posibles casos. El tercer caso es una combinación de las dos primeras ('gf' o 'fg')<br><br>Las capturas de imágenes se hacen dependiendo de la duración del vídeo y la cantidad solicitada<br>En el caso de no poder subir una o más imágenes, los archivos se quedan en el CWD. Puede acceder a ellas por la interfaz web o subirlas a mano con /upload",
}
