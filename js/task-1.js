const login = prompt(`CIAO!   CHI SEI???   🧐 🧐 🧐 🧐 🧐`);

function checkLoginPassword(login) {
  if (login === 'zaraza') {
    const password = prompt(
      'MENOMALE SAI CHI SONO!             ALLORA PASSWORD  😁🤪'
    );
    if (password === 'ti amo') {
      alert(
        '💋💋 💋💋 💋💋 💋💋 😘😘 😘😘 😘😘 😘😘 😘😘 😘😘 😘😘 💋💋 💋💋 💋💋 💋💋 '
      );
    } else {
      alert('😭 😭 😭 😭 😭 💔 💔 💔 MA VAAAIII...');
    }
  } else {
    alert('NON TI CONOSCO! VAI A CAGARE! 😝 😝 😝');
  }
}
console.log(checkLoginPassword(login));
