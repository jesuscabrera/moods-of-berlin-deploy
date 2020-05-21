const defaultPlaces = [
  {
    title: "Bouldergarten",
    description:
      "The youngest of the Berlin bouldering halls uses the old grounds of the T-Hall, and anyone who has been there knows what that means: a large high hall. The boulder walls are very varied. The main focus of the climbing facilities is a terrace-shaped, three-level boulder wall, on which one cannot find a target boulder, but climbs to the next floor at the end. There is also a bouldering area with smooth walls, a high wall for advanced skiers and four climbing routes (3x top ropes, 1x lead). A fitness area, yoga mats and a slackline complete the offer.",
    mood: "energetic",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962455/moods-of-berlin%20/bouldergarten_tyqehc.jpg",
    street: "Thiemannstraße 1 Tor 4",
    zip: "12059",
    city: "Berlin",
    review: [],
  },
  {
    title: "Tiergarten",
    description:
      "The Tiergarten is an enormous (500+ acre!!!) park in the middle of Berlin. With the Victory column on one side and Potsdamer Platz, museums, and shops on another (plus much more all around). It is really quite expansive. Very serene, lush, gorgeous plants/flowers, many idyllic ponds interspersed with benches around - romantic; and on a beautiful day it is easy to spend hours wandering around or spread out on some blankets for a picnic.",
    mood: "relaxed",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962449/moods-of-berlin%20/tiergarten_fscmqx.jpg",
    street: "Straße des 17. Juni",
    zip: "10785",
    city: "Berlin",
    review: [],
  },
  {
    title: "Viktoria Park",
    description:
      "A gem of a park in the Kreuzberg area of Berlin! We had been wandering around Berlin by foot and bike for days, and I was exhausted! We decided to take a little break from touristing around Berlin to read our books in Viktoriapark! And it turned out to be one of my favorite places we explored on our short trip to Berlin! Viktoriapark opened in 1894 and contains a famous Berlin landmark - a cast iron monument dedicated by King Frederick William III of Prussia to the liberation wars fought at the end of the War of the Sixth coalition against France in the course of the Napoleonic Wars. The park also contains a beautiful (but totally artificial) waterfall that begins at the foot of the monument and continues down the hillside to the intersection of Grossbeerenstrasse and Kreuzbergstrasse.",
    mood: "relaxed",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589964756/moods-of-berlin%20/Viktoriapark_B-Kreuzberg_06-2017_img1_mx73zq.jpg",
    street: "Viktoriapark",
    zip: "10965",
    city: "Berlin",
    review: [],
  },
  {
    title: "Teufelssee",
    description:
      "What could be nicer than a swim in the forest lake? In the middle of the city. In the case of the Teufelssee, please note the following: - The walk from S Heerstraße will take an hour on foot. The bike is therefore recommended. The parking lot is hopelessly overcrowded in summer. - You shouldn't have a problem with nackedeis. Or even like to brown your own fur seamlessly. What I find very interesting is that some visitors seem to be there every day in summer. You have to listen to them at Qutaschen. For example, it's about what the wild boars did last night ...",
    mood: "thoughtful",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589964269/moods-of-berlin%20/Teufelssee_kjedsf.jpg",
    street: "Teufelsseechaussee 22",
    zip: "14193",
    city: "Berlin",
    review: [],
  },
  {
    title: "Tempelhofer Feld",
    description:
      "A can't miss sight, that I somehow managed to miss the first two times I visited Berlin, Tempelhof is something you won't find anywhere else. Formerly the East Berlin airport, rather than renovate or tear it down, it's been largely converted to public and park space. It hosted the marathon expo, and is the perfect space for events. The main arrival hall is still there as are baggage claims, passport control, and of course the runways. The hangars host massive event space and the grounds are perfect for exploring green spaces and maybe even taking a picnic.",
    mood: "thoughtful",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962419/moods-of-berlin%20/tempelhoferfeld_baxyvk.jpg",
    street: "Tempelhofer Damm",
    zip: "12101",
    city: "Berlin",
    review: [],
  },
  {
    title: "Sammlung Boros",
    description:
      "They really worked the space to highlight the art. It's stark, industrial. Most of the pieces are contemporary, some big names and some not so much. The tour will be different every time you go on it because the docents are encouraged to add their own interpretations of the pieces when they guide. There were quite a few pieces that felt location-specific. The popcorn and the tree compass were my favorites. It makes you wish you came earlier and then later, to see the art change and morph. I was also delighted with their front desk staff. I've booked a tour but for wrong dates, showed up there on my booked date and they worked with me to slot me into one of the cancellations later that day. So if you're having trouble booking and are going solo, see if they have a same-day cancel.",
    mood: "thoughtful",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962411/moods-of-berlin%20/Boros_wyt71x.jpg",
    street: "Reinhardtstraße 20",
    zip: "10117",
    city: "Berlin",
    review: [],
  },
  {
    title: "Admiralbrücke",
    description:
      "There is something about bridges that captures the Berliner soul. I don't know what it is, but all bridges seem to attract  people who want to hang out and drink and socialize (actually the same is true for parking lots at supermarkets, which I find equally mysterious). Admiralbrücke, a relatively small pedestrian bridge over the Landswehrkanal in the heart of Kreuzberg, is apparently the hip spot to hang-out. Exactly why I have no idea, except I guess that every other hipster is doing so and it's a place to chill and be seen in the scene. I guess I am getting old and cranky, but my suggestion would be to grab some beers and find a nice spot on the grass on the banks of the canal or perhaps in a nearby park instead, but I guess that would be missing the point.",
    mood: "bored",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962401/moods-of-berlin%20/Admiralbru%CC%88cke_bjpk2q.jpg",
    street: "Admiralbrücke, Admiralstraße",
    zip: "10967",
    city: "Berlin",
    review: [],
  },
  {
    title: "Hasenheide",
    description:
      "Admittedly I don't make it to Hasenheide too often, since I live close to a handful of other parks, but it's truly a great spot. The park itself is huge, so you can easily find sunny, grassy areas for picnics and lounging, spots for playing sports or slack-lining, shaded areas to cool off, and more. There's even a relatively elaborate petting zoo, and a cafe in the middle where you can buy drinks and snacks. And while there are some drug dealers, they are not anywhere near as aggressive or annoying as the ones at Görli.",
    mood: "joyful",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962391/moods-of-berlin%20/Hasenheide_mgttdq.jpg",
    street: "Columbiadamm 160",
    zip: "10965",
    city: "Berlin",
    review: [],
  },
  {
    title: "Berghain",
    description:
      "Part of the charm of this venue is the fact that it values privacy so I will not get into specifics, but I will mention general things: great drinks, a dark room, rest areas, AMAZING music, unisex bathrooms, really long lines, but great overall vibe inside. You will rarely find pictures of the venue because cell phones are covered with stickers in order to provide privacy for everyone inside, as it should be. A great club. Upon being accepted inside, and after paying the entrance (which was like 5 euros only), the first ten seconds of entering this club was some of the happiest ten seconds of my life (nightlife-wise). It opens at midnight on Friday and closes Monday morning. Maybe next time with enough energy drinks I can stay longer than 10 hours dancing.",
    mood: "angry",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962382/moods-of-berlin%20/berghain_dptn9h.jpg",
    street: "Rüdersdorfer Str. 7",
    zip: "10243",
    city: "Berlin",
    review: [],
  },
  {
    title: "Kampfsport Akademie Berlin",
    description:
      "My girlfriend and I have been around for a while now and it never gets boring. Super nice trainer, friendly approach and the most important thing is that it is a lot of fun. It doesn't matter if you have experience or not everyone is welcome here. :)",
    mood: "angry",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589986043/moods-of-berlin%20/kampfsport_rj55jq.jpg",
    street: "Torstraße 125",
    zip: "10119",
    city: "Berlin",
    review: [],
  },
  {
    title: "Zeiss-Großplanetarium",
    description:
      "My husband took me here earlier today, as we had tickets for a show. We learned many things, about stars, about constellations, about suns, moons, and planets. I have to say that it was definitely a very educational hour for me. I recommend getting a ticket here, and assuming you understand German, there are plenty of things to learn. I also like the theatre in general. It was recently renovated, and recently reopened. They have a new projector now, and the seats are quite comfortable. The screen is above you, and around you, so there are times when you might need to look back behind you. But the seats definitely make a comfortable time.I would totally consider coming back here again. It's a great opportunity for people to learn new things, and the material is both for children and for adults alike.",
    mood: "anxious",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962353/moods-of-berlin%20/Planetarium_ootor9.jpg",
    street: "Prenzlauer Allee 80",
    zip: "10405",
    city: "Berlin",
    review: [],
  },
  {
    title: "Radialsystem",
    description:
      "I can here for what was a pretty traditional rock concert by Einstürzende Neubauten.  The building itself is beautiful.  An old brick building that has been fixed up with lots of modern glass.  The show started promptly on time (not used to that kind of ting in the States) and the sound was amazing.  All of the seating is on pretty big risers so it's relatively easy for everyone in the audiance to see even at a sold at show.  Tickets were a little bit expensive by US standards and the New Years part of the evening was a dude (though the concert was great).  Not sure who is responsible for that.  Nice views of the river as well from inside.",
    mood: "bored",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589951473/moods-of-berlin%20/Radialsystem_m3qhgx.jpg",
    street: "Holzmarktstraße 33",
    zip: "10243",
    city: "Berlin",
    review: [],
  },
  {
    title: "Botanischer Garten",
    description:
      "I went a little early in the spring so the outside wasn't as fantastic as it could have been, I'll have to go back later. I did see some nice wildlife and early blooming flowers, it is a pleasant walk.The greenhouse more than made up for the lack of outdoor plants. It is huge and well kept with every imaginable variety of plant. I loved the huge cacti, many varieties of pitcher plans and waterfall the most. As a bonus, it smelled amazing. I would recommend spending at least  half a day.There is a little cafe restaurant near the Steglitz entrance. And a cute little gift shop. Plus, entrance is quite inexpensive.",
    mood: "melancholic",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589964590/moods-of-berlin%20/Botanischer_Garten_lkn1ak.jpg",
    street: "Königin-Luise-Straße 6-8",
    zip: "14195",
    city: "Berlin",
    review: [],
  },
  {
    title: "Wilhelm-Foerster-Sternwarte",
    description:
      "A venerable West Berlin institution. In addition to the very large Zeiss Planetarium directly on Munsterdamm, where events, shows and scientific lectures, as well as seminars and working groups are offered at all levels, there is a fantastic observatory with a good selection of telescopes. The street lighting all around is dimmed so that you can still make observations despite the city location and anyone interested in astronomy will find everything their hearts desire.",
    mood: "angry",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962144/moods-of-berlin%20/Wilhelm-Foerster-Sternwarte_ic0idw.jpg",
    street: "Munsterdamm 90",
    zip: "12169",
    city: "Berlin",
    review: [],
  },
  {
    title: "Calisthenics Ground in Volkspark Wilmersdorf",
    description:
      "Functional Training oder funktionelles Training, ist ein Ganzkörper-Training, das sich vor allem auf freie Übungen bezieht und das eigene Körpergewicht mit ins Training integriert.Das Prinzip des Functional Trainings ist eigentlich schon lange bekannt, hat aber vor allem durch Cross Fit, Bootcamps und TRX-Kurse in den letzten Jahren stark an Bekanntheit dazu gewonnen. Der Fokus des Funktionellen Trainings liegt nicht nur in der Kräftigung der oberflächlichen Muskulatur sondern vor allem im Stärken der Tiefenmuskulatur, die dem Körper Halt und Schutz vor Verletzungen bietet.  ",
    mood: "energetic",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589907181/moods-of-berlin%20/Calisthenics_lwin6s.jpg",
    street: "Am Volkspark 53",
    zip: "10715",
    city: "Berlin",
    review: [],
  },
  {
    title: "Schlossgarten Charlottenburg",
    description:
      "It is always surprising that such oases of calm exist in the middle of the city of Berlin. In the Charlottenburg palace garden you can relax. For example, a long walk. And as a bonus, there are always new buildings and corners to be discovered in the garden.",
    mood: "melancholic",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589964836/moods-of-berlin%20/Charlottenburger_Schloss_kptfsk.jpg",
    street: "Spandauer Damm 10-22",
    zip: "14059",
    city: "Berlin",
    review: [],
  },
  {
    title: "Mauerpark Flohmarkt",
    description:
      "This was absolutely one of the best things I did in Berlin.  TONS of people come every Sunday to browse the fleamarket of old and new things, crafts, and food vendors.  The variety of both people and wares is great--you could easily spend hours poking around looking at stuff and people-watching.There are also lots of street musicians to check out in addition to the famous bearpit karaoke, and most were actually great!  Definitely check out the flohmarkt if you are in Berlin on a Sunday!",
    mood: "bored",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589962032/moods-of-berlin%20/mauerpark_icy93v.jpg",
    street: "Bernauer Str. 63-64",
    zip: "13355",
    city: "Berlin",
    review: [],
  },
  {
    title: "Spandauer Zitadelle",
    description:
      "As one of the best-preserved Renaissance fortresses in Germany, the citadel, despite some damage and additions, still gives an impression of how people tried to protect themselves from enemies in the 16th century. The oldest parts of the castle complex date from the Middle Ages, the July tower, the landmark Spandau, dates from the early 13th century and could be the oldest masonry in the urban area; it is definitely the oldest secular building.",
    mood: "anxious",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589964953/moods-of-berlin%20/Zitadelle_xlwapq.jpg",
    street: "Am Juliusturm 64",
    zip: "13599",
    city: "Berlin",
    review: [],
  },
  {
    title: "Spreepark Plänterwald",
    description:
      "It can no longer be counted how often we have already traveled there from Berlin. For the first time we were paddling across the whole Spreewald for days and also through tiny rivers back to Königs Wusterhausen, where we were eaten by mosquitoes and brakes on the last stretch in the canal. On the way we had broken into a swampy meadow. For this, countless dragonflies have performed pairing dances and like to put our paddles in the breaks.",
    mood: "melancholic",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589961988/moods-of-berlin%20/Spreepark_Berlin_shlvsq.jpg",
    street: "Kiehnwerderallee 1-3",
    zip: "12437",
    city: "Berlin",
    review: [],
  },
  {
    title: "Oberbaumbrücke",
    description:
      "Pretty bridge connecting Kreuzberg and Friedrichshain, formerly a border crossing between east and west Berlin separated by the wall. It's a road and foot bridge, plus the U-Bahn crosses on the top deck. As well as the gothic architectural details, an interesting part of the bridge to take note of is the contemporary metal arch in between the two towers, restoring a section that was strategically blown up during war time. On this section there is a neon light installation, playing the game of Stone Paper Scissors over and over every evening.",
    mood: "relaxed",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589961973/moods-of-berlin%20/Oberbaumbru%CC%88cke_mit_U-Bahn_t6mnj3.jpg",
    street: "Oberbaumbrücke",
    zip: "10243",
    city: "Berlin",
    review: [],
  },
  {
    title: "Kunstquartier Bethanien",
    description:
      "The central deaconess institute ‚Bethanien‘ was constructed during the years 1845-47, commissioned by the pious King Friedrich Wilhelm IV. The population of Berlin had multiplied almost five-fold, going from 365,000 up to 1.700,00. The hospital was in use until 1970",
    mood: "anxious",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589961968/moods-of-berlin%20/Ku%CC%88nstlerhaus_Bethanien__31837444030_budj4d.jpg",
    street: "Mariannenpl. 2",
    zip: "10997",
    city: "Berlin",
    review: [],
  },
  {
    title: "Freiluftkino Hasenheide",
    description:
      "Cinema itself is a decent enough located in the middle of Hasenheide park. You can buy some beer and snacks from the desk, but usually most people bring there own beverages. Ticket costs 6 euros. Some films are english, some are not - check the website for a programme. But there is something people should be aware of: Since the screen is in the middle of Hasenheide, there is a whole bunch of drug dealers hanging in the park along the way to the cinema, trying to sell and pushing you stuff. If you are not accustomed to that type of scene, you might feel just a little bit unsafe as the sun is setting in that gloomy park but don't worry - just ignore the gangbangers and pushers and you'll be fine. Or if you are into drugs, buy some and get high watching movies. Whatever suits you!",
    mood: "joyful",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589964116/moods-of-berlin%20/9_FLK_Hasenheide_Foto1_von_Aki_Gu%CC%88ldner_Ausschnitt_zetxzb.jpg",
    street: "Hasenheide",
    zip: "10967",
    city: "Berlin",
    review: [],
  },
  {
    title: "Jazz Konzert im Körnerpark",
    description:
      "I love love love Körnerpark. This is my neighborhood park, a three-block walk from where I live, and the perfect place to hang out when I want to get away, if only (and especially) for a short while.The park itself takes up an entire block, and is landscaped beautifully: fountains, trees, benches, and green green grass. Along one end of the park there is also the gravel area outside the Cafe and Gallery, which has tables with umbrellas, and plenty of seating for cafe patrons. While the cafe is a nice place to meet friends, I personally enjoy grabbing a beer or two and some snacks and spending time outside on the grass with friends. Beware of the area where sitting is forbidden  of course, most of the time it's not enforced, so sit away. But during rare instances you will be approached and reprimanded, and then promptly kicked off.But don't let it discourage you  there are plenty of other places in the park to sit. And regardless, time at Körnerpark is always time well spent.",
    mood: "joyful",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589964198/moods-of-berlin%20/jazz_sqrdml.jpg",
    street: "Schierker Str. 8",
    zip: "12051",
    city: "Berlin",
    review: [],
  },
  {
    title: "Skywalk, Marzahn",
    description:
      "At a height of 70 meters you are no longer on the roof of a typical prefabricated building in the northeastern part of Berlin, but directly above the Marzahn promenade, the center of the Berlin district of Marzahn. From up here you literally have a different perspective on the Marzahn-Hellersdorf district. The Kienberg, the grounds of the International Garden Exhibition and the windmill in the Angerdorf Alt-Marzahn are particularly easy to see due to the proximity. In good weather, the Berlin TV tower, Schönefeld Airport and Müggelsee can be seen a little further on the horizon. The densely located Brandenburg landscape can also be admired from above.",
    mood: "energetic",
    imgPath:
      "https://res.cloudinary.com/benchberlin/image/upload/v1589961851/moods-of-berlin%20/skywalk_marzahn_hcdn0r.jpg",
    street: "Raoul-Wallenberg-Straße 42",
    zip: "12679",
    city: "Berlin",
    review: [],
  },
];

const mongoose = require("mongoose");
const Place = require("../models/Place.js");

mongoose
  .connect("mongodb://localhost/moods-of-berlin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo from the seed file! Database name: "${x.connections[0].name}"`
    );

    Place.create(defaultPlaces, (error, places) => {
      if (error) {
        return handleError(error);
      }
      console.log("default places created: ", places);
      x.connections[0].close();
    });
  })
  .catch((error) => {
    console.error("Error connecting to mongo", error);
  });

// To seed the database we do:
// node ./bin/placesBackend.js
