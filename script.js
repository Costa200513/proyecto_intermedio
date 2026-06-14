// Script del simulador - proyecto intermedio
// Funciona pero podría estar mejor organizado

document.getElementById('btn-calcular').addEventListener('click', function() {

  // Leer valores del formulario
  var nombre = document.getElementById('nombre').value;
  var horasCel = parseFloat(document.getElementById('horas-cel').value);
  var horasPc = parseFloat(document.getElementById('horas-pc').value);
  var streaming = parseFloat(document.getElementById('streaming').value);
  var dispositivos = parseFloat(document.getElementById('dispositivos').value);
  var renovacion = document.getElementById('renovacion').value;
  var datosExtra = document.getElementById('datos-extra').checked;

  // Validación básica (solo chequea si están vacíos, no verifica negativos)
  if (isNaN(horasCel) || isNaN(horasPc) || isNaN(streaming) || isNaN(dispositivos)) {
    alert('Por favor completá todos los campos numéricos antes de calcular.');
    return;
  }

  if (renovacion === '') {
    alert('Seleccioná con qué frecuencia renovás tu celular.');
    return;
  }

  // Cálculo aproximado del impacto ambiental
  // Los factores son simplificados para el proyecto
  var impacto = 0;
  impacto += horasCel * 2;       // peso arbitrario
  impacto += horasPc * 4;
  impacto += (streaming / 7) * 3;
  impacto += dispositivos * 5;

  // Ajuste por renovación
  if (renovacion === 'alto') impacto += 20;
  else if (renovacion === 'medio') impacto += 10;

  // Ajuste por privacidad
  if (datosExtra) impacto += 5; // esto mezcla ambiental y privacidad, no es del todo correcto

  // Limitar a 100
  if (impacto > 100) impacto = 100;

  // Determinar nivel
  var nivel = '';
  var colorBarra = '';
  if (impacto < 35) {
    nivel = '🟢 Nivel BAJO de impacto';
    colorBarra = '#4caf50';
  } else if (impacto < 65) {
    nivel = '🟡 Nivel MEDIO de impacto';
    colorBarra = '#ff9800';
  } else {
    nivel = '🔴 Nivel ALTO de impacto';
    colorBarra = '#f44336';
  }

  // Recomendaciones genéricas según nivel
  var recomendaciones = '';
  if (impacto < 35) {
    recomendaciones = 'Tus hábitos digitales son bastante buenos. Seguí así y tratá de mantener tus dispositivos el mayor tiempo posible.';
  } else if (impacto < 65) {
    recomendaciones = 'Hay algunas cosas que podrías mejorar. Intentá reducir el tiempo de pantalla, usar el celular por más tiempo antes de cambiarlo, y revisar qué permisos tienen tus apps.';
  } else {
    recomendaciones = 'Tu impacto digital es alto. Te recomendamos reducir significativamente el uso de dispositivos, evitar renovar equipos con frecuencia, y revisar qué datos compartís en internet.';
  }

  // Mostrar resultados
  document.getElementById('resultado').style.display = 'block';

  // Saludo personalizado si puso nombre
  if (nombre.trim() !== '') {
    document.getElementById('saludo-nombre').textContent = '¡Hola, ' + nombre + '!';
  } else {
    document.getElementById('saludo-nombre').textContent = 'Tu resultado:';
  }

  document.getElementById('texto-resultado').textContent = 'Tu puntaje de impacto digital es: ' + Math.round(impacto) + '/100';

  // Animar barra
  var barra = document.getElementById('barra-impacto');
  barra.style.background = colorBarra;
  setTimeout(function() {
    barra.style.width = impacto + '%';
  }, 100);

  document.getElementById('nivel-texto').textContent = nivel;
  document.getElementById('texto-recomendaciones').textContent = recomendaciones;

  // Scroll al resultado
  document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
});
