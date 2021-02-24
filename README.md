# Organize-it Rails API JavaScript Project

## Starting the Application

This is an improved version of the organize-it application. Make sure <a href="https://rubyonrails.org">Rails</a> is installed. Once Rails is installed, navigate to the Rails back end folder located at : `./backend` and run the following commands in your terminal:
1. `bundle install`
2. `rails db:migrate`
3. `rails db:seed`
4. `rails s` To get the rails server running
5. change directory (cd) to `./frontend` and double-click `index.html` 

## What Does The Application do

1. Allow the user to view all of the events and add participants
2. Allow the user to add a participant to a particular event
3. Allow the user to delete a particular participant registered for a particular event

## Project File Structure
```
Organize-IT
├── backend
│   ├── app
│   │   ├── controllers
│   │   │   ├── events_controller.rb
│   │   │   └── participants_controller.rb
│   │   ├── models
│   │   │   ├── event.rb
│   │   │   └── participant.rb
│   │   └── views
│   └── db
│       ├── migrate
│       │   ├── create_events.rb
│       │   └── create_participants.rb
│       ├── schema.rb
│       └── seeds.rb
│
├── frontend
│   ├── src
│   │   ├── event.js
│   │   ├── index.js
│   │   └── participant.js
│   ├── style
│   │   └── style.css
│   └── index.html
└── README.md
```
