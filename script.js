let Points = 0;
        window.onload = function() {
        function moveCubeRight() {
            currentPosition = document.getElementById('cube').offsetLeft;
            document.getElementById('cube').style.left = currentPosition+20;
        }
        function moveCubeLeft() {
            currentPosition = document.getElementById('cube').offsetLeft;
            document.getElementById('cube').style.left = currentPosition-20;
        }
        function moveCubeUp() {
            currentPosition = document.getElementById('cube').offsetTop;
            document.getElementById('cube').style.top = currentPosition-20;
        }
        function moveCubeDown() {
            currentPosition = document.getElementById('cube').offsetTop;
            document.getElementById('cube').style.top = currentPosition+20;
        }
            currentPositionLeftHero = document.getElementById('cube').offsetLeft;
            currentPositionTopHero = document.getElementById('cube').offsetTop;
            currentPositionCoinLeft = document.getElementById('coin').offsetLeft;
            currentPositionCoinTop = document.getElementById('coin').offsetTop;
        function moveCube(key) {
            switch (key.key){
                case "a":
                if (currentPositionLeftHero == 760 && currentPositionTopHero <= 40) {
                document.getElementById('cube').style.left = 760;
                } else { 
                moveCubeLeft()}
                break;
                case "d": 
                if (currentPositionLeftHero == 640 && currentPositionTopHero <= 40) {
                document.getElementById('cube').style.left = 640;
                } else {
                moveCubeRight()}
                break;
                case "w":
                if (currentPositionLeftHero >= 660 && currentPositionLeftHero <= 740 && currentPositionTopHero == 60) {
                document.getElementById('cube').style.top = 60;
                } else {
                moveCubeUp()}
                break;
                case "s": 
                moveCubeDown()
                break;
            }
            
            currentPositionLeftHero = document.getElementById('cube').offsetLeft;
            currentPositionTopHero = document.getElementById('cube').offsetTop;
            currentPositionCoinLeft = document.getElementById('coin').offsetLeft;
            currentPositionCoinTop = document.getElementById('coin').offsetTop;

            if (currentPositionLeftHero < 20) {
                document.getElementById('cube').style.left = 20;
            }
            if (currentPositionLeftHero > 1320) {
                document.getElementById('cube').style.left = 1320;
            }
            if (currentPositionTopHero < 20) {
                document.getElementById('cube').style.top = 20;
            }
            if (currentPositionTopHero > 580) {
                document.getElementById('cube').style.top = 580;
            }
            
        positionStartLeft = document.getElementById('start').offsetLeft;
        positionStartTop = document.getElementById('start').offsetTop;

        if (currentPositionLeftHero == positionStartLeft && currentPositionTopHero == positionStartTop){
        CountDown()
        document.getElementById('start').style.top = "-1px";
        document.getElementById('start').style.height = "0px";
        document.getElementById('start').style.width = "0px";
        }

            function coinSpawn() {
                let x = Math.floor(Math.random() * (20, 1320));
                let y = Math.floor(Math.random() * (20, 580));
                
                if (x%20==0){
                    document.getElementById('coin').style.left = x;
                } else {
                    document.getElementById('coin').style.left = Math.floor(x/20+1)*20;
                    console.log(document.getElementById('coin').offsetLeft)
                }
                if (y%20==0){
                    document.getElementById('coin').style.top = y;
                } else {
                    document.getElementById('coin').style.top = Math.floor(y/20+1)*20;
                }

                console.log(x,y)
                
            };

            if (currentPositionLeftHero === currentPositionCoinLeft && currentPositionTopHero === currentPositionCoinTop ) {
            coinSpawn()
            Points+=1;
        }
        if (currentPositionLeftHero === currentPositionCoinLeft && currentPositionTopHero === currentPositionCoinTop ) {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    document.getElementById('cube').style.backgroundColor= "#" + randomColor;
                }  
                
            

            console.log(currentPositionLeftHero +"left")
            console.log(currentPositionTopHero+"top")

            document.getElementById('counter').innerText="Points:" + Points;
            
        }
        document.getElementById('counter').innerText="Points:" + Points;
        
        window.addEventListener("keypress",moveCube,false);
        
        var min = 1;
        var sec = 0;
        

        function CountDown() {setInterval(function() {
        document.getElementById('countdown').innerHTML = min + " : " + sec;
        
        if (sec == 0 && min > 0) {
        sec = 10;
        min --;
        }
        if (Points===3){
        document.getElementById('countdown').style.fontSize = '100';
        document.getElementById('countdown').style.top = '250px';
        document.getElementById('countdown').style.left = '450px';
        document.getElementById('coin').style.height = '0';
        document.getElementById('coin').style.width = '0';
        document.getElementById('coin').style.borderStyle = 'none';
        document.getElementById('cube').style.height = '0';
        document.getElementById('cube').style.width = '0';
        document.getElementById('countdown').innerHTML = "Winner";
        return;
        }
        if (min == 0 && sec == 0) {
        document.getElementById('countdown').style.fontSize = '100';
        document.getElementById('countdown').style.top = '250px';
        document.getElementById('countdown').style.left = '450px';
        document.getElementById('coin').style.height = '0';
        document.getElementById('coin').style.width = '0';
        document.getElementById('coin').style.borderStyle = 'none';
        document.getElementById('cube').style.height = '0';
        document.getElementById('cube').style.width = '0';
        document.getElementById('countdown').innerHTML = "Game Over";
        return;
      }
      sec--;
    
  }, 1000);}

    
    }