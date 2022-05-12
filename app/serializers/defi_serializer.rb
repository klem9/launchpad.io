class DefiSerializer < ActiveModel::Serializer
  attributes :id, :name, :token, :provider, :apy
end
