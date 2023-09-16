
var list = [
        {
            url: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
            type : "image",
            heading: "Moroco earthquake Hot conversation: Stefano Meloni opened it many times in a short period or forwarded it. View all 5 opens | turn off hot conversations",
            profile: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            fullName: "Amritvela Gurbani",
            verified: true,
            views: "1.9M views",
            time: "3 minutes ago"
            // tages: ["A", "B", "C"]
        },
        {
            url: "https://www.youtube.com/embed/TrPvQvbp3Cg",
            type : "video",
            heading: "Coke Studio Season 9 | Paar Chanaa De | Shilpa Rao & Noori",
            profile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
            fullName: "Coke Studio Pakistan",
            verified: true,
            views: "26M views",
            time: "7 years ago"
        },
        {
            url: "https://www.youtube.com/embed/Hdj5eXI_9Rw",
            type : "video",
            heading: "The Sufi Mashup | Jugni | Ishq Bulleh Nu | Parh Parh Ilm | Yashfeen Ajmal Shaikh | Sufi Song 2022",
            profile: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            fullName: "Yashfeen Ajmal Shaikh",
            verified: true,
            views: "7.2M views",
            time: "2 years ago"
        },
        {
            url: "https://www.youtube.com/embed/XLz_vTOt5zQ",
            type : "video",
            heading: "kalam mian Muhammad baksh ",
            profile: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            fullName: "Zahid Mahmood",
            verified: false,
            views: "135 views",
            time: "2 days ago"
        },
        {
            url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
            type : "image",
            heading: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal;",
            profile: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            fullName: "Taj Mahal",
            verified: true,
            views: "15.9k views",
            time: "5 months ago"
        },
   
        {
            url: "https://www.youtube.com/embed/llLIXT_vXl8",
            type : "video",
            heading: "Ali Zafar's fan moment with Amitabh Bachchan | Kill Dil Cast | KBC",
            profile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
            fullName: "Ali Zafar",
            verified: false,
            views: "10.9k views",
            time: "4 years ago"
        }
    

    ]

    var container = document.getElementById("container");
    var row = document.getElementById("row");

    for(var i = 0; i < list.length; i++){
        // col
        var col = document.createElement("div");
        row.appendChild(col);
        col.setAttribute("class", "col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4");
        // card
        var card = document.createElement("div");
        col.appendChild(card);
        card.setAttribute("class", "card");
        if(list[i].type === "video"){
            // card video
        var iframe = document.createElement("iframe");
        card.appendChild(iframe);
        iframe.setAttribute("src", list[i].url)
        }
        else{
            // Card image
            var cardImage = document.createElement("img");
            card.appendChild(cardImage);
            cardImage.setAttribute("class", "cardImage");
            cardImage.setAttribute("src", list[i].url);
        }
        // Card data
        var card_data = document.createElement("div");
        card.appendChild(card_data);
        card_data.setAttribute("class", "card_data");
        // logo
        var logo = document.createElement("div");
        card_data.appendChild(logo);
        logo.setAttribute("class", "logo");
        // Profile image
        var profileImg = document.createElement("img");
        logo.appendChild(profileImg)
        profileImg.setAttribute("src", list[i].profile);
        // innerdata
        var innerdata = document.createElement("div");
        card_data.appendChild(innerdata);
        innerdata.setAttribute("class", "innerdata");
        // heading
        var heading = document.createElement("h1");
        innerdata.appendChild(heading);
        heading.setAttribute("class", "h1");
        // var click = document.createElement("button");
        // heading.appendChild(click);
        // click.innerHTML = "..."
        if(list[i].heading.length >= 70){
            heading.innerHTML = list[i].heading.slice(0, 70) +" "+ "..."; 
        }else{
            heading.innerHTML = list[i].heading;
        }
        // name 
        var fullName = document.createElement("span");
        innerdata.appendChild(fullName);
        fullName.innerHTML = list[i].fullName;
        // varified
        if(list[i].verified === true){
            var varified = document.createElement("img");
            fullName.appendChild(varified);
            varified.setAttribute("class", "varified");
            varified.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/6928/6928921.png");
        }
        // views
        var views = document.createElement("span");
        innerdata.appendChild(views);
        views.innerHTML = list[i].views;
        // time
        var time = document.createElement("span");
        views.appendChild(time);
        time.setAttribute("class", "time")
        time.innerHTML = list[i].time

    }

