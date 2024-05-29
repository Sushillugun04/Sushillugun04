      function showIconName(iconName) {
            document.getElementById('icon-name').textContent = iconName;
        }

        const products = [
            { name: "Test 1", date: "2024-01-01", size: "78.38KB", link: "https://drive.google.com/file/d/1l8VVBPPbVTYvYTr_Hfhnvc4Vh7WSHWu5/view", password: "123456" },
            { name: "Test 2", date: "2024-01-02", size: "2MB", link: "https://drive.google.com/file/d/2l8VVBPPbVTYvYTr_Hfhnvc4Vh7WSHWu6/view", password: "234567" }
            
        
        ];

        function displayProducts(filteredProducts) {
            const container = document.getElementById('product-container');
            container.innerHTML = '';

            filteredProducts.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                
                productElement.innerHTML = `
                    <div class="product-details">
                        <div class="product-name">${product.name}</div>
                        <div class="product-date">Date: ${product.date}</div>
                        <div class="product-size">Size: ${product.size}</div>
                    </div>
                    <a href="#" class="download-btn" onclick="promptPassword(event, '${product.link}', '${product.password}')">Download<span class="icon">
                    <ion-icon name="download-outline"></ion-icon>
                </span></a>
                `;

                container.appendChild(productElement);
            });
        }

        function filterProducts() {
            const searchText = document.getElementById('search-input').value.toLowerCase();
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
            displayProducts(filteredProducts);
        }

        function promptPassword(event, link, correctPassword) {
            event.preventDefault();
            const password = prompt("Enter password to download the file:");
            if (password === correctPassword) {
                window.location.href = link;
            } else {
                alert("Incorrect password!");
            }
        }

        // Initial display of all products
        displayProducts(products);

        // JavaScript to handle video player functionality
        const video = document.getElementById('videoPlayer');
        
        video.addEventListener('ended', () => {
            alert('Video has ended.');
        });
