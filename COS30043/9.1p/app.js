const { createApp } = Vue;
const NameTest = {
  template: `
  <div class="container">
    <h1>String Test</h1>
    <div class="form-group">
        <label for="strName" class="form-check-label">Enter Your Name:</label>
        <input
          class="form-control"
          v-model="strName"
          type="text"
          placeholder="Name..."
          required
        />
        <p v-if="strName.toLowerCase() === 'siam'">Awesome Name!</p>
        <p v-else-if="strName === '' ">Please input a name!</p>
        <p v-else>
            <i>{{strName}}</i> is NOT my Name!
        </p>
    </div>
    </div>
      `,
  data() {
    return { strName: "" };
  },
};
const PostManagement = {
  template: `  
  <div class="container">
  <h1>Status Post</h1>
  <div class="form-group">
    <label for="strStatus" class="form-check-label">Status:</label>
    <input
      class="form-control"
      v-model="strStatus"
      type="text"
      placeholder="Enter your Status"
      required
    />
    <button @click="add" class="btn btn-primary mt-2">Post</button>
  </div>

  <div v-if="statPosts.length > 0">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(str, index) in statPosts" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ str }}</td>
          <td>
            <button @click="remove(index)" class="btn btn-primary">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
  data() {
    return {
      statPosts: [],
      strStatus: "",
    };
  },
  methods: {
    add() {
      //push status into statPosts array
      this.statPosts.unshift(this.strStatus);
      this.strStatus = "";
    },
    remove(index) {
      //delete status from statPost using index
      this.statPosts.splice(index, 1);
    },
  },
};
const StudentMarks = {
  template: `
  <div class="container">
    <div class="row">
        <div class="col-12">
          <h2>Student Marks</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Mark</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in paginatedData" :key="student.name">
                <td>{{ student.name }}</td>
                <td>{{ student.mark }}</td>
              </tr>
            </tbody>
          </table>
          <vuejs-paginate
            :page-count="pageCount"
            :container-class="'pagination'"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :active-class="'active'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :prev-class="'page-item'"
            :next-class="'page-item'"
            :prev-link-class="'page-link'"
            :next-link-class="'page-link'"
          ></vuejs-paginate>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="Callback(currentPage - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="number in pageCount" :class="{ active: number === currentPage }" :key="number">
                    <a class="page-link" href="#" @click.prevent="Callback(number)">{{ number }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="Callback(currentPage + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
        </div>
      </div>
    </div>  
    `,
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      students: [
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
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.students.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.students.slice(start, end);
    },
  },
  methods: {
    Callback(pageNum) {
      this.currentPage = pageNum;
    },
  },
};
const routes = [
  { path: "/", component: NameTest },
  { path: "/post-management", component: PostManagement },
  { path: "/student-marks", component: StudentMarks },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});
const app = Vue.createApp({});
app.component("nav-bar", {
  template: `<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/">Name Test </router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/post-management">Post Management</router-link>
          |
        </li>
        <li class="nav-item">
          <router-link to="/student-marks">Student Marks</router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>`,
});
app.use(router);
app.mount("#app");