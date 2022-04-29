const issues = {
    title: "Quiero dormir",
    repositoryNameAssociated: "RepoPrueba",
    status: "Activo",
    numberOfComments: 100,
    labels: 200,
    author: "Aimé Fernández Vallina",
    dateCreated: "28/04/22",
    lastUpdated: "28/04/22",

    getTitleAndAuthor: function(){
        return ` ${this.title} , ${this.author}`
      },
    getGeneralInfo: function(){
        return `El nombre del repo es: ${this.repositoryNameAssociated}, fue creado por: ${this.author} en la fecha: ${this.dateCreated} `
      }
}

console.log("Nombre del repo:" + issues.title)
console.log("Número de comentarios:" + issues.numberOfComments)
console.log("Título y autor: " + issues.getTitleAndAuthor())
console.log(issues.getGeneralInfo())