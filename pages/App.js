var container = document.getElementById("container");
var row = document.getElementById("row");

var list = [
        {
            url: "https://www.youtube.com/embed/C_CZCsj_x9g",
            type : "vedio",
            heading: "Moroco earthquake Hot conversation: Stefano Meloni opened it many times in a short period or forwarded it. View all 5 opens | turn off hot conversations",
            profle: "",
            name: "Amritvela Gurbani",
            verified: true,
            tages: ["A", "B", "C"]
        },
    ]

// var list = [
//     {
//         url :"https://www.youtube.com/embed/zfSFSci4Hic",
//         type : "vedio",
//         heading: "Moroco earthquake Hot conversation: Stefano Meloni opened it many times in a short period or forwarded it. View all 5 opens | turn off hot conversations",
//         profle: "",
//         name: "Amritvela Gurbani",
//         verified: true,
//         tages: ["A", "B", "C"]
//     },
//     {
//         url: "./image/hero_1.jpg",
//         type : "image",
//         heading: "profile images",
//         profle: "./image/Danesh kumsr.jpg",
//         name: "Danesh Kumar",
//         // verified: true,
//         verified: false,
//         tages: []
//     },
// ]


// var container = document.getElementById("container");
// for(var i = 0; i < list.length; i++){
//     // Card
//     var card = document.createElement("div");
//     container.appendChild(card);
//     if (list[i].varified){
//         card.style.borderColor = "green"
//     }else{
//         card.style.borderColor = "gray"
//     }
//     card.setAttribute("class", "card");
//     if(list[i].type === "vedio"){
//         // vedio
//         var iframe = document.createElement("iframe");
//         card.appendChild(iframe);
//         iframe.setAttribute("url", list[i].url)
//     } else{
//             // Card image
//             var cardImage = document.createElement("img");
//             card.appendChild(cardImage);
//             cardImage.setAttribute("class", "cardImage");
//             cardImage.setAttribute("src", list[i].url);
//     }


//     // heading
//     var heading = document.createElement("h1");
//     card.appendChild(heading);
//     if(list[i].heading.length > 20 ){
//         heading.innerHTML = list[i].heading.slice(0, 20) + "....";
//     }else{
//         heading.innerHTML = list[i].heading;
//     }
//     // Profile logo
//     var profileImage = document.createElement("img");
//     card.appendChild(profileImage);
//     profileImage.setAttribute("class", "profileImage");
//     if(list[i].profle === ""){
//         profileImage.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3135/3135715.png");
//     }else{
//         profileImage.setAttribute("src", list[i].profle);
//     }
//     // user name
//     var userName = document.createElement("p");
//     card.appendChild(userName);
//     userName.setAttribute("class", "userName");
//     userName.innerHTML = list[i].name;

//     // varified
//     // if(list[i].varified){
//     //     var varified = document.createElement(img);
//     //     userName.appendChild(varified);
//     //     varified.setAttribute("class", "varified")
//     //     varified.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png");
//     // }

//     // 
//   // verified
//   if (list[i].verified) {
//     var verified = document.createElement("img");
//     userName.appendChild(verified);
//     verified.setAttribute("class", "verified");
//     verified.setAttribute(
//       "src",
//       "https://cdn-icons-png.flaticon.com/512/8888/8888205.png"
//     );
//   }
//     // 

//     // Tages
//     if (list[i].tages.length !== 0){
//         var tages = document.createElement("div");
//         card.appendChild(tages);
//         tages.setAttribute("class", "tages");
//         for (var j = 0; j < list[i].tages.length; j++){
//             var tag = document.createElement("p");
//             tages.appendChild(tag);
//             tag.innerHTML = list[i].tages[j];
//         }
//     }
// }

