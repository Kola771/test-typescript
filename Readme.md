# Intallation de typescript

npm install -g typescript

# Conversion d'un fichier ts en js

tsc nom du fichier plus extension

# Option compilation

- compilation sur le es6 (tsc nom du fichier plus extension --target es6)
- compilation sur le es2015 (tsc nom du fichier plus extension --target es2015)
- es6/es2015, es2016, es2017,...

# Fichier de configuration

tsc --init (génère un fichier de configuration tsconfig.json)


# Compilation automatique

tsc --watch


# En typescript

/**

* any: type qui accepte toute sorte de valeur
* undefined
* null

 */


/**

* quelques types en typescript
* null
* string
* boolean
* number
* undefined
* object
* */

Déclaration d'un tableau en ts
let arr: number[] = [1, 2, 3];

number[] pour dire que c'est un tableau contenant d'élément numérique

on peut aussi faire ceci let arr2: Array `<number> = [1, 2, 3]`

pour faire le mélange let arr3: [number, string, boolean] = [1, 'a', false]; (généralement on appelle ça tuple et c'est pas si souvent utilisé)

on peut aussi faire let arr4: (number | string | boolean)[] = [1, 'a', false];

# Création d'un type

type User= {

    fname:string

    lname:string

} ou

interfaceUser2 {

    fname:string

    lname:string

    isAdmin?:boolean

}

type User créé avec succès.


# Union entre type ou interface


interface UserInterface {

    fname: string

    lname: string

    age?: number

}

interface Admin {

    isAdmin:boolean

}

const admin: User & Admin= {

    fname: "John",

    lname: "Doe",

    isAdmin: false

}


# Les génériques typescripts

Les génériques sont des fonctions qui peuvent prendre ou renvoyer n'importe quels types.

// fonction générique qui peut prendre et retourner un type bizarre

functionreturnval2`<T>`(arg:T):T {

    returnarg;

}

et donc on utilise le T pour préciser que c'est fonction générique et ce n'est pas obligatoir de m'être T. Vous pouvez m'être un autre élément que T compte tenu de la documentation que le site de typescript vous proposera pour les fonctions génériques.
