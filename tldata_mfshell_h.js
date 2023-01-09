const tldata={
	"tl_nb1":"Inicio",
	"tl_nb2":"Guía",
	"tl_nb3":"Arriba",
	"tl_nb4_hor":"English",
	"tl_nb4_ver":"🇬🇧",
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
	"cmd_back":"Cambia el CWD al padre<br>Falla si el CWD '/' es la raiz",
	"cmd_adl":"Activa o desactiva el listado automático de directorio (ADL en inglés)<br>Desactivado de forma predeterminada<br>De forma predeterminada, la única forma de que el contenido del CWD sea listado de forma automática es después de ejecutar '/cd' y '/back', pero con el ADL activado, el listado automático está disponible para más comandos que trabajen con archivos",
	"cmd_mkdir":"Crea un nuevo subdirectorio (una carpeta) en el CWD<br><br>N = (Obligatorio) Nombre del subdirectorio<br><br>El comando da  error si hay un recurso con el mismo nombre en el CWD<br>Este comando es compatible con el modo ADL",
	"cmd_mv":"Uso 1<br>Mover uno o más recursos (archivos o directorios) presentes en el CWD a un subdirectorio o pariente del CWD<br>Los argumentos A y B son obligatorios<br>A = Selección simple, rango o libre de elementos del CWD<br>B = Selección simple de un subdirectorio o un pariente del CWD<br><br>Uso 2<br>Cambiar el nombre de un recurso del CWD<br>los argumentos C y D son obligatorios<br>C = Selección simple de un recurso del CWD<br>D = Nuevo nombre para el recurso. En el caso de ser un archivo, debe incluirse el sufijo (extensión)",
	"cmd_rm":"Elimina uno o más recursos del CWD<br><br>N = (Obligatorio) Selección simple, rango o libre de recursos del CWD<br><br>Este comando no pide confirmación al borrar: los recursos seleccionados son borrados de forma permanente y al instante<br>Usted bajo ningún concepto debe eliminar recursos que formen parte de operaciones pendientes o en curso de otros comandos",
	"cmd_bren":"Renombrador de archivos en masa<br><br>Los argumentos X, Y y Z son obligatorios<br>X = Selección simple, rango o libre de recursos en el CWD. En el caso particular de seleccionar a un directorio con un selector simple, lo que se hace es seleccionar todos los archivos que tenga el directorio dentro. En el caso de la selección por rango o libre todos los subdirectorios seleccionados son ignorados. El comando arrojará un error en caso de que la cantidad de archivos a procesar sea menor de 2<br>Y = El tipo de operación. Hay 3 operaciones: 'A' (añadir), 'E' (enumerar), y 'R' (remplazar)<br>Z = Parámetros de la operación. Los parámetros deben estar en cierto formato según el tipo de operación ya que cada tipo de operación lleva su propio formato<br><br>Los parámetros de operaciones<br>A (agregar)<br>Agrega una cadena de texto adicional al principio (prefijo) o al final (sufijo) del tallo (el nombre del archivo sin la extensión<br>Formato (refijo): 'StringToAdd/'<br>Formato (sufijo):  '/StringToAdd'<br>E (enumerar): Renombra los archivos de modo tal que quede así: 'NuevoNombre + Número + extensión')<br>Formato: 'NewStem/InitialNumber/Digits'<br>R (remplazar):<br>Encuentra en el nombre de cada archivo dado un acadena de caracteres específica y la remplaza por una cadena de caracteres diferente<br>Format: 'ExistenteEnElNombre/NuevoTexto'<br><br>Cuando ejecuta este comando, va a salir un mensaje con el resultado de renombrar los archivos seleccionados pidiendo una confirmación para aplicar los cambios, Si ejecuta '/ok', los cambios serán aplicados. Si usa cualquier otro comando o una órden distinta de '/bren', la propuesta para renombrar se cancela o se cambia",
	"cmd_seven":"Utilidad de archivado sin compresión<br><br>El argumento 'A' es obligatorio, los argumentos 'B' y 'C' son optionales pero el argumento 'C' depende de la existencia de 'B'<br>A = Selección simple de un recurso del CWD. En el caso de ser un subdirectorio, seleccionará todos los archivos y subdirectorios recursivamente. La selección no funciona para parientes del CWD<br>B = Entero positivo o cero. Un entero positivo indica el tamaño de cada parte MegaBytes (No hay necesidad de poner M o MB, etc... solamente el número). En el caso de ser cero, se creará un archivo único. El valor predeterminado es cero, asi que si omitiera este argumento, lo que ocurrirá es que se creará un archivo único<br>C = Contraseña para cifrar los archivos resultantes<br><br>Los archivos creados son archivos 7z con cero compresión. La razón por la cual este comando no aplica compresión es porque el objetivo de este comando es agrupar o dividir archivos a alta velocidad sin importar el tamaño de los archivos resultantes (el mismo tamaño que los archivos originales). La compresión es lenta y tiende a consumir muchos recusos de cómputo",
	"cmd_bren_tutorial":"Ver tutorial",
	"cmd_wget":"Descargador web general<br><br>Si corre este comando sin argumentos, saldrá una lista de sitios web y plataformas con soporte directo<br>El único argumento que lleva este comando es un grupo de enlaces separados por espacio, puede ser uno o más enlaces<br>Este comando, a pesar de tener una lista de compatibilidad, puede también tratar de descargar enlaces no soportados, sin embargo, al ser enlaces no soportados, no hay garantías (es que no se pueden dar ni exigir) de que el enlace se baje y esto se debe a que no todos los enlaces aparentemente directos son directos, y es por esta razón, por la cual lo que se hace es agregar sitios al comando",
	"cmd_video":"Descargador de vídeo<br><br>Ejecutar este comando sin argumentos mostrará una lista de los sitios y plataformas con soporte directo<br><br>El primer argumento es un grupo de unidades<br>El segundo argumento es el formato predeterminado solo para ese grupo de unidades<br><br>Unidades<br>Hay 2 tipos de unidades: las especificadas y las no especificadas<br>Las unidades especificadas son URLs que se van a procesar con un formato específico. Las unidades específicas tienen la sgte forma: 'Formato:URL'<br>Las unidades sin especificar son URLs sin un formato especificado, el formato que se usa en este caso es el predeterminado. Las unidades sin especificar tienen la sgte forma: 'URL'<br><br>Formatos<br>Los formatos se dividen en varios grupos: 'EXA','240','360','480','720','2K'<br>Entre los formatos, 'EXA' es para extraer audio y el resto son grupos de resolución de video, con '720' siendo el predeterminado, a no ser que se indique lo contrario<br>Solo un puñado de sitios y plataformas entre los que ya están soportados soporta también los formatos; ejecute el comando sin argumentos para ver los sitios y plataformas soportados",
	"cmd_video_examples":"Ejemplos",
	"cmd_video_e1":"Muestra los sitios y plataformas soportados",
	"cmd_video_e2":"Encola 5 URLs",
	"cmd_video_e3":"Descarga 3 URLs teniendo a '360' como formato",
	"cmd_video_e4":"La primera URL se descarga como audio, la segunda se descarga en '480'",
	"cmd_video_e5":"La primera y última URLs se descargan en el formato predeterminado, solamente la segunda será descargada en '360'",
	"cmd_vconf":"Herramienta para configurar a /video<br><br>La configuración se compone de 'contextos': contexto persistente y contexto volátil<br>Cuando se usa /video, el comando primero busca el contexto volátil, en el caso de no existir, la configuración leida es la del contexto persistente. Si la ejecución del comando fue exitosa (se agregan uno o más elementos a la cola de /video) y el contexto usado fue el volátil, se elimina, ya que el contexto volátil es desechable y de un solo uso<br><br>Uso 1:<br>El argumento 'K' es una opción existente para configurar, y el 'V' es un valor compatible con la opción<br>Si no se especifica el valor, en su lugar aparecerá información sobre la opción, los posibles valores que puede tomar y un ejemplo de uso<br><br>Uso 2:<br>El argumento 'A' es la acción a realizar sobre un contexto, y el argumento 'C' es el contexto. Las 2 acciones son 'sav', para guardar y 'res', para resetear/restaurar<br>Los contextos (argumento 'C') son 'per', para el pesistente y 'vol' para el volátil<br>La acción 'sav' sirve para guardar la configuración del contexto volátil como contexto persistente. Con exta acción no hay necesidad de usar el argumento 'C'<br>La acción 'res' al usarla sobre el contexto persistente, lo que hace es restaurar la configuración original al contexto persistente; si se usa sobre el contexto volátil, lo que pasará es que se resetea el contexto volátil, igualándose al contexto persistente<br><br>En el propio comando hay ejemplos de uso",
	"cmd_info":"Muestra información de un archivo de Telegram<br>Se usa respondiendo a un archivo de Telegram",
	"cmd_avcat":"Concatena archivos de vídeo o archivos de audio<br><br>El argumento S es obligatorio, el argumento F es opcional<br>S = Seleccion de rango o libre de archivos de video ó archivos de audio<br>F = Nobre del archivo resultante sin la extensión (el tallo). En el caso de no especificar un nombre, el comando generará uno de forma automática<br><br>Los archivos seleccionados pueden ser solo archivos de vídeo ó archivos de audio: no puede haber archivos de vídeo y de audio en una selección<br>Los archivos seleccionados pueden tener diferente formato (contenedor) pero deben tener los mismos codecs dentro<br>La extensión del archivo resultante (así como su formato o contenedor) se determinan de forma automática según los archivos seleccionados",
	"cmd_ss":"Toma capturas de un archivo de vídeo y sube las imágenes a tu chat con el bot<br><br>El argumento F es obligatorio; los argumentos Q y M son opcionales pero para que M exista, primero debe existir Q<br>F = Selección simple de un archivo de vídeo en el CWD<br>Q = Cantidad de imágenes a generar. La cantidad predeterminada es de 10 imágenes<br>M = Opciones. Hay dos opciones: la opción \"g\" para subir las imágenes de forma gradual en lugar de subirlas como un álbum y la opción \"f\" para subir los archivos de imágenes como archivos en vez de como imágenes. Puede activar una o ambas opciones a la vez, asi que en total serían 3 posibles casos. El tercer caso es una combinación de las dos primeras ('gf' o 'fg')<br><br>Las capturas de imágenes se hacen dependiendo de la duración del vídeo y la cantidad solicitada<br>En el caso de no poder subir una o más imágenes, los archivos se quedan en el CWD. Puede acceder a ellas por la interfaz web o subirlas a mano con /upload",
	"cmd_ss_1":"Ver publicación",
	"cmd_ss_2":"Ver ejemplo de uso",
}
