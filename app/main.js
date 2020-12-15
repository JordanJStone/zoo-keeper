import Alligator from "./models/Alligator.js"
import BallPython from "./models/BallPython.js"
import Iguana from "./models/Iguana.js"
import Rattlesnake from "./models/Rattlesnake.js"
import Scorpion from "./models/Scorpion.js"
import Tarantula from "./models/Tarantula.js"
import Xenurus from "./models/Xenurus.js"

import Cat from "./models/Cat.js"
import Dog from "./models/Dog.js"
import Elephant from "./models/Elephant.js"
import Fox from "./models/Fox.js"
import Giraffe from "./models/Giraffe.js"
import Hound from "./models/Hound.js"
import Jaguar from "./models/Jaguar.js"
import Kangaroo from "./models/Kangaroo.js"
import Lemur from "./models/Lemur.js"
import Narwhal from "./models/Narwhal.js"
import Panda from "./models/Panda.js"
import Unicorn from "./models/Unicorn.js"
import Whale from "./models/Whale.js"
import Yak from "./models/Yak.js"
import Zebra from "./models/Zebra.js"

import Mallard from "./models/Mallard.js"
import Ostrich from "./models/Ostrich.js"
import Quail from "./models/Quail.js"
import Vulture from "./models/Vulture.js"
import Zoo from "./models/Zoo.js"


let Jimothy = new Alligator("Jimothy", "green", "large", true)

let Liam = new BallPython("Liam", "yellow", "medium", true)

let Noah = new Iguana("Noah", "green", "medium", false)

let Oliver = new Rattlesnake("Oliver", "tan", "medium", true)

let Andrea = new Scorpion("Andrea", "brown", "small", true)

let Elijah = new Tarantula("Elijah", "brown", "small", true)

let James = new Xenurus("James", "tan", "medium", false)


let Benjamin = new Cat("Benjamin", "purple", "male", true)

let Lucas = new Dog("Lucas", "black", "male", true)

let Mason = new Elephant("Mason", "gray", "male", true)

let Ethan = new Fox("Ethan", "brown", "male", false)

let Olivia = new Giraffe("Olivia", "yellow", "female", true)

let Emma = new Hound("Emma", "silver", "female", true)

let Ava = new Jaguar("Ava", "black", "female", false)

let Charlotte = new Kangaroo("Charlotte", "tan", "female", false)

let Amelia = new Lemur("Amelia", "green", "female", true)

let Mia = new Narwhal("Mia", "brown", "female", false)

let Evelyn = new Panda("Evelyn", "white", "female", true)

let Otto = new Unicorn("Otto", "pink", "male", false)

let Lana = new Whale("Lana", "gray", "female", true)

let Pablo = new Yak("Pablo", "purple", "male", false)

let Siya = new Zebra("Siya", "blue", "female", true)


let Baxter = new Mallard("Baxter", "green", "male", false)

let Raymond = new Ostrich("Raymond", "orange", "male", true)

let Vicky = new Quail("Vicky", "red", "female", true)

let Isabel = new Vulture("Isabel", "blue", "female", false)

let zoo = new Zoo()

zoo.Alligator = [...zoo.Alligator, Jimothy]
zoo.BallPython = [...zoo.BallPython, Liam]
zoo.Iguana = [...zoo.Iguana, Noah]
zoo.Rattlesnake = [...zoo.Rattlesnake, Oliver]
zoo.Scorpion = [...zoo.Scorpion, Andrea]
zoo.Tarantula = [...zoo.Tarantula, Elijah]
zoo.Xenurus = [...zoo.Xenurus, James]

zoo.Cat = [...zoo.Cat, Benjamin]
zoo.Dog = [...zoo.Dog, Lucas]
zoo.Elephant = [...zoo.Elephant, Mason]
zoo.Fox = [...zoo.Fox, Ethan]
zoo.Giraffe = [...zoo.Giraffe, Olivia]
zoo.Hound = [...zoo.Hound, Emma]
zoo.Jaguar = [...zoo.Jaguar, Ava]
zoo.Kangaroo = [...zoo.Kangaroo, Charlotte]
zoo.Lemur = [...zoo.Lemur, Amelia]
zoo.Narwhal = [...zoo.Narwhal, Mia]
zoo.Panda = [...zoo.Panda, Evelyn]
zoo.Unicorn = [...zoo.Unicorn, Otto]
zoo.Whale = [...zoo.Whale, Lana]
zoo.Yak = [...zoo.Yak, Pablo]
zoo.Zebra = [...zoo.Zebra, Siya]

zoo.Mallard = [...zoo.Mallard, Baxter]
zoo.Ostrich = [...zoo.Ostrich, Raymond]
zoo.Quail = [...zoo.Quail, Vicky]
zoo.Vulture = [...zoo.Vulture, Isabel]


window.zoo = zoo


