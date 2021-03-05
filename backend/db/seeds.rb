# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


close_the_deal = Event.create(name: "business meetup event", description: "monthly business meetup event for young professionals in the bay area")

chill_and_laugh = Event.create(name: "fun meetup event", description: "come and join us to meet new friends!")

dating_make_it_easy = Event.create(name: "dating event", description: "tired of looking at those pictures? Grab a drink and meet your soul mate!")

neo = Participant.create(full_name: "Neo", email: "neo@gmail.com", phone_number: "2136162841", event_id: close_the_deal.id)
trinity = Participant.create(full_name: "Trinity", email: "trinity@gmail.com", phone_number: "6105264623", event_id: close_the_deal.id)

dan_rose = Participant.create(full_name: "Dan Rose", email: "dan_rose@gmail.com", phone_number: "4231234412", event_id: chill_and_laugh.id)
frank_king = Participant.create(full_name: "Frank King", email: "frank_king@gmail.com", phone_number: "9897651231", event_id: chill_and_laugh.id)

leon_kennedy = Participant.create(full_name: "Leon Kennedy", email: "leon.kennedy@gmail.com", phone_number: "5146523123", event_id: dating_make_it_easy.id)
ada_wong = Participant.create(full_name: "Ada Wong", email: "ada.wang@gmail.com", phone_number: "3152224222", event_id: dating_make_it_easy.id)

Note.create([
    { body: 'New York Times politics column'},
    { body: 'Trade View Hot Stocks'},
    { body: 'Personal diary'},
])