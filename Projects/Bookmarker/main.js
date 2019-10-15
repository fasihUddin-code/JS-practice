//listen for form submit
document.getElementById("myForm").addEventListener('submit', saveBookmark);


//save bookmark
function saveBookmark(e){

    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    if(!validateForm(siteName,siteURL)){
        return false;
    }

    var bookmark= {
        Name : siteName,
        Url : siteURL
    };

    //Local Storage Test
    // localStorage.setItem('test','Hello');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));

    //Test if bookmark is null
    if(localStorage.getItem('bookmarks') === null){
       //init Array
        var bookmarks = [];

        //Add to array
        bookmarks.push(bookmark);

        //Set to LocalStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else{
        //Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmarks to array
        bookmarks.push(bookmark);

        //Re-set Back to localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    }

    //Re-fetch bookmarks
    fetchBookmarkers();

    //clear Form

    var b =document.getElementById('myForm').reset();

    //prevent form from submitting
    e.preventDefault();
}

//Delete bookmark

function deleteBookmark(url){
   // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
 // console.log(bookmarks[1].Url);
  
  // Loop through the bookmarks
  for(var i =0;i < bookmarks.length;i++){
      //console.log(url);
      //console.log(bookmarks[i].url);
    if(bookmarks[i].Url == url){
      
      bookmarks.splice(i, 1);
    
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //Re-fetch bookmarks
    fetchBookmarkers();

}

//fetch bookmarks
function fetchBookmarkers() {
    //Get bookmarker from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //Get output Id
    var bookmarksResult = document.getElementById('bookmarksResults');

    //Build Output
    bookmarksResult.innerHTML = '';
    for( var i = 0 ; i < bookmarks.length ; i++){
        var name = bookmarks[i].Name;
        var url = bookmarks[i].Url;
        //console.log(url);
        
        bookmarksResult.innerHTML  += '<div class="bg-secondary rounded m-blank">'+
        '   <h3>'+name+
        '     <a class="btn btn-success" target="_blank" href="'+addhttp(url)+'" > Visit </a> ' +
        '     <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#" > Delete </a> ' + 
        '   </h3>' +
        ' </div>' ;
    }
}

function validateForm(siteName, siteURL){
    
    if(!siteName || !siteURL){
        alert("please fill up the form");
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteURL.match(regex)){
        alert("please use a valid URL");
        return false;
    }

    return true;

}

function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}