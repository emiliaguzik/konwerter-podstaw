function zbierzDane ()  {
    const liczba1 = document.getElementById("numer1").value;
    const liczba2 = document.getElementById("numer2").value;
    const poczatkowaPodstawa = document.getElementById("poczatkowapodstawa").value;
    const zmienionaPodstawa = document.getElementById("zmienionapodstawa").value;
    return { liczba1, liczba2, poczatkowaPodstawa, zmienionaPodstawa };
  };
  
  function konwersjaDoPodstawy ({ liczba1, liczba2, poczatkowaPodstawa, zmienionaPodstawa }) {
    if (
      poczatkowaPodstawa < 2 ||
      zmienionaPodstawa < 2 ||
      poczatkowaPodstawa > 36 ||
      zmienionaPodstawa > 36
    ) {
      return "Wybierz liczbę pomiędzy 2 a 36";
    }
    const pierwszynr = parseInt(liczba1 + "", poczatkowaPodstawa).toString(10);
    const druginr = parseInt(liczba2 + "", poczatkowaPodstawa).toString(10);
    return { pierwszynr, druginr };
  };
  
  function dodawanie ({ pierwszynr, druginr })  {
    const wynik = +pierwszynr + +druginr;
    return wynik;
  };
  function konwersjaPodstawyDoWprowadzone (wynik, { zmienionaPodstawa }) {
    return parseInt(wynik, 10).toString(zmienionaPodstawa);
  };
  function zwrot () {
    const zbierzDane = zbierzDane();
    const podstawa10 = konwersjaDoPodstawy(zbierzDane);
    const dodać = dodawanie(podstawa10);
    const konwersjaPodstawy = konwersjaPodstawyDoWprowadzone(dodać, zbierzDane);
    document.getElementById("wynik").innerHTML = konwersjaPodstawy;
  };