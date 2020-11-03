// import bookApp from './cmp/book-app.cmp.js';
import { myRouter } from './routes.js'



const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <h1 class="main-header">Books Store</h1>
             <nav>
                <router-link to="/" exact>Home</router-link>|
                <router-link to="/book" exact>Books</router-link>|
                <router-link to="/about">About Us</router-link>
            </nav>
            <main>
                <router-view></router-view>
            </main>
        </section>
    `,
    components: {
       
    }

}



const app = new Vue(options);