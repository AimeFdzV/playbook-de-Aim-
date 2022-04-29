const user = {nombre: "Aimé", edad: 25, usuario: "Aimé Fernández Vallina", post: "Este es un ejemplo de publicación", biography: "Este es un ejemplo de biografía",

getUser: function(){
    return `Nombre:${this.nombre} Usuario: ${this.usuario} Edad: ${this.edad}`
  },

getPost: function(){
    return ` Última publicación: ${this.post}`
  },

getBio: function(){
    return ` Biografía: ${this.biography}`
  },

}

console.log(user.getUser())
console.log(user.getPost())
console.log(user.getBio())