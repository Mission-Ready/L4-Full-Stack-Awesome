// define a url
const url = "https://www.trademe.co.nz/a/marketplace/computers/laptops/search?search_string=laptop&condition=new&shipping_method=pickup&price_min=30&price_max=20"

// use the built in URL class to create a new url object
const urlVar = new URL(url)

// log new url object to the console to view provided properties
console.log(urlVar)

console.log('urlVar.origin: ', urlVar.origin) // gives the url including the protocol and host (https://www.trademe.co.nz)
console.log('urlVar.pathname: ', urlVar.pathname) // gives the path of the url (/a/marketplace/books/search)
console.log('urlVar.searchParams: ', urlVar.searchParams) // gives the query params as an object ({ 'search_string': 'books' })