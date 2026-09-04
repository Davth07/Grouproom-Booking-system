# Group-Room Booking System

## Collaborators: 
David Thörnqvist & David Forssén

## Projektets 5 sidor:
- Hem (index.html)
- Rum (rooms.html)
- Boka (book.html)
- Bokningar (bookings.html)
- Kontakta oss (contact.html)

### Hem
Sidan innehåller information om bokningssystemet.

### Rum
Sidan innehåller mock-information om de 3 rummen som går att boka. Varje rum har en kort beskrivning, en bild, en lista på material som finns i rummet och en länk till att boka rummet direkt.

### Boka
Sidan innehåller ett boknings-form där man skriver in namn och epost, sedan väljer man rum, datum, starttid, sluttid och mängden personer som bokningen är för. Det finns även ett frivilligt textfält för anledning för bokningen. Om man kommer till sidan från en av länkarna är det rummet som länken tillhör redan valt rummet bokningen angår, annars finns det en Default option med property:n "disabled".

#### Form:ets validering:
- Alla obligatoriska fält (dvs alla förutom anledning) måsta vara utfyllda.
- Användarens namn jämförs med en regex som kollar att namnet bara innehåller bokstäver och mellanslag. Namnet måste även innehålla minst ett mellanslag (förutom inledande eller avslutande) eftersom det ska vara ett för- och efternamn.
- E-post-adressen jämförs med en regex som kollar att adressen är giltig.
- Ett grupprum måste vara valt (dvs select:en får inte vara kvar på default-värdet)
- Bokningens datum får inte vara tidigare än datumet då bokningen sker.
- Sluttiden måste vara efter starttiden.
- Antal personer måste vara ett antal mellan 1 och 10.
- Checkbox:en för användarvillkår måste vara checkad

### Bokningar
Sidan innehåller en tabell med mock-information om olika bokningar.

#### Tabellens kolumner
- Rum
- Datum
- Starttid
- Sluttid
- Namn på hen som bokade
- Bokningens status

### Kontakta oss
Sidan innehåller olika metoder för att kontakta de som äger sidan och en FAQ-del med frågor som visar svar när användaren klickar på dem.
