const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        },
      },
      

    }
   ]

  
//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((elemento) => console.log(elemento.name))

//2. Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((elemento) => console.log(elemento.stack))

//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const listaStacks = explorers.map(function(list){ return list.stack })
console.log(listaStacks)

//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stackJs = explorers.filter((explorer) => explorer.stack.includes('js'))
stackJs.forEach(explorer => console.log(explorer.name));
  
// 5. Busca el primer explorer que sea de la CDMX, usa FIND
const explorerCdmx = explorers.find((explorer) => explorer.city === "CDMX")
console.log("Primer explorer de la Cdmx: " + explorerCdmx.name)

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
const sumaExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log("Total de ejercicios completados por los explorers: " + sumaExercises)

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const algunoExercisesFinished = explorers.some((explorer) =>  explorer.missions.frontend.isFinished === true)
console.log("¿Al menos un explorer completó los ejercicios de frontend?: " + algunoExercisesFinished)

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY
const todosExercisesFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log("Todos los explorers terminaron el onborading?: " + todosExercisesFinished)
