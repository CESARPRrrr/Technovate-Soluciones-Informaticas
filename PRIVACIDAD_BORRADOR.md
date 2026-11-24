# Borrador de aviso de privacidad para TECHNOVA

**Estado: borrador pendiente de revisión y aprobación. No publicar como aviso legal ni recopilar datos reales hasta completar y validar los campos pendientes con la persona responsable y, cuando corresponda, asesoría legal.**

## Hechos comprobables en el código actual

- El formulario de la página envía por `POST` a `https://formspree.io/f/xkjjlwdr`.
- Los campos son nombre, correo electrónico, teléfono opcional y mensaje.
- El navegador valida campos obligatorios, el formato de correo y la longitud mínima/máxima establecida en el formulario.
- El código cliente envía el formulario a Formspree y muestra un mensaje según la respuesta HTTP o un error de conexión. El proyecto no contiene un servidor propio ni define políticas de retención de datos.
- El identificador de formulario está incluido en el HTML público para que el navegador pueda llamar al servicio; no es una contraseña ni un secreto. La configuración, titularidad y funcionamiento actual de la cuenta Formspree no se han verificado mediante un envío.
- El hosting aún no está conectado; por tanto, el proveedor y sus condiciones de tratamiento no están confirmados.

## Información que debe confirmar el responsable antes de publicar

1. Nombre legal de la persona o entidad responsable del tratamiento, domicilio y jurisdicción aplicable.
2. Medio de contacto para consultas y solicitudes de privacidad.
3. Finalidades concretas del tratamiento y base legal aplicable.
4. Si el teléfono es necesario o realmente opcional para la atención.
5. Proveedor Formspree, titular de la cuenta, configuración activa, ubicación/procesamiento de datos, subprocesadores y transferencias internacionales.
6. Plazos de conservación, criterios de eliminación y quién puede acceder a los mensajes.
7. Derechos disponibles para las personas, procedimiento y plazos de respuesta conforme a la jurisdicción.
8. Proveedor de hosting finalmente elegido y datos técnicos que este pueda registrar.
9. Si se usan cookies, analítica, píxeles u otros mecanismos adicionales; no se deben afirmar ausencias sin comprobar la configuración final.
10. Aprobación del texto final, fecha de vigencia y enlace visible junto al formulario.

## Texto de trabajo (no publicar hasta completar)

> **Responsable:** [NOMBRE LEGAL Y DOMICILIO DEL RESPONSABLE, PENDIENTE DE CONFIRMACIÓN].  
> **Contacto de privacidad:** [CORREO O CANAL APROBADO, PENDIENTE DE CONFIRMACIÓN].  
>
> Si envías el formulario, los datos que proporciones —nombre, correo electrónico, mensaje y, si decides indicarlo, teléfono— se transmitirán al endpoint de Formspree configurado en el sitio. La identidad del destinatario final y quién puede acceder a esos datos deben confirmarse antes de publicar este texto.  
>
> **Finalidad y base legal:** [COMPLETAR Y VALIDAR SEGÚN EL USO REAL Y LA JURISDICCIÓN].  
> **Conservación, destinatarios y transferencias:** [CONFIRMAR CON FORMSPREE Y EL RESPONSABLE].  
> **Derechos y forma de ejercerlos:** [COMPLETAR CONFORME A LA LEGISLACIÓN APLICABLE].  
> **Hosting y datos técnicos:** [COMPLETAR CUANDO SE ELIJA Y CONFIGURE EL PROVEEDOR].  
>
> [AÑADIR FECHA DE VIGENCIA Y CUALQUIER OTRO AVISO/CONSENTIMIENTO QUE EXIJA LA REVISIÓN LEGAL].

No se ha enviado información real a Formspree como parte de esta revisión. Este documento describe el estado técnico observado, no confirma que la cuenta esté activa ni constituye asesoría legal.
