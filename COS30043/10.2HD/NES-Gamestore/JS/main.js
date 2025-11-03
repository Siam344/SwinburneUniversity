const { createApp } = Vue;

function hamburgeropenclose() {
  var x = document.getElementById("NAVBAR");
  if (x.className === "navbar-collapse") {
    x.className += " responsive";
  } else {
    x.className = "navbar-collapse";
  }
}

const Navbar = {
    template: `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container flex">
          <a href="#" class="navbar-brand">NES<span>Game-Store</span></a>
          <button type="button" class="navbar-toggler-open" onclick="hamburgeropenclose()">
            <i class="fas fa-bars"></i>
          </button>
          <div class="navbar-collapse" id="NAVBAR">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/games" class="nav-link">Games</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/news" class="nav-link">News</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/reviews" class="nav-link">Reviews</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/videos" class="nav-link">Videos</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/payment" class="nav-link">Payment</router-link>
              </li>
              <li class="nav-item" v-if="!isLoggedIn">
                <router-link to="/login" class="nav-link btn-custom">Login</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <a href="#" class="nav-link btn-custom" @click="logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `,
    data() {
      return {
        isLoggedIn: false
      };
    },
    created() {
      this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
    },
    methods: {
      logout() {
        localStorage.removeItem('isLoggedIn');
        this.isLoggedIn = false;
        this.$router.push('/login');
      }
    },
    watch: {
      $route() {
        this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
      }
    }
  };
  
  

