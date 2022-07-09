<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<h2 class="hello-title">Hello ${name}! from Java Controller</h2>
<div id="app">
  {{ message }}
  <div>
    <button @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</div>
<script src="${pageContext.request.contextPath}/webjars/vue/3.0.5/dist/vue.global.prod.js"></script>
<script type="module" src="${pageContext.request.contextPath}/hello-world.js"></script>
</body>
</html>