Trip.destroy_all
Accommodation.destroy_all
Ticket.destroy_all
Experience.destroy_all

thai_trip = Trip.create(start_date: Date.new(2018,9,20), end_date: Date.new(2018,10,20), name: 'Thailand', img_url: 'https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/fta_hero')

hai_acc = Accommodation.create(address: '75/23 Soi Sukhumvit 13 Sukhumvit Road, Klongtoey-Nua, Wattana, Sukhumvit agoda', city: 'Bangkok', start_date: Date.new(2018,9,20), end_date: Date.new(2018,9,26), relevant_info: "Avoid bargaining a flat rate with a taxi-driver, always use the meter.", trip_id: thai_trip.id)

thai_ticket = Ticket.create(type_of: "airplane", departure_date_time: DateTime.new(2018,9,19,7,8,9), departure_location: "Washington, DC", arrival_date_time: DateTime.new(2018,9,20,7,8,9), arrival_location: "Bangkok", price: 1200.01, relevant_info: "Remember your suitcase!", purchased: true, trip_id: thai_trip.id)

thai_exp = Experience.create(name: 'Grand Palace', address: '1 Na Phra Lan Rd, แขวงพระบรมมหาราชวัง Khet Phra Nakhon', city: 'Bangkok', date: Date.new(2018,9,21),relevant_info: "Be prepared to walk!", trip_id: thai_trip.id)
