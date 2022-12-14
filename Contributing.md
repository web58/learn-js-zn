# Как работать с Git на проекте

Поддерживайте ваш репозиторий обновлённым. Когда наставник принимает ваш пулреквест, он попадает в мастер-репозиторий, но не в ваш форк.

#### 1. Не коммитьте ничего самостоятельно в `master` вашего репозитория

Это помешает вам аккуратно обновлять ваш репозиторий, могут возникнуть конфликты.

#### 2. Прежде чем приступать к новому заданию, обновите `master`

Обновить свой репозиторий из мастер-репозитория можно так:

```
# В вашей локальной копии переключитесь в ветку master
git checkout master

# Заберите изменения из репозитория Академии¹
git pull webstudia master

# Отправьте изменения в ваш форк на Гитхабе
git push
```

¹ В `webstudia` должна быть ссылка на мастер-репозиторий. Если его там нет, добавьте:

```
git remote add webstudia git@github.com:web58/learn-js-zn.git
```

Когда вы обновили `master`, создайте ветку для нового задания:

```
git checkout -b module2-task1
```

`module2-task1` — это название ветки. В задании будет указано правильное название ветки.

---

#### Есть вопрос?

Посмотрите [коллекцию часто задаваемых вопросов по Git](http://firstaidgit.ru).
