/*
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena

----------------------------------------------
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.
----------------------------------------------

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.
Dále z e-mailu vyřízněte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:

const parsedEmail = {
	userName: 'slavomir.ponuchalek',
	domain: 'yahoo.com',
}

Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
*/




const email = prompt("Zadej e-mail");
const index = email.indexOf("@");

const parsedEmail = {
	userName: email.slice(0, index),
	domain: email.slice(index + 1),
};

document.body.innerHTML =
	`<p>Uživatelské jméno: ${parsedEmail.userName} </p>
	<p>Doména: ${parsedEmail.domain} </p>`;