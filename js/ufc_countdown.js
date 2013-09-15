$(document).ready(function() {
  // your code
  //alert('Page: ' + $('title').html() + ' dom loaded!');
  var events = getEvents();
  
  // wire up 
  setupListofEvents(events);
  
  setupCurrentEvent(events[0]);

  // list click events
  $("#event_list li a").click(function() {
  	//alert('clicked event:' + this.id);
  	setupCurrentEvent(events[this.id]);
  });
});


var getEvents = function() {
	var events_obj = {"events": [{"location": "Toronto, Ontario", "title": "UFC 165 Live on Pay-Per-View", "date": "Saturday, September 21", "tagline": "Jones vs. Gustafsson", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/UFC165/Jon-Jones-Alexander-Gustafsson/fight_226127_mediumThumbnail.png"}, {"location": "Barueri, Brazil", "title": "UFC FIGHT NIGHT Maia vs. Shields", "date": "Wednesday, October 9", "tagline": "Oct. 9 on FOX Sports 1", "time": "7PM/4PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_235499_mediumThumbnail.png"}, {"location": "Houston, Texas", "title": "UFC 166 Live on Pay-Per-View", "date": "Saturday, October 19", "tagline": "Velasquez vs. Dos Santos 3", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/UFC166/Cain-Velasquez-Junior-Dos-Santos/fight_230665_mediumThumbnail.png"}, {"location": "Manchester, England", "title": "UFC Fight Night Bisping vs. Munoz", "date": "Saturday, October 26", "tagline": "Oct. 26 on FOX Sports 2", "time": "3PM/12PM", "img_url": "http://media.ufc.tv/generated_images_sorted/ufc-fight-night-bisping-munoz/Michael-Bisping-Mark-Munoz/fight_233365_mediumThumbnail.png"}, {"location": "Fort Campbell, Kentucky", "title": "UFC Fight Night Fight For The Troops", "date": "Wednesday, November 6", "tagline": "Nov. 6 on FOX Sports 1", "time": "7PM/4PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_236149_mediumThumbnail.png"}, {"location": "Goiania, Brazil", "title": "UFC Fight Night Belfort vs. Henderson", "date": "Saturday, November 9", "tagline": "Nov. 9 on FOX Sports 1", "time": "8PM/5PM", "img_url": "http://media.ufc.tv/generated_images_sorted/ufn-belfort-henderson/Vitor-Belfort-Dan-Henderson/fight_237105_mediumThumbnail.png"}, {"location": "Las Vegas, Nevada", "title": "UFC 167 Live on Pay-Per-View", "date": "Saturday, November 16", "tagline": "St-Pierre vs. Hendricks", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/UFC167/Georges-St-Pierre-Johny-Hendricks/fight_230721_mediumThumbnail.png"}, {"location": "Las Vegas, Nevada", "title": "TUF 18 Finale Live on FOX Sports 1", "date": "Saturday, November 30", "tagline": "Team Rousey vs. Team Tate", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/TUF18-Finale/Gray-Maynard-Nate-Diaz/fight_239452_mediumThumbnail.png"}, {"location": "Brisbane, Qld", "title": "UFC Fight Night Hunt vs. Bigfoot", "date": "Friday, December 6", "tagline": "Dec. 6 on FOX Sports 1", "time": "9PM/6PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_239494_mediumThumbnail.png"}, {"location": "Sacramento, CA", "title": "UFC on FOX 9 Live from Sacramento", "date": "Saturday, December 14", "tagline": "Dec. 14 on FOX", "time": "8PM/5PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_239549_mediumThumbnail.png"}]};
	return events_obj.events;
};

var setupListofEvents = function(events){

	var list_txt = "";

	$.each(events,function(index,event) {
		console.log(event);
		list_txt += '<li> <a href="#" id="' + index +'" >' + event.title + '</a></li>\n';
	});

	$("#event_list").html(list_txt);
};

var setupCurrentEvent = function(event) {

    // setup title
	var total_txt = "";
	total_txt += event.title;
	total_txt += "<br>"
	total_txt += event.tagline;
	$("#fight_title").html(total_txt);
    
    // setup image
    console.log(event.img_url);
    $("#fight_image").attr({src:event.img_url});
	
	// setup countdown
	setupCountdownTimer(event);
};

var setupCountdownTimer = function(event) {

	var event_date = event.date;
	var event_time = event.time;

	console.log(event_date);
	console.log(event_time);

	var event_txt = event_date + "<br>" + event_time;
	$("#countdown").html(event_txt);
};