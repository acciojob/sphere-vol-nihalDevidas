function volume_sphere() {
    //Write your code here
    const radiusElement = document.getElementById("radius");
    const volumnElement = document.getElementById("volume");

	const intVal = radiusElement.value;  
	
	const vol = ((4/3) *Math.PI * (intVal**3));

	volumnElement.value = vol;

    return false;
	
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
