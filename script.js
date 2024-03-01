function heureActuele() {
  const date = new Date();

  let day = date.toLocaleString("fr-FR", {
    /* Ajout du jour de la semaine */
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let heures = date.getHours();
  const mediane = heures > 12 ? "PM" : "AM";

  heures = heures % 12 || 12;
  heures = heures.toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let secondes = date.getSeconds().toString().padStart(2, 0);

  const afficheheure = `${heures}:${minutes}:${secondes} ${mediane}`;
  document.getElementById("heure").innerHTML = `${afficheheure}<br>${day}`;
}

heureActuele();
setInterval(heureActuele, 1000);
