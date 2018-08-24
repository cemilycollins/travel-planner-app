Trip.destroy_all
Accommodation.destroy_all
Ticket.destroy_all
Experience.destroy_all

thai_trip = Trip.create(start_date: Date.new(2018,9,20), end_date: Date.new(2018,10,20), name: 'Thailand', img_url: 'https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/fta_hero')

thai_acc = Accommodation.create(address: '75/23 Soi Sukhumvit 13 Sukhumvit Road, Klongtoey-Nua, Wattana, Sukhumvit agoda', city: 'Bangkok', start_date: Date.new(2018,9,20), end_date: Date.new(2018,9,26), relevant_info: "Avoid bargaining a flat rate with a taxi-driver, always use the meter.", trip_id: thai_trip.id)

thai_acc1 = Accommodation.create(address: '219 Moo 5 Angthong', city: 'Surat Thani', start_date: Date.new(2018,9,27), end_date: Date.new(2018,10,7), relevant_info: "Ask for the secret midnight snack!", trip_id: thai_trip.id)

thai_acc3 = Accommodation.create(address: '70 Moo. 3, Chergtalay, Surin', city: 'Phuket', start_date: Date.new(2018,10,8), end_date: Date.new(2018,10,20), relevant_info: 'The best pad thai is all of Thailand!', trip_id: thai_trip.id)

thai_ticket = Ticket.create(type_of: "airplane", departure_date_time: DateTime.new(2018,9,19,7,8,9), departure_location: "Washington, DC", arrival_date_time: DateTime.new(2018,9,20,7,8,9), arrival_location: "Bangkok", price: 1200.01, relevant_info: "Remember your suitcase!", purchased: true, trip_id: thai_trip.id)

thai_exp = Experience.create(name: 'Grand Palace', address: '1 Na Phra Lan Rd, แขวงพระบรมมหาราชวัง Khet Phra Nakhon', city: 'Bangkok', date: Date.new(2018,9,21),relevant_info: "Be prepared to walk!", trip_id: thai_trip.id)

thai_exp2 = Experience.create(name: 'Phi Phi Islands', address: "Krabi Province", city: 'Ko Phi Phi Don', date: '9/23/2018', relevant_info: "Don't forget your bathing suit!", trip_id: thai_trip.id)

thai_exp3 = Experience.create(name: 'Chatuchak Weekend Market', address: 'Kamphaeng Phet 2 Rd, Khwaeng Chatuchak, Khet Chatuchak', city: 'Krung Thep Maha Nakhon', date: '9/24/2018', relevant_info: 'NEGOTIATE NEGOTIATE NEGOTIATE', trip_id: thai_trip.id)

vegas = Trip.create(start_date: "12/25/18", end_date: "1/5/2019", name: 'Las Vegas', img_url: 'https://s.abcnews.com/images/Travel/las-vegas-sign-strip-gty-jef-180418_hpMain_16x9_992.jpg')

vegas_acc = Accommodation.create(address: '3570 S Las Vegas Blvd', city: "Las Vegas", start_date: "12/25/18", end_date: "1/5/2019", relevant_info: "Breakfast buffet ends at 10AM.", trip_id: vegas.id)

vegas_exp = Experience.create(name: "Britney Spears Concert", address: '3600 S Las Vegas Blvd', city: "Las Vegas", date: '12/31/2018', relevant_info: 'dress accordingly!', trip_id: vegas.id)

vegas_exp1 = Experience.create(name: "Grand Canyon Helicopter Tour", address: "5596 Haven St.", city: "Las Vegas", date: '1/2/2019', relevant_info: '45-minute (approx.) flight each way (helicopter based on option selected)', trip_id: vegas.id)

vegas_exp2 = Experience.create(name: 'Hoover Dam Tour', address: 'Lobby of Caesars Palace', city: 'Las Vegas', date: '1/3/2019', relevant_info: "Stay with the group or else you'll be lost forever", trip_id: vegas.id)

hoover_ticket = Ticket.create(type_of: 'Walking Tour', departure_date_time: DateTime.new(2019,1,3,9,30,00), departure_location: "Lobby of Ceasars Palace", arrival_date_time: DateTime.new(2019,1,3,10,30,00), arrival_location: 'Hoover Dam', price: 80.00, relevant_info: 'No refunds for this ticket', trip_id: vegas.id)

vegas_ticket = Ticket.create(type_of: "Airplace", departure_date_time: DateTime.new(2018,12,25,7,8,9), departure_location: "Washington, DC", arrival_date_time: DateTime.new(2018,12,25,8,7,4), arrival_location: 'Las Vegas McClaren Intl Airport', price: 500, relevant_info: "It's hot, pack some shorts!", trip_id: vegas.id)

britney_ticket = Ticket.create(type_of: "Concert", departure_date_time: DateTime.new(2018,12,31,10,11,12), departure_location: 'Caesars Palace', arrival_date_time: DateTime.new(2018,12,31,10,30,00), arrival_location: 'Bellagio Hotel', price: 100, relevant_info: "Go Wild!", trip_id: vegas.id)

heli_ticket = Ticket.create(type_of: 'Helicopter Grand Canyon Tour', departure_date_time: DateTime.new(2019,1,2,10,12,00), departure_location: "Sundance Helicopters", arrival_date_time: DateTime.new(2019,1,2,1,00,00), arrival_location: "Sundance Helicopters", price: 500.00, relevant_info: "Keep your hands and feed inside the helicopter at all times.", trip_id: vegas.id)

sf = Trip.create(start_date: '2/5/2019', end_date: '3/1/2019', name: 'San Francisco', img_url: 'https://media.timeout.com/images/101714767/image.jpg')

sf_acc = Accommodation.create(address: '999 California St', city: 'San Francisco', start_date: '2/5/2019', end_date: '2/15/2019', relevant_info: 'Bring a sweatshit, it will be chilly at night', trip_id: sf.id)

sf_acc1 = Accommodation.create(address: '950 Mason St', city: 'San Francisco', start_date: '2/16/2019', end_date: '3/1/2019', relevant_info: 'Try out the tiki bar', trip_id: sf.id)

sf_exp = Experience.create(name: 'Golden Gate Bridge', address: 'Golden Gate Bridge', city: 'San Francisco', date: '2/6/2019', relevant_info: 'Wear comfortable shoes, bridge is almost 9,000ft long!', trip_id: sf.id)

sf_exp2 = Experience.create(name: 'Alcatraz Island', address: 'Island near San Francisco', city: 'San Francisco', date: '2/8/2019', relevant_info: "Don't get locked in a cell!", trip_id: sf.id)

sf_exp3 = Experience.create(name: 'Lombard Street', address: 'Lombard St', city: 'San Francisco', date: '2/12/2019', relevant_info: "Don't block the residences getting into their houses", trip_id: sf.id)

sf_exp4 = Experience.create(name: 'Twin Peaks', address: '501 Twin Peaks Blvd', city: 'San Francisco', date: '2/13/2019', relevant_info: 'Get there early to avoid the tourists', trip_id: sf.id)

sf_ticket = Ticket.create(type_of: 'Airplane', departure_date_time: '2/5/2019 Time: 6:00PM', departure_location: 'Washington, DC', arrival_date_time: '2/6/2019 Time: 12:30AM', arrival_location: 'San Francisco Intl Airport', price: 530.00, relevant_info: "Don't forget sunglasses!", trip_id: sf.id)
