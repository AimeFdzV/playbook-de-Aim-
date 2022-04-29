
const user = {
    nombre: "Aimé Fernández Vallina",
    usuario: "@aimé_96",
    trending_topic: "Pupas",
    hashtag: ["#pupa","#cocoon","#metamorfosis"],

    getUser: function(){
        return `Nombre:${this.nombre} Usuario: ${this.usuario}`
      },

    getTopingHashtag: function(){
        return ` Principal trending topic: ${this.trending_topic}. Principales Hashtags: ${this.hashtag}`
      },

}

console.log("Perfil de usuario en Twitter")
console.log(user.getUser())
console.log(user.getTopingHashtag())