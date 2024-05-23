//* Event code 

const sliderContainer = document.getElementById('slider-container');
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let startTouchX = 0;
    const intervalTime = 5000; // 3 seconds

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + offset + ')';
        updateDots();
    }

    function currentSlide(index) {
        showSlide(index);
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    sliderContainer.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - startTouchX;
        const percentageDeltaX = (deltaX / sliderContainer.offsetWidth) * 100;
        slider.style.transform = `translateX(calc(-${currentIndex * 100}% + ${percentageDeltaX}px))`;
    });

    sliderContainer.addEventListener('touchend', (e) => {
        const touchX = e.changedTouches[0].clientX;
        const deltaX = touchX - startTouchX;
        const threshold = sliderContainer.offsetWidth / 5;

        if (deltaX > threshold) {
            showSlide(currentIndex - 1);
        } else if (deltaX < -threshold) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(currentIndex);
        }
    });

    setInterval(() => showSlide(currentIndex + 1), intervalTime);



    //* menu code 
    function toggleMenuPage() {
        var redirectTo = "menu.html";
        window.location.href = redirectTo;
    }

    //* menu  section
    // Simple function to show/hide the bar on button click (optional)
function toggleBar() {
    const bar = document.getElementById('floating-bar');
    bar.style.display = bar.style.display === 'none' ? 'flex' : 'none';
  }



  //*menu list


  const itemBox = `<div class="col-4 card productBox">
  <img src="/img/poducts/pngwing.com(1) (Small).png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">fresh juices</h5>
    <div class="priceAddbtn">
        <h6>₹70</h6>
        <div id="btnDivId" class="btnDiv">
            <a href="#" class="btn CartBtn">Add to list</a>
        </div>
    </div>

  </div>
</div>`

  //* Cart section

   const  ItemList = `<div class="sampleOrder">
   <div class="leftSection">
     <h3>Mint Lime</h3>
     <p>something</p>
     <h4>30rs</h4>
   </div>
   <div class (lass="rightSection">
     <h3 class="removeItem">Remove</h3>
     <h3 class="removeItem">0</h3>
     <h3 class="addMore">Add More</h3>
   </div>
 </div>`;

 const cartList = `<div class="cartList">
 <p><span id="itemCount">0</span>  Item added</p>
 <p id="ViewItemId" class="ViewItem">View Item <img src="/img/icons/right-arrow 1.png" alt="right-arrow"></p>
 
</div>`;
  
  var BarDiv = document.getElementById("barId");
  var btnDivIdNode = document.getElementById("btnDivId")
  var cartBarDiv = document.getElementById("cartBarId")

  console.log(btnDivIdNode)
  console.log(cartBarDiv.innerHTML)
  var itemList = 0
  
  document.getElementById("menuList").innerHTML = itemBox

  btnDivIdNode.addEventListener("click",()=>{
    console.log("clicked")
    itemList++
    BarDiv.innerHTML = cartList;
    cartBarDiv.style.marginTop = "90vh";
    cartBarDiv.style.opacity = "100%";
    document.getElementById("itemCount").innerHTML = itemList;
  })

//   fetch('menu.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Access categories and products
//     data.menu.forEach(category => {
//       console.log(`Category: ${category.category}`);
//       category.products.forEach(product => {
//         console.log(`Product Name: ${product.name}, Rate: ${product.rate}`);
//       });
//     });
//   })
//   .catch(error => console.error('Error fetching the JSON file:', error));

fetch("menu.json")
.then(response => response.json())
.then(data => {
    console.log(data);
})