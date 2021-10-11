

            var a = 3;
            var b = 5;
            
            function addd(a, b) {
                return a * (Math.floor(b / a) + 1) + b % a
            } 
            var c = addd(a,b);

            function funcHoi(){
                document.getElementById('par').innerText = 'Hoi';
            }
            function funcHead(){
                document.getElementById('head1').innerText = '123456Juf8910';
            }
        
        console.log(document.getElementById('par').innerText);
        var pTekst = document.getElementById('par').innerText;

        document.getElementById('par').innerText = 'Nog steeds geen idee'
        document.getElementById('par').style.color = 'green';