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