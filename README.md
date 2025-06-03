# Parkly – Where Can I Park in Zurich?

## Kurzbeschreibung
Parkly ist eine Website, die mit der Parkleitsystem-API von https://www.freepublicapis.com/ funktioniert. Sie soll das Parkieren in Zürich vereinfachen, indem die Verfügbarkeit von Parkplätzen auf einer interaktiven Karte angezeigt wird. Die Plätze sind farblich nach Auslastung codiert (grün, orange, rot). Ziel ist es, die Parkplatzsuche effizienter und stressfreier zu gestalten.

## Codierung der Verfügbarkeit
- **Grün**: ≥ 100 freie Parkplätze  
- **Orange**: ≥ 40 freie Parkplätze  
- **Rot**: < 30 freie Parkplätze

## Wie funktioniert es?
1. Scrolle auf der Karte und klicke auf den gewünschten Parkplatz.
2. Im Pop-up, das sich beim Anklicken öffnet, siehst du folgende Informationen:
   - Name des Parkplatzes  
   - Status: geöffnet oder geschlossen  
   - Anzahl freier Plätze  
   - Adresse des Parkplatzes
3. Gib die Adresse in Google Maps ein und navigiere zum gewünschten Ziel.

## Learnings & Schwierigkeiten

**Max**  
Gelernt: Effizientes Arbeiten mit Figma-Komponenten und Varianten.  
Schwierigkeit: Konsistente Farbkontraste auf dunklem Kartenhintergrund.

**Saskia**  
Gelernt: Daten dynamisch per API laden und als HTML-Komponenten darstellen.  
Schwierigkeit: Mit Ladefehlern umgehen und die Daten korrekt auf der Website anzeigen.

## Verwendete Ressourcen & Prompts

- **Figma**: Interaktiver Prototyp für Web & Mobile inkl. Pop-ups, Map-Overlay und Responsive Layouts  
- **Fonts**: REM Sans, Geist, IBM Plex Sans  
- **Farben**:  
  - Blau: #003366  
  - Grün: #008000  
  - Orange: #F28C00  
  - Rot: #B30000  
  - Hellgrau: #F4F4F4  
  - Schwarz: #1E1E1E  
- **Map-Framework**: Leaflet Dark Theme  
  https://unpkg.com/leaflet@1.9.4/dist/leaflet.css  

## Beispielhafte Prompts, die im Projektverlauf verwendet wurden:
- „Wie funktionieren Pop-ups in Figma und wie kann ich sie animieren?“  
- „Wie kann ich Scroll-Animationen für Karten-Overlays in einem Figma-Prototyp realisieren?“  
- „Design Guidelines für barrierefreie Farbskalen bei Karten-Visualisierungen“  
- „Wie wurden die Pop-ups der Leaflet-Karte umgesetzt?“  
- „Wir sind JavaScript-Anfänger – erkläre uns den Code verständlich auf einfachem Niveau.“
