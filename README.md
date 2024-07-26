# Pokédex

## Description

Ce projet est une application web Pokédex utilisant l'API PokeAPI pour afficher une liste de Pokémon avec des détails. L'application permet aux utilisateurs de rechercher des Pokémon par nom ou numéro, de filtrer les Pokémon par type, et de paginer à travers les résultats.

## Fonctionnalités

1. **Affichage de la liste des Pokémon** :
   - Utilise l'API PokeAPI pour récupérer la liste des Pokémon.
   - Affiche les noms, les numéros et les images des Pokémon dans une grille.
   - Permet la pagination avec des groupes de 8 Pokémon à la fois.

2. **Affichage des détails d'un Pokémon** :
   - Lorsqu'un Pokémon est sélectionné dans la liste, ses détails (nom, numéro, image, type, statistiques) sont affichés.
   - Récupère les données du Pokémon depuis l'API PokeAPI en utilisant son identifiant ou son nom.

3. **Recherche de Pokémon** :
   - Un champ de recherche permet de trouver un Pokémon spécifique en saisissant son nom ou son numéro.
   - Met à jour la liste des Pokémon affichés en fonction des résultats de recherche.

4. **Filtrage des Pokémon par type** :
   - Un menu déroulant permet de filtrer les Pokémon par type (eau, feu, herbe, etc.).
   - Met à jour la liste des Pokémon affichés en fonction du type sélectionné.

5. **Design responsive** :
   - Assure que l'application est compatible avec les différents appareils (mobiles, tablettes, ordinateurs de bureau).
   - Adapte l'interface utilisateur pour une expérience optimale sur chaque appareil.
   - (L'application n'a pas eu besoin de mediaqueries particulier, les éléments se plaçant bien d'origine)

6. **Pagination** :
   - Permet de naviguer à travers les Pokémon par groupes de 10 avec des boutons "Previous" et "Next".

## Technologies Utilisées

- **HTML** : Utilisé pour structurer le contenu de la page web.
- **CSS** : Utilisé pour styliser l'application, assurer la réactivité et créer une interface utilisateur attrayante.
- **JavaScript** : Utilisé pour la logique de l'application, y compris la gestion des interactions utilisateur, les appels API, et la manipulation du DOM.
- **API PokeAPI** : Fournit les données des Pokémon utilisées dans l'application.
- **Architecture MVC** : Utilisé pour structurer le code en séparant les responsabilités en modèle, vue et contrôleur.
