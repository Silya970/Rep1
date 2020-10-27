<script>
'use strict';

let login = prompt('Вход', );

let message = (login == "Сотрудник") ? 'Привет' : 
(login == "Директор") ? 'Здравствуйте' :
(login == "") ? 'Нет логина' :
'';
 
  alert( message );
  </script>