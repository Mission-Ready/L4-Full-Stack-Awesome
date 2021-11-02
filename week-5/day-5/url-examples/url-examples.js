// define a url
url = "https://trademe.co.nz/a/marketplace/books/search?search_string=books"

// use the built in URL class to create a new url object
const urlVar = new URL(url)

// log new url object to the console to view provided properties
console.log(urlVar)

console.log(urlVar.href) // gives the full url including host, path and query string (https://www.trademe.co.nz/a/marketplace/books/search?search_string=books)
console.log(urlVar.origin) // gives the url including the protocol and host (https://www.trademe.co.nz)
console.log(urlVar.hostname) // gives the hostname of the url (www.trademe.co.nz)
console.log(urlVar.pathname) // gives the path of the url (/a/marketplace/books/search)
console.log(urlVar.search) // gives the query params as a string (?search_string=books)
console.log(urlVar.searchParams) // gives the query params as an object ({ 'search_string': 'books' })