var image = [];
            var index = 0; //vị trí ảnh đang hiển thị
            var sohinh = 4;
            for (var i = 1; i <= sohinh; i++) {
                image[i] = new Image(); //Đối tượng phải viết hoa chữ cái đầu tiên 
                image[i].src = "pics/Nha1-" + i + ".jpg";
            }
            
    
            function next() {
                index++;
                if (index >= image.length) {
                    index = 0;
                }
                var anh = document.getElementById("anh");
                anh.src = image[index].src;
            }
    
            function prev() {
                index--;
                if (index < 0) {
                    index = image.length - 1;
                }
                var anh = document.getElementById("anh");
                anh.src = image[index].src;
            }
    
            setInterval("next()",3000);
            