const Home= 
{
    template: `
    <header id="header">
        <div class="container">
            <div class="header-content">
                <div class="header-item">
                    <img src="assets/banner-img-1.jpg">
                    <div class="header-item-text">
                        <h2>PLAY THE ULTIMATE EDITION NOW!</h2>
                        <p class="text">Experience the complete story from the beginning to the End! Minecraft Dungeons: Ultimate Edition includes the base game and all six DLCs.</p>
                        <div>
                            <small>By Nur</small>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                
                <div class="header-item">
                    <img src="assets/banner-img-2.jpg">
                    <div class="header-item-text">
                        <h2>PUBG: New State (Mobile) crosses 40 million pre-registrations</h2>
                        <p class="text">Kraftson is gearing up to launch its second battle royale mobile game after Battlegrounds Mobile India called PUBG: New State. The game will follow the same battle royale blueprints as previous titles.</p>
                        <div>
                            <small>By Nur</small>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="header-item">
                    <img src="assets/banner-img-3.jpg">
                    <div class="header-item-text">
                        <h2>Apex Legends Evolution Collection Events</h2>
                        <p class = "text">Learn what a Legend can become in the Apex Legends Evolution Collection Event.</p>
                        <div>
                            <small>By Nur</small>
                            <a href = "#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section id="news">
        <div class="title">
            <div class="container">
                <h2>
                    <i class="fas fa-rss"></i> News
                </h2>
            </div>
        </div>
        <div class="container">
            <div class="news-latest">
                <h3>Latest News</h3>
                <article>
                    <div class="item-img">
                        <img src="Assets/news-1.jpg">
                        <span>
                            <i class="fas fa-comment"></i> 10
                        </span>
                    </div>
                    <div class="item-text">
                        <a href="#" class="h1">
                            <span class="category">latest</span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!
                        </p>
                        <div class="date">News | Latest | 11:00 AM</div>
                    </div>
                </article>
                <article>
                    <div class="item-img">
                        <img src="Assets/news-2.jpg">
                        <span>
                            <i class="fas fa-comment"></i> 10
                        </span>
                    </div>
                    <div class="item-text">
                        <a href="#" class="h1">
                            <span class="category">latest</span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!
                        </p>
                        <div class="date">News | Latest | 11:00 AM</div>
                    </div>
                </article>
                <article>
                    <div class="item-img">
                        <img src="Assets/news-3.jpg">
                        <span>
                            <i class="fas fa-comment"></i> 10
                        </span>
                    </div>
                    <div class="item-text">
                        <a href="#" class="h1">
                            <span class="category">latest</span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!
                        </p>
                        <div class="date">News | Latest | 11:00 AM</div>
                    </div>
                </article>
                <article>
                    <div class="item-img">
                        <img src="Assets/news-4.jpg">
                        <span>
                            <i class="fas fa-comment"></i> 10
                        </span>
                    </div>
                    <div class="item-text">
                        <a href="#" class="h1">
                            <span class="category">latest</span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!
                        </p>
                        <div class="date">News | Latest | 11:00 AM</div>
                    </div>
                </article>
                <article>
                    <div class="item-img">
                        <img src="Assets/news-5.jpg">
                        <span>
                            <i class="fas fa-comment"></i> 10
                        </span>
                    </div>
                    <div class="item-text">
                        <a href="#" class="h1">
                            <span class="category">latest</span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!
                        </p>
                        <div class="date">News | Latest | 11:00 AM</div>
                    </div>
                </article>
            </div>
            <div class="news-popular">
                <h3>Popular News</h3>
                <div class="popular-list">
                    <article>
                        <div class="item-img">
                            <img src="Assets/news-6.jpg">
                        </div>
                        <div class="item-text">
                            <a href="#" class="h1">
                                <span class="category">popular</span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </a>
                        </div>
                    </article>
                    <article>
                        <div class="item-img">
                            <img src="Assets/news-7.jpg">
                        </div>
                        <div class="item-text">
                            <a href="#" class="h1">
                                <span class="category">popular</span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </a>
                        </div>
                    </article>
                    <article>
                        <div class="item-img">
                            <img src="Assets/news-8.jpg">
                        </div>
                        <div class="item-text">
                            <a href="#" class="h1">
                                <span class="category">popular</span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </a>
                        </div>
                    </article>
                    <article>
                        <div class="item-img">
                            <img src="Assets/news-9.jpg">
                        </div>
                        <div class="item-text">
                            <a href="#" class="h1">
                                <span class="category">popular</span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </a>
                        </div>
                    </article>
                    <article>
                        <div class="item-img">
                            <img src="Assets/news-10.jpg">
                        </div>
                        <div class="item-text">
                            <a href="#" class="h1">
                                <span class="category">popular</span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <section id="videos">
        <div class="title">
            <div class="container">
                <h2>
                    <i class="fas fa-video"></i>
                    Videos & Trailers
                </h2>
            </div>
        </div>
        <div class="container">
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-1-poster.webp">
                        <source src="assets/video-1.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-2-poster.webp">
                        <source src="assets/video-2.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-3-poster.webp">
                        <source src="assets/video-3.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-4-poster.webp">
                        <source src="assets/video-4.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
        </div>
    </section>
    <section id="promo" class="flex">
        <div class="container">
            <span>join the battle</span>
            <h2>Fortnight Battle Royale</h2>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate molestias ad quia accusantium cumque
            </p>
            <div class="btn-groups flex">
                <a href="#">
                    <i class="fas fa-play"></i> watch trailer
                </a>
                <a href="#">
                    <i class="fas fa-gamepad"></i> play free now
                </a>
            </div>
        </div>
    </section>
    <section id="reviews">
        <div class="title">
            <div class="container">
                <h2>
                    <i class="fas fa-comments"></i>
                    Featured Reviews
                </h2>
            </div>
        </div>
        <div class="container">
            <article>
                <div class="item-img">
                    <img src="Assets/review-1.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-2.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-3.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-4.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-5.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
        </div>
    </section>
    <footer id="footer">
        <div class="container">
            <div class="footer-links-1">
                <h2>Join NES Game-Store:</h2>
                <ul class="flex">
                    <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitch"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer-links-2">
                <ul class="flex">
                    <li>
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/games" class="nav-link">Games</router-link>
                    </li>
                    <li>
                        <router-link to="/news" class="nav-link">News</router-link>
                    </li>
                    <li>
                        <router-link to="/reviews" class="nav-link">Reviews</router-link>
                    </li>
                    <li>
                        <router-link to="/videos" class="nav-link">Videos</router-link>
                    </li>
                    <li>
                        <router-link to="/gears" class="nav-link">Gears</router-link>
                    </li>
                </ul>
            </div>
            <p class="text">&copy; <a href="#">NES Game-Store</a>. All Rights Reserved.</p>
        </div>
    </footer>
    `
}

