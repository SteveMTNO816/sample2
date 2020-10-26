/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */


function billingFunction() {
  var billingName = document.getElementById('shippingName').value;
  var billingZip = document.getElementById('shippingZip').value;
  if (document.getElementById('same').checked){
    document.getElementById('billingName').value = billingName;
    document.getElementById('billingZip').value = billingZip;
  }
  else {
    document.getElementById('billingName').value = "";
    document.getElementById('billingZip').value = "";
  }
}