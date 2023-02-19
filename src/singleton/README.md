# Singleton

Singleton est un patron de conception de création qui garantit que l’instance d’une classe n’existe qu’en un seul exemplaire, tout en fournissant un point d’accès global à cette instance.

Toute mise en place d’un singleton est constituée des deux étapes suivantes :

    1. Rendre le constructeur par défaut privé afin d’empêcher les autres objets d’utiliser l’opérateur new avec la classe du singleton.

    2. Mettre en place une méthode de création statique qui se comporte comme un constructeur.
    En sous-main, cette méthode appelle le constructeur privé pour créer un objet et le sauvegarde dans un attribut statique. Tous les appels ultérieurs à cette méthode retournent l’objet en cache.

Si votre code a accès à la classe du singleton, alors il peut appeler sa méthode statique. À chaque appel de cette méthode, c’est toujours le même objet qui est retourné.
