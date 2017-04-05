$(document).ready(function() {
   horloge();
   ts3();
   //xplanet();
   ifstat();
   meteo();
   //vpn();
   ping();
});

/* meteo */

var meteo_timeout;

function meteo ()
{
  $.ajax({
    async : false,
    type: "GET",
    url: "./ajax.php",
    data: "block=meteo",
    success: function(html){
      $("#meteo").html(html);
    }
  });

  meteo_timeout = setTimeout("meteo()", 3600000);
}

/* horloge */

var horloge_timeout;

function horloge()
{
  dows  = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  mois  = ["janv", "f&eacute;v", "mars", "avril", "mai", "juin", "juillet", "ao&ucirc;t", "sept", "oct", "nov", "d&eacute;c"];

  now          = new Date;
  heure        = now.getHours();
  min          = now.getMinutes();
  sec          = now.getSeconds();
  jour_semaine = dows[now.getDay()];
  jour         = now.getDate();
  mois         = mois[now.getMonth()];
  annee        = now.getFullYear();

  if (sec < 10) {
      sec0 = "0";
  } else {
      sec0 = "";
  }
  
  if (min < 10) {
      min0 = "0";
  } else {
      min0 = "";
  }
  
  if (heure < 10) {
      heure0 = "0";
  } else {
      heure0 = "";
  }

  horloge_heure   = heure + ":" + min0 + min;
  horloge_date    = "<span class='horloge_grey'>" + jour_semaine + "</span> " + jour + " " + mois + " <span class='horloge_grey'>" + annee + "</span>";
  horloge_content = "<div class='horloge_heure'>" + horloge_heure + "</div><div class='horloge_date'>" + horloge_date + "</div>";

  $("#horloge").html(horloge_content);

  horloge_timeout = setTimeout("horloge()", 1000);
}

/* TS3 */

var ts3_timeout;

function ts3 ()
{
  $.ajax({
    async : false,
    type: "GET",
    url: "./ajax.php",
    data: "block=ts3",
    success: function(html){
      $("#ts3").html(html);
    }
  });

  ts3_timeout = setTimeout("ts3()", 10000);
}

/* PING */

var ping_timeout;

function ping ()
{
  $.ajax({
    async : false,
    type: "GET",
    url: "./ajax.php",
    data: "block=ping",
    success: function(html){
      $("#ping").html(html);
    }
  });

  ping_timeout = setTimeout("ping()", 30000);
}

/* VPN */

var vpn_timeout;

function vpn ()
{
  $.ajax({
    async : false,
    type: "GET",
    url: "./ajax.php",
    data: "block=vpn",
    success: function(html){
      $("#vpn").html(html);
    }
  });

  vpn_timeout = setTimeout("vpn()", 5000);
}

/* xplanet */

var xplanet_timeout;

function xplanet () {

  var now       = new Date().getTime();
  var img_earth = $("<img />").attr("src", "xplanet/img/xplanet_earth.png?"+now);
  var img_mon   = $("<img />").attr("src", "xplanet/img/xplanet_moon.png?"+now);

  $("#img_earth").attr("src", "xplanet/img/xplanet_earth.png?"+now);
  $("#img_moon").attr("src", "xplanet/img/xplanet_moon.png?"+now);

  xplanet_timeout = setTimeout("xplanet()", 600000);
}

/* ifstat */

var ifstat_timeout;

function ifstat () {

  var now             = new Date().getTime();

  var url_eth1_down = "ajax.php?block=ifstat&eth=wan&up_down=down&max=2000&hour="+now;
  var url_eth1_up   = "ajax.php?block=ifstat&eth=wan&up_down=up&max=150&hour="+now;

  var img_oberon_down = $("<img />").attr("src", url_eth1_down);
  $("#img_oberon_down").attr("src", url_eth1_down);

  var img_oberon_up = $("<img />").attr("src", url_eth1_up);
  $("#img_oberon_up").attr("src", url_eth1_up);

  ifstat_timeout = setTimeout("ifstat()", 5000);
}


