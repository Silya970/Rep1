

    <script>
        'use strict';
        
        let login = prompt('Кто там?','');
        if(login == 'Admin'){
          let password = prompt ('Какой пароль?','');
          if(password == 'Я главный'){
            alert('Здравствуйте');
          }else if(password == ''||password==null){
            alert('Отменено');
          }else{
            alert('Неверный пароль');
          }
        }else if(login==''||login==null){
           alert('Отменено');
        }else{
          alert('Я вас не знаю');
        }
        </script>

