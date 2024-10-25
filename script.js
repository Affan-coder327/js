let name = prompt("Enter your name: "); 
let category = prompt("Enter your category (Sweet, fast-food and cold-drinks)");

if(category === "fast-food"){

  let food = prompt("Select any fast-food item (Burger and Pizza): ");

  if(food === "Burger"){

       let Burger = prompt("Select any one burger (Zinger or Beef): ");
       let qty = prompt("Insert your quantity");

       if(Burger === "Zinger"){

           document.write("<p>Customer Name: " + name + "</p>");
           document.write("<p>Category: " + category + "</p>");
           document.write("<p>Item: " + Burger + "</p>");
           document.write("<p>Price: Rs 400</p>");
           document.write("<p>Quantity: " + qty + "</p>");
           document.write("<p>Total: " + qty * 400 + "</p>");         

       } else if(Burger === "Beef"){

           document.write("<p>Customer Name: " + name + "</p>");
           document.write("<p>Category: " + category + "</p>");
           document.write("<p>Item: " + Burger + "</p>");
           document.write("<p>Price: Rs 600</p>");
           document.write("<p>Quantity: " + qty + "</p>");
           document.write("<p>Total: " + qty * 600 + "</p>");           
       } 
  }

  else if(food === "Pizza"){

       let Pizza = prompt("Select any one pizza (Chicken tikka or Pepperoni):");
       let qty = prompt("Insert your quantity");

       if(Pizza === "Chicken tikka"){

           document.write("<p>Customer Name: " + name + "</p>");
           document.write("<p>Category: " + category + "</p>");
           document.write("<p>Item: " + Pizza + "</p>");
           document.write("<p>Price: Rs 1400</p>");
           document.write("<p>Quantity: " + qty + "</p>");
           document.write("<p>Total: " + qty * 1400 + "</p>");  

       } else if(Pizza === "Pepperoni"){

           document.write("<p>Customer Name: " + name + "</p>");
           document.write("<p>Category: " + category + "</p>");
           document.write("<p>Item: " + Pizza + "</p>");
           document.write("<p>Price: Rs 1400</p>");
           document.write("<p>Quantity: " + qty + "</p>");
           document.write("<p>Total: " + qty * 1400 + "</p>");  

       } else {
           alert("Invalid choice for pizza item");
       }
  }
}

else if(category === "cold-drinks"){

    let drink = prompt("Select any cold drink (Pepsi or Sprite): ");
    let qty = prompt("Insert your quantity");

    if(drink === "Pepsi"){

        document.write("<p>Customer Name: " + name + "</p>");
        document.write("<p>Category: " + category + "</p>");
        document.write("<p>Item: " + drink + "</p>");
        document.write("<p>Price: Rs 150</p>");
        document.write("<p>Quantity: " + qty + "</p>");
        document.write("<p>Total: " + qty * 150 + "</p>");           

    } else if(drink === "Sprite"){

        document.write("<p>Customer Name: " + name + "</p>");
        document.write("<p>Category: " + category + "</p>");
        document.write("<p>Item: " + drink + "</p>");
        document.write("<p>Price: Rs 180</p>");
        document.write("<p>Quantity: " + qty + "</p>");
        document.write("<p>Total: " + qty * 180 + "</p>");  

    } else { 
        alert("Invalid choice for cold drink");
    } 
}

else if(category === "Sweet") {

    let sweet = prompt("Select any sweet (Cake or Donut): ");
    let qty = prompt("Insert your quantity");

    if(sweet === "Cake"){

        document.write("<p>Customer Name: " + name + "</p>");
        document.write("<p>Category: " + category + "</p>");
        document.write("<p>Item: " + sweet + "</p>");
        document.write("<p>Price: Rs 300</p>");
        document.write("<p>Quantity: " + qty + "</p>");
        document.write("<p>Total: " + qty * 300 + "</p>");  

    } else if(sweet === "Donut"){

        document.write("<p>Customer Name: " + name + "</p>");
        document.write("<p>Category: " + category + "</p>");
        document.write("<p>Item: " + sweet + "</p>");
        document.write("<p>Price: Rs 100</p>");
        document.write("<p>Quantity: " + qty + "</p>");
        document.write("<p>Total: " + qty * 100 + "</p>");  

    } else {
        alert("Invalid choice for sweet item");
    }
}

else {
    alert("Invalid category");
}
