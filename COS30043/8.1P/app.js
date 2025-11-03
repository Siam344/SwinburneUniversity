const app = Vue.createApp({
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },

  computed: {
    totalPages() {
      return Math.ceil(this.studMarks.length / this.perPage);
    },
    currentPageStudents() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.studMarks.slice(startIndex, endIndex);
    },
    pageNumbers() {
      const pageNumbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    },
    
  },

  data() {
    return {
      studMarks: [
        { "name": "Amy", "mark": 90 },
        { "name": "Bill", "mark": 80 },
        { "name": "Casey", "mark": 78 },
        { "name": "David", "mark": 84 },
        { "name": "Lumpe", "mark": 90 },
        { "name": "David", "mark": 84 },
        { "name": "Akash", "mark": 94 },
        { "name": "Costa", "mark": 64 },
        { "name": "Lukas", "mark": 54 },
        { "name": "Arco", "mark": 84 },
        { "name": "charco", "mark": 84 },
        { "name": "larco", "mark": 84 },
        { "name": "Nicarko", "mark": 84 },
        { "name": "NURRIOIE", "mark": 84 },
        { "name": "Chuisio", "mark": 84 },
        { "name": "Chodnano", "mark": 84 },
        { "name": "Hogachato", "mark": 84 },
        { "name": "Kaju", "mark": 82 },
        { "name": "Badam", "mark": 84 },
        { "name": "Sadam", "mark": 81 },
        { "name": "Oppie", "mark": 87 },
        { "name": "Koppi", "mark": 86 },
        { "name": "lyffy", "mark": 83 },
        { "name": "Zoro", "mark": 89 },
        { "name": "Sanji", "mark": 88 },
        { "name": "Robin", "mark": 64 }
      ],
      currentPage: 1,
      perPage: 3,
    };
  },
  
  
});



app.mount("#app"); 
