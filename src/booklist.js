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
   }



    /**
     * Store Class
     * Handles storage
     */



     // Event: Display books


     // Event: Add a book


     // Event: Remove a book


}());