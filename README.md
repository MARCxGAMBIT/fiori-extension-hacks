Was ich gemacht habe ist folgendes: In der Component.js habe ich das Coding so angepasst, dass beim Laden des Models zusätzlich auch ein lokales Annotation File referenziert wird. Das ist ein bisschen hacky, aber es gibt keinen offiziellen Weg, wie man bei den alten Extension Projects Annotations ergänzt oder OData-Services austauscht/ergänzt.

Dann habe ich einen Ordner annotations und eine XML Datei angelegt, wo für die entsprechende Entität C_JournalEntryItemBrowserResult weitere SelectionFields definiert werden. Wenn hier noch Felder fehlen, kannst du die natürlich auch selbst ergänzen. 

Ich bin mir nicht ganz sicher, wie man Felder ausblendet, es gibt theoretisch die Annotation UI.Hidden, aber dann sind die Felder komplett weg und können auch nicht nachträglich als Spalte oder Filter eingeblendet werden.
