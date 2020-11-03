import { bookService } from '../services/book-service.js';

export default {
    template: `
        <section class="book-details" v-if="book">
            <div class="details-view">
                <h4>Title: {{book.title}}</h4>
                <h4>Subtitle: {{book.subtitle}}</h4>
                <img :src="book.thumbnail" width=200 height=250/>
                <h4>Authors: {{...book.authors}}</h4>
                <h4>Published Date: {{book.publishedDate}}</h4>
                <h4>Language: {{book.language}}</h4>
                <h4>Reading time: {{calculateSize}}</h4>
                <h4>Status: {{calculateAge}}</h4>
                <h4 v-bind:class="{red: isExpensive,green: isCheap}">Price: {{book.listPrice.amount}}</h4>
                <div><img width="100px" src="../img/sale.png" v-if="isOnSale"/></div>
                <button class="close-details" @click=goBackToBooks>Back</button>
            </div>

            <div>
            <form class="review" @submit.prevent="saveReview">
                <h3>Review this book</h3>
                <input type="text" placeholder="Enter full name" v-model="review.name" />
                <select v-model="review.rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <div>
                <textarea v-model="review.text" rows="10" cols="50"></textarea>
                </div>
                <button>Save</button>
            </form>  

            <div class="reviews-list">
                <h3>Reviews</h3>
                <div v-for="review in book.reviews" :key="review.id" >
                   <h4>Reviewed by: {{review.name}} Rating: {{review.rating}} Review: {{review.text}}</h4>
                </div>
            </div>

        </div>

        </section>
    `,
    data() {
        return {
            book: null,
            review: bookService.getEmptyReview()
        }
    },
    computed: {
        calculateSize() {
            if (this.book.pageCount > 500) {
                return 'Long reading';
            } else if (this.book.pageCount > 200) {
                return 'Decent reading';
            } else {
                return 'Light reading';
            }
        },
        calculateAge() {
            var dt = new Date().getFullYear();
            if (dt - this.book.publishedDate > 10) return 'Veteran';
            if (dt - this.book.publishedDate < 1) return 'New';
        },
        isExpensive() {
            return this.book.listPrice.amount > 150;
        },
        isCheap() {
            return this.book.listPrice.amount < 20;
        },
        isOnSale() {
            return this.book.listPrice.isOnSale;
        }
    },
    methods: {
        goBackToBooks() {
            this.$router.push(`/book`);
        },
        saveReview(){
            bookService.saveReview(this.book.id, JSON.parse(JSON.stringify(this.review)));
            this.review = bookService.getEmptyReview();
        }
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getBookById(id)
            .then(book => this.book = book)
    }
}