require 'sinatra'

enable :sessions

get '/' do
  puts " / GET request"
  erb(:index)
end

post '/' do
  puts " / POST request"

  puts "params: #{params}"
  redirect('/')
end
