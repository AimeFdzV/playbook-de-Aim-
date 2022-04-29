const repo = {
    name: "LaunchX Aimé",
    author: "Aimé Fernández Vallina",
    language: "JavaScript",
    numberOfCommits: 80,
    stars: 100,
    forks: 20,
    issues_open: 7,
    issues_close: 7,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())