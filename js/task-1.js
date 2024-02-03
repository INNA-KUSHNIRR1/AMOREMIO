const login = prompt(`CIAO! CHI SEI??? 🧐🧐🧐🧐🧐`);

function checkLoginPassword(login) {
  if (login === 'zaraza') {
    const password = prompt('MENOMALE CHE SAI CHI SONO! ALLORA PASSWORD😁🤪');
    if (password === 'ti amo lipuchka') {
      alert('💋💋💋💋💋💋💋💋😘😘😘😘😘😘😘😘');
    } else {
      alert('ARIVEDERCI CIAO!!!💔💔💔');
    }
  } else {
    alert('NON TI CONOSCO! VAI A CAGARE!😝😝😝');
  }
}
console.log(checkLoginPassword(login));
