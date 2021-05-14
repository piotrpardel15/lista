let books = [
    
    {
        title: "Book 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et repudiandae vitae voluptatem nesciunt possimus cumque illo, aut saepe velit minus magnam beatae hic explicabo!"
    }, 
    {
        title: "Book 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et repudiandae vitae voluptatem nesciunt possimus cumque illo, aut saepe velit minus magnam beatae hic explicabo!"
    }, 
    {
        title: "Book 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et repudiandae vitae voluptatem nesciunt possimus cumque illo, aut saepe velit minus magnam beatae hic explicabo!"
    },
    {
        title: "Book 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et repudiandae vitae voluptatem nesciunt possimus cumque illo, aut saepe velit minus magnam beatae hic explicabo!"
    },
]
function createdBooksView() {
    const grid = document.getElementById('grid')
    console.log(grid)

    grid.innerHTML = ''
    for(let i =0; i < books.length; i++) {
        
        const divBookItem = document.createElement('div')
        const divtopBook = document.createElement('div')
        const paragraftopBookTitle = document.createElement('p')
        const parafgrafTopBookIcon = document.createElement('p')
        const divBodyBook = document.createElement('div')
        const paragrafDescriptionBook = document.createElement('p')
        const divbottomBook = document.createElement('div')
        const btnEdite = document.createElement('button')
        const btnDelete = document.createElement('button')
        divBookItem.setAttribute('class', 'book-item')
        divtopBook.setAttribute('class', 'top-book')
        paragraftopBookTitle.setAttribute('class', 'top-book-title')
        parafgrafTopBookIcon.setAttribute('class', 'top-book-icon')
        divBodyBook.setAttribute('class', 'body-book')
        paragrafDescriptionBook.setAttribute('class', 'description-book')
        divbottomBook.setAttribute('class', 'bottom-book')
        btnEdite.setAttribute('class', 'main-btn-edite')
        btnDelete.onclick = () => deleteBook(books[i].title)
        btnDelete.setAttribute('class', 'main-btn-delete')
        paragraftopBookTitle.innerText = books[i].title
        paragrafDescriptionBook.innerText = books[i].description
        btnEdite.innerText = "Edytuj"
        btnDelete.innerText = "Usuń"
        divtopBook.appendChild(paragraftopBookTitle)
        divtopBook.appendChild(parafgrafTopBookIcon)
        divBodyBook.appendChild(paragrafDescriptionBook)
        divbottomBook.appendChild(btnEdite)
        divbottomBook.appendChild(btnDelete)
        divBookItem.appendChild(divtopBook)
        divBookItem.appendChild(divBodyBook)
        divBookItem.appendChild(divbottomBook)
        grid.appendChild(divBookItem)
    }

}

createdBooksView()

function deleteBook(title) {
    console.log(title)
    books = books.filter(item => item.title !== title )
    createdBooksView()
}
