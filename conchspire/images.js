
const imageUrls = [
    "https://storage.googleapis.com/conchology-images/790000sup/795280.jpg",
    "https://storage.googleapis.com/conchology-general-images/templates_conchology/layout/new/logo-gray.jpg",
    "https://storage.googleapis.com/conchology-images/240000med/244162.jpg",
    "https://storage.googleapis.com/conchology-images/1000000med/1004582.jpg",
    "https://storage.googleapis.com/conchology-images/780000med/782833.jpg",
    "https://storage.googleapis.com/conchology-images/1150000med/1150241.jpg",
    "https://storage.googleapis.com/conchology-images/880000med/880222.jpg",
    "https://storage.googleapis.com/conchology-images/1110000med/1115804.jpg",
    "https://storage.googleapis.com/conchology-images/630000med/638741.jpg",
    "https://storage.googleapis.com/conchology-images/610000med/615520.jpg",
    "https://storage.googleapis.com/conchology-images/1030000med/1032163.jpg",
    "https://storage.googleapis.com/conchology-images/370000med/374884.jpg",
    "https://storage.googleapis.com/conchology-images/910000med/913571.jpg",
    "https://storage.googleapis.com/conchology-images/210000med/211113.jpg",
    "https://storage.googleapis.com/conchology-images/1210000med/1214660.jpg",
    "https://storage.googleapis.com/conchology-images/730000med/732388.jpg",
    "https://storage.googleapis.com/conchology-images/500000med/501081.jpg",
    "https://storage.googleapis.com/conchology-images/1360000med/1368636.jpg",
    "https://storage.googleapis.com/conchology-images/630000med/631280.jpg",
    "https://storage.googleapis.com/conchology-images/1380000med/1386532.jpg",
    "https://storage.googleapis.com/conchology-images/420000med/429704.jpg",
    "https://storage.googleapis.com/conchology-images/1340000med/1349922.jpg",
    "https://storage.googleapis.com/conchology-images/990000med/995721.jpg",
    "https://storage.googleapis.com/conchology-images/1050000med/1051051.jpg",
    "https://storage.googleapis.com/conchology-images/500000med/500999.jpg",
    "https://storage.googleapis.com/conchology-images/1140000med/1146771.jpg",
    "https://storage.googleapis.com/conchology-images/500000med/502012.jpg",
    "https://storage.googleapis.com/conchology-images/390000med/394268.jpg",
    "https://storage.googleapis.com/conchology-images/330000med/331277.jpg",
    "https://storage.googleapis.com/conchology-images/1250000med/1251469.jpg",
    "https://storage.googleapis.com/conchology-images/1160000med/1165003.jpg",
    "https://storage.googleapis.com/conchology-images/980000med/987079.jpg",
    "https://storage.googleapis.com/conchology-images/360000med/365724.jpg",
    "https://storage.googleapis.com/conchology-images/1390000med/1398631.jpg",
    "https://storage.googleapis.com/conchology-images/290000med/298943.jpg",
    "https://storage.googleapis.com/conchology-images/530000med/533585.jpg",
    "https://storage.googleapis.com/conchology-images/1250000med/1255974.jpg",
    "https://storage.googleapis.com/conchology-images/490000med/491728.jpg",
    "https://storage.googleapis.com/conchology-images/1140000med/1146787.jpg",
    "https://storage.googleapis.com/conchology-images/1350000med/1356603.jpg",
    "https://storage.googleapis.com/conchology-images/370000med/370742.jpg",
    "https://storage.googleapis.com/conchology-images/490000med/490748.jpg",
    "https://storage.googleapis.com/conchology-images/1350000med/1356911.jpg",
    "https://storage.googleapis.com/conchology-images/1350000med/1356387.jpg",
    "https://storage.googleapis.com/conchology-images/410000med/413077.jpg",
    "https://storage.googleapis.com/conchology-images/680000med/681272.jpg",
    "https://storage.googleapis.com/conchology-images/1260000med/1269507.jpg",
    "https://storage.googleapis.com/conchology-images/410000med/411006.jpg",
    "https://storage.googleapis.com/conchology-images/600000med/604986.jpg",
];

const imageGrid = document.getElementById("imageGrid");

imageUrls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Image";
    imageGrid.appendChild(img);
});
