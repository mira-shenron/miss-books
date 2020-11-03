export default {
    props: ['book'],
    template: `
        <section class="book-preview">
           <h3>Title: {{book.title}}</h3>
           <img :src="book.thumbnail" class="clickable"/>
           <h4>Price: {{book.listPrice.amount}}{{currencyIcon}}</h4>
        </section>
    `,
    computed: {
        currencyIcon() {
            var icon = '';

            //ILS, EUR, USD
            switch (this.book.listPrice.currencyCode) {
                case "ILS":
                    icon = '₪';
                    break;
                case "EUR":
                    icon = '€';
                    break;
                default:
                    icon = '$';
            }
            return icon;
        }
    }
}