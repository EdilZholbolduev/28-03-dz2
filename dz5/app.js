let getBooks = []
let otherBooks = []
let enterBook = prompt('enter a book name')
let aboutBook = enterBook.toLowerCase()

function nameOfBook(...books){ 
if(aboutBook.includes("у")){
   getBooks.push(enterBook)
   console.log('Book name where we lave a russian letter у',getBooks)
}else{
   otherBooks.push(enterBook)
   console.log('This book does not contains a russian letter у',otherBooks)
}
}
nameOfBook(enterBook)