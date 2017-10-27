(function(){
  let deviceWidth = document.documentElement.clientWidth;
  if(deviceWidth > 750) deviceWidth = 750;
  document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px'; 
})();