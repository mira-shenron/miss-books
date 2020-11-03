import { bookService } from '../services/book-service.js';
import bookList from './book-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookFilter from './book-filter.cmp.js';
import addBook from './add-book.cmp.js';

export default {
    template: `
        <section class="book-app">
            <add-book />
            <book-filter v-if="!selectedBook" @doFilter="setFilter" />
            <book-list v-if="!selectedBook" @select="selectBook($event)" :books="booksToShow" />
            <book-details :book="selectedBook" v-if="selectedBook" @close=closeDetails></book-details>
        </section>
    `,
    components: {
        bookList,
        bookDetails,
        bookFilter,
        addBook
    },
    data() {
        return {
            filterBy: null,
            books: '',
            selectedBook: null
        }
    },
    created() {
        bookService.getBooks().then(books => this.books = books);
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;

            const txt = this.filterBy.byName.toLowerCase();
            var from = this.filterBy.from;
            var to = this.filterBy.to;
            if(!to) to = Infinity;
            
            return this.books.filter(book => book.title.toLowerCase().startsWith(txt))
            .filter(book => book.listPrice.amount > from)
            .filter(book => book.listPrice.amount < to);
        }
    },
    methods: {
        selectBook(bookId) {
            this.isSelected = true;
            bookService.getBookById(bookId).then(book => this.selectedBook = book);

        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        closeDetails() {
            this.selectedBook = null;
        }
    }
}