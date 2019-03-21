
new Chart(document.getElementById("polar-chart"), {
        type: 'polarArea',
        data: {
          labels: ["% of fat", "% of protein", "% of carbohydrates"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
              data: [32,36,24]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: '% of contents'
          }
        }
        
  });
  

  

   