const image=document.querySelector('.myImage');
const text= document.querySelector('h2');
const header= document.querySelector('h1');
const btnOne=document.querySelector('.btnOne');
const btnTwo=document.querySelector('.btnTwo');

btnOne.addEventListener('click', morning);

function morning(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
    text.innerHTML='What do I want for breakfast?';
    btnOne.innerHTML='Black coffee and toast&jam';
    btnTwo.innerHTML='Orange juice and scrambled eggs';
    btnOne.addEventListener('click', coffee);
    btnTwo.addEventListener('click', orange);
}
function coffee(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1525596201491-f6eae338a205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZmZlZSUyMGFuZCUyMHRvYXN0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='What is next?';
    btnOne.innerHTML="Let's go for a walk";
    btnTwo.innerHTML="Let's go to the garden";
    btnOne.addEventListener('click', walk);
    btnTwo.addEventListener('click', garden);
}
function orange(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1535567465397-7523840f2ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwanVpY2UlMjBhbmQlMjBlZ2dzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='What is next?';
    btnOne.innerHTML="Let's read a book";
    btnTwo.innerHTML="Let's drive to the beach";
    btnOne.addEventListener('click', book);
    btnTwo.addEventListener('click', beach);
}
function walk(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxtb3JuaW5nJTIwd2Fsa2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='It was nice! Some lunch?';
    btnOne.innerHTML="Just salad";
    btnTwo.innerHTML="Chicken noodles soup";
    btnOne.addEventListener('click', salad);
    btnTwo.addEventListener('click', soup);
}
function garden(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1555955207-b96159c16808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDQ2fHxnYXJkZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Wow! Good job! Now time for';
    btnOne.innerHTML="Take a nap";
    btnTwo.innerHTML="Juicy burger";
    btnOne.addEventListener('click', nap);
    btnTwo.addEventListener('click', burger);
}
function book(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1500261940006-86bb61e51e52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    text.innerHTML='Book is very interesting, but it is going to be rain';
    btnOne.innerHTML="I am going to drink hot tea and knitting";
    btnTwo.innerHTML="I am going to visit my friend";
    btnOne.addEventListener('click', hotTea);
    btnTwo.addEventListener('click', friend);
}
function beach(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1544473244-f6895e69ad8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    text.innerHTML="Whoo! All day at the beach! Let's take a shower and";
    btnOne.innerHTML="Have a dinner at home";
    btnTwo.innerHTML="Go to coctail party!";
    btnOne.addEventListener('click', dinner);
    btnTwo.addEventListener('click', coctail);
}
function salad(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Such a healthy lunch! Now I woud like to";
    btnOne.innerHTML="Finish that on-line course";
    btnTwo.innerHTML="Surf the Internet mindlessly";
    btnOne.addEventListener('click', course);
    btnTwo.addEventListener('click', internet);
}
function soup(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvdXB8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Mmmm, yammy! I need to be ready";
    btnOne.innerHTML="To my friends visit tonight";
    btnTwo.innerHTML="For tomorrow's trip";
    btnOne.addEventListener('click', visit);
    btnTwo.addEventListener('click', trip);
}
function nap(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1523859597145-32eff6e463ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='That was a good one! It is almost dinner time';
    btnOne.innerHTML="It's pizza and series night!";
    btnTwo.innerHTML="Chinese food and final game of my favorite team tonight!";
    btnOne.addEventListener('click', pizza);
    btnTwo.addEventListener('click', final);
}
function burger(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1626082919343-f3a29fc9566a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGJ1cmdlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Tasty! For the rest of the day I will';
    btnOne.innerHTML="Spend in a SPA salon";
    btnTwo.innerHTML="In the ZOO is nocturnal animal exhibition";
    btnOne.addEventListener('click', spa);
    btnTwo.addEventListener('click', zoo);
}
function hotTea(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1590511849669-3be01150009a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxrbml0dGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Rainy day with knitting going so fast! Quick dinner and time to go to sleep';
    btnOne.innerHTML="Pasta";
    btnTwo.innerHTML="Steak";
    btnOne.addEventListener('click', pasta);
    btnTwo.addEventListener('click', steak);
}
function friend(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyaWVuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='I love these cool summer evenings in a warm company of my friends!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function dinner(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1519756719377-e084f8333a83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGlubmVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Me, myself and I! Perfect day of reloading alone.";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function coctail(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1611244806964-91d204d4a2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwcGFydHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Music! Summer! Night! Love!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function course(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvdXJzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="My project is ready! So productive day!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function internet(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1622202602050-7b76e86df87a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxpbnRlcm5ldCUyMHN1cmZpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="What a night! This the Internet surfing finished with booking a trip to Australia for real surfing!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function visit(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZyaWVuZHMlMjBwYXJ0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Long time no see! I am glad that all you are here tonight!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function trip(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VpdGNhc2VzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Now I am ready! I have to set my alarm for 3 o'clock in the morning.";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function pizza(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1526786133302-53dde8e5b428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphJTIwbmlnaHR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Wow! What an unpredictable plot twist! This show deserves an attention!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function final(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmljdG9yeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Whoo!!!! They won!!!!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function spa(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHNwYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Totally relaxed and ready for joyful tomorrow!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function zoo(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1555400113-bbd3bad0650c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHpvbyUyMG5pZ2h0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Wow! The zoo opened up for me from a new side!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function pasta(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1619524536920-cf6f8730177f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhc3RhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Pasta at night sometimes is a great idea!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function steak(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1571162242324-f1607b1eceaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0ZWFrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Well, it was not so quick, but it sure was delicious!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}

btnTwo.addEventListener('click', noon);
function noon(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1545590148-584b2278bb37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdha2UlMjB1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='It is almost noon! Winter day is short, what do I want for breakfast?';
    btnOne.innerHTML="Hot chocolate and croissants";
    btnTwo.innerHTML="Avocado toast and green tea";
    btnOne.addEventListener('click', chocolate);
    btnTwo.addEventListener('click', avocado);
}
function chocolate(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1466337105551-aa3ab7890939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Winter Paris is adorable! I am goin to go';
    btnOne.innerHTML="To Louvre";
    btnTwo.innerHTML="For Cristmas shopping";
    btnOne.addEventListener('click', louvre);
    btnTwo.addEventListener('click', shopping);
}
function avocado(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZvY2FkbyUyMHRvYXN0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="What a non-traditional breakfast for MUnich! Let's dive into traditional ";
    btnOne.innerHTML="Christmas market at Marienplatz";
    btnTwo.innerHTML="Skating rink on Karlsplatz";
    btnOne.addEventListener('click', market);
    btnTwo.addEventListener('click', rink);
}
function louvre(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1581261549342-49d130bc6fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGxvdXZyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Inspirational! Now is the time for';
    btnOne.innerHTML="Dinner in a restaurant";
    btnTwo.innerHTML="Dinner in the hotel room";
    btnOne.addEventListener('click', restaurant);
    btnTwo.addEventListener('click', hotelRoom);
}
function shopping(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBwYXJpc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Lovely! I am going to drop the purchases in the hotel and';
    btnOne.innerHTML="will go to the Opera Garnier";
    btnTwo.innerHTML="Go to the Eiffel Tower";
    btnOne.addEventListener('click', opera);
    btnTwo.addEventListener('click', tower);
}
function market(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1577462281852-279bf4986f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    text.innerHTML="It's a winter wonderland! I got a presents for everyone! Now I will go";
    btnOne.innerHTML="To have a couple of beers and  sausages";
    btnTwo.innerHTML="To listen to the church organ in St.Luke's Church";
    btnOne.addEventListener('click', beer);
    btnTwo.addEventListener('click', organ);
}
function rink(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1638720495078-facd4bd6625f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGljZSUyMHNrYXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Wow! I love it! now it is the best time for";
    btnOne.innerHTML="Mulled wine and fireplace";
    btnTwo.innerHTML="Traditional bavarian dinner";
    btnOne.addEventListener('click', wine);
    btnTwo.addEventListener('click', bavarian);
}
function restaurant(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY0fHx3aW50ZXIlMjBwYXJpcyUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Winter in Paris is magical!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function hotelRoom(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1587094666821-7a1ecab87e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='It was a great idea to come to Paris for weekend!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function opera(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1526568587-d726afa637de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcm5pZXIlMjBvcGVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML='Amazing morning, day and evening!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function tower(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1478172326435-839f111a16c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80');
    text.innerHTML='What could be better than Christmas shopping? Christmas shopping in Paris!';
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function beer(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1600960144142-82fae1c3a471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxiZWVyJTIwYW5kJTIwc2F1c2lnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="First day of vacation have went just perfect!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function organ(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1515527658517-0a52764f2fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG0lQzMlQkNuY2hlbiUyMG9yZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="Organ music is a gift from heaven!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function wine(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1543491249-6199cfef818d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVsbGVkJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="What a warm end to a cold day!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}
function bavarian(){
    image.setAttribute('src', 'https://images.unsplash.com/photo-1606568939863-43d6704c8713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc2fHxjaHJpc3RtYXMlMjBkaW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
    text.innerHTML="The best vacation ever!";
    btnOne.style='display:none';
    btnTwo.style='display:none';
    header.innerHTML='It was a wonderful day'
}