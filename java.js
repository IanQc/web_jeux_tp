let chapter = {
    intro : {
        titre: "Que la force soit avec toi",
        description: "Vous, Anakin Skywalker venez tout juste de recevoir un mission d'importance capital, le chancelier c'est fait capturer en orbite. Votre Mission: Infiltrer et extraire le chancelier.",
        image: "",
        bouton: [{titre: 'Continuer', 'destination': 'debut'}, ] 
    
    },

    debut : {
        titre: "C'est partie",
        description: "Vous et Obi-Wan Kenobi prenez chacun un vaisseaux afin d'infiltrer le vaisseau en orbite.",
        image: "",
        bouton: [
            {titre: 'Atterir vaisseaux par trou dans la coque du vaisseau', 'destination': ''}, 
            {titre: 'Foncer dans le Hanguar', 'destination': 'Attérir'} ]
    },

    Attérir : {
        titre: "Vous attérisez dans le hanguar",
        description: "Vous détruisez tous les droides sur votre chemin. Vous devez maintenant vous dirigez vers le cockpit.",
        image: "",
        bouton: [
        {titre: 'Aller dans le couloir', 'destination': ''}, 
        {titre: 'Aller dans le bureau de sécurité', 'destination': 'Information'},
        {titre: "Prendre l'ascenceur", 'destination': 'Ascenceur'}
    ]
    },
    
    Ascenceur : {
        titre: "Vous attendez tranquillement dans l'ascenceur",
        description: "A mi-chemin l'ascenceur bloque et vous êtes coincé",
        image: "",
        bouton: [
            {titre: 'Forcez les portes', 'destination': ''}, 
            {titre: "Passez par dessus l'ascenceur", 'destination': 'Cockpit'},
        ]
    },

    Information : {
        titre: "Vous trouvez l'information!",
        description: "Vous regardez les caméras du cockpit et découvrez que le chancelier est un traitre et que sa vraie identité est Darth Sidious ",
        image: "",
        bouton: [
            {titre: 'Prendre le couloir', 'destination': ''}, 
            {titre: "Prendre l'ascenceur", 'destination': 'Ascenceur'}
    ]
    },

    Cockpit : {
        titre: "Vous entrez dans le cockpit du vaisseau",
        description: "Lorsque vous entrez dans le cockpit vous remarqué que le Chancelier est enchainé sur la chaise du capitaine, il est tenu en otage par Dooku et ses guardes.",
        image: "",
        bouton: [
            {titre: "Continuer", 'destination': 'Dooku'}
        ]
    },

    Dooku : {
        titre: "Dooku vous engage en combat",
        description: "Vous et votre Maître Kenobi affrontez dans le Compte Dooku dans un combat intense",
        image: "video 1",
        bouton: [
            {titre: "Continuer", 'destination': 'Combat'}
        ]
    },

    Combat : {
        titre: "C'est le temps d'en finir",
        description: "Dooku met Kenobi hors d'état de combattre, vous affrontez Dooku en solo avec rage et férocitez et parvenez a le battre. Maintenant que faites vous",
        image: "",
        bouton: [
            {titre: 'Exécuter Dooku pour ses crimes', 'destination': ''}, 
            {titre: "L'arrêter pour ses crimes", 'destination': ''},
            {titre: "Éliminer Sidious", 'destination': 'Gagner'}
        ]
    },

    Perdre : {
        titre: "",
        description: "",
        image: "",
        bouton: []
    },

    Victoire : {
        titre: "",
        description: "",
        image: "",
        bouton: [
            {titre: "Vous êtes mort", 'destination': 'Intro'}
        ]
    },

    Impact : {
        titre: "",
        description: "",
        image: "",
        bouton: [
            {titre: "Vous êtes mort", 'destination': 'Intro'}
        ]
    },
    
    Droide_couloir1 : {
        titre: "",
        description: "",
        image: "",
        bouton: [
            {titre: "Vous êtes mort", 'destination': 'Intro'}
        ]
    },

    Droide_ascendeur : {
        titre: "",
        description: "",
        image: "",
        bouton: [
            {titre: "Vous êtes mort", 'destination': 'Intro'}
        ]
    },

    Droide_couloir2 : {
        titre: "",
        description: "",
        image: "",
        bouton: [
            {titre: "Vous êtes mort", 'destination': 'Intro'}
        ]
    },

    Sidious : {
        titre: "",
        description: "",
        image: "",
        bouton: [
            {titre: "Vous êtes mort", 'destination': 'Intro'}
        ]
    },


}

function goToChapter(){
    if(chapter){
        console.log(chapter.titre);
        console.log(chapter.description);
        console.log(chapter.bouton[0]);
        if (chapter.bouton[1]){
            console.log(chapter.bouton[1])
        }
        if (chapter.bouton[2]){
            console.log(chapter.bouton[2])
        }
        if (chapter.bouton[3]){
            console.log(chapter.bouton[3])
        }
    }else{
        console.log("nope")
    }
    
}

