import bookPreview from './book-preview.cmp.js';


export default{
    props: ['books'],
    template: `
        <section class="book-list books-container">
                <div v-for="currBook in books" :key="currBook.id" >
                   <book-preview :book="currBook" @click.native="bookSelected(currBook.id)" />
                </div>
        </section>
    `,
    components: {
        bookPreview
    },
    methods: {
        bookSelected(bookId) {
            this.$router.push(`/book/${bookId}`)
        }
    },
}