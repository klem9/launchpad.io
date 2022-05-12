class TokenSerializer < ActiveModel::Serializer
  attributes :id, :name, :symbol, :api_identifier
end
