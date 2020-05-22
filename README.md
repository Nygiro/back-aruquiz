## Aruquiz
Aruquiz est une PWA permettant de créer des quiz (QCM) avec 4 possibilités de réponses et de répondre à l'aide de forme imprimé sur un papier ou sur un ecran appelé `aruco` et qui seront scannés par une caméra (webcam ou smartphone par exemple).

## Librairies
Le projet est basé sur `react` pour la partie front et la partie back utilise `prisma`
Le projet utilise aussi la librairie aruco qui est fait en c++ et qui permet de détecter des formes à l’aide de la réalité augmenté grâce à une caméra.

## Les formes
Concernant les formes, donc chaque forme est différentes, il y en a plus de 1000 et on peut en créer des nouvelles. Une forme à obligatoirement un identifiant permettant de l’associé à une personne et donc de savoir qui répond à une question. Au niveau des formes, on est sur des carrés disposant alors de 4 cotés et chaque coté correspond à une réponse définit A, B, C ou D. et en fonction du degré d’inclinaison au moment où celle-ci sera scanné.

## Utilisation
Pour utiliser l'application il faut par étape : 
- Se rendre sur le site [aruquiz](https://front-aruquiz.herokuapp.com/) 
- Télécharger le pack de forme aruco disponible dans le menu
- Se connecter ou créer un compte à partir du menu 
- Créer une classe avec au moins un élève dans l'onglet `Ma classe` en associant l’id de l’élève avec l’id de la forme (l’id est renseigné en haut à gauche de la forme). 
- Créer un quiz en cliquant sur `Créer`, ou utiliser un quiz déjà existant dans l'onglet `Quiz`
- Lancer le quiz et cliquer sur `Commencer le scan`. Une fois la caméra ouverte, placer la forme devant l'écran (incliner là dans le sens de la réponse souhaitée) pour répondre. ATTENTION ! Si l’id de la forme qui est scannée ne correspond pas à l’id d’un élèves qui participent au quiz, il ne se passera rien.
