theMainRoom = { name: "the main room of the house" };
theDownstairsBathroom = { name: "the bathroom" };
theCloset = { name: "the closet" };
theKitchen = { name: "the kitchen" };
theSecondFloor = { name: "upstairs" };
theUpstairsBathroom = { name: "the bathroom" };
theFirstBedroom = { name: "a bedroom" };
theSecondBedroom = { name: "a bedroom" };
theBackyard = { name: "the backyard" };
theShed = { name: "a shed" };
thePumpkinRoom = { name: "the pumpkin room" };

// it all starts here
theFrontPorch =
  "You don't know how you got here but you are standing outside the front door of a house that you don't recognize. You look around but see only the deep dark woods in all directions. It's cold and you're very confused. You can see that the door to the house hasn't been shut all the way and there's a faint glow of light coming from inside. It's incredibly quiet but it's impossible to know if anyone is home. It seems like its the middle of the night";

// the first choice
choice001 =
  "Do you open the door and look around inside the house or try to find your way through the woods?";

// choice: open the door
result001a =
  "You give the door a gentle nudge and it swings open. You take a few quiet steps inside. You're in what looks like a living room. There's a well-worn couch in the center of the room. Next to it is an endtable with a small lamp emitting a dull glow. The room is otherwise absent any furniture or decorations. The walls have what looks like a dark-patterened wallpaper but you can't quite make it out the design in the low light.";

// if you aren't going in the house this is the only other place to go
result001b =
  "The woods are dense and there's nothing but darkness around you. There's no visible path but you have a tiny bit of light from the few stars in the sky. You have no idea where you are but you figure it's got to be better than whatever is in that creepy house. Maybe you'll find a road where you can flag down some help. You hear what you think sounds like a car in the distance.";

// location: the deep dark woods
choice010 = "Do you walk towards the sound or away from it?";

// you decided to walk towards the sound
result010a =
  "You start walking towards the sound but it doesn't sound like it's getting any closer or further away. You feel the ground start to slope down but you can't see very far ahead. You've got a lot of branches to grab to keep yourself steady but you aren't sure how the terrain might change.";

// risk the hill?
choice015 =
  "Do you want to keep going or try to find another way around that feels more steady?";

// could do some kind of chance operation here to determine if you make it down the hill successfully or not

// You fall down the hill
result015a =
  "You trip over a root in your path and find yourself tumbling down a hill. You land on your stomache with a thud, face-down in a pile of leaves. You're not hurt but suddenly the sound you were following feels like it's right on top of you. You lift your head from the leaves and are surprised to see a running car.";

result015b =
  "You head back a bit where the ground feels more even but now you've lost your sense of direction. You just start walking, hoping you're not just heading back where you came from. You can't see the house anymore and the ground feels flat again but the sound is unchanging. You come across a fallen tree . You climb over a big rotten log and when you drop down the other side you see a car";

// a parked, running car in the middle of the woods
theCar =
  "There's no road that you can see and the trees are so dense that you're not sure how a car could have ended up here. It's an old sedan, something from the 70s probably. It might have been out here for a while but it is definitely running. You look around but obviously can't see anyone in the darkness. None of the lights are on but you can see from the glow of the dash that the car is *probably* empty.";

// choice: walk away into the woods
result001b = "You turn and walk away from the house, into the deep dark woods.";

// location: the bottom of the hill, outside the car
choice015 =
  "Should you check it out? There's no way you can drive it through the trees surrounding it but maybe there's something inside that can help you.";

choice025 = "";
