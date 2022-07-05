<h1>Github issues api</h1>

<h2>Просматривать issue произвольного репо - localhost:5000/api/repos/:owner/:repo/issues</h2>
<h2>Пример - localhost:5000/api/repos/facebook/react/issues</h2>

<h2>Фильтрация по страницам - localhost:5000/api/repos/:owner/:repo/issues?per_page=число issues</h2>
<h2>Сортировка Asc/Desc - localhost:5000/api/repos/:owner/:repo/issues?direction=asc</h2>
<h2>Сортировка по комментам (к примеру) - localhost:5000/api/repos/:owner/:repo/issues?sort=comments</h2>
<h3>Можно группировать query params - Пример: ?per_page=1&direction=asc&sort=comments</h3>