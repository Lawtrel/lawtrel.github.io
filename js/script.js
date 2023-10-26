const text = "Em Breve...";

let charIndex = 0;
const textElement = document.querySelector('.text');

function type()
{
    if (charIndex < text.length)
    {
        textElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

type();