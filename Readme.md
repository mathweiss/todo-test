# Aufgabe

Erstelle eine To-Do-Liste mit React.

## Funktionalitäten

Die Anwendung auf der Frontend-Seite sollte folgende Funktionalitäten haben:

1. Hinzufügen neuer To-Dos
2. Löschen von To-Dos
3. Bearbeiten von To-Dos
4. Markieren von To-Dos als erledigt
5. Filtern von To-Dos nach Status (erledigt / nicht erledigt)
6. Sortieren von To-Dos nach Status
7. Suchen von To-Dos nach Titel

## Installation des APIs

Folgende Schritte sind für die Installation des APIs notwendig:

1. Lade dieses Repository herunter.
2. Führe 'npm install' im Stammverzeichnis aus.
3. Führe 'npm start' im Stammverzeichnis aus.

Im API sind bereits die erforderlichen Endpunkte für das Hinzufügen, Ändern, Löschen und Abrufen der ursprünglichen To-Do-Liste vorhanden.

Du hast 30 Minuten, um die Aufgabe zu erledigen. Viel Glück.

## Todo-API-Dokumentation

### Basis-URL
``` http://localhost:8000/ ```

### Erhalte Initial-Todos
``` GET /initial_todos ```
> Gibt ein JSON-Objekt zurück, das ein Array von Initial-Todos enthält.

#### Antwort
``` Status: 200 OK ```
```json
{
  "todos": [
    {
      "title": "Schlafen",
      "ready": false
    },
    {
      "title": "Programmieren",
      "ready": false
    },
    {
      "title": "Essen",
      "ready": true
    },
    {
      "title": "Wiederholen",
      "ready": false
    }
  ]
}
```

### Neues Todo erstellen
``` POST /new_todo ```
> Erstellt ein neues Todo und fügt es der Todos-Liste hinzu.

#### Anfrage
```json
{
    "title": "Neues Todo",
    "ready": false
} 
```

#### Antwort
``` Status: 200 OK ```
```json 
{
    "message": "success"
} 
```

### Ein Todo aktualisieren
``` PUT /todos/:index ```
> Aktualisiert das Todo anhand des angegebenen Index.

#### Anfrage
```json 
{
    "title": "Aktualisiertes Todo",
    "ready": true
} 
```

#### Antwort
``` Status: 200 OK ```
```json 
{
    "title": "Aktualisiertes Todo",
    "ready": true
    } 
```

### Ein Todo löschen
``` DELETE /todos/:index ```
> Löscht das Todo anhand des angegebenen Index.

#### Antwort
``` Status: 200 OK ```
```json 
{
    "title": "Gelöschtes Todo","ready": false
}
```