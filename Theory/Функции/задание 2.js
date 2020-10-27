function checkAge (age) {
  return (!(age < 18)) ?  true : confirm('Родители разрешили?');
  }

checkAge = age => age > 18  || confirm('Родители разрешили?');