# Start neues Semester

### 1. Pages

Pages vom vorherigen Semester unbennen

- Thematik zu Thematik (Semester+Jahr)
- Themensponsoren zu Themensponsoren (Semester+Jahr)

Neue Pages erstellen

- Thematik
- Themensponsoren

### 2. Tags

- neuer Tag mit Semester + Jahr z.B FS23

### 3. About-Seite (Über diese Lehrveranstaltung)

- Neues Toggle erstellen für vorheriges Semester
- In eine Zeile klicken -> aufs + ->Toggle auswählen

![Toggle-image](/assets/images/about.png)

- Toggle header: Thema (Semester Jahr)
- Collapsible content: - Showroom -Thematik -Themensponsoren
- mit Doppelklick aufs Wort Verlinkungen hinzufügen
- URL Thematik und Sponsoren: Pages-> Thematik-> oben rechts auf Vierreck -> unter Page URL in Grau:

  ![Toggle-image](/assets/images/tags.png)

- URL Showroom: Tags -> Semester auswählen -> unten am Slug in Grau geschrieben:

  ![Toggle-image](/assets/images/thematik.png)

### 3. Navigation

- URL bei Thematik und Themensponsor anpassen

**Wichtig für Studierende:** Alle Posts vom Semester X müssen mit dem Tag SemesterX getagt werden.Falls ein Post mehrere Tags hat muss der SemesterX der erste Tag sein. Ansonsten können die Posts nicht nach Semester zugeteilt werden.

### Routing

Damit auf Home nur Content vom aktuelle Semester angezeigt wird müssen die anderen Semester ausgeblendet werden.

Gehe zu: Content/settings/routes.yaml

Nach jedem Semester muss beim Filter das alte Semester hinzugefügt werden, damit dieses auf der Home Seite ausgeblendet wird.

```
 collections:
  /fs/:
    permalink: /fs/{slug}/
    template: index
    filter: primary_tag:[hs21] #hs21 wird jetzt nicht auf home(index) angezeigt
  /:
    permalink: /{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

z.B nach Ende FS22 muss der filter so angepasst werden:

```
 filter: primary_tag:[hs21,fs22]
```
