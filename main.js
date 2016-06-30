var redText = 'Tumblr mixtape thundercats, freegan wolf tote bag affogato umami. Chambray hammock 3 wolf moon artisan, locavore chillwave cred raw denim hashtag kogi. Health goth venmo humblebrag intelligentsia kombucha drinking vinegar. Skateboard gastropub pabst godard, organic gentrify narwhal. Farm-to-table cornhole pour-over echo park letterpress, schlitz franzen kinfolk photo booth vice craft beer shoreditch church-key roof party portland. Marfa four loko cronut biodiesel crucifix. Man bun synth williamsburg pop-up.';
var blueText = 'Bicycle rights sustainable keytar taxidermy, lumbersexual cardigan fap pour-over 8-bit ramps. Semiotics occupy salvia fixie, YOLO health goth keffiyeh scenester dreamcatcher disrupt cold-pressed kinfolk beard shabby chic 3 wolf moon. Sartorial chambray venmo yuccie, thundercats single-origin coffee wayfarers leggings 90\'s tattooed crucifix. Kogi irony occupy, skateboard cray hella tattooed squid chambray keytar. Pug photo booth ennui, neutra chambray distillery before they sold out occupy keytar yr art party +1 meggings iPhone 90\'s. Biodiesel pug gentrify, you probably haven\'t heard of them XOXO VHS sartorial intelligentsia chambray tousled fingerstache cliche. Pitchfork hoodie PBR&B hammock waistcoat artisan.';
var greenText = 'Sustainable yuccie occupy four loko swag etsy bushwick selfies, helvetica taxidermy butcher keffiyeh photo booth locavore tofu. 3 wolf moon food truck fanny pack, church-key intelligentsia small batch blog affogato letterpress locavore seitan photo booth. Dreamcatcher slow-carb hoodie, chambray gluten-free tilde crucifix ramps sustainable normcore narwhal celiac. Kale chips DIY crucifix wayfarers retro blog fixie, kombucha health goth raw denim seitan paleo heirloom. Put a bird on it green juice 3 wolf moon ramps tumblr crucifix. Marfa swag pop-up, pug biodiesel lomo XOXO 90\'s chartreuse locavore small batch. Next level skateboard occupy jean shorts twee, williamsburg tote bag portland 3 wolf moon slow-carb fap cray fixie kale chips.';

var redHead = 'Red';
var blueHead = 'Blue';
var greenHead = 'Green';

var redBox = document.querySelector('.red');
var blueBox = document.querySelector('.blue');
var greenBox = document.querySelector('.green');

var changeHead = document.querySelector('.head');
var changeText = document.querySelector('.text');

redBox.addEventListener('click', function() {
  changeText.textContent = redText;
  changeHead.textContent = redHead;
});
blueBox.addEventListener('click', function() {
  changeText.textContent = blueText;
  changeHead.textContent = blueHead;
});
greenBox.addEventListener('click', function() {
  changeText.textContent = greenText;
  changeHead.textContent = greenHead;
});