const Games = {
    template: `
      <div class="container games-page">
        <h1>Games</h1>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Buy</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="game in paginatedGames" :key="game.title">
              <td><img :src="'assets/' + game.image" class="img-fluid" alt="Game Image"></td>
              <td>{{ game.title }}</td>
              <td>{{ game.content }}</td>
              <td>{{ game.price }}</td>
              <td><button class="btn btn-primary btn-custom" @click="addToCart(game)">Add to Cart</button></td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
              <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    `,
    data() {
      return {
        games: [],
        perPage: 3,
        currentPage: 1,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.games.length / this.perPage);
      },
      paginatedGames() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.games.slice(start, end);
      }
    },
    methods: {
      changePage(page) {
        this.currentPage = page;
      },
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
      fetchGames() {
        fetch('assets/games.json')
          .then(response => response.json())
          .then(data => {
            this.games = data;
          });
      },
      addToCart(game) {
        localStorage.setItem('selectedGame', JSON.stringify(game));
        this.$router.push({ path: '/payment' });
      }
    },
    created() {
      this.fetchGames();
    }
  };
  
  
  
  const Payment = {
    data() {
      return {
        paymentDetails: {
          name: '',
          cardNumber: '',
          expiryDate: '',
          cvv: ''
        },
        selectedGame: null
      };
    },
    methods: {
      submitPayment() {
        fetch('backend/save_payment.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.paymentDetails)
        })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            localStorage.removeItem('selectedGame');
            // Clear the form fields
            this.paymentDetails.name = '';
            this.paymentDetails.cardNumber = '';
            this.paymentDetails.expiryDate = '';
            this.paymentDetails.cvv = '';
            // Redirect to the thank you page
            window.location.href = 'thank_you.html';
          } else {
            alert(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      },
      removeFromCart() {
        this.selectedGame = null;
        localStorage.removeItem('selectedGame');
      }
    },
    created() {
      this.selectedGame = JSON.parse(localStorage.getItem('selectedGame'));
    },
    template: `
      <div class="container payment-page my-5">
        <h1 class="mb-4">Payment</h1>
        <div v-if="selectedGame">
          <h3>Item you are purchasing:</h3>
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img :src="'assets/' + selectedGame.image" class="img-fluid" alt="Game Image" width="50"></td>
                <td>{{ selectedGame.title }}</td>
                <td>{{ selectedGame.price }}</td>
                <td><button class="btn btn-danger btn-sm" @click="removeFromCart">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <form @submit.prevent="submitPayment">
          <div class="mb-3">
            <label for="name" class="form-label">Name on Card</label>
            <input type="text" class="form-control" id="name" v-model="paymentDetails.name" required>
          </div>
          <div class="mb-3">
            <label for="cardNumber" class="form-label">Card Number</label>
            <input type="text" class="form-control" id="cardNumber" v-model="paymentDetails.cardNumber" required>
          </div>
          <div class="mb-3">
            <label for="expiryDate" class="form-label">Expiry Date</label>
            <input type="text" class="form-control" id="expiryDate" v-model="paymentDetails.expiryDate" required>
          </div>
          <div class="mb-3">
            <label for="cvv" class="form-label">CVV</label>
            <input type="text" class="form-control" id="cvv" v-model="paymentDetails.cvv" required>
          </div>
          <button type="submit" class="btn btn-primary btn-custom">Submit Payment</button>
        </form>
      </div>
    `
  };
  
  
  
  

const News=
{
    template: `
    <section id="news">
    <div class="news-page">
        <div class="title">
            <div class="container">
                <h2>
                    LATEST NEWS
                </h2>
            </div>
        </div>
        <div class="container">
            <div class="news-latest">
                <article>
                    <div class = "item-img">
                        <img src = "assets/news-1.jpg">
                    </div>
                    <div class = "item-text">
                        <a href = "#" class = "h1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                        <div class = "date">Posted 2 hr ago | 20 May 2024</div>
                    </div>
                </article>
                <article>
                    <div class = "item-img">
                        <img src = "assets/news-2.jpg">
                    </div>
                    <div class = "item-text">
                        <a href = "#" class = "h1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                        <div class = "date">Posted 1 day ago | 19 May 2024</div>
                    </div>
                </article>
                <article>
                    <div class = "item-img">
                        <img src = "assets/news-3.jpg">
                    </div>
                    <div class = "item-text">
                        <a href = "#" class = "h1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                        <div class = "date">Posted 2 days ago | 18 May 2024</div>
                    </div>
                </article>
                <article>
                    <div class = "item-img">
                        <img src = "assets/news-4.jpg">
                    </div>
                    <div class = "item-text">
                        <a href = "#" class = "h1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                        <div class = "date">Posted 2 days ago | 18 May 2024</div>
                    </div>
                </article>
                <article>
                    <div class = "item-img">
                        <img src = "assets/news-5.jpg">
                    </div>
                    <div class = "item-text">
                        <a href = "#" class = "h1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </a>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                        <div class = "date">Posted 3 days ago | 17 May 2024</div>
                    </div>
                </article>
                        
            </div>
        </div>
    </div>
    </section>

    <footer id="footer">
        <div class="container">
            <div class="footer-links-1">
                <h2>Join NES Game-Store:</h2>
                <ul class="flex">
                    <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitch"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer-links-2">
                <ul class="flex">
                    <li>
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/games" class="nav-link">Games</router-link>
                    </li>
                    <li>
                        <router-link to="/news" class="nav-link">News</router-link>
                    </li>
                    <li>
                        <router-link to="/reviews" class="nav-link">Reviews</router-link>
                    </li>
                    <li>
                        <router-link to="/videos" class="nav-link">Videos</router-link>
                    </li>
                    <li>
                        <router-link to="/gears" class="nav-link">Gears</router-link>
                    </li>
                </ul>
            </div>
            <p class="text">&copy; <a href="#">NES Game-Store</a>. All Rights Reserved.</p>
        </div>
    </footer>
    `
}; 

