<h2>Github issues api</h2>
<h3>npm i && npm start</h3>

<h4>Просматривать issue произвольного репо - localhost:5000/api/repos/:owner/:repo/issues</h4>
<h4>Пример - localhost:5000/api/repos/facebook/react/issues</h4>

<h4>Фильтрация по страницам - localhost:5000/api/repos/:owner/:repo/issues?per_page=число issues</h4>
<h4>Сортировка Asc/Desc - localhost:5000/api/repos/:owner/:repo/issues?direction=asc</h4>
<h4>Сортировка по комментам (к примеру) - localhost:5000/api/repos/:owner/:repo/issues?sort=comments</h4>
<h5>Можно группировать query params - Пример: ?per_page=1&direction=asc&sort=comments</h5>
