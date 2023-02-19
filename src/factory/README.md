# Factory

Fabrique est un patron de conception de création qui définit une interface pour créer des objets dans une classe mère, mais délègue le choix des types d’objets à créer aux sous-classes.

Le patron de conception fabrique vous propose de remplacer les appels directs au constructeur de l’objet (à l’aide de l’opérateur new) en appelant une méthode fabrique spéciale. Pas d’inquiétude, les objets sont toujours créés avec l’opérateur new, mais l’appel se fait à l’intérieur de la méthode fabrique. Les objets qu’elle retourne sont souvent appelés produits.
