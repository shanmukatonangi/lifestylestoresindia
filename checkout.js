document.querySelector(".cusRadioB1").addEventListener("click", () => {
  document.querySelector(".dot1").style.visibility = "visible";
  document.querySelector(".dot2").style.visibility = "Hidden";
});
document.querySelector(".cusRadioB2").addEventListener("click", () => {
  document.querySelector(".dot2").style.visibility = "visible";
  document.querySelector(".dot1").style.visibility = "Hidden";
});

document.querySelector(".cusRadioB3").addEventListener("click", () => {
  document.querySelector(".dot3").style.visibility = "visible";
  document.querySelector(".dot4").style.visibility = "Hidden";
});
document.querySelector(".cusRadioB4").addEventListener("click", () => {
  document.querySelector(".dot4").style.visibility = "visible";
  document.querySelector(".dot3").style.visibility = "Hidden";
});

var dataArr = [];

document.querySelector("#btn").addEventListener("click", function () {
  var Fullname = document.querySelector("#name1").value;
  var name = document.querySelector("#name").value;
  var city = document.querySelector("#city").value;
  var state = document.querySelector("#state").value;
  var building = document.querySelector("#building").value;
  var street = document.querySelector("#street").value;
  var landmark = document.querySelector("#landmark").value;
  var cardnum = document.querySelector("#cardnum").value;
  var nameCard = document.querySelector("#nameCard").value;
  var cvv = document.querySelector("#cvv").value;

  if (
    Fullname == "" ||
    name == "" ||
    cardnum == "" ||
    city == "" ||
    state == "" ||
    building == "" ||
    street == "" ||
    landmark == "" ||
    cardnum == "" ||
    nameCard == "" ||
    cvv == ""
  ) {
    alert("Empty Input fields");
  } else if (cardnum.length < 16) {
    alert(" Please Enter 16 digit Card Number");
  } else {
    var dataObj = {
      Fullname,
      name,
      city,
      state,
      building,
      street,
      landmark,
      cardnum,
      nameCard,
      cvv,
    };
    dataArr.push(dataObj);
    localStorage.setItem("cwp1", JSON.stringify(dataArr));
    alert("Order Placed");
    localStorage.removeItem("cartStorageData");
    window.location.href = "logout.html";
  }

  // console.log(Fullname, name,city,state,building,street,cardnum,landmark,nameCard,cvv);
  // alert("here")
});
// ------------------vinit-------------------
// document.getElementById("h3click").addEventListener("click", function () {
//   window.location.href =
//     "https://www.google.co.in/maps/search/lifestyle+stores+in+India/@21.1418524,78.9805008,11z/data=!3m1!4b1";
// });

// document.getElementById("paymentBtn").addEventListener("click", payment);

function payment() {
  var pincode = document.getElementById("scwidth").value;
  var mobile = document.getElementById("scwidth1").value;

  var pincode1 = 6;
  var mobile1 = 10;

  if (pincode.length == pincode1 && mobile.length == mobile1) {
    alert("Yo will be now redirected for payment ");
    window.location.href = "logout.html";
  } else {
    alert("Please enter 6 digit pincode and 10 digit mobile number");
  }

  var userArr = JSON.parse(localStorage.getItem("userdata")) || [];

  var fullname = document.getElementById("fullname").value;
  var number = document.getElementById("number").value;
  var pincode = document.getElementById("pincode").value;
  var city = document.getElementById("city").value;
  var selectwidth = document.getElementById("selectwidth").value;
  var buildingname = document.getElementById("buildingname").value;
  var streetname = document.getElementById("streetname").value;
  var landmark = document.getElementById("landmark").value;
  // console.log()
  var userDetails = {
    Fullname: fullname,
    Number: number,
    Pincode: pincode,
    City: city,
    Selectwidth: selectwidth,
    Buildingname: buildingname,
    Streetname: streetname,
    Landmark: landmark,
  };
  //console.log();
  userArr.push(userDetails);
  //console.log(userArr);
  localStorage.setItem("userData", JSON.stringify(userArr));
  //console.log("userArr:",userArr);
}

//   ------------------------nikhil javascript part//-----------------------------------------------------

var productItem = JSON.parse(localStorage.getItem("cartStorageData"));
console.log(productItem);
var sum = 0;
productItem.forEach(function (item) {
  display(item.name, item.img_url, item.MRP, item.rupeeSign);
});

function display(name, image_url, MRP, rupee) {
  sum += MRP;
  var vDiv = document.createElement("div");
  vDiv.setAttribute("id", "vDiv");

  var divImgN = document.createElement("div");
  divImgN.setAttribute("id", "divImgN");
  var vImg = document.createElement("img");
  vImg.setAttribute("id", "vImg");
  vImg.setAttribute("src", image_url);

  divImgN.append(vImg);

  var pDivN = document.createElement("div");
  pDivN.setAttribute("id", "pDivN");
  var myPara1 = document.createElement("p");
  myPara1.setAttribute("id", "myPara1");
  myPara1.textContent = name;

  pDivN.append(myPara1);

  var pDivN2 = document.createElement("div");
  pDivN2.setAttribute("id", "pDivN2");
  var myPara1 = document.createElement("p");
  var myPara2 = document.createElement("p");
  myPara2.setAttribute("id", "myPara2");
  myPara2.textContent = "Price:";

  var myPara3 = document.createElement("myPara3");
  myPara3.setAttribute("id", "myPara3");
  myPara3.textContent = rupee + MRP;
  pDivN2.append(myPara2, myPara3);

  vDiv.append(divImgN, pDivN, pDivN2);

  var checkOutMain = document.getElementById("checkOutMain");
  checkOutMain.append(vDiv);
}
var tag = (document.getElementById("nikAmt").innerHTML =
  `<span> ₹ </span>` + sum);
if (sum <= 250) {
  sum += 40;
  var tag3 = (document.getElementById("freeN").textContent = "40");
  var tag2 = (document.getElementById("finalTotal").innerHTML =
    `<span> ₹ </span>` + sum);
} else {
  var tag3 = (document.getElementById("freeN").textContent = "Free");
  var tag2 = (document.getElementById("finalTotal").innerHTML =
    `<span> ₹ </span>` + sum);
}

var tag2 = (document.getElementById("finalTotal").innerHTML =
  `<span> ₹ </span>` + sum);
