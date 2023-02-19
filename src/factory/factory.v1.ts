/**
 * La classe PersonnelFactory déclare la méthode factory censée retourner un objet d'une classe Personnel.
 * Les sous-classes de PersonnelFactory fournissent généralement l'implémentation de cette méthode.
 */
abstract class PersonnelFactory {
  /**
   * Implémentation par défaut de la méthode factoryMethod
   */
  public abstract factoryMethod(): Personnel;

  /**
   * Notez également que, malgré son nom, la responsabilité première de PersonnelFactory est
   * ne pas créer de produits. Habituellement, il contient une logique métier de base qui
   * s'appuie sur des objets Personnel, renvoyés par factoryMethode. Les sous-classes peuvent
   * modifier indirectement cette logique métier en remplaçant la factoryMethode
   * et en retournant un autre type de produit.
   */
  public creation(): string {
    // Appel de la  factoryMethod pour créer le personnel.
    const personnel = this.factoryMethod();
    // Maintenant on utilise le Personnel.
    return `Factory:  Le même code à fonctionné avec ${personnel.operation()}`;
  }
}

/**
 * On étent l'usage de la Factory
 */
class PersonnelChefFactory extends PersonnelFactory {
  /**
   * même signature que la factory.
   */
  public factoryMethod(): Personnel {
    return new ChefPersonnel();
  }
}

class PersonnelExecutantFactory extends PersonnelFactory {
  public factoryMethod(): Personnel {
    return new ExecutantPersonnel();
  }
}

/**
 * L'intraface du Personnel déclare les méthodes/opération que le
 * personnel concret peut réaliser.
 */
interface Personnel {
  operation(): string;
}

/**
 * Les personnels concret sont des implémentations de l'interface du personnel.
 */
class ChefPersonnel implements Personnel {
  public operation(): string {
    return "{ChefPersonnel}";
  }
}

class ExecutantPersonnel implements Personnel {
  public operation(): string {
    return "{ExecutantPersonnel}";
  }
}

/**
 * Fonctionne avec une instance d'un personnel concret, mais via
 * son interface de base.
 */
function factoryCode(creator: PersonnelFactory) {
  // ...
  console.log(
    "Client: Je ne connais pas la classe du créateur, mais cela fonctionne toujours."
  );
  console.log(creator.creation());
  // ...
}

console.log("App: démarrée avec CHEF.");
factoryCode(new PersonnelChefFactory());
console.log("");

console.log("App: démarrée avec EXECUTANT.");
factoryCode(new PersonnelExecutantFactory());
