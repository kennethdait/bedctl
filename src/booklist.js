(function(){
  'use strict';

  /**
   * Book Class
   * Represents a book
   */
  class Book {
    constructor(title,author,isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }
   /**
    * UI Class
    * Handle UI tasks
    */
   class UI {
     static displayBooks() {

      // TODO: simulating local storage (with hard-coded data)
       const storedBooks = [
         {
           title: 'Book One',
           author: 'John Doe',
           isbn: '3434434'
         },
         {
          title: 'Book Two',
          author: 'Jane Doe',
          isbn: '4552525'
        },
        {
          title: 'Book Three',
          author: 'Tony Stark',
          isbn: '34433677'
        },
        {
          title: 'Book Four',
          author: 'Peter Parker',
          isbn: '4327876'
        },
        {
          title: 'Book Five',
          author: 'Connick Dait',
          isbn: '44767744'
        },
       ];

       const books = storedBooks;

       books.forEach((book) => UI.addBookToList(book));
     }

     static addBookToList(book) {
       // create the `table` row, to insert into the book-list table
       const list = document.querySelector('#book-list');
       
       const row = document.createElement('tr');
       row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;

      list.appendChild(row);
     }

     static deleteBook(target) {
       // ensure element we delete, has the classname "delete"
       if(target.classList.contains('delete')) {
         target.parentElement.parentElement.remove();
       }
     }

     static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
     }
   }



    /**
     * Store Class
     * Handles storage
     */



     // Event: Display books
     document.addEventListener('DOMContentLoaded', UI.displayBooks());

     // Event: Add a book
     document.querySelector('#book-form').addEventListener('submit', (e) => {

      e.preventDefault();

       // get form values
       const title = document.querySelector('#title').value;
       const author = document.querySelector('#author').value;
       const isbn = document.querySelector('#isbn').value;

       // instantiate a book
       const book = new Book(title, author, isbn);
       console.table(JSON.stringify(book,null,4));
       
       // and add to list
       UI.addBookToList(book);

       
       // clear fields once submitted
       UI.clearFields();
       
     });


     // Event: Remove a book
     document.querySelector('#book-list').addEventListener('click', (e) => {
       //console.log(e.target);
       UI.deleteBook(e.target);
     });


}());