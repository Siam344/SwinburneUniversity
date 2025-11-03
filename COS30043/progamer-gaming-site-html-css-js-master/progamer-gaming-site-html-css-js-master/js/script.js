// NavbarComponent.vue
const NavbarComponent = {
    template: `
        <nav class="navbar">
            <div class="container flex">
                <a href="#" class="navbar-brand">NES <span>Game Store</span></a>
                <div class="navbar-collapse">
                    <button type="button" class="navbar-toggler-close">
                        <i class="fas fa-times"></i>
                    </button>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link">home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">games</a>
                            <span class="nav-item-dropdown">
                                <i class="fas fa-chevron-down"></i>
                            </span>
                            <ul class="nav-item-dropdown-content">
                                <li><a href="#">NES</a></li>
                                <li><a href="#">SNES</a></li>
                                <li><a href="#">N64</a></li>
                            </ul>
                        </li>
                        </ul>
                </div>
                <div class="nav-icons-group">
                    <form class="search-form">
                        <div class="search-icon-group">
                            <input type="search" class="search-control">
                            <button type="submit" class="search-icon">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                    <button type="button" class="navbar-toggler-open">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
    `
    // ... (Add navigation bar logic here - e.g., handling dropdown, search)
};

// HeaderComponent.vue
const HeaderComponent = {
    data() {
        return {
            featuredGames: []  
        };
    },
    mounted() {
        // Fetch featured games from your backend here
        fetch('your_api_endpoint/get_featured_games.php') 
            .then(response => response.json())
            .then(data => {
                this.featuredGames = data;
            });
    },
    template: `
        <header id="header">
            <div class="container">
                <div class="header-content row">
                    <div v-for="game in featuredGames" class="col-md-4 header-item">
                        <img :src="game.image" :alt="game.title">
                        <div class="header-item-text">
                            <h2>{{ game.title }}</h2>
                            <p class="text">{{ game.description }}</p>
                            <div>
                                <small>By {{ game.author }}</small>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `
};



// NewsComponent.vue 
const NewsComponent = {
    data() {
        return {
            news: [] 
        };
    },
    mounted() {
        // Fetch news items from your backend here
        fetch('your_api_endpoint/get_news.php')
            .then(response => response.json())
            .then(data => {
                this.news = data;
            });
    },
    template: `
        <section id="news" class="container mt-4">
            <h2>News & Updates</h2>
            <div class="row">
                <div v-for="newsItem in news" class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ newsItem.title }}</h5>
                            <p class="card-text">{{ newsItem.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

// VideosComponent.vue
const VideosComponent = {
    template: `
        <section id="videos" class="container mt-4">
            <h2>Latest Videos</h2>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    `
};


// PromoComponent.vue
const PromoComponent = {
    template: `
        <section id="promo" class="container mt-4">
            <div class="jumbotron">
                <h1 class="display-4">Limited Time Offer!</h1>
                <p class="lead">Get 20% off select NES games this week only.</p>
                <hr class="my-4">
                <p>Don't miss out on this amazing deal!</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Shop Now</a>
            </div>
        </section>
    `
};

// ReviewsComponent.vue
const ReviewsComponent = {
    template: `
        <section id="reviews" class="container mt-4">
            <h2>Customer Reviews</h2>
            <div class="row">
                </div>
            </div>
        </section>
    `
};

// FooterComponent.vue
const FooterComponent = {
    template: `
        <footer id="footer">
            <div class="container">
                <p>&copy; 2024 NES Game Store</p>
            </div>
        </footer>
    `
};


const app = Vue.createApp({
    components: {
        'navbar-component': NavbarComponent,
        'header-component': HeaderComponent,
        'news-component': NewsComponent,
        'videos-component': VideosComponent,
        'promo-component': PromoComponent,
        'reviews-component': ReviewsComponent,
        'footer-component': FooterComponent
    }
});

app.mount('#app');
