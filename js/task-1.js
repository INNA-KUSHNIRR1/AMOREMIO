const login = prompt(`CIAO! CHI SEI??? 🧐🧐🧐🧐🧐`);

function checkLoginPassword(login) {
  if (login === 'НУСЯ') {
    const password = prompt('выкладывай пароль');
    if (password === 'Я НУСЯ') {
      alert('💋💋💋💋💋💋💋💋');
    } else {
      alert('в следующий раз повезет ))');
    }
  } else if (!login) {
    alert('ИЗВиНИ, но мы не знакомы))');
  } else {
    alert('И все же мы не знакомы');
  }
}
console.log(checkLoginPassword(login));
