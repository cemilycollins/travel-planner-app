Trip.destroy_all
Accommodation.destroy_all
Ticket.destroy_all
Experience.destroy_all

thai_trip = Trip.create(start_date: Date.new(2018,9,20), end_date: Date.new(2018,10,20), name: 'Thailand', img_url: 'https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/fta_hero')

thai_acc = Accommodation.create(address: '75/23 Soi Sukhumvit 13 Sukhumvit Road, Klongtoey-Nua, Wattana, Sukhumvit agoda', city: 'Bangkok', start_date: Date.new(2018,9,20), end_date: Date.new(2018,9,26), relevant_info: "Avoid bargaining a flat rate with a taxi-driver, always use the meter.", trip_id: thai_trip.id)

thai_ticket = Ticket.create(type_of: "airplane", departure_date_time: DateTime.new(2018,9,19,7,8,9), departure_location: "Washington, DC", arrival_date_time: DateTime.new(2018,9,20,7,8,9), arrival_location: "Bangkok", price: 1200.01, relevant_info: "Remember your suitcase!", purchased: true, trip_id: thai_trip.id)

thai_exp = Experience.create(name: 'Grand Palace', address: '1 Na Phra Lan Rd, แขวงพระบรมมหาราชวัง Khet Phra Nakhon', city: 'Bangkok', date: Date.new(2018,9,21),relevant_info: "Be prepared to walk!", trip_id: thai_trip.id)

vegas = Trip.create(start_date: "12/25/18", end_date: "1/5/2019", name: 'Las Vegas', img_url: 'https://s.abcnews.com/images/Travel/las-vegas-sign-strip-gty-jef-180418_hpMain_16x9_992.jpg')

vegas_acc = Accommodation.create(address: '3570 S Las Vegas Blvd', city: "Las Vegas", start_date: "12/25/18", end_date: "1/5/2019", relevant_info: "Breakfast buffet ends at 10AM.", trip_id: vegas.id)

vegas_exp = Experience.create(name: "Britney Spears Concert", address: '3600 S Las Vegas Blvd', city: "Las Vegas", date: '12/31/2018', relevant_info: 'dress accordingly!', trip_id: vegas.id)

vegas_ticket = Ticket.create(type_of: "Airplace", departure_date_time: DateTime.new(2018,12,25,7,8,9), departure_location: "Washington, DC", arrival_date_time: DateTime.new(2018,12,25,8,7,4), arrival_location: 'Las Vegas McClaren Intl Airport', price: 500, relevant_info: "It's hot, pack some shorts!", trip_id: vegas.id)

britney_ticket = Ticket.create(type_of: "Concert", departure_date_time: DateTime.new(2018,12,31,10,11,12), departure_location: 'Caesars Palace', arrival_date_time: DateTime.new(2018,12,31,10,30,00), arrival_location: 'Bellagio Hotel', price: 100, relevant_info: "Go Wild!", trip_id: vegas.id)
