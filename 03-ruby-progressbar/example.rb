require 'ruby-progressbar'

p = ProgressBar.create(starting_at: 0, total: nil, format: '%t %B %c/%C')
p.title = "Importing"
6500.times { sleep 0.01; p.increment }
