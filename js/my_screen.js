
var catagories = [
  "Motivational",
  "Inspirational",
  "Spiritual",
  "Courageous"
];
var myContacts = ["Contact No: 0635844354",
  "Email: sivuysiwequse0@gmail.com"
];

var quotes = {
  "Motivational": [{
      img: "images/motivatinal1.jpg",
      className: "medium",
      isImage : true
    },
    {
      img: "images/motivational2.jpg",
      className: "medium",
      isImage : true
    }
  ],
  "Inspirational": [{
      img: "images/inspire1.jpg",
      className: "medium",
      isImage : true
    },
    {
      img: "images/inspire2.jpg",
      className: "medium",
      isImage : true
    }
  ],
  "Spiritual": [{
      img: "images/spiritual1.jpg",
      className: "medium",
      isImage : true
    },
    {
      img: "images/spiritual2.jpg",
      className: "medium",
      isImage : true
    }
  ],
  "Courageous": [{
      img: "images/courage1.jpg",
      className: "medium",
      isImage : true
    },
    {
      img: "images/courage2.jpg",
      className: "medium",
      isImage : true
    }
  ]
};


var myNavTemplate = document.querySelector('.dropdownNav');
var myNavTemp = Handlebars.compile(myNavTemplate.innerHTML);
var output = document.querySelector('.displayNav');

var categoryDropdown = document.querySelector('.categoryDropdown');

var compResult = myNavTemp({
  key: catagories
})
//var Result = myNavTemp({
//cont: myContacts
//})
output.innerHTML = compResult;
//output.innerHTML = Result;

var TempForImages = document.querySelector('.myImages');
var imagesTemplate = Handlebars.compile(TempForImages.innerHTML);

var myLinks = document.querySelector('.displayNav');

function showMyQuote(evt) {

  var quoteType = evt.target.dataset.menuType;

  if (quoteType) {
    var images = quotes[quoteType];
    document.querySelector('.displayImages').innerHTML = imagesTemplate({
      img: images
    });
  }

}

myLinks.addEventListener('click', showMyQuote);

   var WriteButton = document.querySelector('.writer');


    var containerDiv = document.querySelector('.inputContainer');
    WriteButton.addEventListener('click',function(){
      containerDiv.classList.remove('inputContainer')
    });

    var dropCatagoriTemp = document.querySelector('.catagoriDropDown');
    var DropTempCompile = Handlebars.compile(dropCatagoriTemp.innerHTML);

    categoryDropdown.innerHTML = DropTempCompile({
      catagory: catagories
    });

  var addTheQuote = document.querySelector('.adding');

    function addNewQuote(e) {

       var inputName = document.querySelector('.nameTxt');
       //alert(dropCatagoriTemp);

       var categorySelected = categoryDropdown.value;
       var inputQuote = document.querySelector('.QuoteTxt');

       console.log(categorySelected, inputQuote.value, inputName.value);

       quotes[categorySelected].push({
         isText : true,
         text : inputQuote.value,
         by : inputName.value
       });
  //   localStorage.setItem("newQuotes" ,quotes);
 //if(typeof(inputQuote.value) === "string" && inputName.value !== '' ){
// quotes.push(categorImages)
 //}
     }
  //  localStorage.getItem(newQuotes);
addTheQuote.addEventListener('click',addNewQuote);
