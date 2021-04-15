const nav = Vue.createApp({
    delimiters: ['@', '@'],
    data() {
        return {
            items: [
                { link: "/msg", title: "Photo Board" },
                { link: "/ptt", title: "PTT Scraper" },
                { link: "#", title: "Food Stand POS" },
                { link: "/xyz", title: "XYZ todo-list" }
            ]
        }
    }
}).mount('#nav')
