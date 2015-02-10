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
| `lang`        | String         | Language                    |
| `hourHeight`  | Number         | Height of an hour in day/week views (in pixels) |
| `hourShow`    | Number         | Start hour to show in day/week views |
| `view`        | String         | The initial view to display (`day`, `week`, `month` or `planning`) |

# Methods

| Method        | Parameters    | Description   |
| ------------- | ------------- | ------------- |
| `addEvent()`  | None          | Add a new event in the agenda. |
| `previous()`  | None          | Display the previous day/week/month, depending on the current view. |
| `next()`      | None          | Display the next day/week/month, depending on the current view. |
| `today()`     | None          | Display the current day. |

# Event data

Event data can be changed by changing the value of the `events` attribute, for instance:

```javascript
myAgenda.events = [
    {
        label: 'An event',
        start: '2014-11-11T09:00:00',
        end: '2014-11-11T10:00:00',
        className: 'event1',
        allDay: false
    },
    {
        label: 'All day event',
        start: '2014-11-12',
        end: '2014-11-12',
        className: 'event2',
        allDay: true
    }
];
```

An event item has such attributes:

| Attribute     | Type (default) | Description                      |
| ------------- | -------------- | -------------------------------- |
| `label`       | String         | Label to display                 |
| `start`       | String         | Start datetime (ISO 8601 format) |
| `end`         | String         | End datetime (ISO 8601 format)   |
| `className`   | String         | Classname                        |
| `allDay`      | Boolean        | Is it an all-day event?          |
| `recurring`   | String         | Recurring data (see below)       |

## Recurring events

Events can be repeated daily or weekly, by setting the `recurring` attribute which has the following format:

`[type]_[count]_[days]`

where

* `type` is the type of repetition ("day" or "week") ;
* `count` is the interval between events in the "type" units ;
* `days` is a comma-separated list of days affected by weekly events.

Some extra properties could be added in the future.

Some examples:

* `day_3`: the event is repeated every 3 days ;
* `week_2_1,2`: the event is repeated every two weeks, on Monday and Tuesday.

# Events

| Event               | Data          | Description       |
| ------------------- | ------------- | -------------     |
| `zdk-event-click`   | Event data    | Click on a event. |
| `zdk-event-changed` | Event data    | An event has been changed by drag&drop |
| `zdk-event-close`   | Event data    | Click on the delete button of an event |
| `zdk-day-click`     | Day date      | Click on a day    |

# TODO

* Recurring events
* More customization options
* Enhance responsiveness
* Remove paper elements