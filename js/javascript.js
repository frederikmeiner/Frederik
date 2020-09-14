// En funktion når som bliver vist når man scroller ned via intro-text
// vi laver en variabel introPosition, hvor vi gerne vi have en afstand fra hvor teksten er til vinduet.
// vi laver en funktion ScreenPosition med innerHeight for at den opløses ens på forskellige enheder.
function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPoisition = window.innerHeight / 1.2;
    // hvis introPosition er mindre end vores screenPosition skal den bruge introText, hvor der koblet en classList på som giver os adgang til klassen ovenpå introText. .add hvor vi sætter intro-appear ind fra css delen
    if (introPosition < screenPoisition) {
        introText.classList.add('intro-appear');
    }
}


window.addEventListener('scroll', scrollAppear);