const Reviews=
{
    template: `
    <section id="reviews">
    <div class="reviews-page">
        <div class="title">
            <div class="container">
                <h2>
                    <i class="fas fa-comments"></i>
                    Featured Reviews
                </h2>
            </div>
        </div>
        <div class="container">
            <article>
                <div class="item-img">
                    <img src="Assets/review-1.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-2.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-3.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-4.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
            <article>
                <div class="item-img">
                    <img src="Assets/review-5.jpg">
                    <span>
                        <i class="fas fa-star"></i> 
                        10
                    </span>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">review</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </a>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facilis quia. Officia similique omnis optio!</p>
                    <div class="date">Reviews | Trending | 11:00 AM</div>
                </div>
            </article>
        </div>
        </div>
    </section>
    <footer id="footer">
        <div class="container">
            <div class="footer-links-1">
                <h2>Join NES Game-Store:</h2>
                <ul class="flex">
                    <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitch"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer-links-2">
                <ul class="flex">
                    <li>
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/games" class="nav-link">Games</router-link>
                    </li>
                    <li>
                        <router-link to="/news" class="nav-link">News</router-link>
                    </li>
                    <li>
                        <router-link to="/reviews" class="nav-link">Reviews</router-link>
                    </li>
                    <li>
                        <router-link to="/videos" class="nav-link">Videos</router-link>
                    </li>
                    <li>
                        <router-link to="/gears" class="nav-link">Gears</router-link>
                    </li>
                </ul>
            </div>
            <p class="text">&copy; <a href="#">NES Game-Store</a>. All Rights Reserved.</p>
        </div>
    </footer>
    `
}

const Videos=
{
    template: `
    <section id="videos">
    <div class="videos-page">
        <div class="title">
            <div class="container">
                <h2>
                    <i class="fas fa-video"></i>
                    Videos & Trailers
                </h2>
            </div>
        </div>
        <div class="container">
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-1-poster.webp">
                        <source src="assets/video-1.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-2-poster.webp">
                        <source src="assets/video-2.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-3-poster.webp">
                        <source src="assets/video-3.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
            <article>
                <div class="item-video">
                    <video controls poster="assets/video-4-poster.webp">
                        <source src="assets/video-4.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="item-text">
                    <a href="#" class="h1">
                        <span class="category">trailer</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </a>
                    <p class = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil reprehenderit facere laborum laudantium, modi quos.</p>
                </div>
            </article>
        </div>
        </div>
    </section>
    <footer id="footer">
        <div class="container">
            <div class="footer-links-1">
                <h2>Join NES Game-Store:</h2>
                <ul class="flex">
                    <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitch"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer-links-2">
                <ul class="flex">
                    <li>
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/games" class="nav-link">Games</router-link>
                    </li>
                    <li>
                        <router-link to="/news" class="nav-link">News</router-link>
                    </li>
                    <li>
                        <router-link to="/reviews" class="nav-link">Reviews</router-link>
                    </li>
                    <li>
                        <router-link to="/videos" class="nav-link">Videos</router-link>
                    </li>
                    <li>
                        <router-link to="/gears" class="nav-link">Gears</router-link>
                    </li>
                </ul>
            </div>
            <p class="text">&copy; <a href="#">NES Game-Store</a>. All Rights Reserved.</p>
        </div>
    </footer>
    `
}


const Login = {
    data() {
      return {
        username: '',
        password: '',
        error: '',
      };
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === 'siam1234') {
          localStorage.setItem('isLoggedIn', true);
          this.$router.push('/');
        } else {
          this.error = 'Invalid username or password';
        }
      },
    },
    template: `
      <div class='login-page'>
        <div class="container">
          <h1>Welcome to NES GAME STORE</h1>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" v-model="username" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-custom">Login</button>
          </form>
          <p v-if="error" class="text-danger mt-2">{{ error }}</p>
        </div>
      </div>
    `
  };
  
  
  
  

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
      { path: '/login', component: Login, name: 'login' },
      { path: '/', component: Home, name: 'home', meta: { requiresAuth: true } },
      { path: '/games', component: Games, name: 'games', meta: { requiresAuth: true } },
      { path: '/news', component: News, name: 'news', meta: { requiresAuth: true } },
      { path: '/reviews', component: Reviews, name: 'reviews', meta: { requiresAuth: true } },
      { path: '/videos', component: Videos, name: 'videos', meta: { requiresAuth: true } },
      { path: '/payment', component: Payment, name: 'payment', meta: { requiresAuth: true } }
    ]
  });
  
  // Navigation guard to check for auth
  router.beforeEach((to, from, next) => {
    const isLoggedIn = !!localStorage.getItem('isLoggedIn');
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
      next({ name: 'login' });
    } else {
      next();
    }
  });
  
  const app = Vue.createApp({});
  app.component('nav-bar', Navbar);
  app.use(router);
  app.mount('#app');