ТудаСюдаАвиа

необходимо поднять сервис на nginx/nodejs/dynamodb доступный под паролем.
на входе html/get параметры:
- код аэропорта
- дата
 
на выходе график/json в разрезе каждого терминала аэропорта
- почасовая нагрузка в пассажирах на вылет
- почасовая нагрузка в пассажирах на прилет
 
данные надо догадаться откуда брать и в живую
учесть кэширование на 1 день по ключу аэропорт+дата
справочники тоже - найти и сохранить.