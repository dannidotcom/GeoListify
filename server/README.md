# GeoListify
GeoListify est une application intuitive qui vous permet de créer, organiser et explorer des listes de lieux géolocalisés sur une carte interactive. Grâce à son intégration avec Google Maps, découvrez et gérez facilement vos adresses préférées, tout en profitant d'une expérience utilisateur fluide et moderne.

# Respect des Principes SOLID

## 1. Single Responsibility Principle (SRP)

Chaque composant a une seule responsabilité :

- Les routeurs gèrent les endpoints.
- Les services contiennent la logique métier.
- Les repositories gèrent l'accès aux données.
- Les modèles et schémas définissent les structures de données.

## 2. Open/Closed Principle (OCP)

Le code est ouvert à l'extension mais fermé à la modification.

- Par exemple, vous pouvez ajouter de nouveaux services ou repositories sans modifier le code existant.

## 3. Liskov Substitution Principle (LSP)

Les sous-classes peuvent remplacer les classes de base sans affecter le comportement.

- Par exemple, vous pouvez remplacer un repository par une autre implémentation (comme un mock pour les tests).

## 4. Interface Segregation Principle (ISP)

Les interfaces sont spécifiques à chaque client.

- Par exemple, les services et repositories ont des interfaces bien définies et minimales.

## 5. Dependency Inversion Principle (DIP)

Les modules de haut niveau ne dépendent pas des modules de bas niveau, mais des abstractions.

- Par exemple, les services dépendent des interfaces des repositories, pas de leur implémentation concrète.

## Avantages de cette Structure

- **Modularité** : Chaque composant est indépendant et réutilisable.
- **Maintenabilité** : Le code est facile à comprendre et à modifier.
- **Testabilité** : Les composants sont facilement testables grâce à l'injection de dépendances.
- **Évolutivité** : Vous pouvez ajouter de nouvelles fonctionnalités sans perturber le code existant.