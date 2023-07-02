import { bookService } from "../services/book.service.js"

export default {
    template: `

        <form @submit.prevent="save" class="book-edit">
            <h2>Add a book</h2>
            <input v-model="book.vendor" type="text" placeholder="Enter vendor">
            <input v-model.number="book.maxSpeed" type="number" >
            <button>save</button>
        </form>
    `,
    data() {
        return {
            book: bookService.getEmptyBook(),
        }
    },
    methods: {
        save() {
            this.$emit('save', this.book)
            this.book = bookService.getEmptyBook()
        }
    }
}