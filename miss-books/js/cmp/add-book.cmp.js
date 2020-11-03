import { bookService } from '../services/book-service.js';
import { searchService } from '../services/search-service.js';

export default {
    template: `
        <section class="add-book">
            <h2>Find and Add Book</h2>
            <input type="text" v-model="searchStr" placeholder="Enter Book Name"/>
            <button @click="searchBooks">Find</button>
            <div v-for="result in results" :key="result.id" >
                   <div>{{result.volumeInfo.title}} <button @click="addBook(result)">+</button></div>
                </div>
        </section>
    `,
    data() {
        return {
            searchStr:'',
            results: ''
        }
    },
    methods: {
        searchBooks(){
            searchService.getResultsBySearchStr(this.searchStr).then(
                searchResults => {
                    this.results = searchResults.data.items;
                }
            )
        },
        addBook(result){
            console.log(result)
            bookService.addBook(result);
            this.results = '';
            this.searchStr = '';
        }
        
    }
}