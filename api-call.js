
//using fetch

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(dta=>console.log(dta))

