require 'nextbus'

ttc = Nextbus::Agency.find('ttc')
routes = Nextbus::Route.all('ttc')
route = Nextbus::Route.find('ttc', '54')

branches = Nextbus::Direction.all('ttc', '54')
stops = Nextbus::Stop.all('ttc', '54', '54_1_54B')
