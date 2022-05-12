class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :token_id, :defi_id, :investment_type, :amount
  has_one :user
end
