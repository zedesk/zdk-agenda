# zdk-agenda

## Introduction

zdk-agenda is a calendar/agenda web component, using Polymer, that present different views of a calendar: day, week, month.

## Usage

1. Import the Web Components' polyfill:

```html
<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
```

2. Import the custom element:

```html
<link rel="import" href="bower_components/zdk-agenda/zdk-agenda.html">
```

3. Start using it:

```html
<zdk-agenda i18n="en-gb" hourHeight="40" hourShow="8" view="month">
	<zdk-event class="event1" start="2014-11-13 17:00" end="2014-11-13 18:00" label="Meeting"></zdk-event>
	<zdk-event class="event2" start="2014-11-14 19:00" end="2014-11-16 23:00" label="Week end"></zdk-event>
	<zdk-event class="event3" start="2014-11-19 13:00" end="2014-11-19 14:35" label="Another meeting"></zdk-event>
</zdk-agenda>
```

## Options

| Attribute     | Type (default) | Description                 |
| ------------- | -------------- | --------------------------- |
| `i18n`        | string         |                             |
| `hourHeight`  | number         |                             |
| `hourShow`    | number         |                             |
| `view`        | string         | The initial view to display (`day`, `week` or `month`) |

## Methods

| Method        | Parameters    | Description   |
| ------------- | ------------- | ------------- |
| `addEvent()`  | None          | Add a new event in the agenda. |
| `previous()`  | None          | Display the previous day/week/month, depending on the current view. |
| `next()`      | None          | Display the next day/week/month, depending on the current view. |
| `today()`     | None          | Display the current day. |

## Events

| Event             | Data          | Description       |
| ----------------- | ------------- | -------------     |
| `zdk-event-click` | Event data    | Click on a event. |

## TODO

* ~~Send an event on clicking an "event"~~
* ~~Handle cell overflow in the month view (add a "+n" button to display hidden events, like in Google Calendar)~~
* Add the ability to move/resize events with the mouse
* ~~All-day events~~