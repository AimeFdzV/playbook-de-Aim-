const userUber = {
    nombre: "Aimé Fernández Vallina",
    stars: 5,
    profile: "Perfil de ejemplo",
    travel: "Campestre churubusco - Ciudad Universitaria",

    getUser: function(){
        return `Nombre: ${userUber.nombre} Estrellas: ${userUber.stars} Perfil: ${userUber.profile} Último viaje: ${userUber.travel}`
    }
}
console.log(userUber.getUser())