const elipse1 = document.getElementById("path45");



(()=> {

  setInterval(() => {

    elipse1.setAttribute("rx", "487.14285")
    elipse1.setAttribute("ry", "478.57144")

    setTimeout(() => {

      elipse1.setAttribute("rx", "287.14285")
      elipse1.setAttribute("ry", "278.57144")

    }, 2000);


  }, 4000);

})()
