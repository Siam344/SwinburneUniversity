<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="description" content="A website using html and css" />
    <meta name="keywords" content="HTML5, CSS" />
    <meta name="author" content="Hridita Dewan"  />
        <title>Pixel-8</title>
        <link rel="stylesheet" href="stylesheet/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <!--Fonts-->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
<!--- Begin header -->
    <?php
	    include_once "header.inc";
	?>   

<!--- Begin Introduction -->
   <div class="introduction">
      <div class="introduction-text">
         <h1 class="intro_text_h1">Introducing: <br>
            Pixel 8's <br>
            Laptop and Computer  <br>
            Collection
         </h1>
         <p>Discover our selection of <br>
            the best laptops of the year</p>

         <a href="product.php"> Learn More</a>
      </div>
   </div>
     

   <!-- Begin About us -->
   <aside class="about-us">
      <h2>About Us</h2>

      <p>Success has certain rules, or at least it used to. <br>
         Pixel-8 is a multinational computer technology company headquartered in Melbourne, Australia. <br>
         We specialize primarily in developing and marketing database software and technology, cloud 
         engineered systems and enterprise software products, and database management systems. It is 
         also the world’s second-largest software company by revenue and In recent years, Pixel-8 is 
         investing heavily in AI, machine learning, IOT, the blockchain, and human interface technologies. 
         Pixel-8 is among the most innovative in this list of top 10 IT companies in the world. Now our 
         Pixel-8 is ready with the tools you need to help distributed teams stay connected, productive 
         and secure.</p>
         <!-- source: https://large-it.com/top-10-it-company-in-bangladesh/ -->
        
        <a href="payment.php">Order</a>
        <a href="https://www.youtube.com/watch?v=M1bJLoWTk_s">Assignment 1 Video</a>
		<a href="https://www.youtube.com/watch?v=8ZJk9Y56xIc">Assignment 2 Video</a>
   </aside>

<!-- Begin Information -->
    
   <section class="detail">
        <div class="info-row">
            <div class="info-col">
               <h3>PIXEL-8: Chromebook Laptop</h3>
               <p>Work where works best for you with the Pixel-8 Dragonfly Chromebook with 5G. With features like a 5MB camera and AI noise reduction, it’s designed for success. The rules have changed with the premium devices. Work Happy. </p>
            </div>

             <div class="info-col">
                <h3>PIXEL-8: Services</h3>
                <p>With Pixel-8 Services you can have replacements configured and delivered so that your projects stay on track. The rules have changed. Work Happy.</p>
             </div>

             <div class="info-col">
                <h3>PIXEL-8: New feautures</h3>
                <p>Now you can collaborate anywhere, even if there’s background noise. The rules have changed with the Pixel-8 Dragonfly with AI noise reduction. Work Happy</p>
             </div>
        </div>
   </section>

<!-- Begin gallery-->
<section class="gallery">
   <div class="row">
      <div class="gallery-col">
         <img src="stylesheet/images/HP Laptop.png" alt="laptop">
         <img src="stylesheet/images/resized_1500x1500.jpg" alt="laptop">
      </div>
   </div>
</section>

<!-- Footer -->
    <?php
	    include_once "footer.inc";
	?>


</body>
</html> 