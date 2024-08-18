document.addEventListener('DOMContentLoaded', function() {
  const raffleForm = document.getElementById('raffleForm');
  const nameInput = document.getElementById('name');
  const participantsList = document.getElementById('participants');
  const conductsRaffleBtn = document.getElementById('conductsRaffle');
  const deleteParticipantsBtn = document.getElementById('deleteParticipants');

  let participants = [];

  raffleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();

    if (name) {
      participants.push(name);
      updateParticipantsList();
      nameInput.value = ''; 
    };
  });

  conductsRaffleBtn.addEventListener('click', function() {
    if (participants.length === 0) {
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No hay participantes en el sorteo!',
    });
    return;
    };
    const winner = participants[Math.floor(Math.random() * participants.length)];
    Swal.fire({
      icon: 'success',
      title: '¡Felicitaciones!',
      text: `El ganador es ${winner}`
    });
  });

  deleteParticipantsBtn.addEventListener('click', function() {
    participants = [];
    updateParticipantsList();
    Swal.fire({
      icon: 'success',
      title: 'Eliminados!',
      text: 'Todos los participantes han sido eliminados.'
    });
  });

  function updateParticipantsList() {
    participantsList.innerHTML = '';
    participants.forEach(function(participant) {
      const li = document.createElement('li');
      li.textContent = participant;
      participantsList.appendChild(li);
    });
  };
});