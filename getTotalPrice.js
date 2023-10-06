function getTotalPrice(listeCourse) {
    let result = 0;
    listeCourse.forEach(elt => {
        result += elt.quantite*elt.prix;
    });

    return result;
}

console.log(getTotalPrice([{product: "Lait", quantite: 3, prix: 2}]));
console.log(getTotalPrice([
                            {product: "Lait", quantite: 3, prix: 2},
                            {product: "Chocolat", quantite: 3, prix: 1.5}
                        
                        ]));