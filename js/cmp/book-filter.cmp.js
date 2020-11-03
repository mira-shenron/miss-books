
export default {
    template: `
        <section class="book-filter">
            <h2>Search books</h2>
            <input type="text" v-model="filterBy.byName" placeholder="Enter name"  @input="emitFilter"/>
            
            <input type="number" placeholder="From price" v-model.number="filterBy.from"/>
            <input type="number" placeholder="To price" v-model.number="filterBy.to"/>
            <button @click="emitFilter">Filter</button>
        </section>
    `,
    data() {
        return {
            filterBy: { byName: '', from: '', to: '' }
        }
    },
    methods: {
        emitFilter() {
            console.log(this.filterBy)

            //both ways work

            //spread operator -shallow copy, only for non nested object like here
            // this.$emit('doFilter', {...this.filterBy});

            //deep copy, even for complex object (object in onject)
            this.$emit('doFilter', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}