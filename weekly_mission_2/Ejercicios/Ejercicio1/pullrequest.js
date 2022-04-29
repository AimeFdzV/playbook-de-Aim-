const PullRequest = {
    title: "Repo ejemplo",
    branchName: "Rama segunda",
    dateCreated: "28/04/22",
    status: "Activo",
    repositoryNameAssociated: "Nombre Repo ejemplo",
    author: "Aimé Fernández Vallina",

    getStatus: function(){
        return `El estado del repositorio es: ${this.status}`
      },

    getTitleAndAuthor: function(){
        return ` Nombre del repositorio: ${this.title}. Autor: ${this.author}`
      },
}

console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())



