$(document).ready(function(){
    
    //initial check to make sure jquery loaded
    //alert('jquery loaded');

    //render birthday list in DOM
    var list = document.querySelector('ul');
    function showBirthdays(){
        for(i = 0; i < birthdays.length; i++){
            //var month = birthdays[i].date;
            //if the correct month, render to page
            if(birthdays[i].date.indexOf('JANUARY') !== -1){
                var item = document.createElement('li');
                item.textContent = birthdays[i].name + ', ' + birthdays[i].date;
                list.appendChild(item);
            }
                      
        }
    }

    //store birthday data in object array
    var birthdays = [
        { name: 'Ronald Gallardo', date: 'DECEMBER 21' },
        { name: 'Shairelou Amora', date: 'DECEMBER 21' },
        { name: 'Zenny Alla', date: 'DECEMBER 21' },
        { name: 'JC. Daniel Amita', date: 'DECEMBER 25' },
        { name: 'Ayesha Jaye De Jesus', date: 'DECEMBER 25' },
        { name: 'Ruthzel Martinez', date: 'DECEMBER 30' },
        { name: 'Elvie Amora', date: 'DECEMBER 30' },
        { name: 'Andy Cumabig', date: 'JANUARY 1' },
        { name: 'ANGELINE VICENTE', date: 'JANUARY 3' },
        { name: 'MELVIN LIM', date: 'JANUARY 6' },
        { name: 'JOHN ANGELO AMORA', date: 'JANUARY 7' },
        { name: 'MARILYN GALLARDO', date: 'JANUARY 7' },
        { name: 'CARMI MALIT', date: 'JANUARY 8' },
        { name: 'ANNE AUSTIN DE JESUS', date: 'JANUARY 11' },
        { name: 'PTR. GAMMY ALBA', date: 'JANUARY 15' },
        { name: 'ARNOLD AMORA', date: 'JANUARY 23' },
        { name: 'LUIS MENDOZA', date: 'JANUARY 24' },
        { name: 'LUCAS ANAHAW', date: 'JANUARY 24' },
        { name: 'DANIEL ANTHONY MALIT', date: 'JANUARY 27'}              
    ]
    JSON.stringify(birthdays);
    showBirthdays();    
    
});

/*
 { name: '', date: '' },
        { name: '', date: '' },
        { name: '', date: '' },
        { name: '', date: '' },
        { name: '', date: '' },
        { name: '', date: '' },
        { name: '', date: '' },
        { name: '', date: '' },
        { name: '', date: '' }*/