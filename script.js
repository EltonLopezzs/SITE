// Obtenha a temperatura de Brasilia
fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasilia%20&appid=2f7c7d8ef35d32451a0feade23134e01&units=metric')
  .then(response => response.json())
  .then(data => {
    const temperatura = data.main.temp;
    // Atualize o HTML com a temperatura de São Paulo
    document.getElementById('temp-brasilia').textContent = `${temperatura}°C`;
  })
  .catch(error => {
    console.error('Erro ao obter temperatura de São Paulo:', error);
  });

  // Obtenha a temperatura de Paris
fetch('https://api.openweathermap.org/data/2.5/weather?q=paris%20&appid=2f7c7d8ef35d32451a0feade23134e01&units=metric')
.then(response => response.json())
.then(data => {
  const temperatura = data.main.temp;
  // Atualize o HTML com a temperatura de São Paulo
  document.getElementById('temp-PARIS').textContent = `${temperatura}°C`;
})
.catch(error => {
  console.error('Erro ao obter temperatura de São Paulo:', error);
});

// Obtenha a temperatura de New York

fetch('https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=2f7c7d8ef35d32451a0feade23134e01&units=metric')
.then(response => response.json())
.then(data => {
  const temperatura = data.main.temp;
  // Atualize o HTML com a temperatura de São Paulo
  document.getElementById('temp-newyork').textContent = `${temperatura}°C`;
})
.catch(error => {
  console.error('Erro ao obter temperatura de São Paulo:', error);
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label: 'Dólar',
        data: [5.30, 5.40, 5.50, 5.60, 5.70, 5.80, 5.90],
        borderColor: 'blue',
        fill: false
      },
      {
        label: 'Real',
        data: [1.00, 1.10, 1.20, 1.30, 1.40, 1.50, 1.60],
        borderColor: 'green',
        fill: false
      },
      {
        label: 'Euro',
        data: [6.00, 6.10, 6.20, 6.30, 6.40, 6.50, 6.60],
        borderColor: 'red',
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Gráfico de Bolsa de Valores'
    }
  }
});

