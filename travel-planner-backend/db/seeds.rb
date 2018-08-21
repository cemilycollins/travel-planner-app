thai_trip = Trip.create(start_date: Date.new(2018,9,20), end_date: Date.new(2018,10,20), name: 'Thailand', img_url: 'https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/fta_hero')

hai_acc = Accomdation.create(address: '75/23 Soi Sukhumvit 13 Sukhumvit Road, Klongtoey-Nua, Wattana, Sukhumvit agoda', city: 'Bangkok', start_date: Date.new(2018,9,20), end_date: Date.new(2018,9,26), relevant_info: "Avoid bargaining a flat rate with a taxi-driver, always use the meter.", trip_id: 1)

thai_ticket = Ticket.create(type_of: "airplane", departure_date_time: Datetime.new(2018,9,19,7,8,9), departure_location: "Washington, DC", Datetime.new(2018,9,20,7,8,9), arrival_location: 'Bangkok', price: 1200.01, relevant_info: "Remember your suitcase!", purchased: true, trip_id: 1)

thai_exp = Experience.create(name: 'Grand Palace', address: '1 Na Phra Lan Rd, แขวงพระบรมมหาราชวัง Khet Phra Nakhon', city: 'Bangkok', date: Date.new(2018,9,21),relevant_info: "Be prepared to walk!")
