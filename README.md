# YUTE

## Explication technique
Le projet est composé de 2 partie l'une gérant l'application web et l'autre la partie CMS.

L'application web est réalisé en **ReactJS** et le CMS choisis est **Strapi**.

Le CMS va permettre de géré le contenu et les différentes pages de l'application, tandis que l'application web va elle se chargé de récupéré ces données et de créer les pages à partir de celles-ci

## Instalation
Après avoir cloné le repositorie il suffit d'executer
```sh
make install
```
Cela va installer toutes les dépendances nécessaires et créer les ficher ``.env``.

Il est possible défectuer cette commandes que pour l'une des 2 parties du projet en se rendant dans le dossier correspondant.

Ensuite il faudra lancer **Strapi**
```sh
cd guide-cms
make run-dev
```

Maintenant il va falloir récupérer un API token, pour cela il faudra se randre sur le pannel d'administration de **Strapi** sur l'url [http://localhost:1337/admin/](localhost:1337), dans __Settings__ > __API Token__ > __Create new API Token__ cela devrait mener sur cette page [http://localhost:1337/admin/settings/api-tokens/create](localhost:1337/admin/settings/api-tokens/create)

![[img/strapi-api-token.png]]

Après avoir copié le Token, il suffit de le coller dans le fichier ``.env`` se trouvant dans le dossier guide, dans la variable ``REACT_APP_STRAPI_API_KEY``

## Développement
Après installation il est possible de lancer le projet en mode développement pour cela il suffit de faire
```sh
make run-dev
```

Cela lancera le projet en entier, or si vous souhaitez ne lancer qu'une des deux parties il suffit de se rendre dans le dossier et d'executer la même commande

## Déployment
Pour lancer le projet en mode de production il suffit de faire
```sh
make deploy
```
Cela va build le projet puis run le build

Or si vous voulez simplement le build il est possible de faire
```sh
make build
```

Et pour lancer le build
```sh
make run-build
```

Encore une fois il est possible d'executer ces commandes que pour l'une des 2 parties du projet, en se rendant dans le dossier correspondant.