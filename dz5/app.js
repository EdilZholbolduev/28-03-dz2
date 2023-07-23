let books = []
let otherBooks = []
let enterBook = prompt('enter a book name')
let aboutBook = enterBook.toLowerCase()
function nameOfBook(){ 
if(aboutBook.includes("у")){
   books.push(enterBook)
   console.log('Book name where we lave a russian letter у', books)
}else{
   otherBooks.push(enterBook)
   console.log('A book where is not any russian letter у',otherBooks)
}
}
nameOfBook()