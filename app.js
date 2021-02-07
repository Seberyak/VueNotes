const App = {

    data() {
        return {
            placeholderString: "Input some text",
            title: "Notes List",
            inputValue: "",
            notes: [],
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            const newValue = this.inputValue;
            if (!!newValue && typeof newValue === "string" && newValue.length > 0) {
                this.notes.push(this.inputValue);
                this.inputValue = "";
            }
        },
        toUpperCase(item = "") {
            console.log("toUpperCase")
            return item.toUpperCase();
        },
        removeNote(i = 0) {
            this.notes.splice(i, 1)
        }
    }
}

Vue.createApp(App).mount('#app')

