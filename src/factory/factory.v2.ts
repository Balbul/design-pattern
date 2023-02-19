export abstract class AbstractPet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  abstract speak(): string;
  abstract runSpeed(): number;
}

type tPet = "cat" | "dog";

/**
 * image de l'usine qui fabrique plusieurs produits.
 * Ici l'usine fabrique des chats et des chiens.
 * Usage d'un singleton pour ne pas
 * avoir deux chien ou chat avec le même nom.
 */
export class PetFactory {
  private static instance: AbstractPet | undefined = undefined;

  static getInstance(petType: tPet, name: string): AbstractPet {
    if (!this.instance) {
      switch (petType) {
        case "cat":
          this.instance = new Cat(name);
        case "dog":
          this.instance = new Dog(name);
      }
    }

    return this.instance;
  }
}
// SANS LE SINGLETON
// export class PetFactory {
//     static getInstance(petType: tPet, name: string): AbstractPet {
//         switch (petType) {
//           case "cat":
//             return = new Cat(name);
//           case "dog":
//             return new Dog(name);
//         }
//     }
//   }

class Cat extends AbstractPet {
  speak(): string {
    return "I am a cat." + " My name is: " + this.name;
  }
  runSpeed(): number {
    return 15;
  }
}

class Dog extends AbstractPet {
  speak(): string {
    return "I am a dog." + " My name is: " + this.name;
  }
  runSpeed(): number {
    return 20;
  }
}

const factoryV2 = () => {
  // création de deux instances avec la même factory
  const cat1 = PetFactory.getInstance("cat", "felix");
  console.log("cat: ", cat1.speak());
  const dog1 = PetFactory.getInstance("dog", "rex");
  console.log("dog: ", dog1.speak());
  console.log("");
  // test du singleton
  const cat2 = PetFactory.getInstance("cat", "felix");

  if (cat1 === cat2) {
    console.log("Singleton succes, les deux instances de Cat sont les mêmes.");
  } else {
    console.log("Singleton echec, les deux instances sont différentes.");
  }
};

factoryV2();
