$(document).ready(function(){
    
    //initial check to make sure jquery loaded
    //alert('jquery loaded');

    //render birthday list in DOM
    var list = document.querySelector('ul');
    function showBirthdays(){
        for(i = 0; i < birthdays.length; i++){
            var item = document.createElement('li');
            item.textContent = birthdays[i].name + ', ' + birthdays[i].date;
            list.appendChild(item);          
        }
    }

    //store birthday data in object array
    var birthdays = [
        {
            name: 'Ronald Gallardo',
            date: 'December 21'
        },
        {
            name: 'Shairelou Amora',
            date: 'December 21'
        },
        {
            name: 'Zenny Alla',
            date: 'December 21'
        },
        {
            name: 'JC. Daniel Amita',
            date: 'December 25'
        },
        {
            name: 'Ayesha Jaye De Jesus',
            date: 'December 25'
        },
        {
            name: 'Ruthzel Martinez',
            date: 'December 30'
        },
        {
            name: 'Elvie Amora',
            date: 'December 30'
        }        
    ]
    JSON.stringify(birthdays);
    showBirthdays();    
    
});