require('dotenv').config();

mapboxgl.accessToken =
  'pk.eyJ1IjoiY3VydGlzY29kZXMiLCJhIjoiY2s4YXQ4eWFoMDFtMDNmcWN6cHI2MXVodSJ9.naMzbYIfZ5xewcfvzIhFBA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/curtiscodes/ck8b112ax1l8a1iprxolc5qko'
});

map.fitBounds([
  [-86.31352, 38.175239],
  [-79.556189, 42.305453]
]);

map.on('mousemove', function(e) {
  var states = map.queryRenderedFeatures(e.point, {
    layers: ['ohio-corona-data']
  });

  if (states.length > 0) {
    document.getElementById('pd').innerHTML =
      '<p><strong>' +
      states[0].properties.name +
      ' County </strong> as of ' +
      states[0].properties.date +
      '</p><p><strong><em>' +
      states[0].properties.cases +
      '</strong> cases <strong>' +
      states[0].properties.deaths +
      '</strong> deaths</em></p>';
  } else {
    document.getElementById('pd').innerHTML =
      '<p>1,137 cases, 276 hospitalizations, 19 deaths. Select a county for breakdown.</p>';
  }
});

// legend
var layers = ['0', '1-10', '10-20', '20-50', '50-100', '100-200', '200+'];
var colors = [
  '#f7f2da',
  '#feb24c',
  '#f19a27',
  '#b56803',
  '#fc4e2a',
  '#e31a1c',
  '#bd0026'
];

for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}
