
export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fpb2xhZ3JlY2EiLCJhIjoiY2w5d3ZramsyMDRkZjNvbjR6YmRxenU3byJ9.FDOTayupqve-8VkPvMU6ww';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/caiolagreca/cl9wxje7100id14o2uvr0xpt7/draft',
  scrollZoom: false
  
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';
  
  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
  .setLngLat(loc.coordinates)
  .addTo(map);
  
  // Add popup
  new mapboxgl.Popup({
    offset: 30
  })
  .setLngLat(loc.coordinates)
  .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
  .addTo(map);
  
  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});
}