/**
 * Classe qui définit la méthode getInstance() qui assure d'avoir l'instance en retour
 */
class DataBaseAccess {
  private static instance: DataBaseAccess;

  /**
   * Empèche l'utilisation de l'opérateur new (private constructor)
   */
  private constructor() {}

  /**
   * méthode qui contôle l'accès à l'instance
   * (permet de définir si il est nécessaire de créer une nouvelle instance)
   */
  public static getInstance(): DataBaseAccess {
    if (!DataBaseAccess.instance) {
      DataBaseAccess.instance = new DataBaseAccess();
    }

    return DataBaseAccess.instance;
  }

  /**
   * Permet d'effectuer des opérations sur la seule instance active
   */
  public doRequest() {
    // ...
  }
}

/**
 * Le code de démonstration.
 */
function demoCode() {
  const s1 = DataBaseAccess.getInstance();
  const s2 = DataBaseAccess.getInstance();

  if (s1 === s2) {
    console.log(
      "Singleton succes, les deux instances de connections sont les mêmes."
    );
  } else {
    console.log("Singleton echec, les deux instances sont différentes.");
  }
}

demoCode();
