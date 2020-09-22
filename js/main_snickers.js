 $(document).ready(function(){
        
        
        
        
        //비쥬얼 이미지 영역에 타이틀과 초콜릿 사진 보이게 하기
        const chocolate = $('.visual img:first-child');
        const title = $('.visual img:last-child');
        
        chocolate.animate({'left':'10%', 'opacity':'1'}, 700);
        title.animate({'right':'25%', 'opacity':'1'}, 700);
        
        
        //내비게이션 메뉴 클릭시 해당하는 컨텐츠 top:58px위치에 올라오게 하기
            
        $('.gnb > li').on({'click focus':function(){
            var num = $(this).index()+1; //2,3,4,5,6,7   0번은 비쥬얼 박스 인덱스 값이라서 필요없음.
            //li태그를 입력했을 때 몇번째 숫자가 뜨는지 콘솔창을 통해서 알 수 있음. 
            console.log(num);
                
            var con = $('section article').eq(num).offset().top;//각 콘텐츠 article에 top위치 값을 변수에 저장.
            $('html, body').animate({scrollTop:con-58},500); //각 콘텐츠가 스크롤 높이 58픽셀까지 상단으로 애니메이션 되면서 올라감.
            }
                           
                           
 });
            $(window).scroll(function(){
                const sPos = $(window).scrollTop();
                
                $('.status').text(sPos); //세로스크롤값 표시하기
                
                if(sPos >= 700){ //스크롤 높이가 700픽셀 이상이면
                    $('fooeter a').fadeIn(); //탑버튼 나오게 하고
                    
                }else{ //그렇지 않으면
                    $('footer a').fadeOut(); //탑버튼 사라지게 함.
                }
                
                
                if(sPos >= 58){ //만약에 세로스크롤 높이가 58픽셀 이상이면
                    $('nav').addClass('act'); //내비게이션 서식을 추가하여 고정시키고
                }else{ //그렇지 않다면 (화면을 위로 올리면)
                    $('nav').removeClass('act'); //내비게이션 서식을 제거하여 다시 원래 위치로 돌림.
                }                          
    
        var h = $('section article').height()//각 콘텐츠별 높이값을 구하여 변수에 저장.
                
                if(sPos >= h*1&&sPos<h*2){
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
                    $('.gnb>li').eq(0).find('a').addClass('on'); //첫번째 메뉴에 서식 적용
                    
                    
                    
                }else if(sPos >= h*2&&sPos<h*3){
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
                    $('.gnb>li').eq(1).find('a').addClass('on'); //두번째 메뉴에 서식 적용
                    
                    
                }else if(sPos >=h*3&&sPos<h*4){
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
                    $('.gnb > li').eq(2).find('a').addClass('on'); //세번째 메뉴에 서식 적용
                    
                    
                    
                }else if(sPos >= h*4&&sPos<h*5){
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
                    $('.gnb > li').eq(3).find('a').addClass('on'); //네번째 메뉴에 서식 적용
                    
                    
                    
                }else if(sPos >= h*5&&sPos<h*6){
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
                    $('.gnb> li').eq(4).find('a').addClass('on'); //다섯번째 메뉴에 서식 적용
                    
                    
                    
                }else if(sPos >= h*6&&sPos<h*7){
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
                    $('.gnb> li').eq(5).find('a').addClass('on'); //여섯번째 메뉴에 서식 적용
                    
                    
                    
                }else if(sPos >= h*7){
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
                    $('.gnb >li').eq(6).find('a').addClass('on'); //일곱번째 메뉴에 서식 적용
                    
                    
                    
                }else{
                    $('.gnb a').removeClass('on'); //기존에 적용된 서식이 있으면 제거하고
        
                    
                }
                
                
        
                });
            
                    $('footer a').click(function(){ //탑버튼 클릭시
                    $('html, body').animate({scrollTop:'0px'},300); //화면상단으로 올리기
                    
                    return false; //새로고침 방지
            });
        
     
     
    });
        