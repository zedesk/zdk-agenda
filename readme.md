zdk-agenda
==========

# Introduction

zdk-agenda is a calendar/agenda web component, using Polymer, that present different views of a full-sized calendar: day, week, month, planning.

# Usage

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

# Options

| Attribute     | Type (default) | Description                 |
| ------------- | -------------- | --------------------------- |
| `lang`        | string         | Language                    |
| `hourHeight`  | number         |                             |
| `hourShow`    | number         |                             |
| `view`        | string         | The initial view to display (`day`, `week`, `month` or `planning`) |

# Methods

| Method        | Parameters    | Description   |
| ------------- | ------------- | ------------- |
| `addEvent()`  | None          | Add a new event in the agenda. |
| `previous()`  | None          | Display the previous day/week/month, depending on the current view. |
| `next()`      | None          | Display the next day/week/month, depending on the current view. |
| `today()`     | None          | Display the current day. |

# Events

| Event               | Data          | Description       |
| ------------------- | ------------- | -------------     |
| `zdk-event-click`   | Event data    | Click on a event. |
| `zdk-event-changed` | Event data    | An event has been changed by drag&drop |

# TODO

* Recurring events
* More customization options
* Enhance responsiveness
* Remove paper elements