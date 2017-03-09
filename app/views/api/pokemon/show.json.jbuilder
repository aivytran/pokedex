json.extract! @pokemon, :id, :name, :attack, :moves, :poke_type

json.items do
  json.array! @pokemon.items do |item|
    json.id item.id
    json.name item.name
    json.pokemon_id item.pokemon_id
    json.price item.price
    json.happiness item.happiness
    json.image_url asset_path(item.image_url)
  end
end
json.image_url asset_path(@pokemon.image_url)

# json.items do
#   json.array! @pokemon.items, :id, :name, :price, :happiness
# end
