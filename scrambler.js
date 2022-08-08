let tileList = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6]
  
      for (var i = tileList.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = tileList[i];
          tileList[i] = tileList[j];
          tileList[j] = temp;
        }
      
      var matrix = [], i, k;
      for (i = 0, k = -1; i < tileList.length; i++) {
        if (i % 5 === 0) {
          k++;
          matrix[k] = [];
        }
  
        matrix[k].push(tileList[i]);
      }
  
      function draw() {
          const canvas = document.getElementById('tutorial');
          if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            
            ctx.beginPath();
            ctx.rect(0, 0, 600, 600);
            ctx.fillStyle = "black";
            ctx.fill();

            for(let i = 0; i < matrix.length; i++) {
              for(let j = 0; j < matrix[i].length; j++) {
    
                if (matrix[i][j] == 0) {
                  ctx.beginPath();
                  ctx.rect(j*120, i*120, 120, 120);
                  ctx.fillStyle = "red";
                  ctx.fill();
                  ctx.lineWidth = 2;
                  ctx.strokeStyle = "black";
                  ctx.stroke();
                } else if (matrix[i][j] == 1) {
                  ctx.beginPath();
                  ctx.rect(j*120, i*120, 120, 120);
                  ctx.fillStyle = "blue";
                  ctx.fill();
                  ctx.lineWidth = 2;
                  ctx.strokeStyle = "black";
                  ctx.stroke();
                } else if (matrix[i][j] == 2) {
                  ctx.beginPath();
                  ctx.rect(j*120, i*120, 120, 120);
                  ctx.fillStyle = "white";
                  ctx.fill();
                  ctx.lineWidth = 2;
                  ctx.strokeStyle = "black";
                  ctx.stroke();
              } else if (matrix[i][j] == 3) {
                  ctx.beginPath();
                  ctx.rect(j*120, i*120, 120, 120);
                  ctx.fillStyle = "yellow";
                  ctx.fill();
                  ctx.lineWidth = 2;
                  ctx.strokeStyle = "black";
                  ctx.stroke();
              } else if (matrix[i][j] == 4) {
                  ctx.beginPath();
                  ctx.rect(j*120, i*120, 120, 120);
                  ctx.fillStyle = "orange";
                  ctx.fill();
                  ctx.lineWidth = 2;
                  ctx.strokeStyle = "black";
                  ctx.stroke();
              } else if (matrix[i][j] == 5) {
                  ctx.beginPath();
                  ctx.rect(j*120, i*120, 120, 120);
                  ctx.fillStyle = "green";
                  ctx.fill();
                  ctx.lineWidth = 2;
                  ctx.strokeStyle = "black";
                  ctx.stroke();
              } else {
                  ctx.beginPath();
                  ctx.rect(j*120, i*120, 120, 120);
                  ctx.fillStyle = "black";
                  ctx.fill();
              }
            }
          }         
        }
      }